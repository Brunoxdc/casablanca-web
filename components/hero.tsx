export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary via-primary/95 to-primary/90 py-20 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-primary-foreground blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-accent/20 px-4 py-2">
              <p className="text-sm font-semibold text-accent">Más Suavidad, Más Rendimiento</p>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
              Casa Blanca Papel
            </h1>
            <p className="text-lg text-primary-foreground/90 md:text-xl">
              Tu proveedor confiable de papel higiénico comercial. Calidad premium, precios competitivos y entregas rápidas para empresas, restaurantes, hoteles y comercios.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-2">
              <button className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 font-bold text-accent-foreground transition-all duration-300 hover:shadow-xl hover:bg-accent/90 active:scale-95">
                Solicitar Cotización
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground px-8 py-3.5 font-bold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/15 active:scale-95">
                Ver Catálogo
              </button>
            </div>
            <div className="flex gap-6 pt-4">
              <div>
                <p className="text-3xl font-bold text-accent">500+</p>
                <p className="text-sm text-primary-foreground/80">Clientes satisfechos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">24-48h</p>
                <p className="text-sm text-primary-foreground/80">Entrega garantizada</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">20%</p>
                <p className="text-sm text-primary-foreground/80">Descuento mayorista</p>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative h-96 w-full rounded-2xl bg-gradient-to-br from-primary-foreground/20 to-primary-foreground/5 p-8 backdrop-blur">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Rollo de papel */}
                <circle cx="200" cy="200" r="120" fill="url(#paperGradient)" opacity="0.3" />
                <ellipse cx="200" cy="140" rx="80" ry="40" fill="rgba(255,255,255,0.1)" />
                <rect x="150" y="160" width="100" height="120" rx="8" fill="rgba(255,255,255,0.05)" />
                <ellipse cx="200" cy="280" rx="80" ry="40" fill="rgba(255,255,255,0.15)" />

                {/* Patrón de papel */}
                {[...Array(6)].map((_, i) => (
                  <line
                    key={i}
                    x1="140"
                    y1={170 + i * 15}
                    x2="260"
                    y2={170 + i * 15}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                  />
                ))}

                <defs>
                  <linearGradient id="paperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="absolute bottom-4 left-0 right-0 text-center text-sm font-semibold text-primary-foreground/80">
                Múltiples formatos disponibles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
