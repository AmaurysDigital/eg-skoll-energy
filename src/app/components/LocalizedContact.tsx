'use client'

import { useLanguage } from '../LanguageContext'

export default function LocalizedContact() {
  const { lang } = useLanguage()

  const t = lang === 'es'
    ? {
        title: 'Contáctanos',
        subtitle:
          '¿Tienes preguntas o deseas una cotización? Nuestro equipo estará encantado de ayudarte.',
        name: 'Nombre completo',
        email: 'Correo electrónico',
        message: 'Mensaje',
        send: 'Enviar mensaje',
        thanks:
          'Gracias por confiar en nosotros. Te responderemos lo antes posible.',
      }
    : {
        title: 'Contact Us',
        subtitle:
          'Do you have questions or want a quote? Our team will be happy to assist you.',
        name: 'Full name',
        email: 'Email address',
        message: 'Message',
        send: 'Send message',
        thanks:
          'Thank you for reaching out. We will get back to you as soon as possible.',
      }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20 py-24 bg-gradient-to-br from-emerald-100 via-white to-yellow-50 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-4">
        {t.title}
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-12">{t.subtitle}</p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg text-left border border-emerald-100"
      >
        <label className="block mb-4">
          <span className="text-gray-700">{t.name}</span>
          <input
            type="text"
            placeholder={t.name}
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">{t.email}</span>
          <input
            type="email"
            placeholder={t.email}
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
            required
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700">{t.message}</span>
          <textarea
            placeholder={t.message}
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:ring-2 focus:ring-emerald-500 outline-none"
            required
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-emerald-700 transition"
        >
          {t.send}
        </button>

        <p className="text-center text-gray-500 text-sm mt-6">{t.thanks}</p>
      </form>
    </main>
  )
}
