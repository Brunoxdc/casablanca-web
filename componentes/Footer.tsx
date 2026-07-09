import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <h4 className="text-2xl font-bold text-brand-cyan mb-2">Casablanca Papel</h4>
          <p className="text-blue-200 text-sm">📍 Urb Luis Chala MzB-lote7A, San Vicente - Cañete</p>
        </div>
        <div className="flex gap-4">
          <a href="https://wa.me/51924473557" target="_blank" rel="noopener noreferrer" className="bg-brand-cyan hover:bg-teal-500 px-6 py-2 rounded-full font-medium transition flex items-center gap-2">
            📞 924473557
          </a>
        </div>
      </div>
    </footer>
  );
}