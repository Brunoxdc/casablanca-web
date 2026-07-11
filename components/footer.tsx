import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="nosotros" className="bg-[var(--cb-teal-900)] text-white">
      <div className="container mx-auto max-w-[1180px] px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <Image
            src="/logo.png"
            alt="Casa Blanca"
            width={150}
            height={45}
            className="h-10 w-auto object-contain brightness-0 invert"
          />
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
            Papel higiénico de alta calidad para hogares, empresas e
            instituciones. Suavidad al mejor precio.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Navegación
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><a href="#inicio" className="hover:text-white">Inicio</a></li>
            <li><a href="#productos" className="hover:text-white">Productos</a></li>
            <li><a href="#beneficios" className="hover:text-white">Beneficios</a></li>
            <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Productos
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li>Papel Jumbo Institucional</li>
            <li>Papel Higiénico Black</li>
            <li>Papel Institucional Blanco</li>
            <li>Toalla Institucional</li>
          </ul>
        </div>

        <div id="contacto">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Contacto
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone size={16} /> 924 473 557
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> ventas@casablanca.pe
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              Urb Luis Chala MzB-lote7A, San Vicente – Cañete
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-[1180px] px-6 py-5 text-xs text-white/50 text-center">
          © {new Date().getFullYear()} Casa Blanca Papel Higiénico. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}