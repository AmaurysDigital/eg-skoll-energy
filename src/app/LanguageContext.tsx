'use client'

import { createContext, useContext, useState, useEffect } from 'react'

// --- Definición del contexto ---
type LanguageContextType = {
  lang: 'es' | 'en'
  setLang: (lang: 'es' | 'en') => void
}

// Creamos el contexto inicial (sin valor por defecto real)
const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  setLang: () => {},
})

// --- Proveedor global del contexto ---
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<'es' | 'en'>('es')

  // Guarda la preferencia del idioma en localStorage para recordar al usuario
  useEffect(() => {
    const storedLang = localStorage.getItem('lang') as 'es' | 'en' | null
    if (storedLang) {
      setLang(storedLang)
    }
  }, [])

  // Cada vez que el idioma cambia, se actualiza en localStorage
  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

// --- Hook personalizado para acceder al idioma global ---
export function useLanguage() {
  return useContext(LanguageContext)
}
