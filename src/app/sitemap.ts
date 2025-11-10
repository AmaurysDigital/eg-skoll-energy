import type { MetadataRoute } from 'next';

// ES en raíz; EN en /en
const base = 'https://egskollenergy.com';
const locales = ['es', 'en'] as const;
const defaultLocale = 'es' as const;

function localePath(path: string, locale: string) {
  return locale === defaultLocale ? path : (path === '/' ? `/${locale}` : `/${locale}${path}`);
}
function alternatesFor(path: string) {
  const map: Record<string, string> = {};
  for (const l of locales) map[l] = `${base}${localePath(path, l)}`;
  return { languages: map };
}

// EDITA esta lista con tus páginas reales (estáticas)
const staticPaths = [
  '/',           // Home
  '/about',      // Nosotros
  '/projects',   // Proyectos
  '/contact',    // Contacto
  // '/services', // descomenta si existe
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const p of staticPaths) {
    const changeFrequency = p === '/' ? 'weekly' : 'monthly';
    const priority = p === '/' ? 1.0 : (p === '/projects' ? 0.8 : 0.7);

    // ES (raíz)
    entries.push({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: alternatesFor(p),
    });

    // EN (/en)
    const enUrl = `${base}${localePath(p, 'en')}`;
    if (enUrl !== `${base}${p}`) {
      entries.push({
        url: enUrl,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: alternatesFor(p),
      });
    }
  }

  return entries;
}
