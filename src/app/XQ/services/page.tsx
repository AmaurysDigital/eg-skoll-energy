import type { Metadata } from "next";
import LocalizedServices from "../../components/LocalizedServices";

// --- SEO (SERVER) ---
export const metadata: Metadata = {
  title: "Services | EG Sköll Energy",
  description:
    "Comprehensive solar solutions: design, installation, maintenance, and monitoring of photovoltaic systems for homes and industries.",
  alternates: {
    canonical: "https://www.egskollenergy.com/en/services",
    languages: {
      en: "/en/services",
      es: "/services",
    },
  },
  openGraph: {
    title: "Services | EG Sköll Energy",
    description:
      "Discover our solar services: design, installation, maintenance, and high-performance monitoring systems.",
    url: "https://www.egskollenergy.com/en/services",
    siteName: "EG Sköll Energy",
    images: [
      {
        url: "/Logo2.png",
        width: 800,
        height: 600,
        alt: "EG Sköll Energy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | EG Sköll Energy",
    description:
      "Comprehensive solar services for homes, businesses, and industries. Clean, reliable, and sustainable energy.",
    images: ["/Logo2.png"],
  },
};

// --- RENDER PRINCIPAL ---
export default function ServicesEnPage() {
  return <LocalizedServices />;
}
