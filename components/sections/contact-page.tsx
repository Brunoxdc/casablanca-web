"use client";

import { MessageSquare, Phone, MapPin, Send } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export default function ContactPage() {
  return (
    <>
      {/* Cabecera */}
      <section className="relative flex items-center justify-center overflow-hidden py-16 md:py-20 px-6 bg-[var(--color-primary-dark)] text-white">
        <div className="container relative z-20 text-center max-w-3xl mx-auto flex flex-col items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold text-white border border-white/20 backdrop-blur-md mb-4 shadow-lg">
              <MapPin size={16} className="text-[var(--color-accent)]" />
              Atención a nivel nacional desde Cañete, Lima
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-[1.1]">
              Conversemos sobre tu <br />
              <span className="block mt-2 text-[var(--color-accent)]">requerimiento institucional</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed max-w-xl mx-auto">
              Comparte el producto, volumen estimado y lugar de entrega. Te preparamos una propuesta directa y rápida.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contenido Principal (Dos Columnas) */}
      <Section bg="white" spacing="sm">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* COLUMNA IZQUIERDA: Canales de contacto directo */}
          <Reveal className="lg:col-span-5">
            <div className="rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-8 sm:p-10 border border-[var(--color-border)] shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-[var(--color-primary-dark)] mb-6">
                Canales oficiales
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#788b43]/10 text-[#788b43]">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-faint)]">Atención telefónica</p>
                    <a href="tel:924473557" className="text-lg font-bold text-[var(--color-primary-dark)] hover:text-[#788b43] transition-colors">
                      924 473 557
                    </a>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Lunes a Sábado de 8:00 am a 6:00 pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-dark)]/5 text-[var(--color-primary-dark)]">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-faint)]">Planta de Fabricación</p>
                    <p className="text-sm font-semibold text-[var(--color-primary-dark)]">Cañete, Lima – Perú</p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Despachos coordinados a Lima y provincias</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--color-border)]">
                  <a
                    href="https://wa.me/51924473557?text=Hola%20Casa%20Blanca,%20deseo%20solicitar%20una%20cotización%20institucional."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full rounded-xl bg-[#25D366] px-6 py-4 text-white font-bold transition-all hover:bg-[#20ba5a] shadow-lg hover:shadow-xl"
                  >
                    <MessageSquare size={20} />
                    Escribir por WhatsApp ahora
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* COLUMNA DERECHA: Formulario integrado con tu Access Key de Web3Forms */}
          <Reveal delay={100} className="lg:col-span-7">
            <div className="rounded-[var(--radius-lg)] bg-white p-8 sm:p-10 border border-[var(--color-border)] shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-[var(--color-primary-dark)] mb-2">
                Solicita una cotización
              </h2>
              <p className="text-sm text-[var(--color-text-muted)] mb-6">
                Completa tus datos y recibirás una propuesta comercial directamente en tu correo.
              </p>

              {/* Formulario conectado a Web3Forms con tu clave de acceso */}
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
                
                {/* 🔑 Tu clave pública de Web3Forms */}
                <input type="hidden" name="access_key" value="581e2ac7-a1e5-4734-b484-8ae59bb3d847" />
                <input type="hidden" name="subject" value="Nueva Cotización - Web Casa Blanca" />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text)] mb-2">
                      Nombre / Empresa *
                    </label>
                    <input 
                      type="text" 
                      required
                      name="Nombre/Empresa"
                      placeholder="Ej. Hotel Los Incas / Juan Pérez" 
                      className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] focus:border-[#788b43] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text)] mb-2">
                      Teléfono / WhatsApp *
                    </label>
                    <input 
                      type="tel" 
                      required
                      name="Telefono"
                      placeholder="Ej. 999 999 999" 
                      className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] focus:border-[#788b43] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text)] mb-2">
                      Producto de interés
                    </label>
                    <select 
                      name="Producto"
                      className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] focus:border-[#788b43] focus:outline-none"
                    >
                      <option>Papel Jumbo Institucional</option>
                      <option>Papel Higiénico Black</option>
                      <option>Toalla Institucional y Dispensadores</option>
                      <option>Otro requerimiento</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text)] mb-2">
                      Volumen estimado / Consumo
                    </label>
                    <input 
                      type="text" 
                      name="Volumen"
                      placeholder="Ej. 5 cajas mensuales, 20 rollos..." 
                      className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] focus:border-[#788b43] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text)] mb-2">
                    Lugar de destino / Observaciones
                  </label>
                  <textarea 
                    rows={3}
                    name="Destino_Observaciones"
                    placeholder="Indica el distrito o ciudad para calcular el despacho..." 
                    className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] focus:border-[#788b43] focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#788b43] py-4 text-center text-base font-bold text-white transition-all hover:bg-[#687a38] shadow-md hover:shadow-lg"
                >
                  <Send size={18} />
                  Enviar solicitud de cotización
                </button>
              </form>
            </div>
          </Reveal>

        </div>
      </Section>
    </>
  );
}