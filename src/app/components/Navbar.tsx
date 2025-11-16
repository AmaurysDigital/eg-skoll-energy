'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false)

  const isEN = pathname === '/en' || pathname.startsWith('/en/')

  const labels = isEN
    ? {
        home: 'Home',
        about: 'About',
        services: 'Services',
        projects: 'Projects',
        contact: 'Contact',
      }
    : {
        home: 'Inicio',
        about: 'Nosotros',
        services: 'Servicios',
        projects: 'Proyectos',
        contact: 'Contacto',
      }

  // Rutas base según idioma actual
  const base = isEN ? '/en' : ''

  // URLs para cambiar de idioma manteniendo la sección
  const pathWithoutEn = pathname.replace(/^\/en/, '') || '/'
  const hrefES = pathWithoutEn === '' ? '/' : pathWithoutEn
  const hrefEN =
    pathname === '/' || pathname === '/en'
      ? '/en'
      : pathname.startsWith('/en')
      ? pathname
      : `/en${pathname}`

  const menuItems = (
    <>
      <li className="py-2 md:py-0 hover:text-emerald-600">
        <Link href={isEN ? '/en' : '/'} onClick={() => setOpen(false)}>
          {labels.home}
        </Link>
      </li>
      <li className="py-2 md:py-0 hover:text-emerald-600">
        <Link href={`${base}/about`} onClick={() => setOpen(false)}>
          {labels.about}
        </Link>
      </li>
      <li className="py-2 md:py-0 hover:text-emerald-600">
        <Link href={`${base}/services`} onClick={() => setOpen(false)}>
          {labels.services}
        </Link>
      </li>
      <li className="py-2 md:py-0 hover:text-emerald-600">
        <Link href={`${base}/projects`} onClick={() => setOpen(false)}>
          {labels.projects}
        </Link>
      </li>
      <li className="py-2 md:py-0 hover:text-emerald-600">
        <Link href={`${base}/contact`} onClick={() => setOpen(false)}>
          {labels.contact}
        </Link>
      </li>
    </>
  )

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo + nombre */}
        <div className="flex items-center gap-3">
          <Image
            src="/logooficial.png"
            alt="Sköll Energy Logo"
            width={40}
            height={40}
            priority
          />
          <h1 className="text-xl md:text-2xl font-bold text-emerald-600">
            Sköll Energy Group
          </h1>
        </div>

        {/* Botón hamburguesa (móvil) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 border border-emerald-600 rounded text-emerald-600"
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {/* Menú en escritorio */}
        <ul className="hidden md:flex md:gap-6 text-sm font-medium">
          {menuItems}
        </ul>

        {/* Selector de idioma en escritorio */}
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

      {/* Menú desplegable en móvil */}
      {open && (
        <div className="md:hidden px-6 pb-4 border-t border-gray-200 bg-white">
          <ul className="flex flex-col text-sm font-medium">{menuItems}</ul>

          <div className="flex justify-center gap-2 mt-3">
            <Link
              href={hrefES}
              className={`px-2 py-1 rounded ${
                !isEN
                  ? 'bg-emerald-600 text-white'
                  : 'border border-emerald-600 text-emerald-600'
              }`}
              onClick={() => setOpen(false)}
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
              onClick={() => setOpen(false)}
            >
              🇺🇸
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
