import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="text-2xl font-bold text-brand-cyan flex items-center gap-2">
          ☁️ Casa Blanca
        </div>
        <div className="hidden md:flex space-x-8 items-center font-medium">
          <a href="#" className="text-brand-blue hover:text-brand-cyan transition">Nosotros</a>
          <a href="#catalogo" className="text-brand-blue hover:text-brand-cyan transition">Productos Institucionales</a>
          <a href="https://wa.me/51924473557" target="_blank" rel="noopener noreferrer" className="bg-brand-cyan text-white px-6 py-2 rounded-full shadow hover:bg-teal-500 transition">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}