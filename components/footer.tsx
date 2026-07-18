import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FooterQuickForm } from "@/components/footer-quick-form";

const MAP_QUERY = encodeURIComponent(
  "Urb. Los Chales Mz. B Lote 7A, San Vicente, Cañete, Perú"
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.87 1.05 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76a4.9 4.9 0 0 1 1.76-1.15c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.17 1.17 0 1 0 0-2.34 1.17 1.17 0 0 0 0 2.34Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[var(--color-footer-bg)] text-[var(--color-footer-text)]">
      <div className="container py-20 grid md:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1.2fr] gap-14">
        <div>
          <Image
            src="/logo-white.png"
            alt="Casa Blanca"
            width={160}
            height={50}
            className="h-11 w-auto object-contain"
          />
          <p className="mt-5 text-sm leading-relaxed max-w-xs">
            Papel higiénico institucional con calidad constante y atención
            directa para empresas, negocios e instituciones.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {/* TODO: reemplazar por URLs reales de redes sociales */}
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-[var(--color-primary)] hover:text-white"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-[var(--color-primary)] hover:text-white"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-footer-heading)]">
            Contacto
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-[var(--color-primary)]" /> 924 473 557
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-[var(--color-primary)]" /> ventas@casablanca.com.pe
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={16} className="mt-0.5 shrink-0 text-[var(--color-primary)]" />
              Lun a sáb, 8:00 a.m. – 6:00 p.m.
            </li>
          </ul>

          <h4 className="mt-8 text-sm font-semibold uppercase tracking-wide text-[var(--color-footer-heading)]">
            Enlaces
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/" className="hover:text-white">Inicio</Link></li>
            <li><Link href="/productos" className="hover:text-white">Productos</Link></li>
            <li><Link href="/nosotros" className="hover:text-white">Nosotros</Link></li>
            <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-footer-heading)]">
            Ubicación
          </h4>
          <p className="mt-4 flex items-start gap-2.5 text-sm">
            <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--color-primary)]" />
            Urb. Los Chales Mz. B Lote 7A, San Vicente — Cañete
          </p>
          <div className="mt-4 overflow-hidden rounded-[var(--radius-md)] border border-white/10">
            <iframe
              title="Ubicación de Casa Blanca"
              src={`https://maps.google.com/maps?q=${MAP_QUERY}&output=embed`}
              className="h-36 w-full grayscale-[40%] contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-xs text-white/45">
            Políticas de privacidad · Libro de reclamaciones
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-footer-heading)]">
            ¿Te llamamos?
          </h4>
          <p className="mt-4 text-sm">
            Déjanos tu teléfono y te contactamos por WhatsApp.
          </p>
          <FooterQuickForm />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-5 text-xs text-white/45 text-center">
          © {new Date().getFullYear()} Casa Blanca Papel Higiénico. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}
