'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-combi-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/laCombiBar-logo.jpeg"
              alt="La Combi - Café & Bar"
              width={120}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-combi-yellow transition-colors">
              Inicio
            </Link>
            <Link href="/menu" className="hover:text-combi-yellow transition-colors">
              Carta
            </Link>
            <Link href="/reservas" className="hover:text-combi-yellow transition-colors">
              Reservas
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="/" className="block hover:text-combi-yellow transition-colors" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </Link>
            <Link href="/menu" className="block hover:text-combi-yellow transition-colors" onClick={() => setIsMenuOpen(false)}>
              Carta
            </Link>
            <Link href="/reservas" className="block hover:text-combi-yellow transition-colors" onClick={() => setIsMenuOpen(false)}>
              Reservas
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
