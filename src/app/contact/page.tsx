'use client'
import { useLanguage } from '../LanguageContext'

export const metadata = {
  title: "Contacto | EG Sköll Energy",
  description:
    "Contáctanos para asesoramiento personalizado en energía solar. Nuestro equipo responderá tus consultas sobre proyectos, precios y mantenimiento.",
  keywords: [
    "contacto Sköll Energy",
    "asesoría solar",
    "energía limpia",
    "consultoría fotovoltaica",
  ],
  openGraph: {
    title: "Contacto | EG Sköll Energy",
    description:
      "Solicita tu cotización solar y únete a la transición energética con EG Sköll Energy.",
    url: "https://egskollenergy.com/contact",
    images: ["/Logo2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contáctanos | EG Sköll Energy",
    description:
      "Comunícate con EG Sköll Energy y da el primer paso hacia un futuro sostenible.",
    images: ["/Logo2.png"],
  },
}


export default function Contact() {
  const { lang } = useLanguage()

  const t = {
    es: {
      title: 'Contáctanos',
      text: 'Estamos listos para ayudarte con soluciones solares a tu medida.',
      button: 'Enviar mensaje',
    },
    en: {
      title: 'Contact Us',
      text: 'We are ready to help you with custom solar solutions.',
      button: 'Send Message',
    },
  }[lang]

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-20 bg-gradient-to-br from-emerald-100 via-white to-yellow-50">
      <h1 className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-4">{t.title}</h1>
      <p className="text-gray-700 mb-8 max-w-md">{t.text}</p>

      <form className="flex flex-col gap-4 w-full max-w-sm bg-white/80 p-6 rounded-2xl shadow-md">
        <input type="text" placeholder={lang === 'es' ? 'Nombre' : 'Name'} className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
        <input type="email" placeholder={lang === 'es' ? 'Correo electrónico' : 'Email'} className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
        <textarea rows={4} placeholder={lang === 'es' ? 'Mensaje' : 'Message'} className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
        <button type="submit" className="bg-emerald-600 text-white font-semibold py-2 rounded hover:bg-emerald-700 transition">
          {t.button}
        </button>
      </form>
    </main>
  )
}
