import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    number: "01",
    title: "Materia prima seleccionada",
    desc: "Celulosa virgen para mayor suavidad, resistencia y consistencia.",
  },
  {
    number: "02",
    title: "Presentación cuidada",
    desc: "Revisamos limpieza, alineado y sellado antes de cada entrega.",
  },
  {
    number: "03",
    title: "Abastecimiento continuo",
    desc: "Atención directa para compras recurrentes y volúmenes mayoristas.",
  },
];

export default function QualityProcess() {
  return (
    <Section bg="surface">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)]">
            <Image
              src="/chatgpt-mockup/control-calidad.webp"
              alt="Control de calidad durante la fabricación de papel Casa Blanca"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Calidad para el uso diario"
            title="Bienestar y confianza para tus colaboradores"
            subtitle="El papel que eliges forma parte de la experiencia cotidiana de tu organización. Por eso trabajamos con celulosa virgen, doble hoja y control visual del producto antes del despacho."
          />

          <ol className="mt-10 flex flex-col gap-7">
            {steps.map(({ number, title, desc }) => (
              <Reveal key={number} as="li">
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-[var(--color-accent)]">{number}</span>
                  <div>
                    <h3 className="font-bold text-[var(--color-text)]">{title}</h3>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
