import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { site } from "@/lib/site-config";

export default function Hero() {
  return (
    // Reducimos el padding bottom para que la sección de beneficios suba
    <section className="relative overflow-hidden bg-slate-50 pt-2 lg:pt-4 pb-16 lg:pb-20">
      
      {/* 1. IMAGEN FONDO */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[60%] z-0 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)'
          }}
        >
          <Image
            src="/chatgpt-mockup/hero-white-paper-v2.webp"
            alt="Rollos de Papel Higiénico Casa Blanca"
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-[center_right]"
          />
        </div>
      </div>

      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="container relative z-10 grid lg:grid-cols-2 items-center gap-6 lg:gap-4 pt-2 lg:pt-4 pb-4">
        
        {/* Textos y Botones */}
        <div className="max-w-2xl px-2">
          <Reveal>
            {/* Título: Mismo tipo de letra original, pero todo en azul oscuro */}
            <h1 className="mt-2 text-[2.75rem] sm:text-[3.25rem] lg:text-[3.75rem] leading-[1.05] font-serif font-bold text-[var(--color-primary)] tracking-tight">
              Soluciones de papel <br />
              <span className="block font-sans font-semibold text-[1.75rem] sm:text-[2rem] lg:text-[2.2rem] text-[var(--color-primary)] mt-1">
                para empresas e instituciones
              </span>
            </h1>

            <p className="mt-5 text-[15px] sm:text-[16px] text-gray-700 max-w-[450px] leading-relaxed">
              Abastecemos operaciones que necesitan{" "}
              <strong className="text-[var(--color-primary)] font-bold">calidad constante, rendimiento y atención comercial directa</strong>{" "}
              desde fábrica.
            </p>

            {/* BOTONES: WhatsApp y Conocer Productos */}
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={`https://wa.me/${site.phone.e164}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-[14px] sm:text-[15px] font-bold text-white transition-transform hover:scale-105 shadow-md"
              >
                <WhatsappIcon size={20} />
                {site.phone.display}
              </a>
              <Link
                href="/productos"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--color-accent)] px-6 py-3 text-[14px] sm:text-[15px] font-bold text-[var(--color-primary)] transition hover:bg-[var(--color-accent)] hover:text-white bg-transparent"
              >
                Conocer productos &rarr;
              </Link>
            </div>

            {/* PUNTOS INFERIORES CON CHECK */}
            <div className="mt-10 pt-6 border-t border-black/10 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="text-[var(--color-accent)] mt-0.5 shrink-0" size={18} />
                <div>
                  <p className="text-[14px] sm:text-[15px] font-bold text-[var(--color-primary)]">Directo</p>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-500 mt-0.5">De fábrica</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <CheckCircle2 className="text-[var(--color-accent)] mt-0.5 shrink-0" size={18} />
                <div>
                  <p className="text-[14px] sm:text-[15px] font-bold text-[var(--color-primary)]">Celulosa</p>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-500 mt-0.5">Virgen</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <CheckCircle2 className="text-[var(--color-accent)] mt-0.5 shrink-0" size={18} />
                <div>
                  <p className="text-[14px] sm:text-[15px] font-bold text-[var(--color-primary)]">Atención</p>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-500 mt-0.5">Mayorista</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <CheckCircle2 className="text-[var(--color-accent)] mt-0.5 shrink-0" size={18} />
                <div>
                  <p className="text-[14px] sm:text-[15px] font-bold text-[var(--color-primary)]">Entrega</p>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-500 mt-0.5">Coordinada</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Badge Flotante */}
        <Reveal
          variant="scale"
          delay={100}
          className="relative h-[120px] lg:h-full w-full flex items-start justify-end lg:pt-8"
        >
          {/* Badge reducido proporcionalmente */}
          <div className="absolute top-0 right-4 lg:right-0 flex h-24 w-24 lg:h-28 lg:w-28 flex-col items-center justify-center rounded-full border-[5px] lg:border-[6px] border-white bg-slate-50 p-2 shadow-xl text-center z-20">
            <span className="text-[var(--color-accent)] mb-1">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7 lg:w-8 lg:h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span className="text-[8px] lg:text-[9px] font-bold leading-tight text-[var(--color-primary)] uppercase tracking-wider">
              Calidad<br /> que se siente<br /> en cada uso
            </span>
          </div>
        </Reveal>
      </div>

      {/* 3. OLA INFERIOR CON BORDE VERDE */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 translate-y-[1px]">
        {/* Ola Verde (Fondo) */}
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-2 lg:bottom-3 w-full h-[40px] sm:h-[60px] lg:h-[80px] text-[var(--color-accent)]" fill="currentColor">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" />
        </svg>
        {/* Ola Azul (Frente) */}
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] sm:h-[60px] lg:h-[80px] text-[var(--color-primary)]" fill="currentColor">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" />
        </svg>
      </div>

    </section>
  );
}