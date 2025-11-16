import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.egskollenergy.com"),

  title: {
    default: "EG Sköll Energy | Solar Energy Solutions",
    template: "%s | EG Sköll Energy",
  },

  description:
    "Innovative solar energy systems for homes and industries. EG Sköll Energy designs and installs efficient, sustainable solar solutions.",

  alternates: {
    canonical: "/en", // → https://www.egskollenergy.com/en
    languages: {
      en: "/en", // Versión en inglés
      es: "/", // Versión en español
      "x-default": "/en",
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
