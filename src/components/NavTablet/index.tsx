"use client";

import { ContextLanguage } from "@/contexts/language.context";
import { useContext } from "react";
import LanguagePageHome from "../../language/home.page.json";

export const NavTabletComponent = (): JSX.Element => {
  const { languageSelected } = useContext(ContextLanguage);

  return (
    <div
      className={`px-4 mt-3 border-t pt-2 hidden mobile:block md:hidden w-full left-0 duration-200`}
    >
      <nav className="relative">
        <ul className="flex items-center justify-around text-sm font-semibold sm:text-base text-primary gap-x-2 sm:gap-x-5">
          {LanguagePageHome[languageSelected].header.nav.map((item) => (
            <li key={item.id}>
              <a
                {...(item.link && { href: item.link })}
                // onClick={() => item.scrollTop && scroll.scrollTo(0)}
                className="cursor-pointer text-secondary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
