'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function HtmlLang() {
  const pathname = usePathname()
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/')
  const lang = isEnglish ? 'en' : 'es'

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return null
}
