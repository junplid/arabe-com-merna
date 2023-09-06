"use client";

import { LanguageHeader } from "@/language/home/header";
import { FC, useContext, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp, IoLanguage } from "react-icons/io5";

type OptionsLanguage_T = "pt-br" | "en";
const optionsLanguage: OptionsLanguage_T[] = ["pt-br", "en"];
const viewOptions = {
  "pt-br": "BR",
  en: "EN",
};

interface PropsMenuMobileComponent_I {
  lng?: "en" | "pt-br";
}

export const MenuMobileComponent: FC<PropsMenuMobileComponent_I> = ({
  lng = "pt-br",
}: PropsMenuMobileComponent_I): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false as boolean);

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
        style={{
          background: "#fff",
          top: open ? 63 : -350,
          position: "absolute",
        }}
        className={`pb-2 pt-5 w-full left-0 shadow-lg shadow-black/10 duration-500`}
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
                {viewOptions[lng]}
              </span>
            </button>
            {openLanguage && (
              <ul className="absolute z-50 w-full duration-150 translate-y-2 shadow-md shadow-slate-200/40 bg-slate-50">
                {optionsLanguage.map((op) => (
                  <li
                    className="flex items-center justify-between p-1 px-2 cursor-pointer select-none group hover:text-green-500 gap-x-1"
                    key={op}
                    onClick={() => {
                      // setar cookie
                      // recarregar a página
                    }}
                  >
                    <span
                      className={
                        lng === op
                          ? "duration-300 group-hover:text-green-600 text-primary"
                          : "duration-300 group-hover:text-gray-500 text-gray-400"
                      }
                    >
                      {viewOptions[op]}
                    </span>
                    <span
                      className={`duration-300 rounded-full w-2 h-2 ${
                        lng === op
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
            {LanguageHeader[lng]["button-student-area"]}
          </a>
        </div>
        <nav className="px-4 mt-4">
          <ul className="text-primary">
            {LanguageHeader[lng].nav.map((item) => (
              <li key={item.id}>
                <a
                  {...(item.link && { href: item.link })}
                  // onClick={() => item.scrollTop && scroll.scrollTo(0)}
                  className="block px-2 py-3 text-lg font-medium text-secondary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
