'use client'

import { useLanguage } from '../LanguageContext'

export default function LocalizedAbout() {
  const { lang } = useLanguage()

  const t = lang === 'es'
    ? {
        title: 'Sobre nosotros',
        intro:
          'En Sköll Energy creemos en un futuro impulsado por la energía limpia y accesible.',
        text1:
          'Nuestro equipo de ingenieros y técnicos combina tecnología avanzada con un compromiso genuino por la sostenibilidad, ofreciendo soluciones solares que reducen costos y protegen el planeta.',
        text2:
          'Nos enorgullece trabajar con altos estándares de calidad, integrando innovación, precisión técnica y respeto por el medio ambiente en cada proyecto que emprendemos.',
      }
    : {
        title: 'About us',
        intro:
          'At Sköll Energy, we believe in a future powered by clean and accessible energy.',
        text1:
          'Our team of engineers and technicians combines advanced technology with a genuine commitment to sustainability, offering solar solutions that reduce costs and protect the planet.',
        text2:
          'We take pride in working with high-quality standards, integrating innovation, technical precision, and environmental respect into every project we undertake.',
      }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20 py-24 bg-gradient-to-br from-emerald-100 via-white to-yellow-50 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-6">
        {t.title}
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-4">{t.intro}</p>
      <p className="text-gray-600 max-w-3xl mb-4">{t.text1}</p>
      <p className="text-gray-600 max-w-3xl">{t.text2}</p>
    </main>
  )
}
