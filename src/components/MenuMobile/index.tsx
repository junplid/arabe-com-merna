"use client";

import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export const MenuMobileComponent = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false as boolean);

  const ref = useOnclickOutside(() => {
    if (open) setOpen(false);
    return;
  });

  return (
    <div ref={ref}>
      <button onClick={() => setOpen(!open)} className="border p-2">
        {open ? (
          <IoCloseSharp className="text-primary" size={30} />
        ) : (
          <GiHamburgerMenu className="text-primary" size={30} />
        )}
      </button>
      <div
        style={{ background: "#fff", top: open ? 100 : -24 }}
        className={`-z-10 fixed w-full left-0 duration-200`}
      >
        <nav>
          <ul>
            <li>
              <a className="cursor-pointer">O curso</a>
            </li>
            <li>
              <a className="cursor-pointer">A Loja</a>
            </li>
            <li>
              <a className="cursor-pointer">Traduções & Musicais</a>
            </li>
            <li>
              <a className="cursor-pointer">Conjugação</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
