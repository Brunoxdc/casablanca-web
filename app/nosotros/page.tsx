import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import About from "@/components/sections/about";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Nosotros | Casa Blanca Papel Higiénico",
  description:
    "Conoce Casa Blanca: marca peruana de papel higiénico institucional, nuestra misión y visión.",
};

export default function NosotrosPage() {
  return (
    <main>
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
