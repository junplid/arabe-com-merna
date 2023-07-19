import { LogoComponent } from "@/components/Logo";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageComponent } from "@/components/Language";
import { MenuMobileComponent } from "@/components/MenuMobile";
import { NavTabletComponent } from "@/components/NavTablet";

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
        <div>
          <div className="relative z-20 bg-primary px-4">
            <div className="max-w-default m-auto h-9 items-center flex justify-end">
              <span className="text-light-gray font-normal">Parcerias</span>
            </div>
          </div>
          <div
            style={{
              background: "#fff",
              boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.13)",
            }}
          >
            <header className="top-9 max-w-default m-auto py-2 flex flex-col">
              <div className="px-4 flex justify-between items-center">
                <div className="flex gap-4 lg:gap-7 items-center">
                  <LogoComponent />
                  <nav className="hidden md:block">
                    <ul className="text-sm lg:text-base text-primary font-medium flex gap-x-3 lg:gap-x-5 justify-between items-center">
                      <li>
                        <a className="cursor-pointer">O curso</a>
                      </li>
                      <li>
                        <a className="cursor-pointer">A Loja</a>
                      </li>
                      <li>
                        <a className="cursor-pointer">Traduções & Musicais</a>
                      </li>
                      <li>
                        <a className="cursor-pointer">Conjugação</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="flex items-center gap-4">
                  <LanguageComponent />
                  <a className="hidden mobile:block hover:bg-primary-hover text-sm font-medium duration-200 bg-primary py-2 px-7 text-white cursor-pointer rounded-md">
                    Área do aluno
                  </a>
                  <div className="mobile:hidden block">
                    <MenuMobileComponent />
                  </div>
                </div>
              </div>
              <NavTabletComponent />
            </header>
          </div>
        </div>
        <div className="-z-20 relative">{children}</div>
      </body>
    </html>
  );
}
