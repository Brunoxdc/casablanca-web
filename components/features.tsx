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
      <div className="container mx-auto max-w-[1180px] px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col items-center text-center gap-3 px-2">
            <Icon size={34} className="text-white" strokeWidth={1.6} />
            <h3 className="text-sm font-bold text-white tracking-wide leading-snug">
              {title}
            </h3>
            <p className="text-[13px] text-white/80 leading-snug">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
