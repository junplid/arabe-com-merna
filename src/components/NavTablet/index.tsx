"use client";

export const NavTabletComponent = (): JSX.Element => {
  return (
    <div
      className={`px-4 mt-3 border-t pt-2 hidden mobile:block md:hidden w-full left-0 duration-200`}
    >
      <nav className="relative">
        <ul className="font-semibold text-sm sm:text-base text-primary flex justify-around gap-x-2 sm:gap-x-5 items-center">
          <li>
            <a className="cursor-pointer text-secondary">O curso</a>
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
  );
};
