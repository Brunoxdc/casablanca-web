import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { Catalog } from "@/components/catalog"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Casa Blanca | Suavidad al mejor precio",
  description: "Papel higiénico de alta calidad para cada momento de tu día.",
}

export default function Page() {
  return (
    <main className="bg-background font-sans overflow-hidden">
      <Hero />
      <Benefits />
      <Catalog />
      <Footer />
    </main>
  )
}