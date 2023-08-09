"use client";
import { ContextLanguage } from "@/contexts/language.context";
import { useContext } from "react";
import { animateScroll as scroll } from "react-scroll";

interface PropsComponentNavHeader_I {}

export default function ComponentNavHeader(
  props: PropsComponentNavHeader_I
): JSX.Element {
  const { languageSelected } = useContext(ContextLanguage);

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center justify-between text-sm font-medium lg:text-base text-primary gap-x-3 lg:gap-x-5">
        <li>
          <a
            className="duration-200 cursor-pointer hover:text-secondary"
            onClick={() => scroll.scrollTo(0)}
          >
            {languageSelected === "BR" ? "O Curso" : "Course"}
          </a>
        </li>
        <li>
          <a
            className="duration-200 cursor-pointer hover:text-secondary"
            href="#"
          >
            {languageSelected === "BR" ? "A Loja" : "Store"}
          </a>
        </li>
        <li>
          <a
            className="duration-200 cursor-pointer hover:text-secondary"
            href="#"
          >
            {languageSelected === "BR"
              ? "Traduções & Musicais"
              : "Translations and Music"}
          </a>
        </li>
        <li>
          <a
            className="duration-200 cursor-pointer hover:text-secondary"
            href="#"
          >
            {languageSelected === "BR" ? "Conjugação" : "Conjugation"}
          </a>
        </li>
      </ul>
    </nav>
  );
}
