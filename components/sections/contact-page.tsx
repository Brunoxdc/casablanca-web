import Image from "next/image";
import { Clock } from "lucide-react";
import QuoteFormFields from "@/components/forms/quote-form-fields";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site-config";

const channels = [
  {
    label: "WhatsApp y teléfono",
    value: site.phone.display,
    href: `tel:+${site.phone.e164}`,
  },
  {
    label: "Correo comercial",
    value: "ventas@papeleracasablanca.com",
    href: "mailto:ventas@papeleracasablanca.com",
  },
  {
    label: "Ubicación",
    value: site.address.full,
    href: "https://www.google.com/maps/search/?api=1&query=Urb.+Los+Chales+Mz.+B+Lote+7A,+San+Vicente,+Cañete,+Perú",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Intro */}
      <Section bg="brand">
        <SectionHeading
          as="h1"
          eyebrow="Cotización empresarial"
          eyebrowTone="accent"
          title="Conversemos sobre tu requerimiento"
          subtitle="Comparte el producto, volumen estimado y lugar de entrega. Preparamos tu solicitud para continuar la atención por WhatsApp."
          inverted
        />
      </Section>

      {/* Canales + formulario */}
      <Section bg="white">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <div className="flex flex-col gap-5">
            {channels.map((channel) => (
              <Reveal key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block rounded-[var(--radius-lg)] border border-[var(--color-border)] p-5 transition-colors hover:border-[var(--color-primary)]"
                >
                  <p className="text-[12px] font-black uppercase tracking-[0.14em] text-[#788b43]">
                    {channel.label}
                  </p>
                  <p className="mt-1.5 text-[15px] font-bold text-[var(--color-text)]">
                    {channel.value}
                  </p>
                </a>
              </Reveal>
            ))}

            <Reveal delay={100}>
              <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                <Clock size={16} className="text-[var(--color-primary)]" />
                Atención lunes a sábado, 8:00 a.m. – 6:00 p.m.
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="relative h-[360px] w-full overflow-hidden">
                <Image
                  src="/chatgpt-mockup/hero-white-paper-v2.webp"
                  alt="Papel institucional Casa Blanca"
                  fill
                  sizes="(min-width: 1024px) 35vw, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-10">
              <h2 className="text-lg font-bold text-[var(--color-text)]">
                Cuéntanos qué necesitas
              </h2>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Al enviar el formulario se abre WhatsApp con tu mensaje listo
                para confirmar.
              </p>
              <div className="mt-6">
                <QuoteFormFields className="grid gap-4" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
