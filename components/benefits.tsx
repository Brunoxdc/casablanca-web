import { Feather, Droplets, ShieldCheck, Recycle, Truck, Users } from "lucide-react"

export function Benefits() {
  const benefits = [
    { icon: Feather, title: "SUAVE", desc: "y delicado" },
    { icon: Droplets, title: "ALTA ABSORCIÓN", desc: "y rendimiento" },
    { icon: ShieldCheck, title: "CALIDAD", desc: "garantizada" },
    { icon: Recycle, title: "PRODUCCIÓN", desc: "sostenible" },
    { icon: Truck, title: "ENTREGA RÁPIDA", desc: "y segura" },
    { icon: Users, title: "IDEAL PARA", desc: "toda la familia" },
  ]

  return (
    <section className="bg-white py-16 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {benefits.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-3">
              <div className="h-20 w-20 rounded-full border-4 border-primary flex items-center justify-center text-primary">
                <item.icon className="h-10 w-10" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-primary uppercase">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}