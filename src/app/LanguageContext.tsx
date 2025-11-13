'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

// --- Definición del contexto ---
type LanguageContextType = {
  lang: 'es' | 'en'
  setLang: (lang: 'es' | 'en') => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  setLang: () => {},
})

// --- Proveedor global del contexto ---
export function LanguageProvider({
  children,
  defaultLang = 'es',
}: {
  children: React.ReactNode
  defaultLang?: 'es' | 'en'
}) {
  const pathname = usePathname()
  const [lang, setLang] = useState<'es' | 'en'>(defaultLang)

  // 1️⃣ Detecta idioma desde la URL
  useEffect(() => {
    if (pathname === '/en' || pathname.startsWith('/en/')) {
      setLang('en')
    } else {
      setLang('es')
    }
  }, [pathname])

  // 2️⃣ Guarda preferencia en localStorage (solo por comodidad del usuario)
  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

// --- Hook personalizado ---
export function useLanguage() {
  return useContext(LanguageContext)
}
