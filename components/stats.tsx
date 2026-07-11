import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Papel Higiénico",
    detail: "Paquete de 4 rollos",
    image: "/productos/papel-higienico.png",
  },
  {
    name: "Papel Jumbo",
    detail: "Rollo de 200 metros",
    image: "/productos/papel-jumbo.png",
  },
  {
    name: "Papel Toalla",
    detail: "Institucional",
    image: "/productos/papel-toalla.png",
  },
  {
    name: "Servilletas",
    detail: "Paquete de 500 unidades",
    image: "/productos/servilletas.png",
  },
];

export default function Catalog() {
  return (
    <section id="productos" className="bg-white">
      <div className="container py-16 md:py-20 text-center">
        <span className="eyebrow">Nuestra línea</span>
        <h2 className="mt-2 text-3xl md:text-[2.2rem] font-bold">
          Productos Destacados
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[var(--cb-teal-600)]" />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5 text-left">
          {products.map((product) => (
            <Card key={product.name}>
              <CardContent className="flex flex-col items-center text-center gap-3">
                <div className="relative h-32 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{product.name}</h3>
                  <p className="text-sm text-[var(--cb-gray)] mt-0.5">
                    {product.detail}
                  </p>
                </div>
                <Button className="w-full mt-1" variant="primary">
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