import { Leaf, ShieldCheck, Recycle, Award } from "lucide-react";

const features = [
  { icon: Leaf, label: "Alta absorción" },
  { icon: ShieldCheck, label: "Máximo rendimiento" },
  { icon: Recycle, label: "Producción sostenible" },
  { icon: Award, label: "Calidad garantizada" },
];

export default function Benefits() {
  return (
    <section className="bg-white">
      <div className="container py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-[var(--cb-teal-100)] text-[var(--cb-teal-700)]">
                <Icon size={24} strokeWidth={2} />
              </div>
              <p className="text-sm font-semibold text-[var(--cb-ink)]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}