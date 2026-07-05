import { NextResponse } from "next/server";
import { getProductByHandle, createCart } from "@/lib/shopify";

export function GET() {
  return NextResponse.json({ ok: true, message: "Checkout API route exists" });
}

export async function POST() {
  const handle = process.env.SHOPIFY_PRODUCT_HANDLE;

  if (!handle) {
    return NextResponse.json(
      { error: "SHOPIFY_PRODUCT_HANDLE is not set." },
      { status: 500 }
    );
  }

  try {
    const { variantId } = await getProductByHandle(handle);
    const shopifyUrl = await createCart(variantId);

    // Shopify returns the checkoutUrl on the store's primary domain (getpressr.com).
    // We replace it with the .myshopify.com domain so the browser goes directly
    // to Shopify without passing through Vercel, avoiding a redirect loop.
    const parsed = new URL(shopifyUrl);
    parsed.hostname = "marati-5036.myshopify.com";
    const checkoutUrl = parsed.toString();

    return NextResponse.json({ checkoutUrl });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Checkout unavailable.";
    console.error("[PRESSR] /api/checkout error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
