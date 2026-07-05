import { NextResponse } from "next/server";
import { createCheckout } from "@/lib/shopify";

export async function POST() {
  const handle = process.env.SHOPIFY_PRODUCT_HANDLE;

  if (!handle) {
    console.error("[PRESSR] SHOPIFY_PRODUCT_HANDLE is not set.");
    return NextResponse.json(
      { error: "Checkout unavailable. Please try again." },
      { status: 500 }
    );
  }

  try {
    const checkoutUrl = await createCheckout(handle);
    return NextResponse.json({ checkoutUrl });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[PRESSR] /api/checkout error:", message);
    return NextResponse.json(
      { error: "Checkout unavailable. Please try again." },
      { status: 500 }
    );
  }
}
