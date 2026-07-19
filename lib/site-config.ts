/**
 * Datos del negocio usados en todo el sitio: teléfono, WhatsApp, correo,
 * dirección, horario, redes sociales y el logo.
 *
 * Este es el ÚNICO lugar donde tocar estos valores — cambiarlos aquí los
 * actualiza en navbar, footer, formularios, botón de WhatsApp flotante y
 * página de contacto a la vez.
 */
export const site = {
  phone: {
    display: "924 473 557",
    /** Formato internacional sin "+", requerido por los links de wa.me */
    e164: "51924473557",
  },
  email: "ventas@casablanca.com.pe",
  address: {
    short: "Cañete, Lima – Perú",
    full: "Urb. Los Chales Mz. B Lote 7A, San Vicente, Cañete, Perú",
  },
  hours: "Lun a sáb, 8:00 a.m. – 6:00 p.m.",
  social: {
    // TODO: reemplazar por URLs reales de redes sociales
    facebook: "#",
    instagram: "#",
  },
  /** Logo del header y footer. El tamaño se controla en globals.css (--logo-height-*), no aquí. */
  logoSrc: "/logo-white-Photoroom.png",
} as const;

/** Arma un link de WhatsApp; si se pasa `message`, lo abre con el texto ya cargado. */
export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.phone.e164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
