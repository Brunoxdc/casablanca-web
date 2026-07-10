import { Hero } from "@/components/hero";
import { Catalog } from "@/components/catalog";
import { Benefits } from "@/components/benefits";
import { QuoteForm } from "@/components/quote-form";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Casa Blanca Papel - Proveedor B2B de Papel Higiénico Premium",
  description: "Casa Blanca Papel: proveedor confiable de papel higiénico comercial de calidad. Más suavidad, más rendimiento. Cotizaciones rápidas, entregas garantizadas 24-48h.",
};

export default function Page() {
  return (
    <main className="bg-background">
      <Hero />
      <Catalog />
      <Benefits />
      <QuoteForm />
      <Footer />
    </main>
  );
}
