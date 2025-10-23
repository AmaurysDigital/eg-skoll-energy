import LocalizedHome from './components/LocalizedHome'

// --- SEO (SERVER) ---
export const metadata = {
  title: "EG Sköll Energy | Energía solar sostenible",
  description:
    "EG Sköll Energy ofrece soluciones solares eficientes para hogares e industrias. Diseño, instalación y mantenimiento de sistemas solares de alta calidad para un futuro limpio y sostenible.",
  openGraph: {
    title: "EG Sköll Energy | Energía solar sostenible",
    description:
      "Transforma tu energía con soluciones solares de alta eficiencia. EG Sköll Energy impulsa un futuro más limpio y verde.",
    url: "https://egskollenergy.com",
    siteName: "EG Sköll Energy",
    images: [
      {
        url: "/Logo2.png",
        width: 800,
        height: 600,
        alt: "Logo EG Sköll Energy",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EG Sköll Energy | Energía solar sostenible",
    description:
      "Soluciones solares eficientes para hogares y empresas. Energía limpia, moderna y sostenible.",
    images: ["/Logo2.png"],
  },
}

// --- RENDER PRINCIPAL ---
export default function HomePage() {
  return <LocalizedHome />
}