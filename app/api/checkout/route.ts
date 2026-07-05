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

    // Shopify returns checkoutUrl on getpressr.com (primary domain).
    // Vercel's rewrite in next.config.ts intercepts /cart/* and proxies
    // it to Shopify, so no domain replacement is needed here.
    const checkoutUrl = shopifyUrl;

    return NextResponse.json({ checkoutUrl });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Checkout unavailable.";
    console.error("[PRESSR] /api/checkout error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
