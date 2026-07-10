import { Leaf, ShieldCheck, Users, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#eef5ed] pb-16 overflow-hidden">
      {/* Navbar con tu logo real */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between relative z-20">
        <div className="flex items-center gap-2">
          {/* Aquí cargará tu logo */}
          <img src="/productos/logo.png" alt="Casa Blanca Logo" className="h-12 md:h-16 object-contain" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-primary uppercase tracking-wider">
          <a href="#" className="border-b-2 border-secondary pb-1">Inicio</a>
          <a href="#productos" className="hover:text-secondary transition-colors">Productos</a>
          <a href="#" className="hover:text-secondary transition-colors">Beneficios</a>
          <a href="#" className="hover:text-secondary transition-colors">Nosotros</a>
          <a href="#" className="hover:text-secondary transition-colors">Contacto</a>
        </div>
        <a href="https://wa.me/51924473557" target="_blank" rel="noreferrer">
          <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6 shadow-md">
            <Phone className="mr-2 h-4 w-4" /> 924 473 557
          </Button>
        </a>
      </nav>

      {/* Contenido Principal */}
      <div className="container px-4 mx-auto pt-8 md:pt-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl font-[family-name:var(--font-serif)] text-primary font-bold leading-tight">
              Suavidad <br />
              <span className="text-secondary italic font-medium">que te acompaña</span>
            </h1>
            <p className="text-lg text-primary max-w-md font-medium">
              Papel higiénico de alta calidad para cada momento de tu día.
            </p>

            <div className="flex gap-8 pt-4">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="rounded-full border-2 border-secondary/20 p-4 text-secondary bg-white shadow-sm">
                  <Leaf className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-primary leading-tight">Suave y<br/>resistente</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="rounded-full border-2 border-secondary/20 p-4 text-secondary bg-white shadow-sm">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-primary leading-tight">Calidad<br/>garantizada</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="rounded-full border-2 border-secondary/20 p-4 text-secondary bg-white shadow-sm">
                  <Users className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-primary leading-tight">Ideal para<br/>tu familia</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/51924473557" target="_blank" rel="noreferrer">
                <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 text-lg shadow-lg h-14">
                  <Phone className="mr-2 h-5 w-5 fill-current" /> 924 473 557
                </Button>
              </a>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 text-primary border-primary hover:bg-primary/5 uppercase text-sm font-bold tracking-widest h-14">
                Ver Productos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none mt-8 lg:mt-0">
            {/* Círculo Blanco Flotante */}
            <div className="absolute -top-4 -right-4 md:top-0 md:right-0 z-20 bg-white rounded-full p-6 shadow-xl border-4 border-secondary w-32 h-32 flex flex-col items-center justify-center text-center">
              <Leaf className="h-5 w-5 text-secondary mb-1" />
              <p className="text-[10px] font-bold text-primary uppercase leading-tight">
                Calidad<br/>que se siente<br/>en cada uso
              </p>
            </div>
            {/* Imagen Principal Hero */}
            <img src="/productos/hero.png" alt="Papel Higiénico Casa Blanca" className="relative z-10 w-full object-contain drop-shadow-2xl" />
          </div>
        </div>
      </div>
      
      {/* Ondas Decorativas Inferiores */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-32 block">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-secondary"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-23.82V0Z" opacity=".5" className="fill-secondary"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-primary"></path>
        </svg>
      </div>
    </section>
  )
}