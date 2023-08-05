"use client";

import { createContext, useMemo, useState } from "react";

export type Countries_T =
  | "marrocos"
  | "saaraOcidental"
  | "mauritania"
  | "argelia"
  | "tunisia"
  | "libia"
  | "egito"
  | "sudao"
  | "eritreia"
  | "somalia"
  | "iemen"
  | "arabiaSaudita"
  | "jordania"
  | "siria"
  | "libano"
  | "palestina"
  | "iraque"
  | "kuwait"
  | "emiradosArabesUnidos"
  | "oma"
  | "catar"
  | "bahrein"
  | "chade";

interface PropsContextExploreMap_I {
  countrySelected: Countries_T;
  setCountrySelected(vl: Countries_T): void;
}

export const ContextExploreMap = createContext<PropsContextExploreMap_I>({
  countrySelected: "marrocos",
} as PropsContextExploreMap_I);

interface PropsProviderContextExploreMap_I {
  children: JSX.Element;
}
export const ProviderContextExploreMap: React.FC<
  PropsProviderContextExploreMap_I
> = ({ children }): JSX.Element => {
  const [countrySelected, setCountrySelected] = useState<Countries_T>(
    "marrocos" as Countries_T
  );

  const data_values = useMemo(() => {
    return {
      countrySelected,
      setCountrySelected,
    };
  }, [countrySelected, setCountrySelected]);
  return (
    <ContextExploreMap.Provider value={data_values}>
      {children}
    </ContextExploreMap.Provider>
  );
};
