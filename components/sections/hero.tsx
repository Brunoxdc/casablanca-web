import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { site } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-50 to-slate-200 pb-32 pt-16 lg:pt-24 lg:pb-48">
      <div className="container relative z-10 grid lg:grid-cols-2 items-center gap-12 lg:gap-8">
        
        {/* Lado Izquierdo: Textos y Botones */}
        <div className="max-w-2xl px-2">
          <Reveal>
            <h1 className="mt-3 text-[3rem] sm:text-[4.5rem] leading-[1.05] font-serif font-bold text-[var(--color-primary)] tracking-tight">
              Papel higiénico <br />
              por mayor <br />
              <span className="block font-sans font-semibold text-[2rem] sm:text-[2.6rem] text-[var(--color-accent)] mt-2">
                para empresas y negocios
              </span>
            </h1>
            
            <p className="mt-6 text-[16px] sm:text-[18px] text-gray-700 max-w-md leading-relaxed">
              Directo de fábrica, con celulosa virgen, <br />
              <strong className="text-[var(--color-primary)] font-bold">calidad superior y atención rápida</strong> <br />
              para tu operación diaria.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={`https://wa.me/${site.phone.e164}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-[15px] font-bold text-white transition-transform hover:scale-105 shadow-md"
              >
                <WhatsappIcon size={20} />
                {site.phone.display}
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--color-accent)] px-8 py-3.5 text-[15px] font-bold text-[var(--color-primary)] transition hover:bg-[var(--color-accent)] hover:text-white"
              >
                Solicitar cotización &rarr;
              </Link>
            </div>
            
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
              <CheckCircle2 className="text-[var(--color-accent)]" size={18} />
              Directo de fábrica
            </div>
          </Reveal>
        </div>

        {/* Lado Derecho: Imagen con difuminado y Badge */}
        <Reveal
          variant="scale"
          delay={100}
          className="relative h-[350px] sm:h-[450px] lg:h-[600px] w-full order-first lg:order-last flex items-center justify-end"
        >
          {/* Contenedor con la máscara de difuminado (fade) a la izquierda */}
          <div className="absolute inset-0 w-full h-full [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_100%)] [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_100%)]">
            <Image
              src="/producto-hero.png"
              alt="Rollos de Papel Higiénico Casa Blanca"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-right" 
            />
          </div>
          
          {/* Badge Circular */}
          <div className="absolute top-8 right-4 sm:top-16 sm:right-8 flex h-32 w-32 flex-col items-center justify-center rounded-full border-[6px] border-white bg-slate-50 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.15)] text-center z-20">
            <span className="text-[var(--color-accent)] mb-1">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span className="text-[10px] font-bold leading-tight text-[var(--color-primary)] uppercase tracking-wider">
              Calidad<br /> que se siente<br /> en cada uso
            </span>
          </div>
        </Reveal>
      </div>

      {/* Divisor Curvo SVG */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-0 text-[var(--color-primary)] translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block h-[60px] sm:h-[90px] lg:h-[130px] w-full" fill="currentColor">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" />
        </svg>
      </div>
    </section>
  );
}