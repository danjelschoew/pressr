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
    const { originalUrl, finalUrl } = await createCart(variantId);

    console.log("[checkout] Original checkoutUrl from Shopify:", originalUrl);
    console.log("[checkout] Final checkoutUrl after domain replacement:", finalUrl);

    const responseBody = { checkoutUrl: finalUrl, debug: { originalUrl, finalUrl } };
    console.log("[checkout] Full JSON response:", JSON.stringify(responseBody));

    return NextResponse.json(responseBody);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Checkout unavailable.";
    console.error("[PRESSR] /api/checkout error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
