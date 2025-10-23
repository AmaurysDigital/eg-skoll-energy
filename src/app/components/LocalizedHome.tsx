'use client'

import { useLanguage } from '../LanguageContext'
import Link from 'next/link'

export default function LocalizedHome() {
  const { lang } = useLanguage()

  const t = lang === 'es'
    ? {
        title: 'Energía solar para un futuro más limpio y sostenible',
        text: 'En Sköll Energy diseñamos e instalamos soluciones solares eficientes para hogares y empresas en todo el mundo.',
        button: 'Contáctanos',
      }
    : {
        title: 'Solar energy for a cleaner and sustainable future',
        text: 'At Sköll Energy, we design and install efficient solar solutions for homes and businesses around the world.',
        button: 'Contact us',
      }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-100 via-white to-yellow-50 text-gray-800 flex flex-col items-center justify-center text-center py-24 px-8">
      <h2 className="text-5xl font-bold text-gray-800 max-w-2xl leading-tight">
        {t.title}
      </h2>
      <p className="mt-6 text-lg text-gray-600 max-w-xl">
        {t.text}
      </p>
      <Link
        href="/contact"
        className="mt-8 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-md hover:bg-emerald-700 transition"
      >
        {t.button}
      </Link>
    </main>
  )
}
