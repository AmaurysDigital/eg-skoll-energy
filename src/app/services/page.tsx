
import LocalizedServices from '../components/LocalizedServices'

export const metadata = {
  title: "Servicios | EG Sköll Energy",
  description:
    "Soluciones solares integrales: diseño, instalación, mantenimiento y monitoreo de sistemas fotovoltaicos para hogares e industrias.",
  openGraph: {
    title: "Servicios | EG Sköll Energy",
    description:
      "Descubre nuestros servicios solares: diseño, instalación, mantenimiento y sistemas de monitoreo de alto rendimiento.",
    url: "https://egskollenergy.com/services",
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
    title: "Servicios | EG Sköll Energy",
    description:
      "Servicios solares integrales para hogares, empresas e industrias. Energía limpia, confiable y sostenible.",
    images: ["/Logo2.png"],
  },
}

export default function ServicesPage() {
  return <LocalizedServices />
}
