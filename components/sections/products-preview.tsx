import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

// Rutas actualizadas apuntando a la carpeta /productos/
const products = [
  {
    id: 1,
    title: "Papel Jumbo Institucional",
    specs: "6 rollos x 200 m · Doble hoja",
    image: "/chatgpt-mockup/producto-jumbo-hero.webp",
  },
  {
    id: 2,
    title: "Papel Higiénico Black",
    specs: "24 rollos x 40 m · Extra suave",
    image: "/chatgpt-mockup/producto-24-rollos.webp",
  },
  {
    id: 3,
    title: "Toalla Institucional",
    specs: "500 gramos · Doble hoja · Alta absorción",
    image: "/chatgpt-mockup/producto-toalla.webp",
  }
];

export default function ProductsPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        
        {/* Cabecera del Catálogo */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <Reveal className="max-w-2xl">
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
              Catálogo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-[var(--color-primary)] mt-3 mb-4 leading-tight tracking-tight">
              Opciones para cada operación
            </h2>
            <p className="text-[15px] md:text-[17px] text-gray-600 leading-relaxed max-w-[550px]">
              Una selección de nuestras líneas más pedidas. El catálogo completo tiene fichas técnicas detalladas de cada producto.
            </p>
          </Reveal>

          <Reveal delay={100} className="shrink-0">
            <Link 
              href="/productos" 
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-6 py-2.5 text-[14px] font-bold text-[var(--color-primary)] transition hover:border-[var(--color-primary)] hover:bg-gray-50"
            >
              Ver catálogo completo &rarr;
            </Link>
          </Reveal>
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={index * 100}>
              <div className="flex flex-col bg-[#F8FAFC] rounded-[1.5rem] overflow-hidden border border-gray-100 shadow-sm transition-all hover:shadow-md h-full">
                
                {/* Contenedor de la Imagen */}
                <div className="relative h-[220px] md:h-[260px] w-full p-6 flex items-center justify-center">
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-6 mix-blend-multiply" 
                  />
                </div>

                {/* Contenedor del Texto y Botón */}
                <div className="bg-white p-6 md:p-8 flex flex-col flex-grow border-t border-gray-100">
                  <span className="text-[12px] md:text-[13px] text-gray-500 font-semibold mb-1">
                    {product.specs}
                  </span>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[var(--color-primary)] mb-6 leading-tight">
                    {product.title}
                  </h3>
                  
                  {/* Empuja el botón hacia abajo si los títulos tienen diferente altura */}
                  <div className="mt-auto">
                    {/* Cambiamos el botón por un Link de Next.js que apunta a /contacto */}
                    <Link 
                      href="/contacto"
                      className="w-full flex items-center justify-center bg-[var(--color-accent)] hover:bg-[#5c8524] text-white font-bold py-3.5 rounded-xl transition-transform hover:scale-[1.02] shadow-sm text-[15px]"
                    >
                      Cotizar
                    </Link>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}