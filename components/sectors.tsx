import {
  Building2,
  GraduationCap,
  Hotel,
  Stethoscope,
  UtensilsCrossed,
  Warehouse,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const sectors = [
  { icon: Hotel, label: "Hoteles" },
  { icon: UtensilsCrossed, label: "Restaurantes" },
  { icon: Stethoscope, label: "Clínicas" },
  { icon: Building2, label: "Oficinas" },
  { icon: GraduationCap, label: "Colegios" },
  { icon: Warehouse, label: "Bodegas" },
];

export default function Sectors() {
  return (
    <div>
      <h2 className="text-lg font-bold text-[var(--color-text)]">
        Sectores que atendemos
      </h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {sectors.map(({ icon: Icon, label }, i) => (
          <Reveal key={label} delay={i * 60}>
            <div className="flex items-center gap-2.5 rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-3">
              <Icon size={18} strokeWidth={1.75} className="text-[var(--color-primary)]" />
              <span className="text-sm font-medium text-[var(--color-text)]">{label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
