"use client";

import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp, IoLanguage } from "react-icons/io5";

type OptionsLanguage_T = "EN" | "BR";
const optionsLanguage: OptionsLanguage_T[] = ["EN", "BR"];

export const MenuMobileComponent = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false as boolean);
  const [openLanguage, setOpenLanguage] = useState<boolean>(false as boolean);
  const [selected, setselected] = useState<OptionsLanguage_T>(
    "BR" as OptionsLanguage_T
  );

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
        className="z-40 absolute -translate-y-14 right-0 -translate-x-4 border p-2"
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
              <span className="text-base text-primary font-medium">
                {selected}
              </span>
            </button>
            {openLanguage && (
              <ul className="z-50 absolute shadow-md duration-150 shadow-slate-200/40 bg-slate-50 translate-y-2 w-full">
                {optionsLanguage.map((op) => (
                  <li
                    className="group hover:text-green-500 gap-x-1 cursor-pointer select-none p-1 px-2 flex items-center justify-between"
                    key={op}
                    onClick={() => setselected(op)}
                  >
                    <span
                      className={
                        selected === op
                          ? "duration-300 group-hover:text-green-600 text-primary"
                          : "duration-300 group-hover:text-gray-500 text-gray-400"
                      }
                    >
                      {op}
                    </span>
                    <span
                      className={`duration-300 rounded-full w-2 h-2 ${
                        selected === op
                          ? "group-hover:bg-green-600 bg-primary"
                          : "group-hover:bg-gray-300 bg-gray-200"
                      }`}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <a className="h-14 flex items-center justify-center text-base font-medium duration-200 border border-primary/60 bg-primary/5 text-primary cursor-pointer rounded-md w-full">
            Área do aluno
          </a>
        </div>
        <nav className="mt-4 px-4">
          <ul className="text-primary">
            <li>
              <a className="text-secondary border-b font-medium text-lg block px-2 py-3">
                O curso
              </a>
            </li>
            <li>
              <a className="border-b font-medium text-lg block px-2 py-3">
                A Loja
              </a>
            </li>
            <li>
              <a className="border-b font-medium text-lg block px-2 py-3">
                Traduções & Musicais
              </a>
            </li>
            <li>
              <a className="font-medium text-lg block px-2 py-3">Conjugação</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
