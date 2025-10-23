export async function GET() {
  return new Response(
    `User-agent: *
Allow: /
Sitemap: https://egskollenergy.com/sitemap.xml`,
    {
      headers: { "Content-Type": "text/plain" }, // 👈 Importante
    }
  )
}

export const dynamic = "force-static"
