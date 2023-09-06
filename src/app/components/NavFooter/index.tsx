"use client";
import { Link } from "react-scroll";
import { LanguageFooter } from "@/language/home/footer";

interface PropsComponentNavFooter_I {
  lng?: "pt-br" | "en";
}

export default function ComponentNavFooter({
  lng = "pt-br",
}: PropsComponentNavFooter_I): JSX.Element {
  return (
    <div className="flex justify-center w-full md:max-w-md gap-x-6 md:justify-between">
      <div className="flex flex-col items-baseline gap-y-3">
        <h4 className="text-2xl font-semibold text-primary">
          {LanguageFooter[lng].nav.labelCourse}
        </h4>
        <nav>
          <ul className="grid text-lg text-primary gap-y-2">
            {LanguageFooter[lng].nav.course.map((item) => (
              <li key={item.id}>
                <Link
                  smooth
                  spy
                  offset={-63}
                  to={item.link}
                  className="duration-200 cursor-pointer hover:text-secondary"
                >
                  {item.value}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-baseline gap-y-3">
        <h4 className="text-2xl font-semibold text-primary">
          {LanguageFooter[lng].nav.labelPlataform}
        </h4>
        <nav>
          <ul className="grid text-lg text-primary gap-y-2">
            {LanguageFooter[lng].nav.plataform.map((item) => (
              <li key={item.id}>
                <a
                  className="duration-200 cursor-pointer hover:text-secondary"
                  href={item.link}
                >
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
