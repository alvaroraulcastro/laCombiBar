import Link from 'next/link'
import Image from 'next/image'
import MapWrapper from '@/components/MapWrapper'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Image
              src="/images/laCombiBar-logo.jpeg"
              alt="La Combi - Café & Bar"
              width={100}
              height={50}
              className="h-20 w-auto"
              priority
            />
            <a
              href="https://www.instagram.com/la_combi_bar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-combi-green transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="hidden sm:inline">@lacombibar</span>
            </a>
          </div>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              La Combi Bar
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Cocktails artesanales, buena comida y la mejor música en un solo lugar.
            </p>
            <p className="text-gray-400 mb-8">
              📍 Eleuterio Ramirez 764, Osorno | Lun-Dom 18:00 - 03:00
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reservas"
                className="bg-combi-green text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Reservar Mesa
              </Link>
              <Link
                href="/menu"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
              >
                Ver Carta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            ¿Por qué elegirnos?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-combi-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Reservas Fáciles</h3>
              <p className="text-gray-600">
                Agenda tu mesa en minutos. Te confirmamos al instante y Recibirás una notificación.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-combi-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Cocteles Originales</h3>
              <p className="text-gray-600">
                Más de 28 cócteles artesanales. Cada uno preparado con ingredientes de primera calidad.
              </p>
              <Link href="/menu" className="inline-block mt-4 text-combi-green hover:underline">
                Ver carta →
              </Link>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-combi-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Ambiente Inigualable</h3>
              <p className="text-gray-600">
                Música en vivo, DJs invitados y un ambiente que te hará querer volver cada fin de semana.
              </p>
              <Link href="/djs" className="inline-block mt-4 text-combi-green hover:underline">
                Ver DJs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Encuéntranos
              </h2>
              <p className="text-gray-600 mb-4">
                Estamos en el corazón de Osorno, listos para recibirte con los mejores tragos y la mejor vibra.
              </p>
              <div className="space-y-3 mb-6">
                <p className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-combi-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Eleuterio Ramirez 764, Osorno
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-combi-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Lunes a Domingo: 18:00 - 03:00
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Eleuterio+Ramirez+764+Osorno"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-combi-green text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Abrir en Google Maps
              </a>
            </div>
            <div className="bg-gray-200 rounded-xl h-64 md:h-80 w-full">
              <MapWrapper />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para la mejor noche?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Reserva tu mesa ahora y garantiza tu lugar. Viernes y sábados se llenan rápido.
          </p>
          <Link
            href="/reservas"
            className="inline-block bg-combi-green text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
          >
            Reservar Ahora
          </Link>
        </div>
      </section>
    </div>
  )
}