import Image from "next/image";
import { Leaf, ShieldCheck, Users } from "lucide-react";

const quickFeatures = [
  { icon: Leaf, label: "Suave y resistente" },
  { icon: ShieldCheck, label: "Calidad garantizada" },
  { icon: Users, label: "Ideal para tu familia" },
];

export default function Hero() {
  return (
    <section id="inicio" className="bg-white">
      <div className="container mx-auto max-w-[1180px] px-6 grid md:grid-cols-2 gap-10 items-center py-14 md:py-16">
        <div>
          <h1 className="text-[2.6rem] md:text-[3.1rem] leading-[1.05] font-extrabold tracking-tight">
            <span className="block text-[var(--cb-ink)]">SUAVIDAD</span>
            <span className="block text-[var(--cb-teal-600)]">
              QUE TE ACOMPAÑA
            </span>
          </h1>
          <p className="mt-5 text-[16px] text-[var(--cb-gray)] max-w-sm leading-relaxed">
            Papel higiénico de alta calidad para cada momento de tu día.
          </p>

          <div className="mt-7 flex flex-wrap gap-8">
            {quickFeatures.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center w-24">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[var(--cb-teal-100)] text-[var(--cb-teal-700)]">
                  <Icon size={20} />
                </div>
                <p className="text-xs font-semibold text-[var(--cb-ink)] leading-tight">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/51924473557"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25b06a] text-white px-6 py-3.5 font-semibold hover:bg-[#1f9a5c] transition-colors"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6c1.7.9 3.7 1.5 5.7 1.5 6.6 0 12-5.4 12-12S18.6 0 12 0zm0 21.8c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.9 1 1-3.8-.2-.4C2.2 15.4 1.8 13.7 1.8 12 1.8 6.4 6.4 1.8 12 1.8S22.2 6.4 22.2 12 17.6 21.8 12 21.8z" />
              </svg>
              924 473 557
            </a>
            <a
              href="#productos"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--cb-teal-700)] text-[var(--cb-teal-700)] px-6 py-3.5 font-semibold hover:bg-[var(--cb-teal-50)] transition-colors uppercase text-sm tracking-wide"
            >
              Ver productos
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <Image
            src="/producto-hero.png"
            alt="Rollos de papel higiénico Casa Blanca"
            width={520}
            height={460}
            className="w-full max-w-[480px] h-auto rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}