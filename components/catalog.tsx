import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Papel Jumbo Institucional",
    detail: "Paquete de 6 rollos de 200 metros.",
    image: "/productos/papel-jumbo.png",
  },
  {
    name: "Papel Higiénico Black",
    detail: "Plancha de 24 rollos de 40 metros.",
    image: "/productos/papel-higienico.png",
  },
  {
    name: "Papel Institucional Blanco",
    detail: "Ideal para hogar, oficinas y negocios.",
    image: "/productos/papel-institucional.png",
  },
  {
    name: "Toalla Institucional y Dispensadores",
    detail: "Resistente, absorbente y de alta calidad.",
    image: "/productos/papel-toalla.png",
  },
];

export default function Catalog() {
  return (
    <section id="productos" className="bg-white">
      <div className="container mx-auto max-w-[1180px] px-6 py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-[2.1rem] font-extrabold">
          Nuestros Productos
        </h2>
        <p className="mt-2 text-[15px] text-[var(--cb-gray)]">
          Opciones para cada necesidad, siempre con la mejor calidad.
        </p>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {products.map((product) => (
            <Card key={product.name}>
              <CardContent className="flex flex-col gap-3 p-4">
                <div className="relative h-36 w-full rounded-lg overflow-hidden bg-[var(--cb-teal-50)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-[13px] text-[var(--cb-gray)] mt-1 leading-snug">
                    {product.detail}
                  </p>
                </div>
                <Button variant="outline" className="w-full mt-1 text-sm">
                  Ver más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}