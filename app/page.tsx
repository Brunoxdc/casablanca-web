import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import Benefits from "@/components/benefits";
import Catalog from "@/components/catalog";
import Stats from "@/components/stats";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <Catalog />
      <Stats />
      <Footer />
    </main>
  );
}