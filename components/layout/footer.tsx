import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FooterQuickForm } from "@/components/forms/footer-quick-form";
import { FacebookIcon, InstagramIcon } from "@/components/icons/social-icons";
import { site } from "@/lib/site-config";

const MAP_QUERY = encodeURIComponent(site.address.full);

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-footer-text)] border-t border-white/10">
      <div className="container py-10 grid md:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1.2fr] gap-8">
        <div>
          {/* Tamaño del logo: editar --logo-height-footer en app/globals.css, no acá. */}
          <Image
            src={site.logoSrc}
            alt="Casa Blanca"
            width={300}
            height={96}
            className="h-[var(--logo-height-footer)] w-auto object-contain"
          />
          <p className="mt-3 text-xs leading-relaxed max-w-xs">
            Papel higiénico institucional con calidad constante y atención
            directa para empresas, negocios e instituciones.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <a
              href="https://www.facebook.com/PapeleraCasaBlanca"
              aria-label="Facebook"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-[var(--color-primary)] hover:text-white"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/papeleracasablanca/"
              aria-label="Instagram"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-[var(--color-primary)] hover:text-white"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-footer-heading)]">
            Contacto
          </h4>
          <ul className="mt-2 space-y-1.5 text-xs">
            <li className="flex items-center gap-2">
              <Phone size={13} className="shrink-0 text-[var(--color-primary)]" /> {site.phone.display}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={13} className="shrink-0 text-[var(--color-primary)]" /> {site.email}
            </li>
            <li className="flex items-start gap-2">
              <Clock size={13} className="mt-0.5 shrink-0 text-[var(--color-primary)]" />
              {site.hours}
            </li>
          </ul>

          <h4 className="mt-4 text-xs font-semibold uppercase tracking-wide text-[var(--color-footer-heading)]">
            Enlaces
          </h4>
          <ul className="mt-2 space-y-1.5 text-xs">
            <li><Link href="/" className="hover:text-white">Inicio</Link></li>
            <li><Link href="/nosotros" className="hover:text-white">Nosotros</Link></li>
            <li><Link href="/productos" className="hover:text-white">Productos</Link></li>
            
            <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-footer-heading)]">
            Ubicación
          </h4>
          <p className="mt-2 flex items-start gap-2 text-xs">
            <MapPin size={13} className="mt-0.5 shrink-0 text-[var(--color-primary)]" />
            {site.address.full}
          </p>
          <div className="mt-2 overflow-hidden rounded-[var(--radius-sm)] border border-white/10">
            <iframe
              title="Ubicación de Casa Blanca"
              src={`https://maps.google.com/maps?q=${MAP_QUERY}&output=embed`}
              className="h-20 w-full grayscale-[40%] contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-2 text-[11px] text-white/45">
            Políticas de privacidad · Libro de reclamaciones
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-footer-heading)]">
            ¿Te llamamos?
          </h4>
          <p className="mt-2 text-xs">
            Déjanos tu teléfono y te contactamos por WhatsApp.
          </p>
          <FooterQuickForm />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-3 text-[11px] text-white/45 text-center">
          © {new Date().getFullYear()} Casa Blanca Papel Higiénico. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}
