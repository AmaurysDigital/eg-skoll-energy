// app/en/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/en",
    languages: {
      en: "/en",
      es: "/",
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  // Nada de <html>, <body>, Navbar, Provider, etc.
  return <>{children}</>;
}
