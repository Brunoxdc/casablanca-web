import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";

const products = [
  {
    tag: "Producto destacado",
    number: "01",
    name: "Papel Jumbo Institucional",
    detail:
      "Rollos de alta capacidad pensados para puntos de consumo intenso, con menos cambios de rollo y menos quiebres de stock.",
    image: "/chatgpt-mockup/producto-jumbo-hero.webp",
    specs: ["6 rollos", "200 metros", "Doble hoja", "Celulosa virgen"],
  },
  {
    tag: "Reposición y comercio",
    number: "02",
    name: "Papel Higiénico Black",
    detail:
      "Nuestra línea de mayor suavidad, con celulosa virgen, para negocios que buscan una presentación premium sin dejar de lado el precio por mayor.",
    image: "/chatgpt-mockup/producto-24-rollos.webp",
    specs: ["24 rollos", "40 metros", "Doble hoja", "Extra suave"],
  },
  {
    tag: "Cocina y limpieza",
    number: "03",
    name: "Toalla Institucional y Dispensadores",
    detail:
      "Sistema completo de secado de manos: toalla institucional más dispensadores, para baños y cocinas de uso intensivo.",
    image: "/chatgpt-mockup/producto-toalla.webp",
    specs: ["Rollo + dispensador", "Alta absorción", "Uso intensivo"],
  },
];

export default function ProductShowcase() {
  return (
    <>
      {/* Intro - ESPACIO SUPERIOR REDUCIDO (spacing="sm") */}
      <Section bg="white" spacing="sm" className="overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Textos y Botones */}
          <Reveal>
            <div className="max-w-xl">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#788b43] mb-3 block">
                Portafolio institucional y mayorista
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-bold text-[var(--color-primary-dark)] leading-[1.1] mb-6">
                Productos definidos por <br />
                <span className="block font-sans font-medium text-[var(--color-primary-dark)] mt-2">
                  rendimiento y aplicación.
                </span>
              </h1>
              
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
                Compara presentaciones y encuentra la alternativa adecuada para el consumo de tu empresa o canal de distribución.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contacto" className={buttonVariants({ variant: "primary", size: "lg" })}>
                  Solicitar asesoría
                </Link>
                <a href="#catalogo" className={buttonVariants({ variant: "ghost" })}>
                  Explorar catálogo &darr;
                </a>
              </div>
            </div>
          </Reveal>

          {/* Columna Derecha: Imagen de los paquetes reales */}
          <Reveal delay={100}>
            <div className="relative w-full max-w-[500px] mx-auto lg:ml-auto">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-lg)] border-[8px] border-white bg-slate-50 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/paquetes-casa-blanca.jpg" 
                  alt="Portafolio completo de productos Casa Blanca"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-[var(--radius-lg)] bg-[var(--color-primary-dark)]/10 blur-xl"></div>
            </div>
          </Reveal>

        </div>
      </Section>

      {/* Índice rápido compacto sin espacios muertos */}
      <div className="border-y border-[var(--color-border)] bg-slate-50/70">
        <div className="container flex flex-wrap gap-x-12 gap-y-3 py-3.5 justify-start md:justify-center">
          {products.map((product) => (
            <a
              key={product.name}
              href={`#producto-${product.number}`}
              className="group flex items-center gap-3 text-sm font-bold text-[var(--color-text)] transition-colors hover:text-[#788b43]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white border border-[var(--color-border)] text-xs font-black text-[#788b43] shadow-sm group-hover:border-[#788b43] transition-colors">
                {product.number}
              </span>
              {product.name}
            </a>
          ))}
        </div>
      </div>

      {/* Catálogo */}
      <Section bg="white" id="catalogo" spacing="sm">
        <div className="flex flex-col gap-20">
          {products.map((product, i) => (
            <Reveal key={product.name} className="scroll-mt-24">
              <div
                id={`producto-${product.number}`}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-surface)] shadow-sm">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain p-8"
                  />
                  <span className="absolute top-4 left-4 rounded-md bg-[var(--color-primary)] px-3 py-1.5 text-xs font-bold text-white shadow-md">
                    {product.tag}
                  </span>
                </div>

                <div>
                  <p className="text-[12px] font-black uppercase tracking-[0.14em] text-[#667482]">
                    {product.tag}
                  </p>
                  <div className="mt-2 flex items-baseline gap-3">
                    <span className="text-2xl font-black text-[#788b43]">{product.number}</span>
                    <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text)]">
                      {product.name}
                    </h2>
                  </div>
                  <p className="mt-3 text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                    {product.detail}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className="rounded-md border border-[#cbd4bf] px-3 py-1.5 text-xs font-semibold text-[#536633] bg-[#f4f7f0]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contacto"
                    className={buttonVariants({
                      variant: "secondary",
                      className: "mt-7 !rounded-md",
                    })}
                  >
                    Solicitar cotización
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* No sabes cuál elegir */}
      <Section bg="surface" spacing="sm">
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="¿No sabes cuál elegir?"
            eyebrowTone="muted"
            title="Te ayudamos a estimar la presentación adecuada"
            subtitle="Cuéntanos el tipo de establecimiento, número de usuarios y frecuencia de reposición. Te orientamos antes de cotizar."
          />
          <Reveal delay={100}>
            <Link
              href="/contacto"
              className={buttonVariants({ variant: "primary", size: "lg", className: "mt-6" })}
            >
              Hablar con un asesor
            </Link>
          </Reveal>
        </div>
      </Section>
    </>
  );
}