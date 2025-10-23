'use client'

import { useEffect } from 'react'
import { useLanguage } from '../LanguageContext'

// --- Componente cliente que actualiza dinámicamente el atributo <html lang="..."> ---
export default function HtmlLang() {
  const { lang } = useLanguage()

  useEffect(() => {
    // Cada vez que el idioma cambia, actualizamos el atributo <html lang="...">
    document.documentElement.lang = lang
  }, [lang])

  return null // No renderiza nada visible
}