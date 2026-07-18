import Link from "next/link";
import { Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProductPhotoFrame } from "@/components/ui/product-photo-frame";
import { buttonVariants } from "@/components/ui/button";

const benefits = [
  { icon: Leaf, label: "Celulosa virgen" },
  { icon: ShieldCheck, label: "Suavidad certificada" },
  { icon: Sparkles, label: "Rendimiento superior" },
];

export default function Hero() {
  return (
    <Section bg="white" spacing="lg" containerClassName="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <Reveal>
          <h1 className="text-[2.75rem] sm:text-[3.25rem] leading-[1.08] font-bold tracking-tight">
            <span className="block text-[var(--color-text)]">Suavidad</span>
            <span className="block text-[var(--color-primary)]">que te acompaña</span>
          </h1>
          <p className="mt-6 text-[17px] text-[var(--color-text-muted)] max-w-md leading-relaxed">
            Papel higiénico institucional para hogares, empresas y negocios.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="/contacto" className={buttonVariants({ variant: "primary", size: "lg" })}>
              Solicitar cotización
            </Link>
            <Link href="/productos" className={buttonVariants({ variant: "ghost" })}>
              Ver productos →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-4">
            {benefits.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <Icon size={20} strokeWidth={1.75} className="text-[var(--color-primary)]" />
                <span className="text-sm font-medium text-[var(--color-text)]">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal variant="scale" delay={100}>
        <ProductPhotoFrame
          src="/producto-hero.png"
          alt="Papel higiénico institucional Casa Blanca"
          aspect="hero"
          priority
        />
      </Reveal>
    </Section>
  );
}
