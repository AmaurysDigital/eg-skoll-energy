'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../LanguageContext'

type Project = {
  id: string
  folder: string
  name: string
  desc: string
}

export default function LocalizedProjects() {
  const { lang } = useLanguage()
  const isEs = lang === 'es'

  const t = isEs
    ? {
        title: 'Nuestros Proyectos',
        subtitle:
          'Casos de éxito que demuestran el poder de la energía solar aplicada con eficiencia y compromiso.',
      }
    : {
        title: 'Our Projects',
        subtitle:
          'Success stories that demonstrate the power of solar energy applied with efficiency and commitment.',
      }

  const projects: Project[] = isEs
    ? [
        {
          id: 'carlos-rojas',
          folder: 'CarlosRojas',
          name: 'Instalación residencial en Carlos Rojas, Matanzas',
          desc: 'Sistema fotovoltaico de 10 kW para vivienda familiar, con inversor PowM y batería Felicity Solar de 15 kWh. 16 paneles de 535 W (8.56 kW). Clientes muy satisfechos con la estabilidad y el ahorro logrado.',
        },
        {
          id: 'la-habana',
          folder: 'LaHabana',
          name: 'Sistema residencial en La Habana',
          desc: 'Proyecto de autoconsumo para vivienda urbana, optimizado para alto consumo diurno. Reducción significativa de la factura eléctrica y respaldo ante cortes de servicio.',
        },
        {
          id: 'ciego-de-avila',
          folder: 'CiegoDeAvila',
          name: 'Planta solar en Ciego de Ávila',
          desc: 'Solución solar para instalación industrial/comercial, diseñada para operar con alta confiabilidad y reducir la huella de CO₂ año tras año.',
        },
      ]
    : [
        {
          id: 'carlos-rojas',
          folder: 'CarlosRojas',
          name: 'Residential Installation in Carlos Rojas, Matanzas',
          desc: '10 kW photovoltaic system for a family home, with a PowM inverter and a 15 kWh Felicity Solar battery. 16 x 535 W panels (8.56 kW). Very satisfied customers thanks to stability and energy savings.',
        },
        {
          id: 'la-habana',
          folder: 'LaHabana',
          name: 'Residential System in Havana',
          desc: 'Self-consumption project for an urban home, optimized for high daytime demand. Significant reduction of the electricity bill and backup during power outages.',
        },
        {
          id: 'ciego-de-avila',
          folder: 'CiegoDeAvila',
          name: 'Solar Plant in Ciego de Ávila',
          desc: 'Solar solution for an industrial/commercial facility, designed for high reliability and continuous CO₂ reduction year after year.',
        },
      ]

  // Ruta de contacto según idioma
  const contactHref = isEs ? '/contact' : '/en/contact'

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20 py-24 bg-gradient-to-br from-emerald-100 via-white to-yellow-50 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-4">
        {t.title}
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-12">{t.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {projects.map((proj) => {
          // Generamos las 5 imágenes: /CarIosRojas/CarlosRojas1.jpg ... 5
          const images = Array.from({ length: 5 }, (_, i) => {
            const index = i + 1
            return `/${proj.folder}/${proj.folder}${index}.jpg`
          })

          const mainImage = images[0]
          const thumbs = images.slice(1)

          return (
            <article
              key={proj.id}
              className="p-6 rounded-2xl shadow-md bg-white border border-emerald-100 hover:shadow-lg transition flex flex-col h-full"
            >
              {/* Imagen principal */}
              <div className="relative w-full h-52 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={mainImage}
                  alt={proj.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 mb-4">
                {thumbs.map((src, index) => (
                  <div
                    key={src}
                    className="relative flex-1 aspect-[4/3] overflow-hidden rounded-lg"
                  >
                    <Image
                      src={src}
                      alt={`${proj.name} - foto ${index + 2}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 10vw, 30vw"
                    />
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-semibold text-emerald-600 mb-2 text-left">
                {proj.name}
              </h2>
              <p className="text-gray-600 text-left flex-1">{proj.desc}</p>

              {/* CTA */}
              <div className="mt-6 flex justify-end">
                <Link
                  href={contactHref}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition"
                >
                  {isEs
                    ? 'Solicitar un proyecto similar'
                    : 'Request a similar project'}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </main>
  )
}
