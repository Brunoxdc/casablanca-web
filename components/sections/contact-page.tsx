import { Clock, Mail, MapPin } from "lucide-react";
import QuoteFormFields from "@/components/forms/quote-form-fields";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { site, whatsappUrl } from "@/lib/site-config";

const channels = [
  {
    icon: <WhatsappIcon size={20} />,
    title: "WhatsApp",
    detail: site.phone.display,
    sub: "Respuesta el mismo día hábil",
    href: whatsappUrl(),
  },
  {
    icon: <Mail size={20} />,
    title: "Correo",
    detail: site.email,
    sub: "Para cotizaciones formales",
    href: `mailto:${site.email}`,
  },
  {
    icon: <MapPin size={20} />,
    title: "Fábrica",
    detail: site.address.short,
    sub: "Despachos a todo Lima",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <Section bg="white">
      <SectionHeading
        as="h1"
        eyebrow="Contáctanos"
        title="Hablemos de tu próximo pedido"
        subtitle="Elige el canal que prefieras o llena el formulario — te respondemos con disponibilidad y condiciones para compra corporativa."
      />

      <div className="mt-12 grid sm:grid-cols-3 gap-5">
        {channels.map((channel, i) => {
          const Wrapper = channel.href ? "a" : "div";
          return (
            <Reveal key={channel.title} delay={i * 90}>
              <Wrapper
                {...(channel.href
                  ? { href: channel.href, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="block rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 transition-colors hover:border-[var(--color-primary)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-primary-dark)]">
                  {channel.icon}
                </div>
                <h2 className="mt-4 text-sm font-bold uppercase tracking-wide text-[var(--color-text)]">
                  {channel.title}
                </h2>
                <p className="mt-1 text-[15px] font-semibold text-[var(--color-text)]">
                  {channel.detail}
                </p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">{channel.sub}</p>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
        <Clock size={16} className="text-[var(--color-primary)]" />
        Atención lunes a sábado, 8:00 a.m. – 6:00 p.m.
      </div>

      <Reveal delay={200}>
        <div className="mt-14 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-10">
          <h2 className="text-lg font-bold text-[var(--color-text)]">
            Cuéntanos qué necesitas
          </h2>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            Al enviar el formulario se abre WhatsApp con tu mensaje listo
            para confirmar.
          </p>
          <div className="mt-6 max-w-2xl">
            <QuoteFormFields className="grid gap-4" />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
