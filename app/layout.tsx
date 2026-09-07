import "./globals.css";
import type { Metadata } from "next";
import { roboto, ibmPlexSerif } from "./fonts";

export const metadata: Metadata = {
  title: "Hugo Vinícius",
  description: "",
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
