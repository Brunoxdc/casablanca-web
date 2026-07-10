import { Button } from "@/components/ui/button"

export function QuoteForm() {
  return (
    <section className="bg-white py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl text-primary font-[family-name:var(--font-heading)] font-bold">
              ESTAMOS PARA AYUDARTE
            </h2>
            <p className="text-muted-foreground text-lg">
              Contáctanos y recibe la mejor atención para tus pedidos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="flex flex-col items-center p-8 bg-muted/30 rounded-2xl border border-border hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 text-2xl">
                📞
              </div>
              <h3 className="font-bold text-primary mb-2">Llámanos</h3>
              <p className="text-muted-foreground mb-6 font-medium">924 473 557</p>
              <a href="tel:+51924473557" className="w-full mt-auto">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-full">Llamar ahora</Button>
              </a>
            </div>
            
            <div className="flex flex-col items-center p-8 bg-muted/30 rounded-2xl border border-border hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4 text-2xl">
                💬
              </div>
              <h3 className="font-bold text-primary mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-6 font-medium">Atención rápida</p>
              <a href="https://wa.me/51924473557" target="_blank" rel="noreferrer" className="w-full mt-auto">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-full">Escribir mensaje</Button>
              </a>
            </div>
            
            <div className="flex flex-col items-center p-8 bg-muted/30 rounded-2xl border border-border hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 text-2xl">
                📍
              </div>
              <h3 className="font-bold text-primary mb-2">Ubicación</h3>
              <p className="text-muted-foreground text-sm mb-4 text-center">
                Urb Luis chala MzB-lote7A<br/>San Vicente - Cañete
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}