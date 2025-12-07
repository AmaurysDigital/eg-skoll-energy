import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const CONTACT_RECIPIENT = process.env.CONTACT_RECIPIENT_EMAIL || 'aaa4buy@gmail.com'

export async function POST(req: Request) {
  try {
    const { name, email, message, lang } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing fields' },
        { status: 400 },
      )
    }

    const subject =
      lang === 'es'
        ? `Nuevo mensaje de contacto - EG Sköll Energy`
        : `New contact message - EG Sköll Energy`

    const text = `
Nombre: ${name}
Email: ${email}

Mensaje:
${message}
    `.trim()

    await resend.emails.send({
      from: 'EG Sköll Energy <no-reply@egskollenergy.com>',
      to: CONTACT_RECIPIENT,
      reply_to: email,
      subject,
      text,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Error sending contact email:', error)
    return NextResponse.json(
      { ok: false, error: 'Internal error' },
      { status: 500 },
    )
  }
}
