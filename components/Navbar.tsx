"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[var(--cb-border)]">
      <div className="container flex items-center justify-between h-[76px]">
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Casa Blanca - Papel Higiénico"
            width={160}
            height={48}
            className="h-11 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-[var(--cb-ink)] hover:text-[var(--cb-teal-600)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:924473557"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[var(--cb-teal-700)] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[var(--cb-teal-800)] transition-colors"
        >
          <Phone size={16} />
          924 473 557
        </a>

        <button
          className="md:hidden p-2 text-[var(--cb-ink)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--cb-border)] bg-white">
          <nav className="container flex flex-col py-4 gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-[15px] font-medium text-[var(--cb-ink)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:924473557"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--cb-teal-700)] text-white px-5 py-3 text-sm font-semibold"
            >
              <Phone size={16} />
              924 473 557
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}