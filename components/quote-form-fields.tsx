"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const productOptions = [
  "Papel Jumbo Institucional",
  "Papel Higiénico Black",
  "Papel Institucional Blanco",
  "Toalla Institucional y Dispensadores",
];

const fieldClass =
  "mt-1.5 w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-primary)]";
const labelClass = "text-xs font-semibold text-[var(--color-text)]";

export default function QuoteFormFields({ className }: { className?: string }) {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    correo: "",
    producto: productOptions[0],
    necesidad: "",
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lines = [
      "Hola, quisiera solicitar una cotización:",
      `Nombre: ${form.nombre}`,
      form.empresa && `Empresa: ${form.empresa}`,
      `Teléfono: ${form.telefono}`,
      form.correo && `Correo: ${form.correo}`,
      `Producto de interés: ${form.producto}`,
      form.necesidad && `Necesidad: ${form.necesidad}`,
    ].filter(Boolean);
    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/51924473557?text=${message}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        className ??
        "rounded-[var(--radius-lg)] bg-white border border-[var(--color-border)] p-6 grid gap-4"
      }
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Nombre completo</label>
          <input
            required
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass}>Empresa</label>
          <input
            name="empresa"
            value={form.empresa}
            onChange={handleChange}
            placeholder="Nombre de tu empresa"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Teléfono / WhatsApp</label>
          <input
            required
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="Ej. 924 473 557"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass}>Correo electrónico</label>
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            placeholder="correo@empresa.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Producto de interés</label>
        <select
          name="producto"
          value={form.producto}
          onChange={handleChange}
          className={`${fieldClass} bg-white`}
        >
          {productOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Cuéntanos tu necesidad</label>
        <textarea
          name="necesidad"
          value={form.necesidad}
          onChange={handleChange}
          rows={3}
          placeholder="Cantidad estimada, frecuencia o tipo de negocio..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-accent)] text-white px-6 py-3 text-sm font-semibold transition-colors hover:bg-[var(--color-accent-dark)]"
      >
        Enviar cotización
        <ArrowRight size={16} />
      </button>
    </form>
  );
}
