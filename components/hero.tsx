import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-[var(--cb-teal-50)] via-white to-[var(--cb-teal-100)]"
    >
      <div className="container grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
        <div>
          <span className="eyebrow">Papel Higiénico Institucional</span>
          <h1 className="mt-3 text-[2.6rem] md:text-[3.4rem] leading-[1.08] font-bold">
            Suavidad{" "}
            <span className="text-[var(--cb-teal-600)]">que te acompaña</span>
          </h1>
          <p className="mt-5 text-[17px] text-[var(--cb-gray)] max-w-md leading-relaxed">
            Papel higiénico de alta calidad para hogares, empresas e
            instituciones.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#productos"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--cb-teal-700)] text-white px-6 py-3.5 font-semibold hover:bg-[var(--cb-teal-800)] transition-colors"
            >
              Ver productos
              <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/51924473557"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--cb-teal-700)] text-[var(--cb-teal-700)] px-6 py-3.5 font-semibold hover:bg-[var(--cb-teal-50)] transition-colors"
            >
              <MessageCircle size={18} />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute -bottom-6 h-40 w-64 rounded-full bg-[var(--cb-teal-800)]/90 blur-0" />
          <Image
            src="/producto-hero.png"
            alt="Rollo de papel higiénico Casa Blanca"
            width={520}
            height={520}
            className="relative w-full max-w-[440px] h-auto drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}