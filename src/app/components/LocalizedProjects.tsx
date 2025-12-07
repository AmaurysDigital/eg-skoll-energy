'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../LanguageContext'

const IMAGES_PER_PROJECT = 5

type Project = {
  id: string
  folder: string
  baseName: string
  name: string
  desc: string
}

type TranslatedContent = {
  title: string
  subtitle: string
  projects: Project[]
}

const contentByLang: Record<'es' | 'en', TranslatedContent> = {
  es: {
    title: 'Nuestros Proyectos',
    subtitle:
      'Casos de éxito que demuestran el poder de la energía solar aplicada con eficiencia y compromiso.',
    projects: [
      {
        id: 'carlos-rojas',
        folder: 'CarlosRojas',
        baseName: 'CarlosRojas',
        name: 'Instalación residencial en Carlos Rojas, Matanzas',
        desc: 'Sistema solar de 10 kW para vivienda familiar, con inversor PowM, batería Felicity Solar de 15 kWh y 16 paneles de 535 W (8,56 kW). Clientes muy satisfechos y alta reducción en la factura eléctrica.',
      },
      {
        id: 'la-habana',
        folder: 'LaHabana',
        baseName: 'LaHabana',
        name: 'Instalación residencial en La Habana',
        desc: 'Proyecto de autoconsumo para vivienda en La Habana, diseñado para maximizar el aprovechamiento de la radiación solar y brindar independencia energética.',
      },
      {
        id: 'ciego-de-avila',
        folder: 'CiegoDeAvila',
        baseName: 'CiegoDeAvila',
        name: 'Planta solar industrial en Ciego de Ávila',
        desc: 'Sistema de 250 kW para una instalación industrial, contribuyendo a reducir más de 180 toneladas de CO₂ al año y garantizando un suministro estable y eficiente.',
      },
    ],
  },
  en: {
    title: 'Our Projects',
    subtitle:
      'Success stories that demonstrate the power of solar energy applied with efficiency and commitment.',
    projects: [
      {
        id: 'carlos-rojas',
        folder: 'CarlosRojas',
        baseName: 'CarlosRojas',
        name: 'Residential Installation in Carlos Rojas, Matanzas',
        desc: '10 kW solar system for a family home, with a PowM inverter, 15 kWh Felicity Solar battery, and 16 x 535 W panels (8.56 kW). Very satisfied customers and a significant reduction in their electricity bill.',
      },
      {
        id: 'la-habana',
        folder: 'LaHabana',
        baseName: 'LaHabana',
        name: 'Residential Installation in Havana',
        desc: 'Self-consumption solar project for a home in Havana, designed to maximize solar resource usage and provide greater energy independence.',
      },
      {
        id: 'ciego-de-avila',
        folder: 'CiegoDeAvila',
        baseName: 'CiegoDeAvila',
        name: 'Industrial Solar Plant in Ciego de Ávila',
        desc: '250 kW solar system for an industrial facility, helping to reduce over 180 tons of CO₂ per year and ensuring a stable, efficient power supply.',
      },
    ],
  },
}

export default function LocalizedProjects() {
  const { lang } = useLanguage()
  const currentLang: 'es' | 'en' = lang === 'es' ? 'es' : 'en'
  const t = contentByLang[currentLang]

  const [openProject, setOpenProject] = useState<Project | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleOpenProject = (project: Project) => {
    setOpenProject(project)
    setCurrentIndex(0)
  }

  const handleCloseModal = () => {
    setOpenProject(null)
    setCurrentIndex(0)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES_PER_PROJECT)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? IMAGES_PER_PROJECT - 1 : prev - 1,
    )
  }

  const getImageSrc = (project: Project, index: number) => {
    // index 0 → foto 1, index 1 → foto 2, etc.
    return `/${project.folder}/${project.baseName}${index + 1}.jpg`
  }

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20 py-24 bg-gradient-to-br from-emerald-100 via-white to-yellow-50 text-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-4">
          {t.title}
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-12">{t.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
          {t.projects.map((proj) => (
            <button
              key={proj.id}
              type="button"
              onClick={() => handleOpenProject(proj)}
              className="p-6 rounded-2xl shadow-md bg-white border border-emerald-100 hover:shadow-lg hover:-translate-y-1 transition flex flex-col text-left group"
            >
              {/* Miniatura (primera foto del proyecto) */}
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={getImageSrc(proj, 0)}
                  alt={proj.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h2 className="text-2xl font-semibold text-emerald-600 mb-2">
                {proj.name}
              </h2>
              <p className="text-gray-600 flex-1">{proj.desc}</p>

              <span className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-600 group-hover:text-emerald-700">
                {currentLang === 'es'
                  ? 'Ver fotos del proyecto'
                  : 'View project photos'}
                <span className="ml-1">↗</span>
              </span>
            </button>
          ))}
        </div>
      </main>

      {/* Modal de galería */}
      {openProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full p-4 sm:p-6 md:p-8 shadow-xl relative">
            {/* Botón cerrar */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label={
                currentLang === 'es' ? 'Cerrar galería' : 'Close gallery'
              }
            >
              ✕
            </button>

            <h2 className="text-2xl md:text-3xl font-semibold text-emerald-700 mb-2 pr-10">
              {openProject.name}
            </h2>
            <p className="text-gray-600 mb-4 md:mb-6">{openProject.desc}</p>

            {/* Imagen principal con controles */}
            <div className="relative w-full h-64 sm:h-80 md:h-[26rem] mb-4 md:mb-6 overflow-hidden rounded-2xl">
              <Image
                src={getImageSrc(openProject, currentIndex)}
                alt={`${openProject.name} - foto ${currentIndex + 1}`}
                fill
                className="object-cover"
              />

              {/* Controles izquierda/derecha */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full h-10 w-10 flex items-center justify-center"
                aria-label={
                  currentLang === 'es' ? 'Foto anterior' : 'Previous photo'
                }
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full h-10 w-10 flex items-center justify-center"
                aria-label={
                  currentLang === 'es' ? 'Foto siguiente' : 'Next photo'
                }
              >
                ›
              </button>

              {/* Indicador */}
              <div className="absolute bottom-3 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                {currentIndex + 1} / {IMAGES_PER_PROJECT}
              </div>
            </div>

            {/* Tira de miniaturas */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {Array.from({ length: IMAGES_PER_PROJECT }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative h-16 w-24 rounded-lg overflow-hidden border ${
                    idx === currentIndex
                      ? 'border-emerald-500 ring-2 ring-emerald-300'
                      : 'border-gray-200 hover:border-emerald-400'
                  } flex-shrink-0`}
                  aria-label={
                    currentLang === 'es'
                      ? `Ver foto ${idx + 1}`
                      : `View photo ${idx + 1}`
                  }
                >
                  <Image
                    src={getImageSrc(openProject, idx)}
                    alt={`${openProject.name} miniatura ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* CTA: Solicitar proyecto similar */}
            <div className="mt-6 flex justify-end">
              <Link
                href={`${
                  currentLang === 'es' ? '/contacto' : '/en/contact'
                }?project=${encodeURIComponent(openProject.id)}`}
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white transition"
              >
                {currentLang === 'es'
                  ? 'Solicitar un proyecto similar'
                  : 'Request a similar project'}
                <span className="ml-2">📩</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
