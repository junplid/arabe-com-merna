"use client";
import { BiWorld } from "react-icons/bi";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import LanguagePageHome from "../../../../language/home.page.json";
import { ContextLanguage } from "@/contexts/language.context";
import { useContext } from "react";

interface PropsSection2PageHome_I {}

export default function Section2PageHome(
  props: PropsSection2PageHome_I
): JSX.Element {
  const { languageSelected } = useContext(ContextLanguage);

  return (
    <section className="flex items-center px-4 py-6 bg-primary">
      <div className="flex flex-col items-center justify-center w-full gap-3 m-auto sm:flex-row sm:gap-8 max-w-default">
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <div className="flex items-center gap-1">
            <ImStarFull className="text-secondary" size={28} />
            <ImStarFull className="text-secondary" size={28} />
            <ImStarFull className="text-secondary" size={28} />
            <ImStarFull className="text-secondary" size={28} />
            <ImStarHalf className="text-secondary" size={28} />
          </div>
          <span className="text-lg font-light text-center text-white">
            {LanguagePageHome[languageSelected].section2.assessments}
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <BiWorld className="text-secondary" size={28} />
          <span className="text-lg font-light text-white">
            {LanguagePageHome[languageSelected].section2.countries}
          </span>
        </div>
      </div>
    </section>
  );
}
