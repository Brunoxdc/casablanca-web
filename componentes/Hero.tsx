import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-brand-cyan pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
        
        {/* Textos Principales */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-4 leading-tight tracking-tight">
            Más suavidad, <br />
            <span className="text-brand-blue">más rendimiento.</span>
          </h1>
          <p className="text-xl text-white mb-8 max-w-lg bg-brand-cyan/80 p-2 rounded">
            El producto ideal para tu empresa. Papel higiénico institucional y toallas que brindan higiene y máxima resistencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="https://wa.me/51924473557" target="_blank" rel="noopener noreferrer" className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-900 transition text-lg flex items-center justify-center gap-2">
              Solicitar Cotización B2B
            </a>
          </div>
        </div>

        {/* Imagen ilustrativa limpia */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="absolute bg-white/20 w-80 h-80 rounded-full -z-10 blur-xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1584556812952-905ffd0c611a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="Papel higiénico institucional al por mayor" 
            className="rounded-2xl shadow-2xl border-4 border-white object-cover h-80 w-full max-w-md"
          />
        </div>
      </div>

      {/* Onda inferior SVG */}
      <div className="absolute bottom-0 w-full leading-[0]">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path fill="#f9fafb" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,165.3C960,149,1056,171,1152,192C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}