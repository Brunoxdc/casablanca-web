"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const productOptions = [
  "Papel Jumbo Institucional",
  "Papel Higiénico Black",
  "Papel Institucional Blanco",
  "Toalla Institucional y Dispensadores",
];

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
        "rounded-xl bg-white border border-[var(--cb-border)] p-5 md:p-6 grid gap-4"
      }
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-[var(--cb-ink)]">
            Nombre completo
          </label>
          <input
            required
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="mt-1.5 w-full rounded-lg border border-[var(--cb-border)] px-3 py-2.5 text-sm outline-none focus:border-[var(--cb-navy-600)]"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-[var(--cb-ink)]">
            Empresa
          </label>
          <input
            name="empresa"
            value={form.empresa}
            onChange={handleChange}
            placeholder="Nombre de tu empresa"
            className="mt-1.5 w-full rounded-lg border border-[var(--cb-border)] px-3 py-2.5 text-sm outline-none focus:border-[var(--cb-navy-600)]"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-[var(--cb-ink)]">
            Teléfono / WhatsApp
          </label>
          <input
            required
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="Ej. 924 473 557"
            className="mt-1.5 w-full rounded-lg border border-[var(--cb-border)] px-3 py-2.5 text-sm outline-none focus:border-[var(--cb-navy-600)]"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-[var(--cb-ink)]">
            Correo electrónico
          </label>
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            placeholder="correo@empresa.com"
            className="mt-1.5 w-full rounded-lg border border-[var(--cb-border)] px-3 py-2.5 text-sm outline-none focus:border-[var(--cb-navy-600)]"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold text-[var(--cb-ink)]">
          Producto de interés
        </label>
        <select
          name="producto"
          value={form.producto}
          onChange={handleChange}
          className="mt-1.5 w-full rounded-lg border border-[var(--cb-border)] px-3 py-2.5 text-sm outline-none focus:border-[var(--cb-navy-600)] bg-white"
        >
          {productOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-xs font-semibold text-[var(--cb-ink)]">
          Cuéntanos tu necesidad
        </label>
        <textarea
          name="necesidad"
          value={form.necesidad}
          onChange={handleChange}
          rows={3}
          placeholder="Cantidad estimada, frecuencia o tipo de negocio..."
          className="mt-1.5 w-full rounded-lg border border-[var(--cb-border)] px-3 py-2.5 text-sm outline-none focus:border-[var(--cb-navy-600)] resize-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--cb-green-600)] text-white px-6 py-3 text-sm font-semibold hover:bg-[var(--cb-green-700)] transition-colors"
      >
        Enviar cotización
        <ArrowRight size={16} />
      </button>
    </form>
  );
}
