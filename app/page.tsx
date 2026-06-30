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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero product={fallbackProduct} />
        <ProblemSection />
        <PhilosophyCards />
        <ProductSection product={fallbackProduct} />
        <RoutineTimeline />
        <BrandStory />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
