'use client'

import { useLanguage } from '../LanguageContext'

export default function LocalizedAbout() {
  const { lang } = useLanguage()

  const t = lang === 'es'
    ? {
        title: 'Sobre nosotros',
        intro:
          'En Sköll Energy Group creemos en un futuro impulsado por la energía limpia y accesible.',
        text1:
          'EG SKRÖLL ENERGY GROUP es un grupo que se crea como espacio de colaboración, asesoría e intercambio que surge de varios actores económicos no estatales con proyección al sector de las tecnologías renovables y la construcción, con el objetivo de establecer sinérgias y protocolos de trabajo que permitan dar un servicio mas eficiente y reducir costes de logística, almacenamiento, materia prima y capacitación que redunden en mejores precios de cara al cliente.',
        text2:
          'El grupo, también se encarga de la divulgación y promoción de las ventajas y oportunidades que ofrecen las tecnologías de energía renovable para la sociedad en su conjunto. También busca facilitar a sus miembros las herramientas técnicas necesarias para ejercer con mayor profesionalidad su trabajo.',
      }
    : {
        title: 'About us',
        intro:
          'At Sköll Energy, we believe in a future powered by clean and accessible energy.',
        text1:
          'EG SKRÖLL ENERGY GROUP was created as a collaborative space for consulting, cooperation, and knowledge exchange. It brings together several non-state economic actors with a strong focus on the renewable energy and construction sectors, with the goal of establishing synergies and work protocols that enable more efficient service, while reducing logistics, storage, raw material, and training costs — ultimately allowing for better prices for the client.',
        text2:
          'The group also promotes the dissemination and awareness of the advantages and opportunities that renewable energy technologies offer to society as a whole. Additionally, it seeks to provide its members with the technical tools necessary to perform their work with greater professionalism.',
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
