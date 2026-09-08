import "./globals.css";
import type { Metadata } from "next";
import AosSetup from "@/components/AosSetup";
import { roboto, ibmPlexSerif } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "Hugo Vinícius | Desenvolvedor Web",
    template: "%s | Hugo Vinícius",
  },
  
  description:
    "Portfólio de Hugo Vinícius, desenvolvedor web. Conheça meus projetos, experiências, habilidades e trajetória no desenvolvimento de aplicações web.",
    keywords: [
    "Hugo Vinícius",
    "hugovrp",
    "desenvolvedor web",
    "desenvolvedor frontend",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Java",
    "frontend",
    "portfólio",
  ],

  authors: [{ name: "Hugo Vinícius" }],
  creator: "Hugo Vinícius",
  metadataBase: new URL("https://hugovrp.dev"),

  openGraph: {
    title: "Hugo Vinícius | Desenvolvedor Web",
    description:
      "Conheça meus projetos, experiências e habilidades no desenvolvimento de aplicações web.",
    url: "https://hugovrp.dev",
    siteName: "Hugo Vinícius | Portfólio",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hugo Vinícius | Desenvolvedor Web",
    description:
      "Conheça meus projetos, experiências e habilidades no desenvolvimento de aplicações web.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${roboto.variable} ${ibmPlexSerif.variable} h-full antialiased`}
    >
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
