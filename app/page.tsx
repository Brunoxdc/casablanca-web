import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import ProductsPreview from "@/components/sections/products-preview";
import QualityProcess from "@/components/sections/quality-process";
import Applications from "@/components/sections/applications";
import DistributionChannel from "@/components/sections/distribution-channel";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />

      <ProductsPreview />
      <QualityProcess />
      <Applications />
      <DistributionChannel />
      <Footer />
    </main>
  );
}