import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../components/Navbar";
import HtmlLang from "../components/HtmlLang";
import { LanguageProvider } from "../LanguageContext";

export const metadata: Metadata = {
  alternates: {
    canonical: "/en",
    languages: { en: "/en", es: "/" },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-white to-gray-50 text-gray-800">
        {/* Forzamos inglés por defecto dentro de /en */}
        <LanguageProvider defaultLang = "en">
          <HtmlLang />
          <Navbar />
          <main>{children}</main>
          <footer className="bg-gray-900 text-gray-200 py-8 mt-20 text-center">
            <p>
              © {new Date().getFullYear()} Sköll Energy — Solar energy for a better world.
            </p>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
