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
import { getProduct } from "@/lib/shopify";
import { fallbackProduct } from "@/lib/product-data";
import type { Product } from "@/types/product";

const PLACEHOLDER_TOKEN = "your_storefront_access_token_here";
const PLACEHOLDER_DOMAIN = "your-store.myshopify.com";

function isShopifyConfigured(): boolean {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  const handle = process.env.SHOPIFY_PRODUCT_HANDLE;
  return (
    !!domain &&
    !!token &&
    !!handle &&
    token !== PLACEHOLDER_TOKEN &&
    domain !== PLACEHOLDER_DOMAIN
  );
}

async function loadProduct(): Promise<Product> {
  if (!isShopifyConfigured()) {
    console.warn(
      "[PRESSR] Shopify env vars not configured — rendering with fallback product data.\n" +
        "Fill in SHOPIFY_STORE_DOMAIN, SHOPIFY_STOREFRONT_ACCESS_TOKEN, and SHOPIFY_PRODUCT_HANDLE in .env.local"
    );
    return fallbackProduct;
  }

  const handle = process.env.SHOPIFY_PRODUCT_HANDLE!;

  try {
    return await getProduct(handle);
  } catch (err) {
    console.error("[PRESSR] Failed to fetch product from Shopify:", err);
    // Fall back gracefully instead of crashing the page in production.
    return fallbackProduct;
  }
}

export default async function Home() {
  const product = await loadProduct();

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
    </>
  );
}
