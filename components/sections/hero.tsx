import Image from "next/image";
import Link from "next/link";
import { Medal, Cylinder, Leaf, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { site } from "@/lib/site-config";

const features = [
  {
    icon: Medal,
    title: "Alta calidad",
    desc: "Celulosa virgen de máximo rendimiento.",
  },
  {
    icon: Cylinder,
    title: "Más metros",
    desc: "Mayor duración, menor costo por uso.",
  },
  {
    icon: Leaf,
    title: "Sostenible",
    desc: "Procesos responsables con el medio ambiente.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)]">
      <div className="grid lg:grid-cols-2 items-stretch">
        <div className="relative z-10 px-6 sm:px-10 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] py-16 lg:py-24 flex flex-col justify-center">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Directo de fábrica
            </span>
            <h1 className="mt-3 text-[2.5rem] sm:text-[3.25rem] leading-[1.05] font-extrabold uppercase tracking-tight text-white">
              <span className="block">Papel higiénico</span>
              <span className="block">institucional</span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] sm:text-[17px] font-medium uppercase tracking-wide leading-relaxed text-white/80">
              Calidad, rendimiento y confianza para tu empresa
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href="/contacto"
                className={buttonVariants({
                  variant: "primary",
                  size: "lg",
                  className: "uppercase tracking-wide",
                })}
              >
                <WhatsappIcon size={18} />
                Solicitar cotización
              </Link>
              <a
                href={`tel:+${site.phone.e164}`}
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-white"
              >
                <Phone size={18} />
                {site.phone.display}
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-12 flex flex-wrap gap-x-9 gap-y-6">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex max-w-[170px] flex-col gap-2.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--color-accent)]">
                    <Icon size={20} strokeWidth={1.75} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold uppercase tracking-wide text-white">
                      {title}
                    </p>
                    <p className="mt-0.5 text-[12px] leading-snug text-white/60">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal
          variant="scale"
          delay={100}
          className="relative order-first lg:order-last h-[280px] sm:h-[380px] lg:h-auto bg-[var(--color-accent)]"
        >
          <div className="hero-photo-clip relative h-full w-full">
            {/* TODO: reemplazar por la foto real (baño con rollos) cuando esté disponible en public/ */}
            <Image
              src="/producto-hero.png"
              alt="Papel higiénico institucional Casa Blanca"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-12 right-10 hidden h-44 w-44 rounded-full border-2 border-white/25 lg:block"
          />
        </Reveal>
      </div>
    </section>
  );
}
