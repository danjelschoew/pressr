import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import PhilosophyCards from "@/components/PhilosophyCards";
import ProductSection from "@/components/ProductSection";
import RoutineTimeline from "@/components/RoutineTimeline";
import BrandStory from "@/components/BrandStory";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { fallbackProduct } from "@/lib/product-data";
import { getShopifyProduct } from "@/lib/shopify";
import type { Product } from "@/types/product";

interface DebugInfo {
  source: "shopify" | "fallback";
  domainExists: boolean;
  tokenExists: boolean;
  handle: string;
  productTitle: string;
  imageUrl: string | null;
  error: string | null;
}

async function getProductWithDebug(): Promise<{ product: Product; debug: DebugInfo }> {
  const handle = process.env.SHOPIFY_PRODUCT_HANDLE ?? "";
  const domainExists = !!process.env.SHOPIFY_STORE_DOMAIN;
  const tokenExists = !!process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!handle) {
    return {
      product: fallbackProduct,
      debug: {
        source: "fallback",
        domainExists,
        tokenExists,
        handle: "(not set)",
        productTitle: fallbackProduct.title,
        imageUrl: fallbackProduct.imageUrl,
        error: "SHOPIFY_PRODUCT_HANDLE is not set",
      },
    };
  }

  try {
    const product = await getShopifyProduct(handle);
    return {
      product,
      debug: {
        source: "shopify",
        domainExists,
        tokenExists,
        handle,
        productTitle: product.title,
        imageUrl: product.imageUrl,
        error: null,
      },
    };
  } catch (err) {
    return {
      product: fallbackProduct,
      debug: {
        source: "fallback",
        domainExists,
        tokenExists,
        handle,
        productTitle: fallbackProduct.title,
        imageUrl: fallbackProduct.imageUrl,
        error: err instanceof Error ? err.message : String(err),
      },
    };
  }
}

function DebugBox({ debug }: { debug: DebugInfo }) {
  const isShopify = debug.source === "shopify";
  return (
    <div style={{
      position: "fixed",
      bottom: 16,
      right: 16,
      zIndex: 9999,
      background: "#0a0a0a",
      border: `1px solid ${isShopify ? "#C8FF3D" : "#ff4444"}`,
      borderRadius: 8,
      padding: "12px 16px",
      fontFamily: "monospace",
      fontSize: 11,
      color: "#ccc",
      maxWidth: 360,
      lineHeight: 1.6,
    }}>
      <div style={{ color: isShopify ? "#C8FF3D" : "#ff4444", fontWeight: "bold", marginBottom: 6 }}>
        DEBUG — source: {debug.source}
      </div>
      <div>SHOPIFY_STORE_DOMAIN exists: <b style={{ color: debug.domainExists ? "#C8FF3D" : "#ff4444" }}>{String(debug.domainExists)}</b></div>
      <div>SHOPIFY_STOREFRONT_ACCESS_TOKEN exists: <b style={{ color: debug.tokenExists ? "#C8FF3D" : "#ff4444" }}>{String(debug.tokenExists)}</b></div>
      <div>SHOPIFY_PRODUCT_HANDLE: <b style={{ color: "#fff" }}>{debug.handle}</b></div>
      <div>product title: <b style={{ color: "#fff" }}>{debug.productTitle}</b></div>
      <div>imageUrl: <b style={{ color: "#fff" }}>{debug.imageUrl ?? "null"}</b></div>
      {debug.error && (
        <div style={{ marginTop: 6, color: "#ff4444" }}>error: {debug.error}</div>
      )}
    </div>
  );
}

export default async function Home() {
  const { product, debug } = await getProductWithDebug();

  return (
    <>
      <Header />
      <main>
        <Hero product={product} />
        <ProblemSection />
        <PhilosophyCards />
        <ProductSection product={product} />
        <RoutineTimeline />
        <BrandStory />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <DebugBox debug={debug} />
    </>
  );
}
