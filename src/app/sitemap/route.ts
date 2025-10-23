// src/app/sitemap/route.ts
import { MetadataRoute } from 'next'

export async function GET(): Promise<Response> {
  const baseUrl = 'https://egskollenergy.com'

  const pages = [
    '',
    '/about',
    '/services',
    '/projects',
    '/contact',
  ]

  const urls = pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`

  return new Response(xml.trim(), {
    headers: { 'Content-Type': 'application/xml' },
  })
}

export const dynamic = 'force-static'
