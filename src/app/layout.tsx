'use client'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useLanguage, LanguageProvider } from './LanguageContext'

function Navbar() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)

  const nav = {
    es: { home: 'Inicio', about: 'Nosotros', services: 'Servicios', projects: 'Proyectos', contact: 'Contacto' },
    en: { home: 'Home', about: 'About', services: 'Services', projects: 'Projects', contact: 'Contact' },
  }[lang]

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo y título */}
        <div className="flex items-center gap-3">
          <Image src="/Logo2.png" alt="Sköll Energy Logo" width={40} height={40} />
          <h1 className="text-xl md:text-2xl font-bold text-emerald-600">Sköll Energy</h1>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 border border-emerald-600 rounded text-emerald-600"
        >
          ☰
        </button>

        {/* Menú principal */}
        <ul
          className={`flex-col md:flex md:flex-row md:gap-6 text-sm font-medium absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-[70px] overflow-hidden transition-all duration-500 ease-in-out ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:flex md:opacity-100'
          }`}
        >
          <li className="py-2 md:py-0 hover:text-emerald-600">
            <Link href="/">{nav.home}</Link>
          </li>
          <li className="py-2 md:py-0 hover:text-emerald-600">
            <Link href="/about">{nav.about}</Link>
          </li>
          <li className="py-2 md:py-0 hover:text-emerald-600">
            <Link href="/services">{nav.services}</Link>
          </li>
          <li className="py-2 md:py-0 hover:text-emerald-600">
            <Link href="/projects">{nav.projects}</Link>
          </li>
          <li className="py-2 md:py-0 hover:text-emerald-600">
            <Link href="/contact">{nav.contact}</Link>
          </li>

          {/* Selector de idioma dentro del menú móvil */}
          <div className="flex md:hidden justify-center gap-2 py-3 border-t border-gray-200 mt-2">
            <button
              onClick={() => setLang('es')}
              className={`px-2 py-1 rounded ${lang === 'es' ? 'bg-emerald-600 text-white' : 'border border-emerald-600 text-emerald-600'
                }`}
            >
              🇪🇸
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-emerald-600 text-white' : 'border border-emerald-600 text-emerald-600'
                }`}
            >
              🇺🇸
            </button>
          </div>
        </ul>


        {/* Selector de idioma en escritorio */}
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => setLang('es')}
            className={`px-2 py-1 rounded ${lang === 'es' ? 'bg-emerald-600 text-white' : 'border border-emerald-600 text-emerald-600'
              }`}
          >
            🇪🇸
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-emerald-600 text-white' : 'border border-emerald-600 text-emerald-600'
              }`}
          >
            🇺🇸
          </button>
        </div>
      </div>
    </nav>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-b from-white to-gray-50 text-gray-800">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <footer className="bg-gray-900 text-gray-200 py-8 mt-20 text-center">
            <p>
              © {new Date().getFullYear()} Sköll Energy — Energía solar para un mundo mejor / Solar energy for a better world.
            </p>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  )
}
