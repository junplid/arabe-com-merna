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
import ComponentCountryChade from "../countries/Chade";
import ComponentCountryEgito from "../countries/Egito";
import ComponentCountrySudao from "../countries/Sudao";
import ComponentCountryEritreia from "../countries/Eritreia";
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
import LanguagePageHome from "../../../../../language/home.page.json";
import { ContextLanguage } from "@/contexts/language.context";

export interface PropsCountryComponent {
  active: boolean;
  onSelect(country: Countries_T): void;
}

export default function ComponentMapExplore(): JSX.Element {
  const { countrySelected, setCountrySelected } = useContext(ContextExploreMap);
  const { languageSelected } = useContext(ContextLanguage);

  return (
    <div className="flex flex-col items-center gap-y-2">
      <div
        style={{ height: 400 }}
        className="relative flex flex-wrap w-full max-w-3xl m-auto"
      >
        <ComponentCountryMauritania
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "mauritania"}
        />
        <ComponentCountrySaaraOcidental
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "saaraOcidental"}
        />
        <ComponentCountryMorocco
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "marrocos"}
        />
        <ComponentCountryArgelia
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "argelia"}
        />
        <ComponentCountryTunisia
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "tunisia"}
        />
        <ComponentCountryLibia
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "libia"}
        />
        <ComponentCountryChade
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "chade"}
        />
        <ComponentCountryEgito
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "egito"}
        />
        <ComponentCountrySudao
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "sudao"}
        />
        <ComponentCountryEritreia
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "eritreia"}
        />
        <ComponentCountrySomalia
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "somalia"}
        />
        <ComponentCountryIemen
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "iemen"}
        />
        <ComponentCountryArabiaSaldita
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "arabiaSaudita"}
        />
        <ComponentCountryJordania
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "jordania"}
        />
        <ComponentCountryPalestina
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "palestina"}
        />
        <ComponentCountrySiria
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "siria"}
        />
        <ComponentCountryLibano
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "libano"}
        />
        <ComponentCountryIraque
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "iraque"}
        />
        <ComponentCountryKuwait
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "kuwait"}
        />
        <ComponentCountryEmiradosArabesUnidos
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "emiradosArabesUnidos"}
        />
        <ComponentCountryOma
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "oma"}
        />
        <ComponentCountryCatar
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "catar"}
        />
        <ComponentCountryBahrein
          onSelect={(country) => setCountrySelected(country)}
          active={countrySelected === "bahrein"}
        />
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
            {DataCountries[countrySelected].title}
          </h4>
          <span>{DataCountries[countrySelected].capital}</span>
        </div>
      </div>
      <p className="text-lg leading-relaxed text-center">
        {DataCountries[countrySelected].text}
      </p>
    </div>
  );
}
