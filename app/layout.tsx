import type { Metadata } from "next";
import { Poppins, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const heading = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const heroSerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-hero-serif",
});

export const metadata: Metadata = {
  title: "Casa Blanca | Papel Higiénico Institucional",
  description:
    "Papel higiénico de alta calidad para hogares, empresas e instituciones. Suavidad al mejor precio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${heading.variable} ${body.variable} ${heroSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}