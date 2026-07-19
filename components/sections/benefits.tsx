import { Headphones, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Calidad certificada",
    desc: "Cumple altos estándares de higiene y suavidad en cada rollo.",
  },
  {
    icon: PackageCheck,
    title: "Precios por mayor",
    desc: "Condiciones especiales para compras corporativas y de volumen.",
  },
  {
    icon: Truck,
    title: "Entrega puntual",
    desc: "Logística coordinada para que nunca te quedes sin stock.",
  },
  {
    icon: Headphones,
    title: "Atención directa",
    desc: "Hablas con fábrica, sin intermediarios ni letra pequeña.",
  },
];

export default function Benefits() {
  return (
    <Section bg="surface" spacing="sm">
      <SectionHeading
        eyebrow="Por qué elegirnos"
        title="Beneficios pensados para tu operación"
        align="center"
        className="mx-auto"
      />

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map(({ icon: Icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 90}>
            <div className="h-full rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-sm)] transition-all duration-[var(--transition-duration)] ease-[var(--ease)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-md)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-surface)]">
                <Icon size={24} strokeWidth={1.5} className="text-[var(--color-primary-dark)]" />
              </div>
              <h3 className="mt-5 text-base font-bold text-[var(--color-text)]">
                {title}
              </h3>
              <p className="mt-2 text-[14px] text-[var(--color-text-muted)] leading-relaxed">
                {desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
