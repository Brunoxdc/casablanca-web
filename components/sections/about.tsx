import { Eye, MapPin, Target } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import Sectors from "@/components/sections/sectors";

export default function About() {
  return (
    <Section bg="white">
      <SectionHeading
        as="h1"
        eyebrow="Sobre nosotros"
        title="Conoce Casa Blanca"
      />

      <div className="mt-10 grid lg:grid-cols-2 gap-14 items-start">
        <Reveal>
          <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
            Casa Blanca es una marca peruana especializada en la
            fabricación y comercialización de papel higiénico y papel
            toalla institucional. Atendemos a empresas, negocios e
            instituciones con productos de calidad y un servicio
            confiable, pensado para mantener tu operación abastecida sin
            complicaciones.
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
            <MapPin size={18} className="text-[var(--color-primary)]" />
            Fábrica ubicada en Cañete, Lima – Perú.
          </p>

          <div className="mt-12">
            <Sectors />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          <Reveal delay={100}>
            <div className="h-full rounded-[var(--radius-lg)] border border-[var(--color-border)] p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface)]">
                <Target size={20} className="text-[var(--color-primary-dark)]" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-[var(--color-text)]">
                Misión
              </h2>
              <p className="mt-2 text-[14px] text-[var(--color-text-muted)] leading-relaxed">
                Brindar productos de papel higiénico institucional de
                calidad para empresas, negocios e instituciones, con
                atención rápida, buen servicio y precios competitivos.
              </p>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="h-full rounded-[var(--radius-lg)] border border-[var(--color-border)] p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface)]">
                <Eye size={20} className="text-[var(--color-primary-dark)]" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-[var(--color-text)]">
                Visión
              </h2>
              <p className="mt-2 text-[14px] text-[var(--color-text-muted)] leading-relaxed">
                Consolidarnos como una marca peruana reconocida en el
                mercado institucional por nuestra calidad, confianza y
                crecimiento sostenible.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
