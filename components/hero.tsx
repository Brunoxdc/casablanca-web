import Image from "next/image";
import { ArrowRight, CheckCircle2, Leaf } from "lucide-react";

const whatsappIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6c1.7.9 3.7 1.5 5.7 1.5 6.6 0 12-5.4 12-12S18.6 0 12 0zm0 21.8c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.9 1 1-3.8-.2-.4C2.2 15.4 1.8 13.7 1.8 12 1.8 6.4 6.4 1.8 12 1.8S22.2 6.4 22.2 12 17.6 21.8 12 21.8z" />
  </svg>
);

export default function Hero() {
  return (
    <section id="inicio" className="bg-white">
      <div className="container mx-auto max-w-[1180px] px-6 grid md:grid-cols-2 gap-10 items-center py-14 md:py-16">
        <div>
          <h1 className="text-[2.6rem] md:text-[3.1rem] leading-[1.1] font-extrabold tracking-tight">
            <span className="block text-[var(--cb-navy-900)]">
              Papel higiénico por mayor
            </span>
            <span className="block text-[var(--cb-green-600)]">
              para empresas y negocios
            </span>
          </h1>
          <p className="mt-5 text-[16px] text-[var(--cb-gray)] max-w-md leading-relaxed">
            Directo de fábrica, con celulosa virgen,{" "}
            <strong className="text-[var(--cb-ink)] font-semibold">
              calidad superior y atención rápida
            </strong>{" "}
            para tu operación diaria.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/51924473557"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--cb-green-600)] text-white px-6 py-3.5 font-semibold hover:bg-[var(--cb-green-700)] transition-colors"
            >
              {whatsappIcon}
              924 473 557
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--cb-navy-800)] text-[var(--cb-navy-800)] px-6 py-3.5 font-semibold hover:bg-[var(--cb-navy-50)] transition-colors"
            >
              Solicitar cotización
              <ArrowRight size={16} />
            </a>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--cb-ink)]">
            <CheckCircle2 size={18} className="text-[var(--cb-green-600)]" />
            Directo de fábrica
          </p>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <Image
            src="/producto-hero.png"
            alt="Rollos de papel higiénico Casa Blanca"
            width={520}
            height={460}
            className="w-full max-w-[480px] h-auto rounded-2xl object-cover"
            priority
          />
          <div className="absolute -top-4 right-4 md:right-0 flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-full bg-white p-3 text-center shadow-lg">
            <Leaf size={18} className="text-[var(--cb-green-600)]" />
            <p className="text-[11px] font-bold leading-tight text-[var(--cb-navy-900)]">
              CALIDAD QUE SE SIENTE EN CADA USO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
