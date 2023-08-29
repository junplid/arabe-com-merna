import "./globals.css";
import "react-multi-carousel/lib/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ComponentScrollToTop from "./components/ScrollToTop";
import ComponentNavFooter from "./components/NavFooter";
import { LogoComponent } from "@/components/Logo";
import { MenuMobileComponent } from "@/components/MenuMobile";
import { NavTabletComponent } from "@/components/NavTablet";
import { LanguageComponent } from "@/components/Language";
import ComponentNavHeader from "./components/NavHeader";
import { cookies } from "next/headers";
import { LanguageTopOfPage } from "@/language/home/top-of-page";
import { LanguageHeader } from "@/language/home/header";
import { LanguageFooter } from "@/language/home/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "500", "400", "600"],
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
  const lng = cookies().get("lng")?.value as "pt-br" | "en" | undefined;

  return (
    <html>
      <body className={inter.className}>
        <ComponentScrollToTop />
        <div>
          <div className="px-4 bg-primary">
            <div className="flex items-center justify-end m-auto max-w-default h-9">
              <span className="font-normal text-light-gray">
                {/* Parcerias */}
                {LanguageTopOfPage[lng ?? "pt-br"].top}
              </span>
            </div>
          </div>
          <div
            style={{
              background: "#fff",
              boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.13)",
            }}
            className="sticky top-0 z-10 px-4"
          >
            <header className="flex flex-col py-2 m-auto max-w-default">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 lg:gap-7">
                  <LogoComponent />
                  <ComponentNavHeader />
                </div>
                <div className="flex items-center gap-4">
                  <LanguageComponent lng={lng} />
                  <a className="hidden py-2 text-sm font-medium text-white duration-200 rounded-md cursor-pointer mobile:block hover:bg-primary-hover bg-primary px-7">
                    {LanguageHeader[lng ?? "pt-br"]["button-student-area"]}
                  </a>
                </div>
              </div>
              <NavTabletComponent lng={lng} />
            </header>
          </div>
          <div className="block mobile:hidden">
            <MenuMobileComponent lng={lng} />
          </div>
          <main>{children}</main>
          <div style={{ background: "#F5FAFA" }}>
            <footer className="flex flex-col w-full gap-y-16">
              <div className="px-4 ">
                <div className="w-full pt-16 m-auto max-w-default">
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col items-baseline gap-y-3">
                      <LogoComponent />
                      <div className="border-l-2 pl-7 border-primary">
                        <h1
                          className="text-lg text-primary"
                          style={{ maxWidth: 310 }}
                        >
                          {
                            LanguageFooter[lng ?? "pt-br"].paragraph[
                              "part-1-normal"
                            ]
                          }{" "}
                          <strong className="font-semibold">
                            {
                              LanguageFooter[lng ?? "pt-br"].paragraph[
                                "part-2-semibold"
                              ]
                            }
                          </strong>{" "}
                          {
                            LanguageFooter[lng ?? "pt-br"].paragraph[
                              "part-3-normal"
                            ]
                          }
                        </h1>
                      </div>
                    </div>
                    <ComponentNavFooter lng={lng} />
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-gray/20">
                <div className="px-4">
                  <div className="flex items-center w-full py-4 m-auto text-gray max-w-default gap-x-8">
                    <span>© 2023 Árabe com Merna</span>
                    <span>
                      {'"'}All rights reserved{'"'}
                    </span>
                    <span>Design by Rian Junplid</span>
                    <span>Developed by Rian Junplid</span>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
