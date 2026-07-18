import Image from "next/image";
import { ArrowRight, CheckCircle2, Leaf } from "lucide-react";

const whatsappIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
);

export default function Hero() {
  return (
    <section id="inicio" className="bg-white">
      <div className="container mx-auto max-w-[1180px] px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center py-12 lg:py-14">
        <div>
          <h1
            className="text-[2.5rem] sm:text-[2.9rem] lg:text-[2.5rem] xl:text-[2.8rem] leading-[1.1] font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-hero-serif)" }}
          >
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

        <div className="relative isolate flex justify-center lg:justify-end">
          <svg
            className="absolute bottom-0 -left-10 h-40 w-56 text-[var(--cb-green-600)] -z-10"
            viewBox="0 0 200 160"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M0,60 C40,10 120,0 160,40 C200,80 180,140 120,150 C60,160 -20,120 0,60 Z" />
          </svg>
          <div className="relative w-full max-w-[480px]">
            <Image
              src="/producto-hero.png"
              alt="Rollos de papel higiénico Casa Blanca"
              width={520}
              height={460}
              className="w-full h-auto rounded-2xl object-cover"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 45%, rgba(255,255,255,0.55) 75%, #fff 100%)",
              }}
            />
          </div>
          <div className="absolute -top-4 right-4 lg:right-0 flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-full bg-white p-3 text-center shadow-lg">
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
