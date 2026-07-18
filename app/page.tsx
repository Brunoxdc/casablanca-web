import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Catalog from "@/components/catalog";
import Sectors from "@/components/sectors";
import QuoteForm from "@/components/quote-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Catalog />
      <Sectors />
      <QuoteForm />
      <Footer />
    </main>
  );
}
