import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    name: "Papel Jumbo Institucional",
    detail:
      "Alta capacidad y rendimiento. Ideal para oficinas, hoteles, clínicas y centros comerciales.",
    image: "/productos/papel-jumbo.png",
  },
  {
    name: "Papel Higiénico Black",
    detail:
      "Suavidad y resistencia con celulosa virgen. Higiene y economía para tu negocio.",
    image: "/productos/papel-higienico.png",
  },
  {
    name: "Papel Institucional Blanco",
    detail:
      "Calidad y rendimiento para oficinas, instituciones, restaurantes y más.",
    image: "/productos/papel-institucional.png",
  },
  {
    name: "Toalla Institucional y Dispensadores",
    detail: "Soluciones completas de higiene para tu empresa.",
    image: "/productos/papel-toalla.png",
  },
];

export default function Catalog() {
  return (
    <section id="productos" className="bg-white">
      <div className="container mx-auto max-w-[1180px] px-6 py-16 md:py-20">
        <h2 className="text-3xl md:text-[2.1rem] font-extrabold text-[var(--cb-navy-900)]">
          Nuestros productos
        </h2>
        <div className="mt-2 h-1 w-14 rounded-full bg-[var(--cb-green-600)]" />
        <p className="mt-4 text-[15px] text-[var(--cb-gray)] max-w-xl">
          Soluciones institucionales listas para abastecer tu operación sin
          exceso de información ni pasos innecesarios.
        </p>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {products.map((product) => (
            <Card key={product.name}>
              <CardContent className="flex flex-col gap-3 p-4">
                <div className="relative h-36 w-full rounded-lg overflow-hidden bg-[var(--cb-green-50)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold leading-snug text-[var(--cb-navy-900)]">
                    {product.name}
                  </h3>
                  <p className="text-[13px] text-[var(--cb-gray)] mt-1 leading-snug">
                    {product.detail}
                  </p>
                </div>
                <a
                  href="#contacto"
                  className="mt-1 inline-flex w-full items-center justify-center rounded-full border-2 border-[var(--cb-navy-800)] px-4 py-2 text-sm font-semibold text-[var(--cb-navy-800)] hover:bg-[var(--cb-navy-50)] transition-colors"
                >
                  Cotizar
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
