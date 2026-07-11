import { CheckCircle2, Feather, Recycle, Users2 } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "DISEÑO PENSADO PARA RENDIR",
    desc: "Mayor durabilidad y rendimiento.",
  },
  {
    icon: Feather,
    title: "TEXTURA SUAVE",
    desc: "Suavidad que cuida tu piel.",
  },
  {
    icon: Recycle,
    title: "PRODUCCIÓN SOSTENIBLE",
    desc: "Comprometidos con el medio ambiente.",
  },
  {
    icon: Users2,
    title: "PARA TODA LA FAMILIA",
    desc: "Seguridad y confianza en cada uso.",
  },
];

export default function Features() {
  return (
    <section id="beneficios" className="bg-white">
      <div className="container mx-auto max-w-[1180px] px-6 pb-4">
        <div className="rounded-2xl bg-[var(--cb-teal-700)] px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
}