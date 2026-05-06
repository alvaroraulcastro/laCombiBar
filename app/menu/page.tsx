'use client'

import { useState } from 'react'
import Image from 'next/image'

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  category: 'coctel' | 'comida'
  image: string
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Margarita Clásica',
    description: 'Tequila, triple sec, jugo de lima fresco y sal en el borde.',
    price: '$12.00',
    category: 'coctel',
    image: '/images/coctel-placeholder.jpg',
  },
  {
    id: 2,
    name: 'Mojito Cubano',
    description: 'Ron blanco, menta fresca, azúcar, lima y soda.',
    price: '$11.00',
    category: 'coctel',
    image: '/images/coctel-placeholder.jpg',
  },
  {
    id: 3,
    name: 'Piña Colada',
    description: 'Ron, crema de coco y jugo de piña.',
    price: '$13.00',
    category: 'coctel',
    image: '/images/coctel-placeholder.jpg',
  },
  {
    id: 4,
    name: 'Old Fashioned',
    description: 'Bourbon, azúcar, angostura y cáscara de naranja.',
    price: '$14.00',
    category: 'coctel',
    image: '/images/coctel-placeholder.jpg',
  },
  {
    id: 5,
    name: 'Hamburguesa La Combi',
    description: 'Carne Angus, queso cheddar, bacon, lechuga, tomate y salsa especial.',
    price: '$16.00',
    category: 'comida',
    image: '/images/comida-placeholder.jpg',
  },
  {
    id: 6,
    name: 'Tacos de Pescado',
    description: 'Tres tacos con pescado fresco, repollo, salsa tártara y lima.',
    price: '$14.00',
    category: 'comida',
    image: '/images/comida-placeholder.jpg',
  },
  {
    id: 7,
    name: 'Nachos Supremos',
    description: 'Nachos con queso fundido, guacamole, sour cream, jalapeños y carne.',
    price: '$12.00',
    category: 'comida',
    image: '/images/comida-placeholder.jpg',
  },
  {
    id: 8,
    name: 'Alitas BBQ',
    description: '12 alitas con salsa BBQ casera, acompañadas de apio y aderezo ranch.',
    price: '$15.00',
    category: 'comida',
    image: '/images/comida-placeholder.jpg',
  },
]

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'coctel' | 'comida'>('todos')

  const filteredItems = activeCategory === 'todos' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-combi-dark">
        Nuestra Carta
      </h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Descubre nuestra selección de cócteles artesanales y platos exclusivos preparados con los mejores ingredientes.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveCategory('todos')}
          className={`px-6 py-2 rounded-full font-semibold transition-colors ${
            activeCategory === 'todos'
              ? 'bg-combi-orange text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setActiveCategory('coctel')}
          className={`px-6 py-2 rounded-full font-semibold transition-colors ${
            activeCategory === 'coctel'
              ? 'bg-combi-orange text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Cócteles
        </button>
        <button
          onClick={() => setActiveCategory('comida')}
          className={`px-6 py-2 rounded-full font-semibold transition-colors ${
            activeCategory === 'comida'
              ? 'bg-combi-orange text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Comida
        </button>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gray-200 h-48 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Imagen próximamente</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-combi-dark">{item.name}</h3>
                <span className="text-combi-orange font-bold">{item.price}</span>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600 capitalize">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
