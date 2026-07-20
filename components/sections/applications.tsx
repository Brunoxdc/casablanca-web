import { SectionHeading } from "@/components/ui/section-heading";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const applications = [
  "Hoteles y hospedajes",
  "Restaurantes y cocinas",
  "Clínicas y centros de salud",
  "Colegios e instituciones",
  "Oficinas y plantas",
  "Distribuidores mayoristas",
];

export default function Applications() {
  return (
    <Section bg="brand">
      <SectionHeading
        eyebrow="Aplicaciones"
        eyebrowTone="accent"
        inverted
        title="Diseñado para entornos profesionales"
        align="center"
        className="mx-auto"
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
        {applications.map((label, i) => (
          <Reveal key={label} delay={i * 60}>
            <div className="flex items-center gap-4 border-b border-white/15 pb-4">
              <span className="text-lg font-black text-[#a9ca69]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-white">{label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
