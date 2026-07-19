import { Package, Truck, ShieldCheck, Leaf } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const benefits = [
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

export default function Benefits() {
  return (
    <section className="bg-[var(--color-primary)] py-12 md:py-16 relative z-10 -mt-1">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="flex flex-col items-center text-center px-6 py-8 md:py-2">
                <Icon size={40} strokeWidth={1.2} className="text-[var(--color-accent)] mb-4" />
                <h3 className="text-[13px] md:text-[14px] font-bold text-white tracking-wider mb-2 uppercase">
                  {title}
                </h3>
                <p className="text-[13px] text-white/70 leading-relaxed max-w-[220px]">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}