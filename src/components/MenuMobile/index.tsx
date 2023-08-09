"use client";

import { ContextLanguage } from "@/contexts/language.context";
import { useContext, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp, IoLanguage } from "react-icons/io5";

type OptionsLanguage_T = "EN" | "BR";
const optionsLanguage: OptionsLanguage_T[] = ["EN", "BR"];

export const MenuMobileComponent = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false as boolean);
  const { languageSelected, setLanguageSelected } = useContext(ContextLanguage);

  const [openLanguage, setOpenLanguage] = useState<boolean>(false as boolean);

  const ref = useOnclickOutside(() => {
    if (open) setOpen(false);
    return;
  });

  const refLanguage = useOnclickOutside(() => {
    if (openLanguage) setOpenLanguage(false);
    return;
  });

  return (
    <div ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="absolute right-0 z-40 p-2 -translate-x-4 border -translate-y-14"
      >
        {open ? (
          <IoCloseSharp className="text-primary" size={30} />
        ) : (
          <GiHamburgerMenu className="text-primary" size={30} />
        )}
      </button>
      <div
        style={{ background: "#fff", top: open ? 100 : -280 }}
        className={`pb-2 pt-5 fixed w-full left-0 shadow-lg shadow-black/10 duration-500`}
      >
        <div className="flex gap-4 px-4">
          <div ref={refLanguage} className="relative w-2/3 h-14">
            <button
              onClick={() => (!openLanguage ? setOpenLanguage(true) : null)}
              className={`border w-full flex h-full justify-center py-2 border-gray-200 gap-x-2 cursor-pointer ${
                openLanguage ? "bg-gray-50" : ""
              } hover:bg-gray-50 duration-300 flex items-center`}
            >
              <IoLanguage size={25} className="text-primary" />
              <span className="text-base font-medium text-primary">
                {languageSelected}
              </span>
            </button>
            {openLanguage && (
              <ul className="absolute z-50 w-full duration-150 translate-y-2 shadow-md shadow-slate-200/40 bg-slate-50">
                {optionsLanguage.map((op) => (
                  <li
                    className="flex items-center justify-between p-1 px-2 cursor-pointer select-none group hover:text-green-500 gap-x-1"
                    key={op}
                    onClick={() => setLanguageSelected(op)}
                  >
                    <span
                      className={
                        languageSelected === op
                          ? "duration-300 group-hover:text-green-600 text-primary"
                          : "duration-300 group-hover:text-gray-500 text-gray-400"
                      }
                    >
                      {op}
                    </span>
                    <span
                      className={`duration-300 rounded-full w-2 h-2 ${
                        languageSelected === op
                          ? "group-hover:bg-green-600 bg-primary"
                          : "group-hover:bg-gray-300 bg-gray-200"
                      }`}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <a className="flex items-center justify-center w-full text-base font-medium duration-200 border rounded-md cursor-pointer h-14 border-primary/60 bg-primary/5 text-primary">
            {languageSelected === "BR" ? "Área do aluno" : "Student area"}
          </a>
        </div>
        <nav className="px-4 mt-4">
          <ul className="text-primary">
            <li>
              <a className="block px-2 py-3 text-lg font-medium border-b text-secondary">
                {languageSelected === "BR" ? "O Curso" : "Course"}
              </a>
            </li>
            <li>
              <a className="block px-2 py-3 text-lg font-medium border-b">
                {languageSelected === "BR" ? "A Loja" : "Store"}
              </a>
            </li>
            <li>
              <a className="block px-2 py-3 text-lg font-medium border-b">
                {languageSelected === "BR"
                  ? "Traduções & Musicais"
                  : "Translations and Music"}
              </a>
            </li>
            <li>
              <a className="block px-2 py-3 text-lg font-medium">
                {languageSelected === "BR" ? "Conjugação" : "Conjugation"}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
