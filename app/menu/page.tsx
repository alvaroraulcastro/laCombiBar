'use client'

import { useState } from 'react'
import Image from 'next/image'

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  category: 'cerveza' | 'cafe' | 'coctel' | 'sin_alcohol' | 'comida'
  image: string
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Cerveza de hoja',
    description: 'Cerveza artesanal de hoja',
    price: 7000,
    category: 'cerveza',
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&q=80',
  },
  {
    id: 2,
    name: 'Copa de vino',
    description: 'Copa de vino de la casa',
    price: 6000,
    category: 'cerveza',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bdda2fd7?w=800&q=80',
  },
  {
    id: 3,
    name: 'Capuchino',
    description: 'Café capuchino artesanal',
    price: 4000,
    category: 'cafe',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80',
  },
  {
    id: 4,
    name: 'Fernet',
    description: 'Fernet con hielo',
    price: 6000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80',
  },
  {
    id: 5,
    name: 'Campari',
    description: 'Campari con soda',
    price: 6000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80',
  },
  {
    id: 6,
    name: 'Aperol Spritz',
    description: 'Aperol, prosecco y soda',
    price: 9000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1560508179-b2c9a3f8e92f?w=800&q=80',
  },
  {
    id: 7,
    name: 'Fernet con Coca',
    description: 'Fernet con Coca-Cola',
    price: 7000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80',
  },
  {
    id: 8,
    name: 'Caipirinha',
    description: 'Cachaça, lima y azúcar',
    price: 8000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80',
  },
  {
    id: 9,
    name: 'Caipiroska',
    description: 'Vodka, lima y azúcar',
    price: 8000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80',
  },
  {
    id: 10,
    name: 'Mojito',
    description: 'Ron blanco, menta, lima, azúcar y soda',
    price: 8000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80',
  },
  {
    id: 11,
    name: 'Margarita',
    description: 'Tequila, triple sec y jugo de lima',
    price: 8000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1556855810-ac404aa91e85?w=800&q=80',
  },
  {
    id: 12,
    name: 'Cuba Libre',
    description: 'Ron y Coca-Cola con lima',
    price: 8000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80',
  },
  {
    id: 13,
    name: 'Daiquiri',
    description: 'Ron, jugo de limón y azúcar',
    price: 8000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80',
  },
  {
    id: 14,
    name: 'Negroni',
    description: 'Gin, Campari y Vermú rojo',
    price: 9000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80',
  },
  {
    id: 15,
    name: 'Old Fashioned',
    description: 'Bourbon, azúcar y angostura',
    price: 10000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80',
  },
  {
    id: 16,
    name: 'Martinez',
    description: 'Gin, Vermú, cereza y bitters',
    price: 10000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80',
  },
  {
    id: 17,
    name: 'Sidecar',
    description: 'Coñac, triple sec y jugo de limón',
    price: 10000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80',
  },
  {
    id: 18,
    name: 'Garibaldi',
    description: 'Campari y jugo de naranja',
    price: 9000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80',
  },
  {
    id: 19,
    name: 'Piña Colada',
    description: 'Ron, crema de coco y jugo de piña',
    price: 9000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80',
  },
  {
    id: 20,
    name: 'Moscow Mule',
    description: 'Vodka, ginger beer y lima',
    price: 9000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80',
  },
  {
    id: 21,
    name: 'Tequila Sunrise',
    description: 'Tequila, jugo de naranja y grenadine',
    price: 9000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80',
  },
  {
    id: 22,
    name: 'Nutella Martini',
    description: 'Vodka, licor de avellana y crema',
    price: 10000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80',
  },
  {
    id: 23,
    name: 'Coco Loco',
    description: 'Ron de coco, leche de coco y piña',
    price: 10000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80',
  },
  {
    id: 24,
    name: 'Nutty Ferrero',
    description: 'Vodka, Frangelico, Kahlua y crema',
    price: 10000,
    category: 'coctel',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80',
  },
  {
    id: 25,
    name: 'Coral Bay',
    description: 'Piña, coco y maracuyá sin alcohol',
    price: 7000,
    category: 'sin_alcohol',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80',
  },
  {
    id: 26,
    name: 'Piña Colada 0%',
    description: 'Piña, coco y crema sin alcohol',
    price: 6000,
    category: 'sin_alcohol',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80',
  },
  {
    id: 27,
    name: 'Lime Fresh',
    description: 'Lima, menta, ginger y soda sin alcohol',
    price: 6000,
    category: 'sin_alcohol',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80',
  },
  {
    id: 28,
    name: 'Aranciata Rossa',
    description: 'Refresco italiano de naranja roja',
    price: 5000,
    category: 'sin_alcohol',
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800&q=80',
  },
  {
    id: 29,
    name: 'Papas Fritas',
    description: 'Papas fritas con salsa de la casa',
    price: 6000,
    category: 'comida',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80',
  },
  {
    id: 30,
    name: 'Aros de Cebolla',
    description: 'Aros de cebolla crujientes',
    price: 7000,
    category: 'comida',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&q=80',
  },
  {
    id: 31,
    name: 'Tequeños',
    description: '6 tequeños de queso',
    price: 9000,
    category: 'comida',
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b50c9a5?w=800&q=80',
  },
  {
    id: 32,
    name: 'Alitas',
    description: 'AlitasBBQ con salsa ranch',
    price: 12000,
    category: 'comida',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&q=80',
  },
  {
    id: 33,
    name: 'Bunuelos de Queso',
    description: '6 bunuelos de queso gratinado',
    price: 9000,
    category: 'comida',
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b50c9a5?w=800&q=80',
  },
  {
    id: 34,
    name: 'Sanguche de Lomito',
    description: 'Lomito de res con queso y cebolla caramelizada',
    price: 14000,
    category: 'comida',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
  },
  {
    id: 35,
    name: 'Choripán',
    description: 'Chorizo con chimichurri y pan artesanal',
    price: 10000,
    category: 'comida',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80',
  },
]

const categoryLabels: Record<string, string> = {
  todos: 'Todos',
  cerveza: 'Cervezas & Cafés',
  coctel: 'Cocteles',
  sin_alcohol: 'Sin Alcohol',
  comida: 'Comida',
}

const categoryOrder = ['todos', 'cerveza', 'coctel', 'sin_alcohol', 'comida']

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('todos')

  const filteredItems = activeCategory === 'todos'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString('es-CL')}`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-combi-dark">
        Nuestra Carta
      </h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Descubre nuestra selección de cócteles artesanales y platos exclusivos preparados con los mejores ingredientes.
      </p>

      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {categoryOrder.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition-all ${
              activeCategory === cat
                ? 'bg-combi-green text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative h-48 bg-gray-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <span className="absolute top-2 right-2 px-2 py-1 bg-combi-green text-white text-xs rounded-full font-semibold capitalize">
                {categoryLabels[item.category]}
              </span>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-combi-dark">{item.name}</h3>
              </div>
              <p className="text-gray-500 text-sm mb-3 min-h-[40px]">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-combi-green font-bold text-xl">{formatPrice(item.price)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}