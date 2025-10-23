'use client'

import { useLanguage } from '../LanguageContext'

export default function LocalizedProjects() {
  const { lang } = useLanguage()

  const t = lang === 'es'
    ? {
        title: 'Nuestros Proyectos',
        subtitle:
          'Casos de éxito que demuestran el poder de la energía solar aplicada con eficiencia y compromiso.',
        projects: [
          {
            name: 'Instalación residencial en Santo Domingo',
            desc: 'Sistema de 5 kW para vivienda familiar con ahorro energético del 70% en consumo mensual.',
          },
          {
            name: 'Planta solar industrial en Santiago',
            desc: 'Proyecto de 250 kW diseñado para una planta de procesamiento, reduciendo 180 toneladas de CO₂ anuales.',
          },
          {
            name: 'Energía comunitaria en La Romana',
            desc: 'Implementación de microred solar para una comunidad rural, beneficiando a más de 40 familias.',
          },
        ],
      }
    : {
        title: 'Our Projects',
        subtitle:
          'Success stories that demonstrate the power of solar energy applied with efficiency and commitment.',
        projects: [
          {
            name: 'Residential Installation in Santo Domingo',
            desc: '5 kW home solar system achieving 70% reduction in monthly energy consumption.',
          },
          {
            name: 'Industrial Solar Plant in Santiago',
            desc: '250 kW project for a manufacturing facility, reducing over 180 tons of CO₂ annually.',
          },
          {
            name: 'Community Energy in La Romana',
            desc: 'Solar microgrid powering a rural community, providing clean energy to over 40 families.',
          },
        ],
      }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20 py-24 bg-gradient-to-br from-emerald-100 via-white to-yellow-50 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-4">
        {t.title}
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-12">{t.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
        {t.projects.map((proj, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-md bg-white border border-emerald-100 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-emerald-600 mb-2">
              {proj.name}
            </h2>
            <p className="text-gray-600">{proj.desc}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
