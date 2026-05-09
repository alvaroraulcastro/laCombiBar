import { NextRequest, NextResponse } from 'next/server'

interface ReservationData {
  nombre: string
  email: string
  telefono: string
  fecha: string
  hora: string
  personas: string
  comentarios?: string
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[0-9\s\-]{8,15}$/
  return phoneRegex.test(phone)
}

export async function POST(request: NextRequest) {
  try {
    const data: ReservationData = await request.json()

    if (!data.nombre || !data.email || !data.telefono || !data.fecha || !data.hora || !data.personas) {
      return NextResponse.json(
        { error: 'Todos los campos marcados con * son requeridos' },
        { status: 400 }
      )
    }

    if (!validateEmail(data.email)) {
      return NextResponse.json(
        { error: 'El email ingresado no es válido' },
        { status: 400 }
      )
    }

    if (!validatePhone(data.telefono)) {
      return NextResponse.json(
        { error: 'El teléfono ingresado no es válido' },
        { status: 400 }
      )
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const reservationDate = new Date(data.fecha)
    if (reservationDate < today) {
      return NextResponse.json(
        { error: 'La fecha de reserva no puede ser anterior a hoy' },
        { status: 400 }
      )
    }

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL
    if (googleScriptUrl) {
      try {
        const response = await fetch(googleScriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        if (!response.ok) {
          console.error('Google Sheets response was not ok')
        }
      } catch (googleError) {
        console.error('Error enviando a Google Sheets:', googleError)
      }
    }

    const whatsappApiUrl = process.env.WHATSAPP_API_URL
    const whatsappPhone = process.env.WHATSAPP_PHONE
    const whatsappApiKey = process.env.WHATSAPP_API_KEY

    if (whatsappApiUrl && whatsappPhone && whatsappApiKey) {
      const message = `🍸 *Nueva Reserva - La Combi Bar*%0A%0A` +
        `👤 *Nombre:* ${encodeURIComponent(data.nombre)}%0A` +
        `📧 *Email:* ${encodeURIComponent(data.email)}%0A` +
        `📱 *Teléfono:* ${encodeURIComponent(data.telefono)}%0A` +
        `📅 *Fecha:* ${encodeURIComponent(data.fecha)}%0A` +
        `🕐 *Hora:* ${encodeURIComponent(data.hora)}%0A` +
        `👥 *Personas:* ${encodeURIComponent(data.personas)}` +
        (data.comentarios ? `%0A%0A💬 *Notas:* ${encodeURIComponent(data.comentarios)}` : '')

      const whatsappUrl = `${whatsappApiUrl}?phone=${whatsappPhone}&text=${message}&apikey=${whatsappApiKey}`

      try {
        await fetch(whatsappUrl)
      } catch (whatsappError) {
        console.error('Error enviando WhatsApp:', whatsappError)
      }
    }

    return NextResponse.json({
      success: true,
      message: '¡Reserva enviada correctamente! Te contactaremos pronto para confirmar.'
    })

  } catch (error) {
    console.error('Error en API de reservas:', error)
    return NextResponse.json(
      { error: 'Error al procesar la reserva. Por favor intenta nuevamente.' },
      { status: 500 }
    )
  }
}