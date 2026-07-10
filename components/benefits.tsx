export function Benefits() {
  const benefits = [
    {
      icon: "🚚",
      title: "Entrega Rápida",
      description: "Garantizamos entrega en 24-48 horas a nivel nacional. Logística confiable.",
    },
    {
      icon: "💰",
      title: "Precios Competitivos",
      description: "Márgenes reducidos para mayoristas. Descuentos por volumen y contratos anuales.",
    },
    {
      icon: "✅",
      title: "Calidad Certificada",
      description: "Productos con certificaciones internacionales. Control de calidad riguroso.",
    },
    {
      icon: "📞",
      title: "Atención Personalizada",
      description: "Equipo dedicado B2B. Asesoramiento profesional según tus necesidades.",
    },
    {
      icon: "📦",
      title: "Múltiples Formatos",
      description: "Desde paquetes pequeños hasta bobinas industriales. Flexibilidad total.",
    },
    {
      icon: "🤝",
      title: "Relaciones Duraderas",
      description: "Programas de fidelización. Beneficios exclusivos para clientes recurrentes.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            ¿Por qué elegir Casa Blanca Papel?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Más de 15 años brindando soluciones de calidad a empresas
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:shadow-xl hover:border-primary hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-primary/10 text-2xl group-hover:bg-primary/15 transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{benefit.title}</h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Estadísticas */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-12 shadow-lg">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <p className="text-6xl font-bold text-accent tracking-tight">500+</p>
              <p className="mt-3 text-base text-primary-foreground/90 font-medium">Empresas confían en nosotros</p>
            </div>
            <div className="text-center border-l border-r border-primary-foreground/20">
              <p className="text-6xl font-bold text-accent tracking-tight">15+</p>
              <p className="mt-3 text-base text-primary-foreground/90 font-medium">Años en el mercado</p>
            </div>
            <div className="text-center">
              <p className="text-6xl font-bold text-accent tracking-tight">99%</p>
              <p className="mt-3 text-base text-primary-foreground/90 font-medium">Satisfacción del cliente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
