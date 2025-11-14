import type { Metadata } from "next";
import LocalizedHome from "../components/LocalizedHome";

// --- SEO (SERVER) ---
export const metadata: Metadata = {
  title: "EG Sköll Energy | Sustainable Solar Energy",
  description:
    "EG Sköll Energy delivers efficient solar solutions for homes and industries. Design, installation, and maintenance of high-quality solar systems for a clean, sustainable future.",
  alternates: {
    canonical: "/en",
    languages: { en: "/en", es: "/" },
  },
  openGraph: {
    title: "EG Sköll Energy | Sustainable Solar Energy",
    description:
      "Transform your energy with high-efficiency solar solutions. EG Sköll Energy powers a cleaner, greener future.",
    url: "https://www.egskollenergy.com/en",
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
    title: "EG Sköll Energy | Sustainable Solar Energy",
    description:
      "Efficient solar solutions for homes and businesses. Clean, modern, and sustainable energy.",
    images: ["/Logo2.png"],
  },
};

// --- RENDER PRINCIPAL ---
export default function HomeEnPage() {
  // Si LocalizedHome usa el contexto de LanguageProvider, no hace falta pasar props.
  return <LocalizedHome />;
}
