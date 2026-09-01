import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://www.ejmrassociate.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EJMR Associate | Soluções Industriais e Importação de Equipamentos",
    template: "%s | EJMR Associate",
  },
  description:
    "Empresa especializada em soluções industriais, fornecimento de equipamentos e consultoria técnica para aquisição e importação de equipamentos industriais.",
  keywords: [
    "válvulas industriais",
    "atuadores elétricos",
    "bombas industriais",
    "consultoria para importação",
    "EJMR Associate",
  ],
  openGraph: {
    title: "EJMR Associate | Soluções Industriais e Importação de Equipamentos",
    description:
      "Fornecimento de válvulas, atuadores, bombas e equipamentos industriais, aliado à consultoria técnica para aquisição e importação no mercado internacional.",
    url: siteUrl,
    siteName: "EJMR Associate",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero-valvulas.png",
        width: 1600,
        height: 900,
        alt: "Válvulas industriais EJMR Associate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EJMR Associate | Soluções Industriais e Importação de Equipamentos",
    description:
      "Fornecimento de válvulas, atuadores, bombas e equipamentos industriais, aliado à consultoria técnica para importação.",
    images: ["/images/hero-valvulas.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${barlowCondensed.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-graphite-900 text-offwhite">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
