import Image from "next/image";
import Link from "next/link";
import { Eye, MapPin, Target } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";
import Sectors from "@/components/sections/sectors";

const values = [
  {
    number: "01",
    title: "Calidad",
    desc: "Verificamos la presentación y consistencia del producto antes del despacho.",
  },
  {
    number: "02",
    title: "Atención directa",
    desc: "Comprendemos la operación de cada cliente para recomendar la solución adecuada.",
  },
  {
    number: "03",
    title: "Continuidad",
    desc: "Buscamos relaciones recurrentes y un abastecimiento que acompañe tu crecimiento.",
  },
];

export default function About() {
  return (
    <>
      {/* Intro - AHORA CON DOS COLUMNAS E IMAGEN */}
      <Section bg="brand" className="overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna Izquierda: Textos */}
          <Reveal>
            <div className="max-w-xl">
              <p className="mb-4 text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--color-accent)]">
                Fabricación en Cañete
              </p>
              
              {/* Título unificado (Serif + Sans) */}
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-[1.1]">
                Una empresa peruana <br />
                <span className="block font-sans font-semibold text-[var(--color-accent)] mt-2">
                  orientada al mercado institucional
                </span>
              </h1>
              
              <p className="mt-6 text-[15px] sm:text-[16px] text-white/80 leading-relaxed max-w-lg">
                Fabricamos y comercializamos papel higiénico institucional con atención directa, calidad constante y una propuesta enfocada en rendimiento y continuidad de abastecimiento.
              </p>

              {/* Etiqueta / Badge de ubicación moderna */}
              <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white border border-white/20 backdrop-blur-sm shadow-lg">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent)]">
                  <MapPin size={16} className="text-[var(--color-primary-dark)]" />
                </div>
                Fábrica ubicada en Cañete, Lima – Perú.
              </div>
            </div>
          </Reveal>

          {/* Columna Derecha: Imagen */}
          <Reveal delay={100}>
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:ml-auto overflow-hidden rounded-[var(--radius-lg)] shadow-2xl border border-white/10">
              <Image
                src="/producto-hero.png"
                alt="Rollos de papel higiénico Casa Blanca"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Proceso y control */}
      <Section bg="surface">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)]">
              <Image
                src="/chatgpt-mockup/control-calidad.webp"
                alt="Colaborador de Casa Blanca realizando el control del producto"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Proceso y control"
              eyebrowTone="muted"
              title="Cuidamos el producto antes de cada despacho"
            />
            <p className="mt-5 text-[15px] text-[var(--color-text-muted)] leading-relaxed">
              Revisamos la fabricación, presentación y preparación de cada
              pedido para entregar un producto limpio y consistente.
            </p>
            <p className="mt-4 text-[15px] text-[var(--color-text-muted)] leading-relaxed">
              La atención directa nos permite entender cada requerimiento y
              acompañar las compras recurrentes con mayor cercanía.
            </p>
            <Link
              href="/contacto"
              className={buttonVariants({ variant: "primary", size: "lg", className: "mt-8" })}
            >
              Contactar al equipo
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Misión y visión */}
      <Section bg="white">
        <div className="grid sm:grid-cols-2 gap-6">
          <Reveal>
            <div className="h-full rounded-[var(--radius-lg)] border border-[var(--color-border)] p-7">
              <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-text-faint)]">
                Propósito actual
              </span>
              <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface)]">
                <Target size={20} className="text-[var(--color-primary-dark)]" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-[var(--color-text)]">Misión</h2>
              <p className="mt-2 text-[14px] text-[var(--color-text-muted)] leading-relaxed">
                Brindar productos de papel higiénico institucional de
                calidad para empresas, negocios e instituciones, con
                atención rápida, buen servicio y precios competitivos.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-[var(--radius-lg)] border border-[var(--color-border)] p-7">
              <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-text-faint)]">
                Proyección
              </span>
              <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface)]">
                <Eye size={20} className="text-[var(--color-primary-dark)]" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-[var(--color-text)]">Visión</h2>
              <p className="mt-2 text-[14px] text-[var(--color-text-muted)] leading-relaxed">
                Consolidarnos como una marca peruana reconocida en el
                mercado institucional por nuestra calidad, confianza y
                crecimiento sostenible.
              </p>
            </div>
          </Reveal>

          {/* Valores */}
          <div className="sm:col-span-2 mt-4 grid sm:grid-cols-3 gap-8 border-t border-[var(--color-border)] pt-10">
            {values.map(({ number, title, desc }) => (
              <Reveal key={number}>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-black text-[#788b43]">{number}</span>
                  <div>
                    <h3 className="font-normal text-lg text-[var(--color-text)]">{title}</h3>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Así trabajamos */}
      <Section bg="surface">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Así trabajamos"
              eyebrowTone="muted"
              title="Personas y procesos detrás de cada pedido"
              subtitle="La producción se acompaña con revisión y trabajo directo de nuestro equipo en planta."
            />
          </Reveal>
          <Reveal delay={100}>
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/chatgpt-mockup/proceso-casa-blanca-poster.jpg"
              className="w-full rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)]"
            >
              <source src="/chatgpt-mockup/proceso-casa-blanca.mp4" type="video/mp4" />
            </video>
          </Reveal>
        </div>
      </Section>

      {/* Sectores */}
      <Section bg="white">
        <Sectors />
      </Section>
    </>
  );
}