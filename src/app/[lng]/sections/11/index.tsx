"use client";
import ComponentDoubts from "./doubts";
import ComponentElementScroll from "../../components/ElementScroll";
import { ContextLanguage } from "@/contexts/language.context";
import { useContext } from "react";
import LanguagePageHome from "../../../../language/home.page.json";

interface PropsSection10PageHome_I {}

export default function Section11PageHome(
  props: PropsSection10PageHome_I
): JSX.Element {
  const { languageSelected } = useContext(ContextLanguage);

  return (
    <ComponentElementScroll name="section11">
      <section className="flex items-center px-4 py-24 duration-300">
        <div className="w-full m-auto max-w-default">
          <div className="flex flex-col gap-y-10">
            <div className="flex justify-center w-full">
              <h2 className="text-3xl text-primary">
                <strong className="font-semibold">
                  {
                    LanguagePageHome[languageSelected].section11.title[
                      "part-1-semibold"
                    ]
                  }
                </strong>{" "}
                {
                  LanguagePageHome[languageSelected].section11.title[
                    "part-2-normal"
                  ]
                }
              </h2>
            </div>
            <ComponentDoubts />
          </div>
        </div>
      </section>
    </ComponentElementScroll>
  );
}
