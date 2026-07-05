import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import PhilosophyCards from "@/components/PhilosophyCards";
import ProductSection from "@/components/ProductSection";
import RoutineTimeline from "@/components/RoutineTimeline";
import BrandStory from "@/components/BrandStory";
import Ingredients from "@/components/Ingredients";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { fallbackProduct } from "@/lib/product-data";
import { getShopifyProduct } from "@/lib/shopify";

async function getProduct() {
  const handle = process.env.SHOPIFY_PRODUCT_HANDLE;
  if (!handle) return fallbackProduct;
  try {
    return await getShopifyProduct(handle);
  } catch {
    return fallbackProduct;
  }
}

export default async function Home() {
  const product = await getProduct();

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
        <Ingredients />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
