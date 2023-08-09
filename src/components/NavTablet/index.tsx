"use client";

import { ContextLanguage } from "@/contexts/language.context";
import { useContext } from "react";

export const NavTabletComponent = (): JSX.Element => {
  const { languageSelected } = useContext(ContextLanguage);

  return (
    <div
      className={`px-4 mt-3 border-t pt-2 hidden mobile:block md:hidden w-full left-0 duration-200`}
    >
      <nav className="relative">
        <ul className="flex items-center justify-around text-sm font-semibold sm:text-base text-primary gap-x-2 sm:gap-x-5">
          <li>
            <a className="cursor-pointer text-secondary">
              {languageSelected === "BR" ? "O Curso" : "Course"}
            </a>
          </li>
          <li>
            <a className="cursor-pointer">
              {languageSelected === "BR" ? "A Loja" : "Store"}
            </a>
          </li>
          <li>
            <a className="cursor-pointer">
              {languageSelected === "BR"
                ? "Traduções & Musicais"
                : "Translations and Music"}
            </a>
          </li>
          <li>
            <a className="cursor-pointer">
              {languageSelected === "BR" ? "Conjugação" : "Conjugation"}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
