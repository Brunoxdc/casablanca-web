import { Button } from "@/components/ui/button"

export function Catalog() {
  const products = [
    {
      id: "ph-4",
      name: "PAPEL HIGIÉNICO",
      desc: "Paquete de 4 rollos",
      filename: "ph-4.png"
    },
    {
      id: "jumbo",
      name: "PAPEL JUMBO INSTITUCIONAL",
      desc: "Rollo de 200 metros",
      filename: "jumbo.png"
    },
    {
      id: "institucional",
      name: "PAPEL INSTITUCIONAL",
      desc: "Rollo de alta resistencia",
      filename: "institucional.png"
    },
    {
      id: "toalla",
      name: "TOALLA INSTITUCIONAL",
      desc: "Paquete de 6 rollos",
      filename: "toalla.png"
    },
    {
      id: "servilletas",
      name: "SERVILLETAS INSTITUCIONALES",
      desc: "Paquete de 500 unidades",
      filename: "servilletas.png"
    },
  ]

  return (
    <section className="py-20 bg-muted/30" id="productos">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl text-primary font-[family-name:var(--font-heading)] font-bold mb-12">
          NUESTROS PRODUCTOS
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center">
              
              {/* CAJA PLACEHOLDER PARA PRODUCTOS */}
              <div className="w-full aspect-square bg-slate-100 rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-slate-200">
                <span className="text-xs text-slate-400 font-medium">{product.filename}</span>
                {/* Cuando tengas la imagen, descomenta la línea de abajo: */}
                {/* <img src={`/productos/${product.filename}`} alt={product.name} className="w-full h-full object-contain p-2" /> */}
              </div>

              <div className="text-center flex-1 flex flex-col items-center w-full">
                <h3 className="font-bold text-sm text-primary mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-xs mb-4">{product.desc}</p>
                <a href={`https://wa.me/51924473557?text=Hola, busco: ${product.name}`} target="_blank" rel="noreferrer" className="w-full mt-auto">
                  <Button variant="outline" className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-white text-xs h-8">
                    Cotizar
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}