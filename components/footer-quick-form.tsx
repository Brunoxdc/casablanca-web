"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export function FooterQuickForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hola, soy ${nombre}. Quisiera que me contacten para una cotización. Mi teléfono: ${telefono}`
    );
    window.open(`https://wa.me/51924473557?text=${message}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2.5">
      <input
        required
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Tu nombre"
        aria-label="Tu nombre"
        className="w-full rounded-[var(--radius-sm)] border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-[var(--color-primary)]"
      />
      <input
        required
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        placeholder="Tu teléfono"
        aria-label="Tu teléfono"
        className="w-full rounded-[var(--radius-sm)] border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-[var(--color-primary)]"
      />
      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-dark)]"
      >
        Solicitar que me llamen
        <ArrowRight size={15} />
      </button>
    </form>
  );
}
