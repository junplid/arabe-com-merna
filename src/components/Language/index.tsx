"use client";

import { ContextLanguage } from "@/contexts/language.context";
import { useContext, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { IoLanguage } from "react-icons/io5";

type OptionsLanguage_T = "EN" | "BR";
const optionsLanguage: OptionsLanguage_T[] = ["EN", "BR"];

export const LanguageComponent = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false as boolean);
  const { languageSelected, setLanguageSelected } = useContext(ContextLanguage);

  const ref = useOnclickOutside(() => {
    if (open) setOpen(false);
    return;
  });

  return (
    <div ref={ref} className="relative hidden mobile:block">
      {/* preview */}
      <div
        onClick={() => (!open ? setOpen(true) : null)}
        className={`border px-4 py-2 border-gray-200 gap-x-2 cursor-pointer ${
          open ? "bg-gray-50" : ""
        } hover:bg-gray-50 duration-300 flex items-center`}
      >
        <IoLanguage size={20} className="text-primary" />
        <span className="text-sm font-medium text-primary">
          {languageSelected}
        </span>
      </div>
      {open && (
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
  );
};
