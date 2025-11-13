'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useLanguage } from '../LanguageContext'

export default function Navbar() {
  const { lang } = useLanguage()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isEN = pathname?.startsWith('/en')
  const current = isEN ? pathname.replace('/en', '') || '/' : pathname

  // URLs bilingües
  const hrefES = current
  const hrefEN = current === '/' ? '/en' : `/en${current}`

  // Textos por idioma
  const t = {
    es: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
    },
  }[lang]

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Image
            src="/Logo2.png"
            alt="Sköll Energy Logo"
            width={40}
            height={40}
            priority
          />
          <h1 className="text-xl md:text-2xl font-bold text-emerald-600">
            Sköll Energy
          </h1>
        </div>

        {/* BOTÓN MÓVIL */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 border border-emerald-600 rounded text-emerald-600"
        >
          ☰
        </button>

        {/* MENÚ */}
        <ul
          className={`flex-col md:flex md:flex-row md:gap-6 text-sm font-medium absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-[70px] overflow-hidden transition-all duration-500 ease-in-out ${
            open
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 md:opacity-100'
          }`}
        >
          <li className="py-2 md:py-0 hover:text-emerald-600">
            <Link href={isEN ? '/en' : '/'}>{t.home}</Link>
          </li>
          <li className="py-2 md:py-0 hover:text-emerald-600">
            <Link href={isEN ? '/en/about' : '/about'}>{t.about}</Link>
          </li>
          <li className="py-2 md:py-0 hover:text-emerald-600">
            <Link href={isEN ? '/en/services' : '/services'}>{t.services}</Link>
          </li>
          <li className="py-2 md:py-0 hover:text-emerald-600">
            <Link href={isEN ? '/en/projects' : '/projects'}>{t.projects}</Link>
          </li>
          <li className="py-2 md:py-0 hover:text-emerald-600">
            <Link href={isEN ? '/en/contact' : '/contact'}>{t.contact}</Link>
          </li>

          {/* Mobile switch */}
          <div className="flex md:hidden justify-center gap-2 py-3 border-t border-gray-200 mt-2">
            <Link
              href={hrefES}
              className={`px-2 py-1 rounded ${
                !isEN
                  ? 'bg-emerald-600 text-white'
                  : 'border border-emerald-600 text-emerald-600'
              }`}
            >
              🇪🇸
            </Link>

            <Link
              href={hrefEN}
              className={`px-2 py-1 rounded ${
                isEN
                  ? 'bg-emerald-600 text-white'
                  : 'border border-emerald-600 text-emerald-600'
              }`}
            >
              🇺🇸
            </Link>
          </div>
        </ul>

        {/* Desktop switch */}
        <div className="hidden md:flex gap-2">
          <Link
            href={hrefES}
            className={`px-2 py-1 rounded ${
              !isEN
                ? 'bg-emerald-600 text-white'
                : 'border border-emerald-600 text-emerald-600'
            }`}
          >
            🇪🇸
          </Link>

          <Link
            href={hrefEN}
            className={`px-2 py-1 rounded ${
              isEN
                ? 'bg-emerald-600 text-white'
                : 'border border-emerald-600 text-emerald-600'
            }`}
          >
            🇺🇸
          </Link>
        </div>
      </div>
    </nav>
  )
}
