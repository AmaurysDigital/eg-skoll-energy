import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = 'https://egskollenergy.com';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin', '/admin/*',
          '/api/private', '/api/preview',
          '/drafts', '/drafts/*',
          '/_next', '/static', '/internal'
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}

