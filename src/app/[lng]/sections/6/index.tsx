"use client";
import ComponentElementScroll from "../../components/ElementScroll";
import LanguagePageHome from "../../../../language/home.page.json";
import { ContextLanguage } from "@/contexts/language.context";
import { useContext } from "react";
import ComponentTestimonialsCarousel from "../../components/carousels/testimonials.carousel";

interface PropsSection6PageHome_I {}

export default function Section6PageHome(
  props: PropsSection6PageHome_I
): JSX.Element {
  const { languageSelected } = useContext(ContextLanguage);

  return (
    <ComponentElementScroll name="section6">
      <section
        style={{
          background: "#E0FED6",
        }}
        className="flex items-center px-4 py-24 border-t border-slate-400"
      >
        <div className="flex flex-col w-11/12 m-auto">
          <div className="flex flex-col items-center gap-y-12">
            <h2 className="max-w-3xl text-3xl font-medium text-center text-primary">
              <span className="font-semibold text-secondary">
                {
                  LanguagePageHome[languageSelected].section6.title[
                    "part-1-semibold"
                  ]
                }
              </span>{" "}
              {
                LanguagePageHome[languageSelected].section6.title[
                  "part-2-normal"
                ]
              }{" "}
              <span className="font-semibold text-secondary">
                {
                  LanguagePageHome[languageSelected].section6.title[
                    "part-3-semibold"
                  ]
                }
              </span>{" "}
              {
                LanguagePageHome[languageSelected].section6.title[
                  "part-4-normal"
                ]
              }
            </h2>

            <div className="w-full">
              <ComponentTestimonialsCarousel />
              <div className="flex items-center justify-center mt-2 gap-x-2">
                <span className="block h-3 rounded-full w-14 bg-secondary"></span>
                <span className="block w-3 h-3 rounded-full bg-primary"></span>
                <span className="block w-3 h-3 rounded-full bg-primary"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ComponentElementScroll>
  );
}
