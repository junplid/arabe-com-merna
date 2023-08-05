"use client";

import { useContext, useEffect } from "react";
import ComponentMapExplore from "./map";
import { ContextExploreMap, Countries_T } from "@/contexts/exploreMap.context";

interface PropsSection10PageHome_I {}

const imgCoutries: Countries_T[] = [
  "arabiaSaudita",
  "argelia",
  "bahrein",
  "catar",
  "chade",
  "egito",
  "emiradosArabesUnidos",
  "eritreia",
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

export default function Section10PageHome(
  props: PropsSection10PageHome_I
): JSX.Element {
  const { countrySelected } = useContext(ContextExploreMap);

  useEffect(() => {
    imgCoutries.forEach((country) => {
      const img = new Image();
      img.src = `/images/section-10/paises/bg/${country}.png`;
    });
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url('/images/section-10/paises/bg/${countrySelected}.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="flex items-center px-4 py-20 text-white duration-300"
    >
      <div className="m-auto max-w-default">
        <div className="flex flex-col gap-y-10">
          <div className="flex justify-center w-full">
            <h4 className="pb-1 uppercase border-b border-gray">Explore</h4>
          </div>

          <ComponentMapExplore />
        </div>
      </div>
    </section>
  );
}
