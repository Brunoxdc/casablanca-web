"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { 
  Compass, 
  MapPin, 
  Telescope, 
  Building2, 
  Utensils, 
  Stethoscope, 
  Briefcase, 
  GraduationCap, 
  Warehouse 
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const values = [
  {
    number: "01",
    title: "Calidad",
    desc: "Verificamos la presentación y consistencia del producto antes del despacho.",
  },
  {
    number: "02",
    title: "Atención directa",
    desc: "Comprendemos la operación de cada cliente para recomendar la solución adecuada.",
  },
  {
    number: "03",
    title: "Continuidad",
    desc: "Buscamos relaciones recurrentes y un abastecimiento que acompañe tu crecimiento.",
  },
];

const sectores = [
  { name: "Hoteles", icon: Building2 },
  { name: "Restaurantes", icon: Utensils },
  { name: "Clínicas", icon: Stethoscope },
  { name: "Oficinas", icon: Briefcase },
  { name: "Colegios", icon: GraduationCap },
  { name: "Bodegas", icon: Warehouse },
];

export default function About() {
  const videoControlRef = useRef<HTMLVideoElement>(null);
  const videoWorkRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoControlRef.current) {
      videoControlRef.current.currentTime = 15;
    }
    // Si tu nuevo video necesita iniciar en un segundo en específico, puedes cambiarlo aquí abajo, o dejarlo en 0 si empieza desde el inicio:
    if (videoWorkRef.current) {
      videoWorkRef.current.currentTime = 0;
    }
  }, []);

  return (
    <>
      {/* Intro */}
      <section className="relative flex min-h-[50vh] md:min-h-[60vh] items-center justify-center overflow-hidden py-16 px-6">
        <Image
          src="/producto-hero.png"
          alt="Productos e instalaciones Casa Blanca"
          fill
          priority
          className="object-cover object-center z-0"
        />
        
        <div className="absolute inset-0 bg-[var(--color-primary-dark)]/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)] to-transparent z-10"></div>

        <div className="container relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold text-white border border-white/20 backdrop-blur-md mb-8 shadow-lg">
              <MapPin size={16} className="text-[var(--color-accent)]" />
              Fabricación en Cañete, Lima – Perú
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1]">
              Una empresa peruana <br />
              <span className="block mt-3">
                orientada al mercado institucional
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 text-[16px] sm:text-[18px] text-white/90 leading-relaxed max-w-2xl mx-auto">
              Fabricamos y comercializamos papel higiénico institucional con atención directa, calidad constante y una propuesta enfocada en rendimiento y continuidad de abastecimiento.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Proceso y control - Video desde el segundo 0:15 */}
      <Section bg="white" spacing="sm" className="overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <Reveal>
            <div className="max-w-xl">
              <span className="text-sm md:text-base font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 block">
                Proceso y control
              </span>
              
              <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-bold text-[var(--color-primary-dark)] leading-[1.1] mb-6 md:mb-8">
                Cuidamos el producto <br/> antes de cada despacho.
              </h2>
              
              <p className="text-lg sm:text-xl text-[var(--color-text)] leading-relaxed mb-5">
                Revisamos la fabricación, presentación y preparación para entregar un producto limpio y consistente.
              </p>
              <p className="text-lg sm:text-xl text-[var(--color-text)] leading-relaxed mb-10">
                La atención directa nos permite comprender cada requerimiento y acompañar las compras recurrentes con mayor cercanía.
              </p>
              
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-[#788b43] px-10 py-4 text-lg font-bold text-white transition-all hover:bg-[#687a38] hover:shadow-lg"
              >
                Contactar al equipo
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative w-full aspect-[4/3] rounded-3xl shadow-xl overflow-hidden border border-gray-100 bg-gray-50">
              <video
                ref={videoControlRef}
                autoPlay
                muted
                loop
                playsInline
                onLoadedMetadata={() => {
                  if (videoControlRef.current) videoControlRef.current.currentTime = 15;
                }}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/chatgpt-mockup/proceso-casa-blanca.mp4" type="video/mp4" />
              </video>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Misión, visión y valores */}
      <Section bg="surface" spacing="sm">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            <Reveal>
              <div className="group relative h-full overflow-hidden rounded-[var(--radius-lg)] bg-white p-8 sm:p-10 shadow-sm transition-all hover:shadow-md border border-[var(--color-border)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-accent)] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-faint)]">
                  Propósito actual
                </span>
                
                <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-border)] bg-white shadow-sm transition-colors group-hover:border-[var(--color-accent)]">
                  <Compass size={24} strokeWidth={1.5} className="text-[var(--color-primary-dark)] transition-colors group-hover:text-[var(--color-accent)]" />
                </div>
                
                <h2 className="mt-6 text-xl font-serif font-bold text-[var(--color-primary-dark)]">Misión</h2>
                <p className="mt-3 text-[16px] text-[var(--color-text-muted)] leading-relaxed">
                  Brindar productos de papel higiénico institucional de calidad para empresas, negocios e instituciones, con atención rápida, buen servicio y precios competitivos.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="group relative h-full overflow-hidden rounded-[var(--radius-lg)] bg-white p-8 sm:p-10 shadow-sm transition-all hover:shadow-md border border-[var(--color-border)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-accent)] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-faint)]">
                  Proyección
                </span>

                <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-border)] bg-white shadow-sm transition-colors group-hover:border-[var(--color-accent)]">
                  <Telescope size={24} strokeWidth={1.5} className="text-[var(--color-primary-dark)] transition-colors group-hover:text-[var(--color-accent)]" />
                </div>

                <h2 className="mt-6 text-xl font-serif font-bold text-[var(--color-primary-dark)]">Visión</h2>
                <p className="mt-3 text-[16px] text-[var(--color-text-muted)] leading-relaxed">
                  Consolidarnos como una marca peruana reconocida en el mercado institucional por nuestra calidad, confianza y crecimiento sostenible.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Valores (Pilares) */}
          <div className="mt-16 md:mt-20">
            <Reveal>
              <div className="text-center mb-10 md:mb-12">
                <h3 className="text-2xl font-serif font-bold text-[var(--color-primary-dark)]">
                  Nuestros pilares
                </h3>
                <div className="h-1 w-12 bg-[var(--color-accent)] mx-auto mt-4 rounded-full"></div>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
              {values.map(({ number, title, desc }, index) => (
                <Reveal key={number} delay={index * 100}>
                  <div className="flex flex-col sm:items-start text-center sm:text-left">
                    <span className="text-3xl font-black text-[#788b43] opacity-90 mx-auto sm:mx-0">
                      {number}
                    </span>
                    <h4 className="font-bold text-lg text-[var(--color-primary-dark)] mt-2">
                      {title}
                    </h4>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Así trabajamos - NUEVO VIDEO (nuevo-video.mp4) CON ESTILO OVALADO */}
      <Section bg="white" spacing="sm">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <div className="max-w-xl">
              <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4 block">
                Así trabajamos
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-[var(--color-primary-dark)] leading-[1.1] mb-6">
                Personas y procesos detrás de cada pedido.
              </h2>
              <p className="text-lg text-[var(--color-text)] leading-relaxed">
                La producción se acompaña con revisión y trabajo directo de nuestro equipo en planta.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <div className="relative w-full aspect-[4/3] rounded-3xl shadow-xl overflow-hidden border border-gray-100 bg-gray-50">
              <video
                ref={videoWorkRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/chatgpt-mockup/nuevo-video.mp4" type="video/mp4" />
              </video>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Sectores - DISEÑO LLAMATIVO Y MODERNO */}
      <Section bg="surface" spacing="sm">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#788b43] mb-3 block">
                Cobertura institucional
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-primary-dark)]">
                Sectores que atendemos
              </h2>
              <div className="h-1 w-16 bg-[#788b43] mx-auto mt-4 rounded-full"></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sectores.map((sector, idx) => {
              const Icon = sector.icon;
              return (
                <Reveal key={sector.name} delay={idx * 60}>
                  <div className="group relative overflow-hidden rounded-[var(--radius-lg)] bg-white p-8 border border-[var(--color-border)] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#788b43]/40 text-center">
                    
                    {/* Detalle decorativo superior que aparece al pasar el mouse */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#788b43] to-[#536633] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                    {/* Círculo del ícono con color dinámico en hover */}
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-surface)] text-[var(--color-primary-dark)] shadow-inner transition-all duration-300 group-hover:bg-[#788b43] group-hover:text-white group-hover:scale-110 mb-6">
                      <Icon size={30} strokeWidth={1.5} />
                    </div>

                    <h3 className="font-serif font-bold text-[var(--color-primary-dark)] text-xl tracking-tight mb-2">
                      {sector.name}
                    </h3>
                    
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      Abastecimiento constante y adaptado a la exigencia de este rubro.
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}