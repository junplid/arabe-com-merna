"use client";

import "./styles.css";

import DataCountries from "./data.json";

import Image from "next/image";
import ComponentCountryMorocco from "../countries/Morocco";
import ComponentCountrySaaraOcidental from "../countries/SaaraOcidental";
import ComponentCountryMauritania from "../countries/Mauritania";
import ComponentCountryArgelia from "../countries/Argelia";
import ComponentCountryTunisia from "../countries/Tunisia";
import ComponentCountryLibia from "../countries/Libia";
import ComponentCountryEgito from "../countries/Egito";
import ComponentCountrySudao from "../countries/Sudao";
import ComponentCountrySomalia from "../countries/Somalia";
import ComponentCountryArabiaSaldita from "../countries/ArabiaSaldita";
import ComponentCountryIemen from "../countries/Iemen";
import ComponentCountryJordania from "../countries/Jordania";
import ComponentCountryPalestina from "../countries/Palestina";
import ComponentCountrySiria from "../countries/Siria";
import ComponentCountryLibano from "../countries/Libano";
import ComponentCountryIraque from "../countries/Iraque";
import ComponentCountryKuwait from "../countries/Kuwait";
import ComponentCountryEmiradosArabesUnidos from "../countries/EmiradosArabesUnidos";
import ComponentCountryOma from "../countries/Oma";
import ComponentCountryCatar from "../countries/Catar";
import ComponentCountryBahrein from "../countries/Bahrein";
import { useContext } from "react";
import { ContextExploreMap, Countries_T } from "@/contexts/exploreMap.context";
import { LanguageSectionExplore } from "@/language/home/explore";

export interface PropsCountryComponent {
  active: boolean;
  onSelect(country: Countries_T): void;
}

interface PropsComponentMapExplore_I {
  lng?: "en" | "pt-br";
}

export default function ComponentMapExplore({
  lng = "pt-br",
}: PropsComponentMapExplore_I): JSX.Element {
  const { countrySelected, setCountrySelected } = useContext(ContextExploreMap);

  return (
    <div className="flex flex-col items-center gap-y-2">
      <div className="relative flex flex-wrap w-full max-w-3xl m-auto">
        <svg
          viewBox="0 0 760 414"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g clip-path="url(#clip0_317_273)">
            <ComponentCountryArabiaSaldita
              active={countrySelected === "arabiaSaudita"}
              onSelect={setCountrySelected}
            />

            <ComponentCountryArgelia
              active={countrySelected === "argelia"}
              onSelect={setCountrySelected}
            />

            <ComponentCountryBahrein
              active={countrySelected === "bahrein"}
              onSelect={setCountrySelected}
            />

            <ComponentCountryCatar
              active={countrySelected === "catar"}
              onSelect={setCountrySelected}
            />

            <ComponentCountryEgito
              active={countrySelected === "egito"}
              onSelect={setCountrySelected}
            />

            <ComponentCountryEmiradosArabesUnidos
              active={countrySelected === "emiradosArabesUnidos"}
              onSelect={setCountrySelected}
            />

            <ComponentCountryIemen
              active={countrySelected === "iemen"}
              onSelect={setCountrySelected}
            />

            <ComponentCountryIraque
              active={countrySelected === "iraque"}
              onSelect={setCountrySelected}
            />

            <ComponentCountryJordania
              active={countrySelected === "jordania"}
              onSelect={setCountrySelected}
            />
            <ComponentCountryLibano
              active={countrySelected === "libano"}
              onSelect={setCountrySelected}
            />
            <ComponentCountryLibia
              active={countrySelected === "libia"}
              onSelect={setCountrySelected}
            />
            <ComponentCountryMorocco
              active={countrySelected === "marrocos"}
              onSelect={setCountrySelected}
            />
            <ComponentCountryMauritania
              active={countrySelected === "mauritania"}
              onSelect={setCountrySelected}
            />
            <ComponentCountryOma
              active={countrySelected === "oma"}
              onSelect={setCountrySelected}
            />
            <ComponentCountrySaaraOcidental
              active={countrySelected === "saaraOcidental"}
              onSelect={setCountrySelected}
            />
            <ComponentCountrySiria
              active={countrySelected === "siria"}
              onSelect={setCountrySelected}
            />
            <ComponentCountrySomalia
              active={countrySelected === "somalia"}
              onSelect={setCountrySelected}
            />
            <ComponentCountrySudao
              active={countrySelected === "sudao"}
              onSelect={setCountrySelected}
            />
            <ComponentCountryTunisia
              active={countrySelected === "tunisia"}
              onSelect={setCountrySelected}
            />
            <ComponentCountryKuwait
              active={countrySelected === "kuwait"}
              onSelect={setCountrySelected}
            />
            <ComponentCountryPalestina
              active={countrySelected === "palestina"}
              onSelect={setCountrySelected}
            />
          </g>
          <defs>
            <clipPath id="clip0_317_273">
              <rect width="760" height="414" fill="white" />
            </clipPath>
            <clipPath id="clip2_317_273">
              <rect
                width="121"
                height="86"
                fill="white"
                transform="translate(57 19)"
              />
            </clipPath>
            <clipPath id="clip3_317_273">
              <rect
                width="98"
                height="148"
                fill="white"
                transform="translate(610 266)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex items-center justify-center w-3/4 pb-5 my-5 border-b gap-x-3 border-gray/30">
        <div className="flex items-center justify-center p-3 bg-yellow-200 rounded-full">
          <Image
            src={DataCountries[countrySelected].icon}
            height={32}
            width={32}
            alt="Marrocos"
          />
        </div>

        <div className="flex flex-col">
          <h4 className="text-lg font-semibold">
            {LanguageSectionExplore[lng].countries[countrySelected].title}
          </h4>
          <span>
            {LanguageSectionExplore[lng].countries[countrySelected].capital}
          </span>
        </div>
      </div>
      <p className="text-lg leading-relaxed text-center">
        {LanguageSectionExplore[lng].countries[countrySelected].text}
      </p>
    </div>
  );
}
