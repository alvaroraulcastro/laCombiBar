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

export async function POST(request: NextRequest) {
  try {
    const data: ReservationData = await request.json()

    if (!data.nombre || !data.fecha || !data.hora) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL

    if (googleScriptUrl) {
      try {
        await fetch(googleScriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
      } catch (googleError) {
        console.error('Error enviando a Google Sheets:', googleError)
      }
    }

    const whatsappApiUrl = process.env.WHATSAPP_API_URL
    const whatsappPhone = process.env.WHATSAPP_PHONE
    const whatsappApiKey = process.env.WHATSAPP_API_KEY

    if (whatsappApiUrl && whatsappPhone && whatsappApiKey) {
      const message = `🍸 *Nueva Reserva - La Combi Bar*\n\n` +
        `👤 *Nombre:* ${data.nombre}\n` +
        `📅 *Fecha:* ${data.fecha}\n` +
        `🕐 *Hora:* ${data.hora}\n` +
        `👥 *Personas:* ${data.personas}\n` +
        `📱 *Teléfono:* ${data.telefono}` +
        (data.comentarios ? `\n💬 *Notas:* ${data.comentarios}` : '')

      const whatsappUrl = `${whatsappApiUrl}?phone=${whatsappPhone}&text=${encodeURIComponent(message)}&apikey=${whatsappApiKey}`

      try {
        await fetch(whatsappUrl)
      } catch (whatsappError) {
        console.error('Error enviando WhatsApp:', whatsappError)
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Reserva enviada correctamente'
    })

  } catch (error) {
    console.error('Error en API de reservas:', error)
    return NextResponse.json(
      { error: 'Error al procesar la reserva' },
      { status: 500 }
    )
  }
}