"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "INICIO", href: "#inicio" },
  { label: "PRODUCTOS", href: "#productos" },
  { label: "BENEFICIOS", href: "#beneficios" },
  { label: "NOSOTROS", href: "#nosotros" },
  { label: "CONTACTO", href: "#contacto" },
];
const whatsappIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6c1.7.9 3.7 1.5 5.7 1.5 6.6 0 12-5.4 12-12S18.6 0 12 0zm0 21.8c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.9 1 1-3.8-.2-.4C2.2 15.4 1.8 13.7 1.8 12 1.8 6.4 6.4 1.8 12 1.8S22.2 6.4 22.2 12 17.6 21.8 12 21.8z" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[var(--cb-border)]">
      <div className="container mx-auto max-w-[1180px] px-6 flex items-center justify-between h-[84px]">
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Casa Blanca - Papel Higiénico"
            width={170}
            height={54}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] font-semibold tracking-wide transition-colors ${
                i === 0
                  ? "text-[var(--cb-navy-800)] border-b-2 border-[var(--cb-navy-800)] pb-1"
                  : "text-[var(--cb-ink)] hover:text-[var(--cb-navy-800)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/51924473557"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-[var(--cb-green-600)] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[var(--cb-green-700)] transition-colors"
        >
          {whatsappIcon}
          924 473 557
        </a>

        <button
          className="lg:hidden p-2 text-[var(--cb-ink)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--cb-border)] bg-white">
          <nav className="px-6 flex flex-col py-4 gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-semibold text-[var(--cb-ink)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/51924473557"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--cb-green-600)] text-white px-5 py-3 text-sm font-semibold"
            >
              {whatsappIcon}
              924 473 557
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}