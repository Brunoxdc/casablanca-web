export function Footer() {
  return (
    <footer className="bg-secondary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo y descripción */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Casa Blanca Papel</h3>
            <p className="text-sm text-primary-foreground/80">
              Tu proveedor confiable de papel higiénico comercial con más de 15 años de experiencia.
            </p>
            <div className="mt-4 flex gap-3">
              <a 
                href="https://www.facebook.com/p/Casa-blanca-papel-61576462874412/" 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/40 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/5919244273936" 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/40 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.783 1.14l-.046.027-3.97.735.75-3.828.036-.046a9.884 9.884 0 011.51-4.173A9.9 9.9 0 0112.402 0c5.467 0 9.9 4.432 9.9 9.9 0 2.65-.997 5.151-2.805 7.058l-.034.029-3.99.711.732-3.862.029-.034A9.875 9.875 0 0012.05 3.579z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Productos */}
          <div>
            <h4 className="font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#catalog" className="hover:text-accent transition">Papel Higiénico Casa Blanca</a></li>
              <li><a href="#catalog" className="hover:text-accent transition">Papel Jumbo Industrial</a></li>
              <li><a href="#catalog" className="hover:text-accent transition">Papel Black Premium</a></li>
              <li><a href="#catalog" className="hover:text-accent transition">Papeleras Comerciales</a></li>
              <li><a href="#" className="hover:text-accent transition">Soluciones Personalizadas</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition">Acerca de nosotros</a></li>
              <li><a href="#" className="hover:text-accent transition">Garantía de calidad</a></li>
              <li><a href="#" className="hover:text-accent transition">Entregas rápidas</a></li>
              <li><a href="#" className="hover:text-accent transition">Precios mayoristas</a></li>
              <li><a href="#" className="hover:text-accent transition">Contáctanos</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <p>📞 0 924273936</p>
              <p>💬 <a href="https://wa.me/5919244273936" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">WhatsApp: +591 9244273936</a></p>
              <p>📧 ventas@casablancapapel.com</p>
              <p>🕐 Lunes - Viernes: 8:00 AM - 6:00 PM</p>
              <p>🕐 Sábado: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-primary-foreground/20"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-primary-foreground/70">
            © 2024 Casa Blanca Papel. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/70">
            <a href="#" className="hover:text-accent transition">Privacidad</a>
            <a href="#" className="hover:text-accent transition">Términos de servicio</a>
            <a href="#" className="hover:text-accent transition">Política de cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
