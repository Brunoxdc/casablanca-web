"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

// Único punto de reemplazo del logo: cambiar el archivo alcanza, no hay
// lógica de variantes claro/oscuro todavía (se agrega el día que haga falta).
// El header siempre usa el color corporativo de fondo, así que la versión
// blanca del logo (pensada para fondos oscuros) es la que corresponde.
const LOGO_SRC = "/logo-white.png";

const HEADER_HEIGHT = 92;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header
      className={`fixed top-0 z-50 w-full bg-[var(--color-primary-dark)] transition-shadow duration-300 ease-[var(--ease)] ${
        scrolled ? "shadow-[0_8px_24px_rgba(0,0,0,0.12)]" : "shadow-none"
      }`}
    >
      <div
        className="container flex items-center justify-between"
        style={{ height: HEADER_HEIGHT }}
      >
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={LOGO_SRC}
            alt="Casa Blanca - Papel Higiénico"
            width={300}
            height={96}
            className="h-[68px] sm:h-[76px] w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <nav className="flex items-center gap-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative rounded-[var(--radius-pill)] px-4 py-2 text-[15px] font-medium tracking-[0.01em] transition-colors ${
                    active ? "text-white" : "text-white/85 hover:text-white"
                  }`}
                >
                  <span
                    className={`absolute inset-0 rounded-[var(--radius-pill)] bg-white/10 transition-transform duration-300 ease-[var(--ease)] ${
                      active
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                    }`}
                  />
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <Link href="/contacto" className={buttonVariants({ variant: "primary" })}>
            Solicitar cotización
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/15 bg-[var(--color-primary-dark)]">
          <nav className="px-6 flex flex-col py-4 gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 text-sm font-semibold ${
                  pathname === link.href ? "text-white" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
    {/* Reserva el espacio del header fijo para que el contenido no quede debajo */}
    <div style={{ height: HEADER_HEIGHT }} aria-hidden="true" />
    </>
  );
}
