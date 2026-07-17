"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const whatsappIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6c1.7.9 3.7 1.5 5.7 1.5 6.6 0 12-5.4 12-12S18.6 0 12 0zm0 21.8c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.9 1 1-3.8-.2-.4C2.2 15.4 1.8 13.7 1.8 12 1.8 6.4 6.4 1.8 12 1.8S22.2 6.4 22.2 12 17.6 21.8 12 21.8z" />
  </svg>
);

const productOptions = [
  "Papel Jumbo Institucional",
  "Papel Higiénico Black",
  "Papel Institucional Blanco",
  "Toalla Institucional y Dispensadores",
];

export default function QuoteForm() {
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
    <section id="contacto" className="bg-white">
      <div className="container mx-auto max-w-[1180px] px-6 py-16 md:py-20">
        <div className="rounded-2xl border border-[var(--cb-border)] bg-[var(--cb-beige-50)] p-6 md:p-10 grid lg:grid-cols-[1fr_1.3fr] gap-10">
          <div>
            <span className="eyebrow">Cotización rápida</span>
            <h2 className="mt-2 text-2xl md:text-[1.9rem] font-extrabold leading-tight text-[var(--cb-navy-900)]">
              Cotiza para tu negocio en minutos.
            </h2>
            <p className="mt-3 text-[15px] text-[var(--cb-gray)] leading-relaxed max-w-sm">
              Cuéntanos qué producto necesitas y te responderemos con
              disponibilidad, presentación y condiciones para compra
              corporativa.
            </p>
            <a
              href="https://wa.me/51924473557"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--cb-green-50)] text-[var(--cb-green-700)] px-4 py-2 text-sm font-semibold hover:bg-[var(--cb-green-100)] transition-colors"
            >
              {whatsappIcon}
              924 473 557
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl bg-white border border-[var(--cb-border)] p-5 md:p-6 grid gap-4"
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
        </div>
      </div>
    </section>
  );
}
