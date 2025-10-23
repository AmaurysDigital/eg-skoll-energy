// --- METADATOS ---
export const metadata = {
  metadataBase: new URL("https://egskollenergy.com"),
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
  openGraph: {
    title: "EG Sköll Energy | Solar Energy Solutions",
    description:
      "Innovative solar energy systems for homes and industries. EG Sköll Energy designs and installs efficient, sustainable systems for a cleaner future.",
    url: "https://egskollenergy.com",
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
  icons: {
    icon: "/favicon.png",
  },
}

// --- SERVIDOR ---
import "./globals.css"
import Navbar from "./components/Navbar"
import HtmlLang from "./components/HtmlLang"
import { LanguageProvider } from "./LanguageContext"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-b from-white to-gray-50 text-gray-800">
        <LanguageProvider>
          <HtmlLang />
          <Navbar />
          <main>{children}</main>
          <footer className="bg-gray-900 text-gray-200 py-8 mt-20 text-center">
            <p>
              © {new Date().getFullYear()} Sköll Energy — Energía solar para un mundo mejor / Solar energy for a better world.
            </p>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  )
}

