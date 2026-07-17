import {
  Building2,
  GraduationCap,
  Hotel,
  Stethoscope,
  UtensilsCrossed,
  Warehouse,
} from "lucide-react";

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
    <section className="bg-[var(--cb-beige-50)]">
      <div className="container mx-auto max-w-[1180px] px-6 py-14">
        <h2 className="text-2xl md:text-[1.7rem] font-extrabold text-[var(--cb-navy-900)]">
          Sectores que atendemos
        </h2>
        <div className="mt-2 h-1 w-14 rounded-full bg-[var(--cb-green-600)]" />

        <div className="mt-8 flex flex-wrap justify-between gap-y-6 gap-x-4">
          {sectors.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-[var(--cb-navy-800)]"
            >
              <Icon size={20} className="text-[var(--cb-green-600)]" />
              <span className="text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
