"use client";

import { useContext, useEffect } from "react";
import ComponentMapExplore from "./map";
import { ContextExploreMap, Countries_T } from "@/contexts/exploreMap.context";
import ComponentElementScroll from "../../components/ElementScroll";
import { LanguageSectionExplore } from "@/language/home/explore";

interface PropsSection10PageHome_I {
  lng?: "pt-br" | "en";
}

const imgCoutries: Countries_T[] = [
  "arabiaSaudita",
  "argelia",
  "bahrein",
  "catar",
  "egito",
  "emiradosArabesUnidos",
  "iemen",
  "iraque",
  "jordania",
  "kuwait",
  "libano",
  "marrocos",
  "mauritania",
  "oma",
  "palestina",
  "saaraOcidental",
  "siria",
  "somalia",
  "sudao",
  "tunisia",
];

export default function SectionExploreHomePage({
  lng = "pt-br",
}: PropsSection10PageHome_I): JSX.Element {
  const { countrySelected } = useContext(ContextExploreMap);

  useEffect(() => {
    imgCoutries.forEach((country) => {
      const img = new Image();
      img.src = `/images/section-10/paises/bg/${country}.png`;
    });
  }, []);

  return (
    <ComponentElementScroll name="section10">
      <section
        style={{
          backgroundImage: `url('/images/section-10/paises/bg/${countrySelected}.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="flex items-center px-4 py-24 text-white duration-300"
      >
        <div className="m-auto max-w-default">
          <div className="flex flex-col gap-y-10">
            <div className="flex justify-center w-full">
              <h4 className="pb-1 uppercase border-b border-gray">
                {LanguageSectionExplore[lng].title}
              </h4>
            </div>

            <ComponentMapExplore />
          </div>
        </div>
      </section>
    </ComponentElementScroll>
  );
}
