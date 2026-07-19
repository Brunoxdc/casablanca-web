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
      {/* Reducimos los paddings (py-5 md:py-6) y los gaps para que quede mucho más compacto */}
      <div className="container py-5 md:py-6 grid md:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1.2fr] gap-5 md:gap-6">
        
        {/* COLUMNA 1: Logo y Redes Sociales */}
        <div className="flex flex-col">
          {/* 
            ¡AQUÍ ESTÁ LA MAGIA! 
            1. Quitamos la variable de globals.css que lo mantenía en 36px.
            2. Agregamos `object-left` para obligarlo a alinearse a la izquierda con el texto.
          */}
          <Image
            src={site.logoSrc}
            alt="Casa Blanca"
            width={300}
            height={96}
            className="h-24 md:h-28 w-auto object-contain mx-auto" 
          />
          <p className="mt-2.5 text-[11px] leading-relaxed max-w-xs text-white/80">
            Papel higiénico institucional con calidad constante y atención
            directa para empresas, negocios e instituciones.
          </p>
          
          {/* Íconos sociales */}
          <div className="mt-3.5 flex items-center gap-4">
            <a
              href="https://www.facebook.com/PapeleraCasaBlanca"
              aria-label="Facebook"
              className="text-[#1877F2] transition-transform hover:scale-110 flex items-center justify-center [&>svg]:w-6 [&>svg]:h-6"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/papeleracasablanca/"
              aria-label="Instagram"
              className="text-[#E4405F] transition-transform hover:scale-110 flex items-center justify-center [&>svg]:w-6 [&>svg]:h-6"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.tiktok.com/@tu_cuenta_aqui"
              aria-label="TikTok"
              className="text-white transition-transform hover:scale-110 flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* COLUMNA 2: Contacto y Enlaces */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-footer-heading)]">
            Contacto
          </h4>
          <ul className="mt-2 space-y-1.5 text-[11px]">
            <li className="flex items-center gap-2">
              <Phone size={13} className="shrink-0 text-[var(--color-accent)]" /> 
              {site.phone.display}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={13} className="shrink-0 text-[var(--color-accent)]" /> 
              ventas@papeleracasablanca.com
            </li>
            <li className="flex items-start gap-2">
              <Clock size={13} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
              {site.hours}
            </li>
          </ul>

          <h4 className="mt-4 text-[10px] font-bold uppercase tracking-wide text-[var(--color-footer-heading)]">
            Enlaces
          </h4>
          <ul className="mt-2 space-y-1 text-[11px]">
            <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
            <li><Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
            <li><Link href="/productos" className="hover:text-white transition-colors">Productos</Link></li>
            <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
          </ul>
        </div>

        {/* COLUMNA 3: Ubicación */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-footer-heading)]">
            Ubicación
          </h4>
          <p className="mt-2 flex items-start gap-2 text-[11px]">
            <MapPin size={13} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
            {site.address.full}
          </p>
          <div className="mt-2 overflow-hidden rounded-[var(--radius-sm)] border border-white/10">
            <iframe
              title="Ubicación de Casa Blanca"
              src={`https://maps.google.com/maps?q=${MAP_QUERY}&output=embed`}
              className="h-16 md:h-20 w-full grayscale-[40%] contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-2 text-[9px] text-white/45">
            Políticas de privacidad · Libro de reclamaciones
          </p>
        </div>

        {/* COLUMNA 4: Formulario */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-footer-heading)]">
            ¿Te llamamos?
          </h4>
          <p className="mt-1.5 text-[10px] mb-2 text-white/80">
            Déjanos tu teléfono y te contactamos.
          </p>
          <FooterQuickForm />
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container py-2.5 text-[9px] text-white/45 text-center">
          © {new Date().getFullYear()} Casa Blanca Papel Higiénico. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}