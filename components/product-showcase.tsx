import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductPhotoFrame } from "@/components/ui/product-photo-frame";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    name: "Papel Jumbo Institucional",
    detail:
      "Rollos de alta capacidad pensados para puntos de consumo intenso, con menos cambios de rollo y menos quiebres de stock.",
    image: "/productos/papel-jumbo.png",
    specs: [
      "Presentación: 6 rollos x 200 metros",
      "Alto rendimiento para tráfico constante",
      "Ideal para oficinas, hoteles y centros comerciales",
    ],
  },
  {
    name: "Papel Higiénico Black",
    detail:
      "Nuestra línea de mayor suavidad, con celulosa virgen, para negocios que buscan una presentación premium sin dejar de lado el precio por mayor.",
    image: "/productos/papel-higienico.png",
    specs: [
      "Presentación: plancha de 24 rollos x 40 metros",
      "Celulosa virgen, suave y resistente",
      "Ideal para restaurantes y negocios de atención al público",
    ],
  },
  {
    name: "Papel Institucional Blanco",
    detail:
      "La opción balanceada entre calidad y costo para mantener abastecida tu operación diaria sin sobrecostos.",
    image: "/productos/papel-institucional.png",
    specs: [
      "Presentación: fardo institucional",
      "Buen rendimiento en uso frecuente",
      "Ideal para oficinas, colegios e instituciones",
    ],
  },
  {
    name: "Toalla Institucional y Dispensadores",
    detail:
      "Sistema completo de secado de manos: toalla institucional más dispensadores, para baños y cocinas de uso intensivo.",
    image: "/productos/papel-toalla.png",
    specs: [
      "Incluye rollos de toalla y dispensador",
      "Alta absorción, menor consumo por uso",
      "Ideal para baños y cocinas de alto tráfico",
    ],
  },
];

export default function ProductShowcase() {
  return (
    <Section bg="white">
      <SectionHeading
        as="h1"
        eyebrow="Catálogo completo"
        title="Productos institucionales por mayor"
        subtitle="Cuatro líneas pensadas para distintos niveles de tráfico y presupuesto, todas con celulosa virgen y despacho coordinado."
      />

      <div className="mt-16 flex flex-col gap-20">
        {products.map((product, i) => (
          <Reveal key={product.name}>
            <div
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <ProductPhotoFrame src={product.image} alt={product.name} aspect="landscape" />

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text)]">
                  {product.name}
                </h2>
                <p className="mt-3 text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                  {product.detail}
                </p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {product.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-2 text-sm text-[var(--color-text)]"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[var(--color-primary)]"
                      />
                      {spec}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contacto"
                  className={buttonVariants({ variant: "primary", className: "mt-7" })}
                >
                  Cotizar este producto
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
