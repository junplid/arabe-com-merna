"use client";
import { LanguageComponent } from "@/components/Language";
import { LogoComponent } from "@/components/Logo";
import { MenuMobileComponent } from "@/components/MenuMobile";
import { NavTabletComponent } from "@/components/NavTablet";
import ComponentNavFooter from "./components/NavFooter";
import ComponentNavHeader from "./components/NavHeader";
import { useContext } from "react";
import { ContextLanguage } from "@/contexts/language.context";
import LanguagePageHome from "../../language/home.page.json";

interface PropsComponentContentLayout_I {
  children: React.ReactNode;
}

export default function ComponentContentLayout(
  props: PropsComponentContentLayout_I
): JSX.Element {
  const { languageSelected } = useContext(ContextLanguage);
  return (
    <div>
      <div className="px-4 bg-primary">
        <div className="flex items-center justify-end m-auto max-w-default h-9">
          <span className="font-normal text-light-gray">
            {LanguagePageHome[languageSelected].top}
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
              <LanguageComponent />
              <a className="hidden py-2 text-sm font-medium text-white duration-200 rounded-md cursor-pointer mobile:block hover:bg-primary-hover bg-primary px-7">
                {
                  LanguagePageHome[languageSelected].header[
                    "button-student-area"
                  ]
                }
              </a>
            </div>
          </div>
          <NavTabletComponent />
        </header>
      </div>
      <div className="block mobile:hidden">
        <MenuMobileComponent />
      </div>
      <div className="">{props.children}</div>
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
                        LanguagePageHome[languageSelected].footer.paragraph[
                          "part-1-normal"
                        ]
                      }{" "}
                      <strong className="font-semibold">
                        {
                          LanguagePageHome[languageSelected].footer.paragraph[
                            "part-2-semibold"
                          ]
                        }
                      </strong>{" "}
                      {
                        LanguagePageHome[languageSelected].footer.paragraph[
                          "part-3-normal"
                        ]
                      }
                    </h1>
                  </div>
                </div>
                <ComponentNavFooter />
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
  );
}
