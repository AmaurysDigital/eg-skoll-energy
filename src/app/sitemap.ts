// src/app/sitemap.ts
import type { MetadataRoute } from 'next';

/**
 * Configuración i18n:
 * - Español (ES) como idioma por defecto en la raíz "/"
 * - Inglés (EN) con prefijo "/en"
 */
const base = 'https://egskollenergy.com';
const locales = ['es', 'en'] as const;
const defaultLocale: (typeof locales)[number] = 'es';

/** Helper para construir la ruta por idioma */
function localePath(path: string, locale: string) {
  // ES en raíz (sin prefijo); EN con prefijo /en
  if (locale === defaultLocale) return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

/** Alternates para SEO multilenguaje */
function alternatesFor(path: string) {
  const map: Record<string, string> = {};
  for (const l of locales) {
    map[l] = `${base}${localePath(path, l)}`;
  }
  return { languages: map };
}

/** Rutas estáticas actuales (edítalas según tu sitio real) */
const staticPaths = [
  '/',           // Home (ES)
  '/about',      // Nosotros
  '/projects',   // Proyectos
  '/contact',    // Contacto
  // '/services', // Descomenta si ya existe
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const p of staticPaths) {
    const changeFrequency = p === '/' ? 'weekly' : 'monthly';
    const priority =
      p === '/' ? 1.0 :
      p === '/projects' ? 0.8 :
      0.7;

    // URL ES (raíz)
    entries.push({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: alternatesFor(p), // enlaza ES/EN
    });

    // URL EN (/en)
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
