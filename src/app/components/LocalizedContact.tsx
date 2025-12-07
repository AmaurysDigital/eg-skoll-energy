'use client'

import { useState } from 'react'
import { useLanguage } from '../LanguageContext'

export default function LocalizedContact() {
  const { lang } = useLanguage()

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle',
  )

  const t = lang === 'es'
    ? {
        title: 'Contáctanos',
        subtitle:
          '¿Tienes preguntas o deseas una cotización? Nuestro equipo estará encantado de ayudarte.',
        name: 'Nombre completo',
        email: 'Correo electrónico',
        message: 'Mensaje',
        send: 'Enviar mensaje',
        sending: 'Enviando...',
        success: 'Mensaje enviado correctamente. ¡Gracias por contactarnos!',
        error:
          'Ocurrió un error al enviar tu mensaje. Por favor, inténtalo nuevamente.',
        thanks:
          'Gracias por confiar en nosotros. Te responderemos lo antes posible.',
        whatsappCta: 'Escríbenos por WhatsApp',
      }
    : {
        title: 'Contact Us',
        subtitle:
          'Do you have questions or want a quote? Our team will be happy to assist you.',
        name: 'Full name',
        email: 'Email address',
        message: 'Message',
        send: 'Send message',
        sending: 'Sending...',
        success: 'Message sent successfully. Thank you for reaching out!',
        error: 'There was an error sending your message. Please try again.',
        thanks:
          'Thank you for reaching out. We will get back to you as soon as possible.',
        whatsappCta: 'Message us on WhatsApp',
      }

  // Si quieres usar env var:
  // const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''
  // Para simplificar, aquí podemos poner el número directamente:
  const rawNumber = '13051234567' // <-- pon aquí tu número real en formato internacional (solo dígitos)

  const defaultMessage =
    lang === 'es'
      ? 'Hola, me gustaría recibir información sobre un proyecto de energía solar.'
      : 'Hello, I would like to get information about a solar energy project.'

  const whatsappLink = rawNumber
    ? `https://wa.me/${rawNumber}?text=${encodeURIComponent(defaultMessage)}`
    : null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) {
        throw new Error('Request failed')
      }

      setStatus('success')
      form.reset()
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20 py-24 bg-gradient-to-br from-emerald-100 via-white to-yellow-50 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-4">
        {t.title}
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-8">{t.subtitle}</p>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg text-left border border-emerald-100"
      >
        <label className="block mb-4">
          <span className="text-gray-700">{t.name}</span>
          <input
            type="text"
            name="name"
            placeholder={t.name}
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">{t.email}</span>
          <input
            type="email"
            name="email"
            placeholder={t.email}
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
            required
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700">{t.message}</span>
          <textarea
            name="message"
            placeholder={t.message}
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:ring-2 focus:ring-emerald-500 outline-none"
            required
          ></textarea>
        </label>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-emerald-700 disabled:opacity-70 disabled:cursor-not-allowed transition"
        >
          {status === 'sending' ? t.sending : t.send}
        </button>

        {/* Mensaje de estado */}
        {status === 'success' && (
          <p className="text-center text-emerald-600 text-sm mt-4">
            {t.success}
          </p>
        )}
        {status === 'error' && (
          <p className="text-center text-red-600 text-sm mt-4">{t.error}</p>
        )}

        <p className="text-center text-gray-500 text-sm mt-6">{t.thanks}</p>
      </form>

      {/* Bloque WhatsApp */}
      {whatsappLink && (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-700 transition"
        >
          <span className="mr-2">📲</span>
          {t.whatsappCta}
        </a>
      )}
    </main>
  )
}
