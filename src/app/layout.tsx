<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EG Sköll Energy",
    "url": "https://egskollenergy.com",
    "logo": "https://egskollenergy.com/Logo2.png",
    "sameAs": [
      "https://www.instagram.com/egskollenergy",
      "https://www.linkedin.com/company/egskollenergy"
    ],
    "description": "Soluciones solares innovadoras para hogares e industrias. EG Sköll Energy diseña e instala sistemas eficientes y sostenibles que impulsan un futuro limpio."
  })
}} />


// --- METADATOS ---
export const metadata = {
  title: {
    default: "EG Sköll Energy | Energía Solar Sostenible",
    template: "%s | EG Sköll Energy",
  },
  description:
    "Soluciones solares innovadoras para hogares e industrias. EG Sköll Energy diseña e instala sistemas eficientes y sostenibles que impulsan un futuro limpio.",
  keywords: [
    "energía solar",
    "paneles solares",
    "Sköll Energy",
    "energía sostenible",
    "renovables",
    "instalación de paneles solares",
    "solar energy",
    "green energy solutions",
    "solar panels installation",
    "clean energy",
  ],
  metadataBase: new URL("https://eg-skoll-energy.vercel.app"),
  openGraph: {
    title: "EG Sköll Energy | Solar Energy Solutions",
    description:
      "Innovative solar energy systems for homes and industries. EG Sköll Energy designs and installs efficient, sustainable systems for a cleaner future.",
    url: "https://eg-skoll-energy.vercel.app",
    siteName: "EG Sköll Energy",
    images: [
      {
        url: "/Logo2.png",
        width: 800,
        height: 600,
        alt: "EG Sköll Energy Logo",
      },
    ],
    locale: "es_ES",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EG Sköll Energy | Energía Solar Sostenible",
    description:
      "Soluciones solares eficientes para hogares y empresas. EG Sköll Energy impulsa un futuro más limpio y verde.",
    images: ["/Logo2.png"],
  },
  alternates: {
    languages: {
      es: "https://eg-skoll-energy.vercel.app",
      en: "https://eg-skoll-energy.vercel.app",
    },
  },
  icons: {
    icon: "/favicon.png",
  },
};

// --- SERVIDOR ---
import './globals.css'
import Navbar from './components/Navbar'
import HtmlLang from './components/HtmlLang' // cliente que actualiza <html lang>
import { LanguageProvider } from './LanguageContext'

// ✅ Layout principal
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Valor inicial para el servidor (bots y SEO)
    <html lang="es">
      <body className="bg-gradient-to-b from-white to-gray-50 text-gray-800">
        {/* El proveedor maneja el idioma y contexto global */}
        <LanguageProvider>
          {/* ✅ Este componente cliente actualiza dinámicamente <html lang="..."> */}
          <HtmlLang />

          <Navbar />
          <main>{children}</main>

          <footer className="bg-gray-900 text-gray-200 py-8 mt-20 text-center">
            <p>
              © {new Date().getFullYear()} Sköll Energy — Energía solar para un
              mundo mejor / Solar energy for a better world.
            </p>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  )
}
