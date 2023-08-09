"use client";
import { createContext, useMemo, useState } from "react";

type OptionsLanguage_T = "EN" | "BR";

interface PropsContextLanguage_I {
  languageSelected: OptionsLanguage_T;
  setLanguageSelected(vl: OptionsLanguage_T): void;
}

export const ContextLanguage = createContext({
  languageSelected: "BR",
} as PropsContextLanguage_I);

interface PropsProviderContextLanguage_I {
  children: JSX.Element;
}

export const ProviderContextLanguage: React.FC<
  PropsProviderContextLanguage_I
> = ({ children }): JSX.Element => {
  const [languageSelected, setLanguageSelected] = useState<OptionsLanguage_T>(
    "BR" as OptionsLanguage_T
  );

  const data_values = useMemo(() => {
    return {
      languageSelected,
      setLanguageSelected,
    };
  }, [languageSelected, setLanguageSelected]);
  return (
    <ContextLanguage.Provider value={data_values}>
      {children}
    </ContextLanguage.Provider>
  );
};
