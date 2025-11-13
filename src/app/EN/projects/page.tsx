import type { Metadata } from "next";
import LocalizedProjects from "../../components/LocalizedProjects";

// --- SEO (SERVER) ---
export const metadata: Metadata = {
  title: "Projects | EG Sköll Energy",
  description:
    "Solar energy projects developed for homes, industries, and communities. Discover our sustainable and technological impact.",
  alternates: {
    canonical: "https://www.egskollenergy.com/en/projects",
    languages: {
      en: "/en/projects",
      es: "/projects",
    },
  },
  openGraph: {
    title: "Projects | EG Sköll Energy",
    description:
      "Explore the projects carried out by EG Sköll Energy: solar solutions transforming homes, industries, and communities.",
    url: "https://www.egskollenergy.com/en/projects",
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
    title: "Projects | EG Sköll Energy",
    description:
      "Real case studies of solar panel installations delivering proven efficiency and environmental benefits.",
    images: ["/Logo2.png"],
  },
};

// --- RENDER PRINCIPAL ---
export default function ProjectsEnPage() {
  return <LocalizedProjects />;
}
