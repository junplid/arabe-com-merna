"use client";
import { animateScroll as scroll } from "react-scroll";
import { LanguageHeader } from "@/language/home/header";

interface PropsComponentNavHeader_I {
  lng?: "en" | "pt-br";
}

export default function ComponentNavHeader({
  lng = "pt-br",
}: PropsComponentNavHeader_I): JSX.Element {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center justify-between text-sm font-medium lg:text-base text-primary gap-x-3 lg:gap-x-5">
        {LanguageHeader[lng].nav.map((item) => (
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
