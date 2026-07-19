import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import ContactPage from "@/components/sections/contact-page";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Contacto | Casa Blanca Papel Higiénico",
  description:
    "Solicita tu cotización de papel higiénico institucional por mayor. Te respondemos por WhatsApp.",
};

export default function ContactoPage() {
  return (
    <main>
      <Navbar />
      <ContactPage />
      <Footer />
    </main>
  );
}
