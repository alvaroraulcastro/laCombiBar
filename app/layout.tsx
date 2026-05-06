import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'La Combi Bar - Reservas y Carta',
  description: 'La Combi Bar - Disfruta de los mejores cócteles, comida y ambiente. Reserva tu mesa online y explora nuestra carta.',
  keywords: ['bar', 'cócteles', 'comida', 'reservas', 'La Combi', 'restaurante'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
