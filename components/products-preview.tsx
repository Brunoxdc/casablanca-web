import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductPhotoFrame } from "@/components/ui/product-photo-frame";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const featured = [
  {
    name: "Papel Jumbo Institucional",
    spec: "6 rollos × 200 m",
    image: "/productos/papel-jumbo.png",
  },
  {
    name: "Papel Higiénico Black",
    spec: "24 rollos × 40 m",
    image: "/productos/papel-higienico.png",
  },
  {
    name: "Toalla Institucional",
    spec: "Rollo + dispensador",
    image: "/productos/papel-toalla.png",
  },
];

export default function ProductsPreview() {
  return (
    <Section bg="white">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <SectionHeading
          eyebrow="Catálogo"
          title="Opciones para cada operación"
          subtitle="Una selección de nuestras líneas más pedidas. El catálogo completo tiene fichas técnicas detalladas de cada producto."
        />
        <Link
          href="/productos"
          className={buttonVariants({ variant: "outline", className: "shrink-0" })}
        >
          Ver catálogo completo
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {featured.map((product, i) => (
          <Reveal key={product.name} delay={i * 100}>
            <div className="group h-full flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white overflow-hidden shadow-[var(--shadow-sm)] transition-all duration-[300ms] ease-[var(--ease)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-hover)]">
              <ProductPhotoFrame
                src={product.image}
                alt={product.name}
                aspect="square"
                zoomOnHover
                className="rounded-none shadow-none"
              />
              <div className="flex flex-1 flex-col p-6">
                <Badge tone="neutral" className="self-start">
                  {product.spec}
                </Badge>
                <h3 className="mt-3 text-lg font-bold text-[var(--color-text)]">
                  {product.name}
                </h3>
                <div className="mt-5 flex-1" />
                <Link
                  href="/contacto"
                  className={buttonVariants({ variant: "primary", className: "w-full" })}
                >
                  Cotizar
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
