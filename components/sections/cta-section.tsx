import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { whatsappUrl } from "@/lib/site-config";

export default function CtaSection() {
  return (
    <Section
      bg="brand"
      containerClassName="grid lg:grid-cols-[1.3fr_1fr] gap-14 items-center overflow-visible"
    >
      <Reveal>
        <span className="eyebrow !text-white/80">Hablemos</span>
        <h2 className="mt-3 text-[2rem] sm:text-[2.5rem] font-bold leading-[1.15] text-white">
          Cotiza tu abastecimiento en menos de 5 minutos
        </h2>
        <p className="mt-4 text-white/85 text-[16px] max-w-md leading-relaxed">
          Cuéntanos qué necesita tu negocio y te respondemos con
          disponibilidad y precio el mismo día.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "primary", size: "lg" })}
          >
            <WhatsappIcon size={18} />
            Escríbenos por WhatsApp
          </a>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border-2 border-white/40 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Solicitar cotización
            <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>

      <Reveal variant="scale" delay={100} className="hidden sm:flex justify-center lg:justify-end">
        <div className="relative w-full max-w-[380px] lg:max-w-[440px] lg:translate-x-6">
          <Image
            src="/producto-cta.png"
            alt="Papel institucional Casa Blanca"
            width={640}
            height={640}
            className="w-full h-auto rounded-[var(--radius-lg)] drop-shadow-[0_36px_60px_rgba(0,0,0,0.4)]"
          />
        </div>
      </Reveal>
    </Section>
  );
}
