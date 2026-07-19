import { Section } from "@/components/ui/section";

export default function PoliticasPage() {
  return (
    <Section bg="white" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-dark)] mb-4">
          Políticas de Privacidad
        </h1>
        <p className="text-sm text-[var(--color-text-muted)] mb-10">
          Última actualización: {new Date().getFullYear()}
        </p>

        <div className="space-y-8 text-[15px] text-[var(--color-text)] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">1. Identidad y Domicilio</h2>
            <p>
              En cumplimiento de la Ley N° 29733, Ley de Protección de Datos Personales en el Perú, Casa Blanca Papel Higiénico informa que los datos personales proporcionados a través de esta página web serán tratados con estricta confidencialidad. Nuestro domicilio legal se encuentra en Urb. Los Chales Mz. B Lote 7A, San Vicente, Cañete, Perú.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">2. Uso de la Información</h2>
            <p>
              Los datos recopilados en nuestros formularios de contacto o cotización serán utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Responder a sus consultas y requerimientos de productos.</li>
              <li>Enviar cotizaciones formales e información comercial relevante.</li>
              <li>Gestión interna de servicio al cliente y facturación.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">3. Derechos ARCO</h2>
            <p>
              Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (Derechos ARCO) al uso de sus datos personales. Para ejercer estos derechos, puede enviar una solicitud a nuestro correo electrónico oficial: <strong>ventas@papeleracasablanca.com</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">4. Seguridad</h2>
            <p>
              Hemos implementado medidas técnicas y organizativas necesarias para garantizar la seguridad de sus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}