import Image from "next/image";
import { MapPin } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="bg-[var(--cb-teal-900)]">
      <div className="container mx-auto max-w-[1180px] px-6 py-10 grid md:grid-cols-[1.4fr_1fr_auto] gap-8 items-center">
        <div>
          <h2 className="text-white text-2xl md:text-[1.6rem] font-extrabold leading-tight">
            ¡ELIGE CALIDAD,
            <br />
            ELIGE CASA BLANCA!
          </h2>
          <p className="mt-2 text-sm text-white/75 max-w-sm">
            Contáctanos y descubre la suavidad que tu familia merece.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-white text-sm">
          <a
            href="https://wa.me/51924473557"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="#25b06a">
              <path d="M12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6c1.7.9 3.7 1.5 5.7 1.5 6.6 0 12-5.4 12-12S18.6 0 12 0zm0 21.8c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.9 1 1-3.8-.2-.4C2.2 15.4 1.8 13.7 1.8 12 1.8 6.4 6.4 1.8 12 1.8S22.2 6.4 22.2 12 17.6 21.8 12 21.8z" />
            </svg>
            924 473 557
          </a>
          <p className="flex items-start gap-2 text-white/80">
            <MapPin size={18} className="shrink-0 mt-0.5" />
            Urb Luis Chala MzB-lote7A, San Vicente – Cañete
          </p>
        </div>

        <div className="hidden md:block">
          <Image
            src="/producto-cta.png"
            alt="Papel higiénico Casa Blanca"
            width={160}
            height={140}
            className="w-40 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}