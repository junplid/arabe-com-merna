import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ComponentScrollToTop from "./[lng]/components/ScrollToTop";
import ComponentContentLayout from "./[lng]/content";
import { ProviderContextLanguage } from "@/contexts/language.context";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "400", "600", "900"],
});

export const metadata: Metadata = {
  title: "Árabe com Merna",
  description: "Site sendo desenvolvido por Rian Junplid",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ComponentScrollToTop />
        <ProviderContextLanguage>
          <ComponentContentLayout children={children} />
        </ProviderContextLanguage>
      </body>
    </html>
  );
}
