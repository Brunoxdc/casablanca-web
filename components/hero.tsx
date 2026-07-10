import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-muted pt-20 pb-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary font-[family-name:var(--font-heading)]">
                Suavidad <br />
                <span className="text-primary font-medium">que te acompaña</span>
              </h1>
              <p className="max-w-[400px] text-lg text-muted-foreground">
                Papel higiénico de alta calidad para hogares, empresas e instituciones.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-full px-8 font-semibold">
                VER PRODUCTOS <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="https://wa.me/51924473557" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 font-semibold">
                  COTIZAR POR WHATSAPP
                </Button>
              </a>
            </div>
          </div>
          
          {/* CAJA PLACEHOLDER PARA LA IMAGEN DEL HERO */}
          <div className="relative mx-auto w-full max-w-[500px] aspect-square bg-slate-200 rounded-3xl flex items-center justify-center border-4 border-dashed border-slate-300">
            <p className="text-slate-500 font-medium">Sube aquí: hero.png</p>
            {/* Cuando tengas la imagen, borra el <p> de arriba y descomenta la línea de abajo: */}
            {/* <img src="/productos/hero.png" alt="Hero Casa Blanca" className="absolute inset-0 w-full h-full object-contain" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}