import { Leaf, Package, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "CELULOSA VIRGEN",
    desc: "Suavidad, resistencia y mejor rendimiento.",
  },
  {
    icon: Package,
    title: "VENTA POR MAYOR",
    desc: "Precios competitivos y abastecimiento continuo.",
  },
  {
    icon: Truck,
    title: "ENTREGA RÁPIDA Y SEGURA",
    desc: "Cumplimos con tus tiempos de entrega.",
  },
  {
    icon: ShieldCheck,
    title: "CONTROL DE CALIDAD",
    desc: "Producto limpio, bien alineado y bien sellado.",
  },
];

export default function Features() {
  return (
    <section id="beneficios" className="bg-[var(--cb-navy-900)]">
      <div className="container mx-auto max-w-[1180px] px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={title}
            className={`flex flex-col items-center text-center gap-3 px-2 ${
              i > 0 ? "md:border-l md:border-white/20" : ""
            }`}
          >
            <Icon size={30} className="text-white" strokeWidth={1.8} />
            <h3 className="text-[13px] font-bold text-white tracking-wide leading-snug">
              {title}
            </h3>
            <p className="text-[13px] text-white/80 leading-snug">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
