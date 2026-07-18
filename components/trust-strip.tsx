import { Building2, Factory, HeartHandshake, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

// Mensajes cualitativos por ahora. Cuando existan cifras reales
// (años operando, empresas atendidas, tiempos de entrega), basta con
// reemplazar `label` por el dato — el resto del componente no cambia.
const items = [
  { icon: Factory, label: "Venta directa de fábrica" },
  { icon: ShieldCheck, label: "Calidad garantizada" },
  { icon: HeartHandshake, label: "Atención personalizada" },
  { icon: Building2, label: "Distribución para empresas e instituciones" },
];

export default function TrustStrip() {
  return (
    <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="container py-7 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map(({ icon: Icon, label }, i) => (
          <Reveal key={label} delay={i * 80}>
            <div className="flex items-center gap-3">
              <Icon size={22} strokeWidth={1.75} className="shrink-0 text-[var(--color-primary)]" />
              <span className="text-[13px] sm:text-sm font-medium text-[var(--color-text)] leading-snug">
                {label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
