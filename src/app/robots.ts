// src/app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = 'https://egskollenergy.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Bloqueos SOLO de áreas internas (no bloqueamos recursos estáticos)
        disallow: [
          '/admin', '/admin/*',
          '/api/private', '/api/preview',
          '/drafts', '/drafts/*',
          '/internal', '/internal/*',
        ],
      },
     
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
