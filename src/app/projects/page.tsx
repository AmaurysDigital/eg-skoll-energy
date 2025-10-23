import LocalizedProjects from '../components/LocalizedProjects'

export const metadata = {
  title: "Proyectos | EG Sköll Energy",
  description:
    "Proyectos de energía solar desarrollados en hogares, industrias y comunidades. Conoce nuestro impacto sostenible y tecnológico.",
  openGraph: {
    title: "Proyectos | EG Sköll Energy",
    description:
      "Descubre los proyectos realizados por EG Sköll Energy: soluciones solares que transforman hogares, industrias y comunidades.",
    url: "https://egskollenergy.com/projects",
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
    title: "Proyectos | EG Sköll Energy",
    description:
      "Casos reales de instalación de paneles solares, con resultados de eficiencia comprobada y beneficios ambientales.",
    images: ["/Logo2.png"],
  },
}

export default function ProjectsPage() {
  return <LocalizedProjects />
}