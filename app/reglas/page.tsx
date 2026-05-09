import Link from 'next/link'
import Image from 'next/image'

export default function ReglasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-combi-dark">
          Normas del Bar
        </h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 md:h-80 bg-gradient-to-br from-combi-dark to-gray-800 flex items-center justify-center p-8">
            <div className="text-center text-white">
              <svg className="w-20 h-20 mx-auto mb-4 text-combi-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h2 className="text-2xl font-bold">Bienvenido a La Combi</h2>
              <p className="text-gray-300 mt-2">Para disfrutar al máximo tu experiencia</p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-combi-green rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-combi-dark mb-1">Prohibido Fumar</h3>
                  <p className="text-gray-600 text-sm">No se permite fumar en áreas interiores del bar.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-combi-green rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-combi-dark mb-1">Sin Derrames</h3>
                  <p className="text-gray-600 text-sm">Para tu seguridad y la de todos, no se permiten bebidas fuera del área designada.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-combi-green rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-combi-dark mb-1">Edad Mínima</h3>
                  <p className="text-gray-600 text-sm">Para consumir alcohol debes ser mayor de 18 años.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-combi-green rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-combi-dark mb-1">Respeto y Convivencia</h3>
                  <p className="text-gray-600 text-sm">Trata con respeto a nuestros colaboradores y otros clientes. No se toleran comportamentos agresivos.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-combi-green rounded-full flex items-center justify-center text-white font-bold">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-combi-dark mb-1">Ambiente Seguro</h3>
                  <p className="text-gray-600 text-sm">No se permiten conductas discriminatorias, acoso ni comentarios ofensivos hacia otros clientes o Staff.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-combi-green rounded-full flex items-center justify-center text-white font-bold">
                    6
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-combi-dark mb-1">Sustancias Prohibidas</h3>
                  <p className="text-gray-600 text-sm">No se permite el consumo ni tenencia de sustancias ilegales dentro del establecimiento.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-combi-cream rounded-lg text-center">
              <p className="text-combi-dark font-medium">
                ¿Dudas o consultas? Contáctanos antes de tu visita.
              </p>
              <a
                href="https://www.instagram.com/la_combi_bar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-combi-orange hover:text-combi-green font-semibold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @lacombibar
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-combi-dark hover:text-combi-orange transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}