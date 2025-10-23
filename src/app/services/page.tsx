
import { useLanguage } from '../LanguageContext'

export const metadata = {
  title: "Servicios | EG Sköll Energy",
  description:
    "Diseñamos, instalamos y mantenemos sistemas solares fotovoltaicos. Servicios adaptados a hogares, industrias y empresas comprometidas con la sostenibilidad.",
  keywords: [
    "servicios solares",
    "instalación de paneles solares",
    "mantenimiento solar",
    "energía renovable",
    "sistemas fotovoltaicos",
  ],
  openGraph: {
    title: "Servicios solares | EG Sköll Energy",
    description:
      "Instalaciones solares residenciales, comerciales e industriales con tecnología avanzada y soporte integral.",
    url: "https://egskollenergy.com/services",
    images: ["/Logo2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios solares | EG Sköll Energy",
    description:
      "Soluciones solares eficientes adaptadas a cada necesidad. Desde el diseño hasta la puesta en marcha.",
    images: ["/Logo2.png"],
  },
}


export default function Services() {
  const { lang } = useLanguage()

  const t = {
    es: {
      title: 'Nuestros Servicios',
      desc: 'Ofrecemos soluciones integrales de energía solar adaptadas a las necesidades de cada cliente. Nuestro compromiso es la eficiencia, sostenibilidad y ahorro energético.',
      cards: [
        { icon: '☀️', title: 'Instalación de Paneles Solares', text: 'Diseñamos e instalamos sistemas solares residenciales, comerciales e industriales con la más alta eficiencia.' },
        { icon: '🛠️', title: 'Mantenimiento y Monitoreo', text: 'Aseguramos el óptimo rendimiento de tus sistemas solares mediante mantenimiento preventivo y monitoreo remoto.' },
        { icon: '💡', title: 'Consultoría Energética', text: 'Te ayudamos a analizar tu consumo y desarrollar estrategias sostenibles para maximizar el ahorro energético.' },
      ],
    },
    en: {
      title: 'Our Services',
      desc: 'We offer comprehensive solar energy solutions tailored to each client’s needs. Our commitment is efficiency, sustainability, and energy savings.',
      cards: [
        { icon: '☀️', title: 'Solar Panel Installation', text: 'We design and install residential, commercial, and industrial solar systems with the highest efficiency.' },
        { icon: '🛠️', title: 'Maintenance & Monitoring', text: 'We ensure your solar systems perform at their best through preventive maintenance and remote monitoring.' },
        { icon: '💡', title: 'Energy Consulting', text: 'We help you analyze your energy usage and develop sustainable strategies to maximize savings.' },
      ],
    },
  }[lang]

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-20 bg-gradient-to-br from-emerald-100 via-white to-yellow-50">
      <h1 className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-4">{t.title}</h1>
      <p className="max-w-2xl text-gray-700 mb-12">{t.desc}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
        {t.cards.map((card, i) => (
          <div key={i} className="p-6 bg-white rounded-2xl shadow-md border border-emerald-100 hover:shadow-xl transition-transform hover:-translate-y-1">
            <div className="text-5xl mb-3">{card.icon}</div>
            <h3 className="text-lg font-semibold text-emerald-700 mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm">{card.text}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
