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
        <div className="relative z-20">
          <div className="px-4 bg-primary">
            <div className="flex items-center justify-end m-auto max-w-default h-9">
              <span className="font-normal text-light-gray">Parcerias</span>
            </div>
          </div>
          <div
            style={{
              background: "#fff",
              boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.13)",
            }}
            className="z-10 px-4"
          >
            <header className="flex flex-col py-2 m-auto top-9 max-w-default">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 lg:gap-7">
                  <LogoComponent />
                  <nav className="hidden md:block">
                    <ul className="flex items-center justify-between text-sm font-medium lg:text-base text-primary gap-x-3 lg:gap-x-5">
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
                  <a className="hidden py-2 text-sm font-medium text-white duration-200 rounded-md cursor-pointer mobile:block hover:bg-primary-hover bg-primary px-7">
                    Área do aluno
                  </a>
                </div>
              </div>
              <NavTabletComponent />
            </header>
          </div>
        </div>
        <div className="block mobile:hidden">
          <MenuMobileComponent />
        </div>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
