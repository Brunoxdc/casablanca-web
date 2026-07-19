import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import TrustStrip from "@/components/sections/trust-strip";
import Benefits from "@/components/sections/benefits";
import ProductsPreview from "@/components/sections/products-preview";
import CtaSection from "@/components/sections/cta-section";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Benefits />
      <ProductsPreview />
      <CtaSection />
      <Footer />
    </main>
  );
}
