// src/app/robots/route.ts
import { MetadataRoute } from 'next'

export function GET(): Response {
  const content = `
User-agent: *
Allow: /
Sitemap: https://egskollenergy.com/sitemap.xml
`
  return new Response(content.trim(), {
    headers: { 'Content-Type': 'text/plain' },
  })
}

export const dynamic = 'force-static'