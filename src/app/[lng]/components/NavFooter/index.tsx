"use client";
import { Link, animateScroll as scroll } from "react-scroll";
import FooterNavData from "../../data/navFooter.json";

interface PropsComponentNavFooter_I {}

export default function ComponentNavFooter(
  props: PropsComponentNavFooter_I
): JSX.Element {
  return (
    <div className="flex justify-between w-full max-w-md">
      <div className="flex flex-col items-baseline gap-y-3">
        <h4 className="text-2xl font-semibold text-primary">
          {FooterNavData[0].label}
        </h4>
        <nav>
          <ul className="grid text-lg text-primary gap-y-2">
            {FooterNavData[0].items.map((item) => (
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
          {FooterNavData[1].label}
        </h4>
        <nav>
          <ul className="grid text-lg text-primary gap-y-2">
            {FooterNavData[1].items.map((item) => (
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
