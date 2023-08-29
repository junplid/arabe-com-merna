"use client";

import { FC, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { IoLanguage } from "react-icons/io5";
import { useCookies } from "react-cookie";

type OptionsLanguage_T = "pt-br" | "en";
const optionsLanguage: OptionsLanguage_T[] = ["pt-br", "en"];
const viewOptions = {
  "pt-br": "BR",
  en: "EN",
};

interface PropsLanguageComponent_I {
  lng?: "pt-br" | "en";
}

export const LanguageComponent: FC<PropsLanguageComponent_I> = ({
  lng = "pt-br",
}: PropsLanguageComponent_I): JSX.Element => {
  const [_cookies, setCookies] = useCookies(["lng"]);
  const [open, setOpen] = useState<boolean>(false as boolean);

  const ref = useOnclickOutside(() => {
    if (open) setOpen(false);
    return;
  });

  return (
    <div ref={ref} className="relative hidden mobile:block">
      <div
        onClick={() => (!open ? setOpen(true) : null)}
        className={`border px-4 py-2 border-slate-400 gap-x-2 cursor-pointer ${
          open ? "bg-gray-50" : ""
        } hover:bg-gray-50 duration-300 flex items-center`}
      >
        <IoLanguage size={20} className="text-primary" />
        <span className="text-sm font-medium text-primary">
          {viewOptions[lng]}
        </span>
      </div>
      {open && (
        <ul className="absolute z-50 w-full duration-150 translate-y-2 shadow-md shadow-slate-200/40 bg-slate-50">
          {optionsLanguage.map((op) => (
            <li
              className="flex items-center justify-between p-1 px-2 cursor-pointer select-none group hover:text-green-500 gap-x-1"
              key={op}
              onClick={() => {
                setCookies("lng", op);
                window.location.reload();
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
  );
};
