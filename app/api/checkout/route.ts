import { NextResponse } from "next/server";
import { getProductByHandle, createCart } from "@/lib/shopify";

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
    const checkoutUrl = await createCart(variantId);
    return NextResponse.json({ checkoutUrl });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Checkout unavailable.";
    console.error("[PRESSR] /api/checkout error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
