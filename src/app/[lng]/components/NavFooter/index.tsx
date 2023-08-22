"use client";
import { Link, animateScroll as scroll } from "react-scroll";
import LanguagePageHome from "../../../../language/home.page.json";
import { ContextLanguage } from "@/contexts/language.context";
import { useContext } from "react";

interface PropsComponentNavFooter_I {}

export default function ComponentNavFooter(
  props: PropsComponentNavFooter_I
): JSX.Element {
  const { languageSelected } = useContext(ContextLanguage);

  return (
    <div className="flex justify-between w-full max-w-md">
      <div className="flex flex-col items-baseline gap-y-3">
        <h4 className="text-2xl font-semibold text-primary">
          {LanguagePageHome[languageSelected].footer.nav.labelCourse}
        </h4>
        <nav>
          <ul className="grid text-lg text-primary gap-y-2">
            {LanguagePageHome[languageSelected].footer.nav.course.map(
              (item) => (
                <li key={item.id}>
                  <Link
                    smooth
                    spy
                    offset={-63}
                    to={item.link}
                    className="duration-200 cursor-pointer hover:text-secondary"
                  >
                    {item.value}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-baseline gap-y-3">
        <h4 className="text-2xl font-semibold text-primary">
          {LanguagePageHome[languageSelected].footer.nav.labelPlataform}
        </h4>
        <nav>
          <ul className="grid text-lg text-primary gap-y-2">
            {LanguagePageHome[languageSelected].footer.nav.plataform.map(
              (item) => (
                <li key={item.id}>
                  <a
                    className="duration-200 cursor-pointer hover:text-secondary"
                    href={item.link}
                  >
                    {item.value}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
