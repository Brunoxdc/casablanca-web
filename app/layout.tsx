import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Casablanca Papel | B2B',
  description: 'Papel higiénico institucional al por mayor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}