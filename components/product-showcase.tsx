import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

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
    <section className="bg-white">
      <div className="container mx-auto max-w-[1180px] px-6 py-16 md:py-20">
        <span className="eyebrow">Catálogo completo</span>
        <h1 className="mt-2 text-3xl md:text-[2.1rem] font-extrabold text-[var(--cb-navy-900)]">
          Productos institucionales por mayor
        </h1>
        <div className="mt-2 h-1 w-14 rounded-full bg-[var(--cb-green-600)]" />
        <p className="mt-4 text-[15px] text-[var(--cb-gray)] max-w-xl">
          Cuatro líneas pensadas para distintos niveles de tráfico y
          presupuesto, todas con celulosa virgen y despacho coordinado para tu
          negocio.
        </p>

        <div className="mt-12 flex flex-col gap-14">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden bg-[var(--cb-green-50)]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[var(--cb-navy-900)]">
                  {product.name}
                </h2>
                <p className="mt-3 text-[15px] text-[var(--cb-gray)] leading-relaxed">
                  {product.detail}
                </p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {product.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-2 text-sm text-[var(--cb-ink)]"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[var(--cb-green-600)]"
                      />
                      {spec}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contacto"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--cb-green-600)] text-white px-6 py-3 text-sm font-semibold hover:bg-[var(--cb-green-700)] transition-colors"
                >
                  Cotizar {product.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
