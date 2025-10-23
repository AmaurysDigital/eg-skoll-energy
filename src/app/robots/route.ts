// 📁 src/app/robots/route.ts
export const runtime = 'edge' // opcional, mejora rendimiento

export async function GET() {
  const body = `User-agent: *
Allow: /
Sitemap: https://egskollenergy.com/sitemap.xml
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}

