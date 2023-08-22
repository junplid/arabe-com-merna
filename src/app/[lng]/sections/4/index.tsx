"use client";
import ComponentElementScroll from "../../components/ElementScroll";
import { EnrollmentFormComponent } from "../../components/EnrollmentForm";
import Image from "next/image";
import LanguagePageHome from "../../../../language/home.page.json";
import { ContextLanguage } from "@/contexts/language.context";
import { useContext } from "react";

interface PropsSection4PageHome_I {}

export default function Section4PageHome(
  props: PropsSection4PageHome_I
): JSX.Element {
  const { languageSelected } = useContext(ContextLanguage);

  return (
    <ComponentElementScroll name="section4">
      <section className="flex items-center px-4 py-24 bg-primary">
        <div className="w-full m-auto max-w-default">
          <div className="grid grid-cols-2 gap-10">
            <article className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-4">
                <h2 className="text-3xl text-white">
                  {
                    LanguagePageHome[languageSelected].section4.title[
                      "part-1-normal"
                    ]
                  }{" "}
                  <strong className="font-semibold text-secondary">
                    {
                      LanguagePageHome[languageSelected].section4.title[
                        "part-2-semibold"
                      ]
                    }
                  </strong>
                </h2>
                <p className="text-xl text-white">
                  {LanguagePageHome[languageSelected].section4["paragraph-1"]}
                </p>
              </div>
              <div className="flex flex-col gap-y-6">
                <div className="flex items-center justify-between">
                  {LanguagePageHome[languageSelected].section4.list[
                    "buttons-items"
                  ].map((btn) => (
                    <button
                      key={btn.label}
                      className={`px-8 py-1.5 rounded-lg ${
                        false
                          ? "bg-terc text-secondary"
                          : "bg-secondary text-terc"
                      }  font-semibold  shadow-sm`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
                <p className="text-lg font-light text-white">
                  Aprender árabe permite acesso a uma cultura rica e
                  diversificada, ligada à civilização islâmica, à literatura, à
                  arte e à música. Conhecer o idioma proporciona compreensão
                  profunda dessas tradições e estabelece conexão autêntica com
                  falantes nativos.
                </p>
                <div className="flex gap-2">
                  <Image
                    width={279}
                    height={228}
                    alt="imagem"
                    src={"/images/section-4/carreira 1.jpg"}
                  />
                  <Image
                    width={279}
                    height={228}
                    alt="imagem"
                    src={"/images/section-4/carreira 1.jpg"}
                  />
                </div>
              </div>
            </article>
            <article
              className="flex flex-col items-center p-8 shadow-lg rounded-3xl gap-y-5"
              style={{ background: "#fff" }}
            >
              <h3 className="text-2xl font-semibold text-primary">
                {LanguagePageHome[languageSelected].section4.register.title}
              </h3>
              <EnrollmentFormComponent />
              <small className="text-base font-light text-primary">
                {
                  LanguagePageHome[languageSelected].section4.register.warning[
                    "part-1-normal"
                  ]
                }{" "}
                <a className="font-semibold underline cursor-pointer underline-offset-2">
                  {
                    LanguagePageHome[languageSelected].section4.register
                      .warning["part-2-link-semibold"]
                  }
                </a>{" "}
                {
                  LanguagePageHome[languageSelected].section4.register.warning[
                    "part-3-normal"
                  ]
                }
              </small>
            </article>
          </div>
        </div>
      </section>
    </ComponentElementScroll>
  );
}
