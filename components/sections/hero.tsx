import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { site } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pb-32 pt-6 lg:pt-10 lg:pb-48">
      
      {/* 1. IMAGEN FONDO: Al ponerla "absolute top-0 bottom-0", la imagen toca los bordes superior e inferior, eliminando el corte cuadrado. */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[60%] z-0 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            // El degradado lineal solo difumina el lado izquierdo. El resto (arriba, abajo y derecha) queda sólido y al ras de la pantalla.
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)'
          }}
        >
          <Image
            src="/producto-hero.png"
            alt="Rollos de Papel Higiénico Casa Blanca"
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-center lg:object-left" 
          />
        </div>
      </div>

      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="container relative z-10 grid lg:grid-cols-2 items-center gap-12 lg:gap-8 pt-8 lg:pt-16 pb-10">
        
        {/* Textos y Botones */}
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
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--color-accent)] px-8 py-3.5 text-[15px] font-bold text-[var(--color-primary)] transition hover:bg-[var(--color-accent)] hover:text-white bg-transparent"
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

        {/* Badge Flotante (Se mantiene en la cuadrícula para respetar los márgenes) */}
        <Reveal
          variant="scale"
          delay={100}
          className="relative h-[200px] lg:h-full w-full flex items-start justify-end lg:pt-4"
        >
          <div className="absolute top-0 right-4 lg:right-0 flex h-28 w-28 lg:h-36 lg:w-36 flex-col items-center justify-center rounded-full border-[6px] border-white bg-slate-50 p-3 shadow-xl text-center z-20">
            <span className="text-[var(--color-accent)] mb-1 lg:mb-2">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8 lg:w-10 lg:h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span className="text-[9px] lg:text-[11px] font-bold leading-tight text-[var(--color-primary)] uppercase tracking-wider">
              Calidad<br /> que se siente<br /> en cada uso
            </span>
          </div>
        </Reveal>
      </div>

      {/* 3. OLA INFERIOR CON BORDE VERDE (Igual al diseño original) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 translate-y-[1px]">
        {/* Ola Verde (Fondo) */}
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-2 lg:bottom-4 w-full h-[60px] sm:h-[90px] lg:h-[130px] text-[var(--color-accent)]" fill="currentColor">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" />
        </svg>
        {/* Ola Azul (Frente) */}
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] sm:h-[90px] lg:h-[130px] text-[var(--color-primary)]" fill="currentColor">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" />
        </svg>
      </div>

    </section>
  );
}