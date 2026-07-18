import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustStrip from "@/components/trust-strip";
import Benefits from "@/components/benefits";
import ProductsPreview from "@/components/products-preview";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

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
