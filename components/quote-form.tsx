"use client";

import { FormEvent, useState } from "react";

export function QuoteForm() {
  const [formData, setFormData] = useState({
    empresa: "",
    nombre: "",
    email: "",
    telefono: "",
    producto: "",
    cantidad: "",
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("[v0] Formulario enviado:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        empresa: "",
        nombre: "",
        email: "",
        telefono: "",
        producto: "",
        cantidad: "",
        mensaje: "",
      });
    }, 3000);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Solicita tu Cotización
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Completa el formulario y nuestro equipo te contactará dentro de 24 horas
          </p>
        </div>

        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-12">
          {submitted && (
            <div className="mb-6 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800">
              ✓ ¡Gracias! Tu solicitud ha sido recibida. Nos contactaremos pronto.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Empresa */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Nombre de la Empresa *
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Tu empresa"
                />
              </div>

              {/* Nombre */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Producto */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Producto de Interés *
                </label>
                <select
                  name="producto"
                  value={formData.producto}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Seleccionar producto</option>
                  <option value="blanco">Papel Higiénico Casa Blanca Blanco</option>
                  <option value="jumbo">Papel Jumbo Industrial 1000m</option>
                  <option value="black">Papel Higiénico Black Premium</option>
                  <option value="papelera">Papelera Comercial</option>
                  <option value="consultar">Consultar múltiples productos</option>
                </select>
              </div>

              {/* Cantidad */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Cantidad Estimada *
                </label>
                <input
                  type="text"
                  name="cantidad"
                  value={formData.cantidad}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Ej: 100 paquetes por mes"
                />
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Mensaje Adicional
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Cuéntanos sobre tus necesidades específicas..."
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-8 py-4 font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg md:w-auto"
            >
              Enviar Solicitud de Cotización
            </button>

            <p className="text-xs text-muted-foreground">
              Al enviar este formulario, autorizas que nos comuniquemos contigo para proporcionar información sobre nuestros productos y servicios.
            </p>
          </form>
        </div>

        {/* Alternativas de contacto */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 text-center">
          <div className="rounded-lg border border-border p-6 hover:border-primary hover:shadow-md transition">
            <p className="text-2xl">📞</p>
            <p className="mt-2 font-semibold text-foreground">Llamar</p>
            <p className="text-muted-foreground">0 924273936</p>
          </div>
          <div className="rounded-lg border border-border p-6 hover:border-primary hover:shadow-md transition">
            <p className="text-2xl">📧</p>
            <p className="mt-2 font-semibold text-foreground">Email</p>
            <p className="text-muted-foreground">ventas@casablancapapel.com</p>
          </div>
          <div className="rounded-lg border border-border p-6 hover:border-primary hover:shadow-md transition">
            <p className="text-2xl">💬</p>
            <p className="mt-2 font-semibold text-foreground">WhatsApp</p>
            <a href="https://wa.me/5919244273936" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+591 9244273936</a>
          </div>
        </div>
      </div>
    </section>
  );
}
