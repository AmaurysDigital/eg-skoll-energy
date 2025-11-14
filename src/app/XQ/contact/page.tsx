import type { Metadata } from "next";
import LocalizedContact from "../../components/LocalizedContact";

// --- SEO (SERVER) ---
export const metadata: Metadata = {
  title: "Contact | EG Sköll Energy",
  description:
    "Contact us for personalized advice on solar solutions. Our team will help you find the best option for your home or business.",
  alternates: {
    canonical: "https://www.egskollenergy.com/en/contact",
    languages: {
      en: "/en/contact",
      es: "/contact",
    },
  },
  openGraph: {
    title: "Contact | EG Sköll Energy",
    description:
      "Get in touch with EG Sköll Energy for personalized assistance and learn more about our solar projects and services.",
    url: "https://www.egskollenergy.com/en/contact",
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
    title: "Contact | EG Sköll Energy",
    description:
      "Request information or a personalized quote. EG Sköll Energy — clean, modern, and sustainable energy.",
    images: ["/Logo2.png"],
  },
};

// --- RENDER PRINCIPAL ---
export default function ContactEnPage() {
  return <LocalizedContact />;
}
