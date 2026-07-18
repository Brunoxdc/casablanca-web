import { Eye, MapPin, Target } from "lucide-react";

export default function About() {
  return (
    <section className="bg-white">
      <div className="container mx-auto max-w-[1180px] px-6 py-16 md:py-20">
        <span className="eyebrow">Sobre nosotros</span>
        <h1 className="mt-2 text-3xl md:text-[2.1rem] font-extrabold text-[var(--cb-navy-900)]">
          Conoce Casa Blanca
        </h1>
        <div className="mt-2 h-1 w-14 rounded-full bg-[var(--cb-green-600)]" />

        <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-[15px] text-[var(--cb-gray)] leading-relaxed">
              Casa Blanca es una marca peruana especializada en la
              fabricación y comercialización de papel higiénico y papel
              toalla institucional. Atendemos a empresas, negocios e
              instituciones con productos de calidad y un servicio
              confiable, pensado para mantener tu operación abastecida sin
              complicaciones.
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--cb-navy-900)]">
              <MapPin size={18} className="text-[var(--cb-green-600)]" />
              Fábrica ubicada en Cañete, Lima – Perú.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[var(--cb-border)] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--cb-green-600)] text-white">
                <Target size={20} />
              </div>
              <h2 className="mt-4 text-lg font-bold text-[var(--cb-navy-900)]">
                Misión
              </h2>
              <p className="mt-2 text-[14px] text-[var(--cb-gray)] leading-relaxed">
                Brindar productos de papel higiénico institucional de
                calidad para empresas, negocios e instituciones, con
                atención rápida, buen servicio y precios competitivos.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--cb-border)] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--cb-green-600)] text-white">
                <Eye size={20} />
              </div>
              <h2 className="mt-4 text-lg font-bold text-[var(--cb-navy-900)]">
                Visión
              </h2>
              <p className="mt-2 text-[14px] text-[var(--cb-gray)] leading-relaxed">
                Consolidarnos como una marca peruana reconocida en el
                mercado institucional por nuestra calidad, confianza y
                crecimiento sostenible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
