import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="nosotros" className="bg-[var(--cb-navy-900)] text-white">
      <div className="container mx-auto max-w-[1180px] px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Image
            src="/logo-white.png"
            alt="Casa Blanca"
            width={150}
            height={45}
            className="h-10 w-auto object-contain"
          />
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
            Papel higiénico institucional con calidad constante y atención
            directa para empresas.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Contacto
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone size={16} /> 924 473 557
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> ventas@casablanca.com.pe
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Enlaces rápidos
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><a href="#inicio" className="hover:text-white">Inicio</a></li>
            <li><a href="#productos" className="hover:text-white">Productos</a></li>
            <li><a href="#beneficios" className="hover:text-white">Beneficios</a></li>
            <li><a href="#contacto" className="hover:text-white">Cotizar</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Dirección
          </h4>
          <p className="mt-4 flex items-start gap-2 text-sm text-white/70">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            Urb. Los Chales Mz. B Lote 7A, San Vicente — Cañete
          </p>
          <p className="mt-3 text-xs text-white/50">
            Políticas de privacidad · Libro de reclamaciones
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-[1180px] px-6 py-5 text-xs text-white/50 text-center">
          © {new Date().getFullYear()} CasaBlanca Papel Higiénico. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}
