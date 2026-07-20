import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { whatsappUrl } from "@/lib/site-config";

const points = [
  "Presentaciones listas para comercializar",
  "Atención directa de fábrica",
  "Portafolio para distintos niveles de consumo",
];

export default function DistributionChannel() {
  return (
    <Section bg="white">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Canal distribución"
            eyebrowTone="accent"
            title="Un producto con presencia para hacer crecer tu portafolio"
            subtitle="Abastecimiento mayorista de productos Casa Blanca para distribuidores, tiendas y comercios. Coordinamos volúmenes y frecuencia de compra según tu operación."
          />

          <ul className="mt-8 flex flex-col gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-[15px] font-medium text-[var(--color-text)]">
                <span className="text-[#788b43] font-bold">✓</span>
                {point}
              </li>
            ))}
          </ul>

          <a
            href={whatsappUrl("Hola, quisiera información sobre distribución de productos Casa Blanca.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-[#788b43] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#66763a]"
          >
            <span aria-hidden="true">●</span>
            Quiero distribuir Casa Blanca
          </a>
          <p className="mt-3 text-xs text-[var(--color-text-muted)]">
            Stock para canal mayorista · Consulta condiciones comerciales
          </p>
        </Reveal>

        <Reveal variant="scale" delay={100}>
          <div className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)]">
            <Image
              src="/chatgpt-mockup/stock-fabrica.webp"
              alt="Stock mayorista de papel Casa Blanca para distribuidores"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
