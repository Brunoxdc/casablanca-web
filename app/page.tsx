import React from 'react';
import Navbar from '../componentes/Navbar';
import Hero from '../componentes/Hero';
import Footer from '../componentes/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* 1. Barra de navegación */}
      <Navbar />

      {/* 2. Sección principal (Hero) */}
      <Hero />

      {/* 3. Beneficios (Esto también podríamos volverlo componente luego) */}
      <section className="py-16 bg-gray-50 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {['Venta al por mayor', 'Precios competitivos', 'Alta calidad', 'Excelente rendimiento'].map((beneficio, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="text-brand-cyan text-3xl mb-3">✔️</div>
              <h3 className="font-bold text-brand-blue">{beneficio}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Catálogo */}
      <section id="catalogo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">Nuestro Catálogo</h2>
          <p className="text-gray-500 mb-12">Conectando la base de datos de Hostinger pronto...</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto opacity-50 grayscale">
             <div className="border rounded-xl p-8 bg-gray-50 border-dashed border-gray-300">
                <p>📦 Espacio reservado para producto de WordPress</p>
             </div>
             <div className="border rounded-xl p-8 bg-gray-50 border-dashed border-gray-300">
                <p>📦 Espacio reservado para producto de WordPress</p>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Pie de página */}
      <Footer />
      
    </main>
  );
}