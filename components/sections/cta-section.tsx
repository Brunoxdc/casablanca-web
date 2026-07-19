import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { site } from "@/lib/site-config";

export default function CtaSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <Reveal>
          <div className="relative bg-[var(--color-accent)] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between px-8 py-12 md:px-16 md:py-16">
            
            {/* Adornos de fondo */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-72 h-72 bg-black opacity-10 rounded-full blur-2xl pointer-events-none"></div>

            {/* Lado Izquierdo: Textos */}
            <div className="relative z-10 w-full md:w-3/5 text-center md:text-left mb-10 md:mb-0">
              <span className="inline-block text-[12px] font-bold uppercase tracking-[0.15em] text-white/80 mb-3 bg-black/10 px-4 py-1.5 rounded-full">
                Hablemos
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                Cotiza tu abastecimiento en menos de 5 minutos
              </h2>
              <p className="text-[16px] md:text-[18px] text-white/90 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
                Cuéntanos qué necesita tu negocio y te respondemos con disponibilidad y precio el mismo día.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                
                {/* Botón WhatsApp */}
                <a
                  href={`https://wa.me/${site.phone.e164}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-bold text-[var(--color-primary)] transition-transform hover:scale-105 shadow-md"
                >
                  <WhatsappIcon size={20} />
                  Escríbenos por WhatsApp
                </a>
                
                {/* Botón Solicitar Cotización */}
                <Link
                  href="/contacto"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-[15px] font-bold text-white transition hover:bg-white hover:text-[var(--color-primary)]"
                >
                  Solicitar cotización →
                </Link>
              </div>
            </div>

            {/* Lado Derecho: Imagen */}
            <div className="relative z-10 w-full md:w-2/5 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] -my-10 md:-my-24">
                {/* IMPORTANTE: Usa un PNG transparente aquí para lograr el efecto 3D */}
                <Image 
                  src="/productos/papel-higienico.png"
                  alt="Cotiza Papel Higiénico Casa Blanca"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}