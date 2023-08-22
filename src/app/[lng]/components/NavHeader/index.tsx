"use client";
import { ContextLanguage } from "@/contexts/language.context";
import { useContext } from "react";
import { animateScroll as scroll } from "react-scroll";
import LanguagePageHome from "../../../../language/home.page.json";

interface PropsComponentNavHeader_I {}

export default function ComponentNavHeader(
  props: PropsComponentNavHeader_I
): JSX.Element {
  const { languageSelected } = useContext(ContextLanguage);

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center justify-between text-sm font-medium lg:text-base text-primary gap-x-3 lg:gap-x-5">
        {LanguagePageHome[languageSelected].header.nav.map((item) => (
          <li key={item.id}>
            <a
              {...(item.link && { href: item.link })}
              className="duration-200 cursor-pointer hover:text-secondary"
              onClick={() => item.scrollTop && scroll.scrollTo(0)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
