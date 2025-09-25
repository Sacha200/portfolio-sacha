import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Portfolio Sacha",
    template: "%s | Portfolio Sacha",
  },
  description: "Portfolio de Sacha – projets, compétences et contact.",
  openGraph: {
    title: "Portfolio Sacha",
    description: "Découvrez mes projets, mon parcours et contactez-moi.",
    url: "https://example.com",
    siteName: "Portfolio Sacha",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Sacha",
    description: "Découvrez mes projets, mon parcours et contactez-moi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} font-mono antialiased min-h-screen flex flex-col relative overflow-x-hidden`}>
        <Navbar />
        {/* Glows déplacés au niveau des pages via <BackgroundGlows /> */}
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
