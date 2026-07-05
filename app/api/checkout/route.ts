import { NextResponse, type NextRequest } from "next/server";
import { getProductByHandle, createCart } from "@/lib/shopify";

export function GET() {
  return NextResponse.json({ ok: true, message: "Checkout API route exists" });
}

export async function POST(req: NextRequest) {
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

    // Replace the domain Shopify returns (e.g. getpressr.com) with the
    // host of this request (localhost:3001 locally, getpressr.com in prod).
    // This ensures the /cart/:path* rewrite in next.config.ts is used in
    // both environments to proxy the cart permalink to Shopify.
    const parsed = new URL(shopifyUrl);
    const host = req.headers.get("host") ?? parsed.host;
    const proto = host.startsWith("localhost") ? "http" : "https";
    parsed.host = host;
    parsed.protocol = proto;
    const checkoutUrl = parsed.toString();

    console.log("[checkout] Shopify URL:", shopifyUrl);
    console.log("[checkout] Rewritten URL:", checkoutUrl);

    return NextResponse.json({ checkoutUrl });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Checkout unavailable.";
    console.error("[PRESSR] /api/checkout error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
