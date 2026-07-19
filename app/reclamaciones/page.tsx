import { Section } from "@/components/ui/section";
import { Mail } from "lucide-react";

export default function ReclamacionesPage() {
  return (
    <Section bg="white" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-dark)] mb-4">
          Libro de Reclamaciones
        </h1>
        <p className="text-[15px] text-[var(--color-text)] mb-8">
          Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, Casa Blanca Papel Higiénico cuenta con un Libro de Reclamaciones Virtual a su disposición.
        </p>

        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 md:p-10 bg-[var(--color-surface)]">
          <h2 className="text-lg font-bold text-[var(--color-primary)] mb-4">
            ¿Cómo presentar un reclamo o queja?
          </h2>
          <p className="text-[15px] text-[var(--color-text)] mb-6">
            Para brindarle una atención rápida y formalizada, por favor envíe un correo electrónico detallando los hechos. Nuestro equipo de atención al cliente le asignará un código de seguimiento y le responderá en el plazo legal establecido por Indecopi (máximo 15 días hábiles).
          </p>
          
          <div className="bg-white p-6 rounded-[var(--radius-sm)] border border-[var(--color-border)]">
            <h3 className="text-sm font-bold text-[var(--color-text)] mb-3 uppercase tracking-wide">
              Escriba a nuestro canal oficial:
            </h3>
            <a 
              href="mailto:ventas@papeleracasablanca.com?subject=Reclamo%20-%20Libro%20de%20Reclamaciones"
              className="inline-flex items-center gap-3 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-lg font-bold"
            >
              <Mail size={24} />
              ventas@papeleracasablanca.com
            </a>
            <p className="mt-4 text-xs text-[var(--color-text-muted)]">
              * Por favor, incluya en el correo: Nombres completos, DNI/RUC, teléfono de contacto, detalle del producto y la descripción clara del reclamo o queja.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}