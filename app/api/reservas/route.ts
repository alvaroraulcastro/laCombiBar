import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

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

function buildEmailMessage(data: ReservationData, isHtml: boolean): string {
  const separator = isHtml ? '<br>' : '\n'
  const strong = (text: string) => isHtml ? `<strong>${text}</strong>` : text

  return `🍸 Nueva Reserva - La Combi Bar${separator}${separator}` +
    `${strong('👤 Nombre:')} ${data.nombre}${separator}` +
    `${strong('📧 Email:')} ${data.email}${separator}` +
    `${strong('📱 Teléfono:')} ${data.telefono}${separator}` +
    `${strong('📅 Fecha:')} ${data.fecha}${separator}` +
    `${strong('🕐 Hora:')} ${data.hora}${separator}` +
    `${strong('👥 Personas:')} ${data.personas}` +
    (data.comentarios ? `${separator}${separator}${strong('💬 Notas:')} ${data.comentarios}` : '')
}

async function sendWhatsApp(data: ReservationData): Promise<void> {
  const whatsappApiUrl = process.env.WHATSAPP_API_URL
  const whatsappPhone = process.env.WHATSAPP_PHONE
  const whatsappApiKey = process.env.WHATSAPP_API_KEY

  if (!whatsappApiUrl || !whatsappPhone || !whatsappApiKey) {
    throw new Error('WhatsApp not configured')
  }

  const message = `🍸 *Nueva Reserva - La Combi Bar*%0A%0A` +
    `👤 *Nombre:* ${encodeURIComponent(data.nombre)}%0A` +
    `📧 *Email:* ${encodeURIComponent(data.email)}%0A` +
    `📱 *Teléfono:* ${encodeURIComponent(data.telefono)}%0A` +
    `📅 *Fecha:* ${encodeURIComponent(data.fecha)}%0A` +
    `🕐 *Hora:* ${encodeURIComponent(data.hora)}%0A` +
    `👥 *Personas:* ${encodeURIComponent(data.personas)}` +
    (data.comentarios ? `%0A%0A💬 *Notas:* ${encodeURIComponent(data.comentarios)}` : '')

  const whatsappUrl = `${whatsappApiUrl}?phone=${whatsappPhone}&text=${message}&apikey=${whatsappApiKey}`

  await fetch(whatsappUrl)
}

async function sendEmail(data: ReservationData): Promise<void> {
  const apiKey = process.env.SENDGRID_API_KEY
  const destinatario = process.env.SENDGRID_DESTINATARIO
  const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'reservas@lacombibar.com'
  const fromName = process.env.SENDGRID_FROM_NAME || 'La Combi Bar'

  if (!apiKey || !destinatario) {
    throw new Error('SendGrid not configured')
  }

  sgMail.setApiKey(apiKey)

  const msg = {
    to: destinatario,
    from: `${fromName} <${fromEmail}>`,
    subject: `🍸 Nueva Reserva - ${data.nombre} - ${data.fecha} ${data.hora}`,
    text: buildEmailMessage(data, false),
    html: buildEmailMessage(data, true),
  }

  await sgMail.send(msg)
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

    const [whatsappResult, emailResult] = await Promise.allSettled([
      sendWhatsApp(data).catch(err => { throw err }),
      sendEmail(data).catch(err => { throw err })
    ])

    const whatsappSuccess = whatsappResult.status === 'fulfilled'
    const emailSuccess = emailResult.status === 'fulfilled'

    if (whatsappResult.status === 'rejected') {
      console.error('WhatsApp error:', whatsappResult.reason)
    }
    if (emailResult.status === 'rejected') {
      console.error('Email error:', emailResult.reason)
    }

    if (!whatsappSuccess && !emailSuccess) {
      return NextResponse.json(
        { error: 'Error al enviar la reserva. Por favor intenta nuevamente.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: '¡Reserva enviada correctamente! El administrador del bar se comunicará con usted para confirmar la reserva.'
    })

  } catch (error) {
    console.error('Error en API de reservas:', error)
    return NextResponse.json(
      { error: 'Error al procesar la reserva. Por favor intenta nuevamente.' },
      { status: 500 }
    )
  }
}