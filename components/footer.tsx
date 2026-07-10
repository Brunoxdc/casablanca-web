import { MapPin, Phone, Truck, Lock, Headset, Star } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-[#f8faf8]">
      {/* Banner CTA */}
      <div className="container mx-auto px-4 pb-12">
        <div className="bg-[#0f2a40] rounded-[2rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="flex items-center gap-6 relative z-10">
            <div className="h-20 w-20 rounded-full border-2 border-secondary flex items-center justify-center text-white flex-shrink-0">
               {/* Icono Papel SVG */}
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M4 18h10"/><path d="M4 22h10"/><path d="M10 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6z"/><path d="M14 6h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6"/></svg>
            </div>
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-serif font-bold italic mb-2">
                ¡Elige calidad,<br/>elige <span className="text-secondary">Casa Blanca</span>!
              </h2>
              <p className="text-white/80">
                Contáctanos y descubre la suavidad<br/>que tu familia merece.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col space-y-6 text-white relative z-10 w-full lg:w-auto">
            <div className="flex items-center gap-4">
              <Phone className="h-8 w-8 text-secondary fill-secondary" />
              <span className="text-3xl font-bold">924 473 557</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-8 w-8 text-white" />
              <div className="text-sm leading-tight">
                <p className="font-medium">Urb Luis chala MzB-lote7A</p>
                <p>San Vicente – cañete</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/3 bg-slate-200">
             {/* Placeholder para la imagen del rollo con hojas de la esquina inferior derecha */}
             <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs text-center p-4">
                Sube la foto del rollo con hojas aquí
             </div>
          </div>
        </div>
      </div>

      {/* Footer Features Bar */}
      <div className="bg-[#0f2a40] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-center md:text-left md:divide-x divide-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 px-4">
              <Truck className="h-6 w-6 text-secondary" />
              <span className="leading-tight">Entrega rápida<br/>y segura</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 px-4">
              <Lock className="h-6 w-6 text-secondary" />
              <span className="leading-tight">Pagos seguros</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 px-4">
              <Headset className="h-6 w-6 text-secondary" />
              <span className="leading-tight">Atención<br/>personalizada</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 px-4">
              <Star className="h-6 w-6 text-secondary" />
              <span className="leading-tight">Productos de<br/>alta calidad</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}