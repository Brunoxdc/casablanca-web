"use client";

import { MessageSquare, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export default function ContactPage() {
  return (
    <>
      {/* Nueva Cabecera Corporativa Minimalista (Adiós al bloque oscuro repetido) */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-[var(--color-border)] py-16 md:py-24 px-6">
        <div className="container relative z-10 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Titulares */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#788b43]/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#536633] mb-6 border border-[#788b43]/20">
                  <MapPin size={16} className="text-[#788b43]" />
                  Fabricación y distribución desde Cañete, Lima
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-serif font-bold text-[var(--color-primary-dark)] leading-[1.1] mb-6">
  Conversemos sobre tu requerimiento institucional.
</h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-xl">
                  Comparte el tipo de producto, volumen estimado y lugar de destino. Te preparamos una propuesta directa y rápida sin intermediarios.
                </p>
              </Reveal>
            </div>

            {/* Tarjeta lateral de confianza / Beneficios rápidos */}
            <div className="lg:col-span-5">
              <Reveal delay={250}>
                <div className="rounded-[var(--radius-lg)] bg-white p-6 sm:p-8 border border-[var(--color-border)] shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#788b43]/5 rounded-bl-full -z-0"></div>
                  
                  <h3 className="font-serif font-bold text-lg text-[var(--color-primary-dark)] mb-4">
                    ¿Por qué cotizar con nosotros?
                  </h3>
                  
                  <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="text-[#788b43] shrink-0" />
                      <span>Atención comercial directa y personalizada</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="text-[#788b43] shrink-0" />
                      <span>Precios especiales por volumen mayorista</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="text-[#788b43] shrink-0" />
                      <span>Abastecimiento constante para empresas</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Contenido Principal: Dos Columnas (Canales + Formulario con Web3Forms) */}
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