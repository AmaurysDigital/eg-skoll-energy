
import { useLanguage } from './LanguageContext'

export const metadata = {
  title: "EG Sköll Energy | Energía solar sostenible",
  description:
    "EG Sköll Energy ofrece soluciones solares eficientes para hogares e industrias. Diseño, instalación y mantenimiento de sistemas solares de alta calidad para un futuro limpio y sostenible.",
  keywords: [
    "energía solar",
    "paneles solares",
    "energía verde",
    "Sköll Energy",
    "instalación de paneles solares",
    "energía renovable",
  ],
  openGraph: {
    title: "EG Sköll Energy | Energía solar sostenible",
    description:
      "Transforma tu energía con soluciones solares de alta eficiencia. EG Sköll Energy impulsa un futuro más limpio.",
    url: "https://egskollenergy.com",
    siteName: "EG Sköll Energy",
    images: [
      {
        url: "/Logo2.png",
        width: 800,
        height: 600,
        alt: "Logo EG Sköll Energy",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EG Sköll Energy | Energía solar sostenible",
    description:
      "Soluciones solares eficientes para hogares y empresas. Energía limpia, moderna y sostenible.",
    images: ["/Logo2.png"],
  },
}


export default function Home() {
  const { lang } = useLanguage()

  const t = {
    es: {
      title: 'Energía solar para un futuro más limpio y sostenible',
      text: 'En Sköll Energy diseñamos e instalamos soluciones solares eficientes para hogares y empresas en todo el mundo.',
      button: 'Contáctanos',
    },
    en: {
      title: 'Solar energy for a cleaner and sustainable future',
      text: 'At Sköll Energy, we design and install efficient solar solutions for homes and businesses worldwide.',
      button: 'Contact Us',
    },
  }[lang]

  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-8 bg-gradient-to-br from-emerald-100 via-white to-yellow-50">
      <h2 className="text-5xl font-bold text-gray-800 max-w-2xl leading-tight">{t.title}</h2>
      <p className="mt-6 text-lg text-gray-600 max-w-xl">{t.text}</p>
      <button className="mt-8 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-md hover:bg-emerald-700 transition">
        {t.button}
      </button>
    </section>
  )
}
