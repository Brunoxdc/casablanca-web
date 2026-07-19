"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function FooterQuickForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "581e2ac7-a1e5-4734-b484-8ae59bb3d847",
          subject: "Contacto Rápido - Footer",
          from_name: "Página Web Casa Blanca",
          nombre: nombre,
          telefono: telefono,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setNombre("");
        setTelefono("");
        // Restaurar el botón original después de 5 segundos
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Hubo un error. Por favor, intenta de nuevo.");
      }
    } catch (error) {
      alert("Error de conexión. Revisa tu internet e intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-2">
      <input
        required
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Tu nombre"
        aria-label="Tu nombre"
        className="w-full rounded-[var(--radius-sm)] border border-white/15 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-white/40 outline-none focus:border-[var(--color-primary)] disabled:opacity-50"
        disabled={isSubmitting}
      />
      <input
        required
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        placeholder="Tu teléfono"
        aria-label="Tu teléfono"
        className="w-full rounded-[var(--radius-sm)] border border-white/15 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-white/40 outline-none focus:border-[var(--color-primary)] disabled:opacity-50"
        disabled={isSubmitting}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-0.5 inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--color-accent-dark)] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          "Enviando..."
        ) : isSuccess ? (
          <>
            ¡Enviado! <CheckCircle2 size={13} />
          </>
        ) : (
          <>
            Solicitar que me llamen <ArrowRight size={13} />
          </>
        )}
      </button>
    </form>
  );
}