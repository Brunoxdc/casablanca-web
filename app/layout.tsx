import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const heading = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
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
      <body className={`${heading.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  );
}