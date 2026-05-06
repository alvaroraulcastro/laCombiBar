import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-combi-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="/images/laCombiBar-logo.jpeg"
            alt="La Combi - Café & Bar"
            width={400}
            height={200}
            className="mx-auto mb-8 h-auto w-full max-w-xs md:max-w-sm"
            priority
          />
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Disfruta de los mejores cócteles artesanales y una experiencia gastronómica única en un ambiente inolvidable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservas"
              className="bg-combi-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Reservar Mesa
            </Link>
            <Link
              href="/menu"
              className="bg-transparent border-2 border-combi-yellow text-combi-yellow px-8 py-3 rounded-lg font-semibold hover:bg-combi-yellow hover:text-combi-dark transition-colors"
            >
              Ver Carta
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-combi-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-combi-dark">
            ¿Qué te ofrecemos?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-combi-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-combi-dark">Reservas Online</h3>
              <p className="text-gray-600">
                Reserva tu mesa de forma fácil y rápida. Elige la fecha, hora y número de personas.
              </p>
              <Link href="/reservas" className="inline-block mt-4 text-combi-orange hover:underline">
                Reservar ahora →
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-combi-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-combi-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-combi-dark">Carta Digital</h3>
              <p className="text-gray-600">
                Explora nuestra selección de cócteles artesanales y platos exclusivos con imágenes y descripciones.
              </p>
              <Link href="/menu" className="inline-block mt-4 text-combi-orange hover:underline">
                Ver carta →
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-combi-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-combi-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-combi-dark">Ambiente Único</h3>
              <p className="text-gray-600">
                Vive una experiencia inolvidable con música, buena compañía y el mejor servicio.
              </p>
              <span className="inline-block mt-4 text-gray-500">
                Próximamente: Galería de fotos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-combi-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para vivir la experiencia La Combi?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            No esperes más. Reserva tu mesa ahora y prepárate para una noche inolvidable.
          </p>
          <Link
            href="/reservas"
            className="inline-block bg-white text-combi-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Hacer Reserva
          </Link>
        </div>
      </section>
    </div>
  )
}
