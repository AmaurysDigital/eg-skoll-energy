// 📁 src/app/sitemap/route.ts
export const runtime = 'edge'

export async function GET() {
  const base = 'https://egskollenergy.com'
  const urls = [
    '', 'about', 'services', 'projects', 'contact'
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `<url><loc>${base}/${u}</loc><lastmod>${new Date().toISOString()}</lastmod></url>`
  )
  .join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
