import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'], // 🔒 puedes añadir rutas internas si las tienes
      },
    ],
    sitemap: 'https://egskollenergy.com/sitemap.xml',
  }
}
