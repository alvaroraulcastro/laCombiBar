import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-combi-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/images/laCombiBar-logo.jpeg"
              alt="La Combi - Café & Bar"
              width={150}
              height={80}
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300">
              El mejor lugar para disfrutar de cócteles artesanales y deliciosa comida en un ambiente único.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-combi-yellow transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-combi-yellow transition-colors">
                  Carta
                </Link>
              </li>
              <li>
                <Link href="/reservas" className="text-gray-300 hover:text-combi-yellow transition-colors">
                  Reservas
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="text-gray-300 mb-2">Dirección: Calle Principal 123</p>
            <p className="text-gray-300 mb-2">Teléfono: +123 456 7890</p>
            <p className="text-gray-300">Email: info@lacombar.com</p>
            
            <div className="mt-4 flex space-x-4">
              <span className="text-gray-400">Instagram (próximamente)</span>
              <span className="text-gray-400">TikTok (próximamente)</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} La Combi Bar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
