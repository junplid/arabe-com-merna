"use client";
import ComponentElementScroll from "../../components/ElementScroll";
import { ResultsCarouselComponent } from "../../components/ResultsCarousel";
import Image from "next/image";
import LanguagePageHome from "../../../../language/home.page.json";
import { ContextLanguage } from "@/contexts/language.context";
import { useContext } from "react";

interface PropsSection5PageHome_I {}

export default function Section5PageHome(
  props: PropsSection5PageHome_I
): JSX.Element {
  const { languageSelected } = useContext(ContextLanguage);

  return (
    <ComponentElementScroll name="section5">
      <section
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #E0FED6 100%)",
        }}
        className="flex items-center px-4 py-24 overflow-x-hidden"
      >
        <div className="flex flex-col gap-y-12">
          <div className="flex justify-center w-screen">
            <h2 className="text-3xl font-medium text-primary">
              {
                LanguagePageHome[languageSelected].section5.title[
                  "part-1-normal"
                ]
              }{" "}
              <span className="font-semibold text-secondary">
                {
                  LanguagePageHome[languageSelected].section5.title[
                    "part-2-semibold"
                  ]
                }
              </span>{" "}
              {
                LanguagePageHome[languageSelected].section5.title[
                  "part-3-normal"
                ]
              }
            </h2>
          </div>
          <div className="w-11/12 mx-auto">
            <div className="grid grid-cols-[minmax(360px,440px)_1fr] gap-x-5">
              <div className="flex flex-col items-center">
                <Image
                  width={376}
                  height={334}
                  alt="Teacher"
                  src={"/images/section-5/mulher.jpg"}
                />
                <p className="max-w-md text-2xl font-medium text-center -translate-y-5 text-primary">
                  {
                    LanguagePageHome[languageSelected].section5.paragraph[
                      "part-1-normal"
                    ]
                  }{" "}
                  <strong className="font-semibold text-secondary">
                    {
                      LanguagePageHome[languageSelected].section5.paragraph[
                        "part-2-semibold"
                      ]
                    }
                  </strong>{" "}
                  {
                    LanguagePageHome[languageSelected].section5.paragraph[
                      "part-3-normal"
                    ]
                  }{" "}
                  <strong className="font-semibold text-secondary">
                    {
                      LanguagePageHome[languageSelected].section5.paragraph[
                        "part-4-semibold"
                      ]
                    }
                  </strong>
                </p>
              </div>
              <div>
                <ResultsCarouselComponent />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ComponentElementScroll>
  );
}
