import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-serif',
  weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Casa Blanca | Suavidad al mejor precio',
  description: 'Papel higiénico de alta calidad para cada momento de tu día.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}