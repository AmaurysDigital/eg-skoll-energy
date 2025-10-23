'use client'

import { useLanguage } from '../LanguageContext'

export default function LocalizedServices() {
  const { lang } = useLanguage()

  const t = lang === 'es'
    ? {
        title: 'Nuestros Servicios',
        subtitle:
          'Soluciones solares integrales diseñadas para maximizar eficiencia y sostenibilidad.',
        list: [
          {
            name: 'Diseño e ingeniería',
            desc: 'Estudio técnico personalizado para garantizar el mejor rendimiento energético según las condiciones del sitio.',
          },
          {
            name: 'Instalación profesional',
            desc: 'Montaje certificado con equipos de alta calidad, cumpliendo estándares internacionales de seguridad.',
          },
          {
            name: 'Mantenimiento preventivo y correctivo',
            desc: 'Revisiones periódicas y monitoreo constante para asegurar la máxima eficiencia del sistema.',
          },
          {
            name: 'Sistemas de monitoreo inteligente',
            desc: 'Supervisión en tiempo real del consumo y generación, accesible desde cualquier dispositivo.',
          },
        ],
      }
    : {
        title: 'Our Services',
        subtitle:
          'Comprehensive solar solutions designed to maximize efficiency and sustainability.',
        list: [
          {
            name: 'Design and Engineering',
            desc: 'Custom technical analysis to ensure optimal energy performance for every site condition.',
          },
          {
            name: 'Professional Installation',
            desc: 'Certified assembly using top-quality equipment and following international safety standards.',
          },
          {
            name: 'Preventive and Corrective Maintenance',
            desc: 'Regular inspections and continuous monitoring to maintain maximum system efficiency.',
          },
          {
            name: 'Smart Monitoring Systems',
            desc: 'Real-time supervision of energy generation and consumption from any device.',
          },
        ],
      }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20 py-24 bg-gradient-to-br from-emerald-100 via-white to-yellow-50 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-4">
        {t.title}
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-12">{t.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
        {t.list.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-md bg-white border border-emerald-100 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-emerald-600 mb-2">
              {service.name}
            </h2>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </main>
  )
}