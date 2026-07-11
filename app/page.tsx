import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Catalog from "@/components/catalog";
import CtaBanner from "@/components/cta-banner";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Catalog />
      <CtaBanner />
      <Footer />
    </main>
  );
}