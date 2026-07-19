import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { whatsappUrl } from "@/lib/site-config";

/**
 * Único punto de conversión persistente en todo el sitio.
 * Desktop: burbuja de WhatsApp flotante.
 * Mobile: barra inferior fija con CTA principal + WhatsApp, para que no
 * compitan dos elementos flotantes distintos por atención.
 */
export function ConversionBar() {
  return (
    <>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="hidden lg:flex fixed bottom-6 right-6 z-40 h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)] text-white shadow-[var(--shadow-lg)] transition-transform duration-[var(--transition-duration)] ease-[var(--ease)] hover:scale-105 hover:bg-[var(--color-accent-dark)]"
      >
        <WhatsappIcon size={22} />
      </a>

      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border)] bg-white/95 backdrop-blur px-4 py-3 shadow-[0_-8px_24px_rgba(15,23,42,0.08)]">
        <div className="flex items-center gap-3">
          <Link
            href="/contacto"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-accent)] text-white px-5 py-3 text-sm font-semibold"
          >
            Solicitar cotización
            <ArrowRight size={16} />
          </Link>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escríbenos por WhatsApp"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-accent-dark)]"
          >
            <WhatsappIcon size={22} />
          </a>
        </div>
      </div>
    </>
  );
}
