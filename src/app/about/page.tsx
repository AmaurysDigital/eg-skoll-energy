
import LocalizedAbout from '../components/LocalizedAbout'

export const metadata = {
  title: "Nosotros | EG Sköll Energy",
  description:
    "En EG Sköll Energy creemos en un futuro impulsado por la energía limpia. Nuestro equipo de ingenieros y técnicos combina innovación, experiencia y sostenibilidad.",
  openGraph: {
    title: "Nosotros | EG Sköll Energy",
    description:
      "Conoce a EG Sköll Energy: un equipo de profesionales comprometidos con el futuro sostenible de la energía solar.",
    url: "https://egskollenergy.com/about",
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros | EG Sköll Energy",
    description:
      "EG Sköll Energy combina tecnología, sostenibilidad e innovación para transformar el futuro de la energía.",
    images: ["/Logo2.png"],
  },
}

export default function AboutPage() {
  return <LocalizedAbout />
}
