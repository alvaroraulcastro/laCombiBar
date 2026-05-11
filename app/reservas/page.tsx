'use client'

import { useState } from 'react'

export default function ReservasPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: '',
    personas: '2',
    comentarios: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/reservas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          fecha: '',
          hora: '',
          personas: '2',
          comentarios: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-combi-dark">
          Reservar Mesa
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Completa el formulario para reservar tu mesa. Te confirmaremos tu reserva lo antes posible.
        </p>

        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            <strong className="font-bold">¡Reserva enviada!</strong>
            <span className="block sm:inline"> El administrador del bar se comunicará con usted para confirmar la reserva.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <strong className="font-bold">Error</strong>
            <span className="block sm:inline"> Hubo un problema al enviar la reserva. Por favor intenta nuevamente o contáctanos por WhatsApp.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div className="md:col-span-2">
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-combi-green focus:border-transparent outline-none"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-combi-green focus:border-transparent outline-none"
                placeholder="tu@email.com"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                required
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-combi-green focus:border-transparent outline-none"
                placeholder="+123 456 7890"
              />
            </div>

            {/* Fecha */}
            <div>
              <label htmlFor="fecha" className="block text-sm font-medium text-gray-700 mb-2">
                Fecha *
              </label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                required
                value={formData.fecha}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-combi-green focus:border-transparent outline-none"
              />
            </div>

            {/* Hora */}
            <div>
              <label htmlFor="hora" className="block text-sm font-medium text-gray-700 mb-2">
                Hora *
              </label>
              <input
                type="time"
                id="hora"
                name="hora"
                required
                value={formData.hora}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-combi-green focus:border-transparent outline-none"
              />
            </div>

            {/* Número de personas */}
            <div className="md:col-span-2">
              <label htmlFor="personas" className="block text-sm font-medium text-gray-700 mb-2">
                Número de personas *
              </label>
              <select
                id="personas"
                name="personas"
                required
                value={formData.personas}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-combi-green focus:border-transparent outline-none"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'persona' : 'personas'}
                  </option>
                ))}
                <option value="9+">9 o más personas</option>
              </select>
            </div>

            {/* Comentarios */}
            <div className="md:col-span-2">
              <label htmlFor="comentarios" className="block text-sm font-medium text-gray-700 mb-2">
                Comentarios o solicitudes especiales
              </label>
              <textarea
                id="comentarios"
                name="comentarios"
                rows={4}
                value={formData.comentarios}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-combi-green focus:border-transparent outline-none resize-none"
                placeholder="¿Alguna solicitud especial? (alergias, ocasión especial, etc.)"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 bg-combi-green text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Enviando...' : 'Confirmar Reserva'}
          </button>
        </form>
      </div>
    </div>
  )
}
