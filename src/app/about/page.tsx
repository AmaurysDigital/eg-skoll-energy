'use client'
import { useLanguage } from '../LanguageContext'

export const metadata = {
  title: "Nosotros | EG Sköll Energy",
  description:
    "En EG Sköll Energy creemos en un futuro impulsado por la energía limpia. Nuestro equipo de ingenieros y técnicos combina innovación, experiencia y sostenibilidad.",
  keywords: [
    "quienes somos",
    "equipo Sköll Energy",
    "ingenieros solares",
    "energía limpia",
    "sostenibilidad",
  ],
  openGraph: {
    title: "Nosotros | EG Sköll Energy",
    description:
      "Equipo de ingenieros expertos en energía solar comprometidos con el medio ambiente y la innovación tecnológica.",
    url: "https://egskollenergy.com/about",
    images: ["/Logo2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conoce a EG Sköll Energy",
    description:
      "Equipo multidisciplinario dedicado a impulsar la energía solar sostenible en América Latina.",
    images: ["/Logo2.png"],
  },
}


export default function About() {
  const { lang } = useLanguage()

  const t = {
    es: {
      title: 'Sobre Nosotros',
      subtitle: 'Energía solar impulsada por innovación y compromiso sostenible.',
      paragraph1:
        'En Sköll Energy creemos en un futuro impulsado por la energía limpia y accesible. Nuestro equipo combina tecnología avanzada con un compromiso genuino por la sostenibilidad, ofreciendo soluciones solares que reducen costos y protegen el planeta.',
      paragraph2:
        'Trabajamos con la visión de un futuro más limpio, eficiente y conectado con la naturaleza. Nuestra misión es ofrecer soluciones de energía solar accesibles y de alta calidad, adaptadas a las necesidades de cada cliente.',
      paragraph3:
        'Nuestro equipo está formado por ingenieros y técnicos con amplia experiencia en el diseño, instalación y mantenimiento de sistemas solares, garantizando proyectos confiables, seguros y de gran impacto energético.',
    },
    en: {
      title: 'About Us',
      subtitle: 'Solar energy driven by innovation and sustainable commitment.',
      paragraph1:
        'At Sköll Energy, we believe in a future powered by clean and accessible energy. Our team combines advanced technology with a genuine commitment to sustainability, offering solar solutions that reduce costs and protect the planet.',
      paragraph2:
        'We work with the vision of a cleaner, more efficient, and nature-connected future. Our mission is to deliver accessible, high-quality solar energy solutions tailored to each client’s needs.',
      paragraph3:
        'Our team is made up of engineers and technicians with extensive experience in the design, installation, and maintenance of solar systems, ensuring reliable, safe projects with meaningful energy impact.',
    },
  }[lang]

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-20 bg-gradient-to-br from-emerald-100 via-white to-yellow-50">
      <h1 className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-3">{t.title}</h1>
      <p className="text-base sm:text-lg text-gray-700 mb-10">{t.subtitle}</p>

      <div className="max-w-3xl text-gray-700 space-y-6 leading-relaxed text-justify bg-white/70 p-6 sm:p-8 rounded-2xl shadow-md">
        <p>{t.paragraph1}</p>
        <p>{t.paragraph2}</p>
        <p>{t.paragraph3}</p>
      </div>
    </main>
  )
}
