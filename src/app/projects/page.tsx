
import { useLanguage } from '../LanguageContext'
import Image from 'next/image'

export const metadata = {
  title: "Proyectos | EG Sköll Energy",
  description:
    "Proyectos de energía solar desarrollados en hogares, industrias y comunidades. Conoce nuestro impacto sostenible y tecnológico.",
  keywords: [
    "proyectos solares",
    "energía verde",
    "Sköll Energy",
    "casos de éxito",
    "energía sostenible",
  ],
  openGraph: {
    title: "Proyectos | EG Sköll Energy",
    description:
      "Descubre nuestros proyectos solares en funcionamiento. Eficiencia, innovación y compromiso ambiental.",
    url: "https://egskollenergy.com/projects",
    images: ["/Logo2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyectos solares destacados | EG Sköll Energy",
    description:
      "Instalaciones solares realizadas con tecnología de punta y enfoque ecológico.",
    images: ["/Logo2.png"],
  },
}


export default function Projects() {
  const { lang } = useLanguage()

  const t = {
    es: {
      title: 'Proyectos Destacados',
      desc: 'En Sköll Energy hemos participado en proyectos que reflejan nuestro compromiso con la innovación y la sostenibilidad.',
      projects: [
        { img: '/project1.jpeg', title: 'Planta Solar Industrial', text: 'Sistema solar de 500 kW en planta de producción con reducción del 40% en consumo.' },
        { img: '/project2.jpeg', title: 'Complejo Residencial Verde', text: 'Techos solares para viviendas sostenibles con autonomía energética.' },
        { img: '/project3.jpeg', title: 'Centro Comercial Eco-Eficiente', text: 'Sistema híbrido solar con baterías inteligentes.' },
      ],
    },
    en: {
      title: 'Featured Projects',
      desc: 'At Sköll Energy, we’ve developed projects that embody our commitment to innovation and sustainability.',
      projects: [
        { img: '/project1.jpeg', title: 'Industrial Solar Plant', text: '500 kW solar system for a manufacturing facility reducing 40% power costs.' },
        { img: '/project2.jpeg', title: 'Green Residential Complex', text: 'Solar rooftops across sustainable homes achieving energy autonomy.' },
        { img: '/project3.jpeg', title: 'Eco-Efficient Mall', text: 'Hybrid solar + battery system for an eco-friendly commercial center.' },
      ],
    },
  }[lang]

  return (
    <main className="min-h-screen flex flex-col items-center text-center px-4 sm:px-6 md:px-8 py-20 bg-gradient-to-br from-emerald-100 via-white to-yellow-50">
      <h1 className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-4">{t.title}</h1>
      <p className="max-w-2xl text-gray-700 mb-10">{t.desc}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
        {t.projects.map((proj, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 border border-emerald-100">
            <div className="relative w-full h-52">
              <Image src={proj.img} alt={proj.title} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">{proj.title}</h3>
              <p className="text-gray-600 text-sm">{proj.text}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

