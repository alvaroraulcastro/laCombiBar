import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

const baseUrl = 'https://la-combi-bar.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'La Combi Bar - Bar y Restaurante',
    template: '%s | La Combi Bar',
  },
  description: 'La Combi Bar - Coctelería, cocina y música en vivo en Osorno. Reserva tu mesa online y vive noches con bandas y DJs invitados.',
  keywords: ['bar', 'restaurante', 'cócteles', 'comida', 'reservas', 'La Combi', ' ambiance', 'tragos', 'bares'],
  authors: [{ name: 'La Combi Bar' }],
  creator: 'La Combi Bar',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: baseUrl,
    siteName: 'La Combi Bar',
    title: 'La Combi Bar - Bar y Restaurante',
    description: 'Coctelería, cocina y música en vivo en Osorno. Reserva tu mesa online y vive noches con bandas y DJs invitados.',
    images: [
      {
        url: '/images/laCombiBar-logo.jpeg',
        width: 800,
        height: 600,
        alt: 'La Combi Bar Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Combi Bar - Bar y Restaurante',
    description: 'Coctelería, cocina y música en vivo en Osorno.',
    images: ['/images/laCombiBar-logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'La Combi Bar',
  image: '/images/laCombiBar-logo.jpeg',
  url: baseUrl,
  telephone: '+56973014958',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CL',
    addressRegion: 'Chile',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '18:00',
      closes: '03:00',
    },
  ],
  servesCuisine: ['Bar', 'Restaurant', 'Cocktails'],
  priceRange: '$$',
  hasMenu: {
    '@type': 'Menu',
    name: 'Carta',
    url: `${baseUrl}/menu`,
  },
  reservationAction: {
    '@type': 'ReserveAction',
    name: 'Reservar Mesa',
    url: `${baseUrl}/reservas`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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