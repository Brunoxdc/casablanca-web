import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Catalog from "@/components/catalog";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Productos | Casa Blanca Papel Higiénico",
  description:
    "Papel higiénico y papel toalla institucional por mayor: jumbo, black, blanco y dispensadores.",
};

export default function ProductosPage() {
  return (
    <main>
      <Navbar />
      <Catalog />
      <Footer />
    </main>
  );
}
