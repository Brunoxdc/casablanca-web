import * as React from "react";

/** Íconos de redes sociales oficiales para el footer. */

export function FacebookIcon({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className="transition-transform hover:scale-110">
      {/* Fondo circular azul oficial */}
      <path 
        d="M12 0C5.373 0 0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12c0-6.627-5.373-12-12-12z" 
        fill="#1877F2"
      />
      {/* Letra 'f' blanca */}
      <path 
        d="M16.671 15.542l.532-3.469h-3.328V9.82c0-.949.465-1.874 1.956-1.874h1.514V5.003s-1.374-.235-2.686-.235c-2.74 0-4.533 1.662-4.533 4.669v2.637H7.078v3.469h3.047v8.385a12.09 12.09 0 003.75 0v-8.385h2.796z" 
        fill="#ffffff"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className="transition-transform hover:scale-110">
      <defs>
        {/* Degradado oficial de Instagram */}
        <linearGradient id="igGrad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f09433"/>
          <stop offset="0.25" stopColor="#e6683c"/>
          <stop offset="0.5" stopColor="#dc2743"/>
          <stop offset="0.75" stopColor="#cc2366"/>
          <stop offset="1" stopColor="#bc1888"/>
        </linearGradient>
      </defs>
      {/* Fondo completo 24x24 */}
      <rect x="0" y="0" width="24" height="24" rx="6.5" fill="url(#igGrad)"/>
      {/* Cámara blanca más gruesa y visible */}
      <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" fill="none" stroke="#ffffff" strokeWidth="2"/>
      <circle cx="12" cy="12" r="3" fill="none" stroke="#ffffff" strokeWidth="2"/>
      <circle cx="16.5" cy="7.5" r="1.2" fill="#ffffff"/>
    </svg>
  );
}

export function TiktokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className="transition-transform hover:scale-110">
      {/* Fondo negro */}
      <circle cx="12" cy="12" r="12" fill="#000000" />
      {/* Sombra Cian */}
      <path d="M12.4 6v7.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.2 0 .4.1.6.1V8.7c-.2-.1-.4-.1-.6-.1-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5V8.3c1 .7 2.2 1.1 3.5 1.1V7.1c-1.3-.1-2.4-.6-3.3-1.5l-.2-.2z" fill="#69C9D0" transform="translate(-0.5, -0.5)"/>
      {/* Sombra Magenta */}
      <path d="M12.4 6v7.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.2 0 .4.1.6.1V8.7c-.2-.1-.4-.1-.6-.1-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5V8.3c1 .7 2.2 1.1 3.5 1.1V7.1c-1.3-.1-2.4-.6-3.3-1.5l-.2-.2z" fill="#EE1D52" transform="translate(0.5, 0.5)"/>
      {/* Nota musical blanca */}
      <path d="M12.4 6v7.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.2 0 .4.1.6.1V8.7c-.2-.1-.4-.1-.6-.1-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5V8.3c1 .7 2.2 1.1 3.5 1.1V7.1c-1.3-.1-2.4-.6-3.3-1.5l-.2-.2z" fill="#ffffff" />
    </svg>
  );
}