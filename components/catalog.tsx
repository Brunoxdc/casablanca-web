import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Catalog() {
  const products = [
    {
      id: "jumbo",
      name: "Papel Jumbo Institucional",
      desc: "Paquete de 6 rollos de 200 metros.",
      filename: "jumbo.png"
    },
    {
      id: "black",
      name: "Papel Higiénico Black",
      desc: "Plancha de 24 rollos de 40 metros.",
      filename: "black.png"
    },
    {
      id: "institucional",
      name: "Papel Institucional Blanco",
      desc: "Ideal para hogar, oficinas y negocios.",
      filename: "institucional.png"
    },
    {
      id: "toalla",
      name: "Toalla Institucional y Dispensadores",
      desc: "Resistente, absorbente y de alta calidad.",
      filename: "toalla.png"
    },
  ]

  return (
    <section className="py-20 bg-[#f8faf8]" id="productos">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 border-b border-primary/20 pb-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-primary font-bold">
              Nuestros productos
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-6 lg:mt-0">
            <p className="text-primary text-sm max-w-xs text-center sm:text-right">
              Opciones para cada necesidad, siempre con la mejor calidad.
            </p>
            <Button variant="outline" className="rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white uppercase text-xs font-bold tracking-widest px-6 h-10">
              Ver Catálogo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl p-6 shadow-sm flex flex-col items-center text-center">
              <div className="w-full aspect-[4/5] bg-gradient-to-b from-[#e5ede6] to-white rounded-2xl mb-6 flex items-center justify-center p-4">
                <span className="text-xs text-slate-400 font-medium">Sube: {product.filename}</span>
              </div>
              <h3 className="font-bold text-lg text-primary mb-2 leading-tight">{product.name}</h3>
              <p className="text-primary/70 text-sm mb-6 flex-1">{product.desc}</p>
              <a href={`https://wa.me/51924473557?text=Hola, busco: ${product.name}`} target="_blank" rel="noreferrer" className="w-full mt-auto">
                <Button variant="outline" className="w-full rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                  Ver más
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}