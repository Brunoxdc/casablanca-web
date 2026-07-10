"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Papel Higiénico Casa Blanca",
    description: "Premium estándar con máxima suavidad y rendimiento. Ideal para comercios, restaurantes y oficinas.",
    specs: ["24 rollos por paquete", "500 hojas/rollo", "2 capas premium", "Súper suave"],
    price: "$24.99 - $29.99",
    image: "/productos/papel-blanco-pro.png",
    badge: "Popular",
  },
  {
    id: 2,
    name: "Papel Jumbo Casa Blanca",
    description: "Bobina industrial de 1000m. Alto rendimiento y duración. Perfecto para baños de flujo constante.",
    specs: ["Bobinas de 1000m", "Diámetro 18cm", "2 capas resistentes", "Máxima duración"],
    price: "$10.00",
    image: "/productos/papel-jumbo-pro.png",
    badge: "Industrial",
  },
  {
    id: 3,
    name: "Papel Higiénico Black",
    description: "Premium oscuro con acabado elegante. Para establecimientos de alto nivel que requieren distinción.",
    specs: ["24 rollos por paquete", "500 hojas/rollo", "2 capas premium", "Color negro distintivo"],
    price: "$37.00",
    image: "/productos/papel-black-pro.png",
    badge: "Premium",
  },
  {
    id: 4,
    name: "Papelera Comercial",
    description: "Contenedor higiénico para espacios comerciales. Diseño moderno y funcional.",
    specs: ["Diseño higiénico", "Material resistente", "Fácil de limpiar", "Acabado premium"],
    price: "Consultar",
    image: "/productos/papelera-pro.png",
    badge: "Accesorios",
  },
];

export function Catalog() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Nuestros Productos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Variedad de opciones para todas tus necesidades comerciales
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-primary overflow-hidden"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Imagen */}
              {product.image && (
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={280}
                    height={280}
                    className="object-contain h-full w-full p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Contenido */}
              <div className="flex flex-col flex-grow p-5">
                <h3 className="text-lg font-bold text-foreground leading-tight">{product.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{product.description}</p>

                {/* Especificaciones */}
                <div className="mt-4 flex flex-col gap-2.5 flex-grow">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/60 mt-1 flex-shrink-0"></span>
                      <span className="text-xs text-foreground/80">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Footer del card */}
                <div className="mt-6 pt-5 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Precio</p>
                      <p className="text-base font-bold text-primary mt-0.5">{product.price}</p>
                    </div>
                    <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-lg hover:bg-primary/90 active:scale-95">
                      Cotizar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent p-8 md:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex-grow">
              <p className="text-xs font-bold text-primary tracking-widest mb-2">PROMOCIÓN EXCLUSIVA</p>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Descuentos por volumen <span className="text-primary">hasta 30%</span>
              </h3>
              <p className="mt-4 text-base text-muted-foreground max-w-md">
                Accede a precios mayoristas especiales con cotización personalizada. Cuanto mayor sea tu compra, mayor será tu ahorro.
              </p>
            </div>
            <button className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 font-bold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:bg-primary/90 active:scale-95 whitespace-nowrap">
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
