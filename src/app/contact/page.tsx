
import LocalizedContact from '../components/LocalizedContact'

export const metadata = {
  title: "Contacto | EG Sköll Energy",
  description:
    "Contáctanos para recibir asesoría personalizada sobre soluciones solares. Nuestro equipo te ayudará a encontrar la mejor opción para tu hogar o empresa.",
  openGraph: {
    title: "Contacto | EG Sköll Energy",
    description:
      "Comunícate con EG Sköll Energy para recibir atención personalizada y conocer más sobre nuestros proyectos y servicios solares.",
    url: "https://egskollenergy.com/contact",
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
    title: "Contacto | EG Sköll Energy",
    description:
      "Solicita información o una cotización personalizada. EG Sköll Energy — energía limpia, moderna y sostenible.",
    images: ["/Logo2.png"],
  },
}

export default function ContactPage() {
  return <LocalizedContact />
}
