import type { Metadata } from "next";
import LocalizedAbout from "../../components/LocalizedAbout";

// --- SEO (SERVER) ---
export const metadata: Metadata = {
  title: "About Us | EG Sköll Energy",
  description:
    "At EG Sköll Energy, we believe in a future powered by clean energy. Our team of engineers and technicians combines innovation, experience, and sustainability.",
  alternates: {
    canonical: "https://www.egskollenergy.com/en/about",
    languages: {
      en: "/en/about",
      es: "/about",
    },
  },
  openGraph: {
    title: "About Us | EG Sköll Energy",
    description:
      "Meet EG Sköll Energy: a team of professionals committed to a sustainable solar energy future.",
    url: "https://www.egskollenergy.com/en/about",
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
    title: "About Us | EG Sköll Energy",
    description:
      "EG Sköll Energy merges technology, sustainability, and innovation to transform the future of solar energy.",
    images: ["/Logo2.png"],
  },
};

// --- RENDER PRINCIPAL ---
export default function AboutEnPage() {
  return <LocalizedAbout />;
}
