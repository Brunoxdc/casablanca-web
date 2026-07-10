import { CheckCircle, Leaf, Recycle, Users } from "lucide-react"

export function Benefits() {
  return (
    <section className="bg-[#0f2a40] text-white py-16 -mt-1 relative z-30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:divide-x divide-white/20">
          <div className="flex flex-col items-center text-center px-6">
            <CheckCircle className="h-10 w-10 text-secondary mb-4" />
            <h3 className="font-bold text-[15px] leading-tight uppercase tracking-wide mb-2">Diseño pensado<br/>para rendir</h3>
            <p className="text-sm text-white/80">Mayor durabilidad<br/>y rendimiento.</p>
          </div>
          <div className="flex flex-col items-center text-center px-6">
            <Leaf className="h-10 w-10 text-secondary mb-4" />
            <h3 className="font-bold text-[15px] leading-tight uppercase tracking-wide mb-2">Textura<br/>Suave</h3>
            <p className="text-sm text-white/80">Suavidad que<br/>cuida tu piel.</p>
          </div>
          <div className="flex flex-col items-center text-center px-6">
            <Recycle className="h-10 w-10 text-secondary mb-4" />
            <h3 className="font-bold text-[15px] leading-tight uppercase tracking-wide mb-2">Producción<br/>Sostenible</h3>
            <p className="text-sm text-white/80">Comprometidos con<br/>el medio ambiente.</p>
          </div>
          <div className="flex flex-col items-center text-center px-6">
            <Users className="h-10 w-10 text-secondary mb-4" />
            <h3 className="font-bold text-[15px] leading-tight uppercase tracking-wide mb-2">Para toda<br/>la familia</h3>
            <p className="text-sm text-white/80">Seguridad y confianza<br/>en cada uso.</p>
          </div>
        </div>
      </div>
    </section>
  )
}