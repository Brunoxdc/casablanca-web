import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import ProductShowcase from "@/components/sections/product-showcase";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Productos | Casa Blanca Papel Higiénico",
  description:
    "Papel higiénico y papel toalla institucional por mayor: jumbo, black, blanco y dispensadores.",
};

export default function ProductosPage() {
  return (
    <main>
      <Navbar />
      <ProductShowcase />
      <Footer />
    </main>
  );
}
