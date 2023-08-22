"use client";

import { ContextLanguage } from "@/contexts/language.context";
import { useContext } from "react";
import DataListDoubts from "./data.json";
import { useCollapse } from "react-collapsed";
import { FiChevronDown } from "react-icons/fi";

import LanguagePageHome from "../../../../language/home.page.json";

interface PropsDoubts_I {}

interface PropsArticleDoubt_I {
  question: string;
  response: {
    id: string;
    value: string;
  }[];
  id: string;
}
const ArticleDoubt: React.FC<PropsArticleDoubt_I> = (
  props: PropsArticleDoubt_I
): JSX.Element => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({});

  return (
    <article
      className={`${
        isExpanded ? "" : ""
      } border-b last:border-b-0 border-gray/30`}
    >
      <a
        className={`flex justify-between items-center gap-x-4 px-8 duration-200 relative py-6 text-lg tracking-wide ${
          isExpanded ? "shadow-md shadow-gray/10" : ""
        } text-zinc-700`}
        {...getToggleProps()}
      >
        <span className="flex items-center gap-x-7">
          <strong className="font-semibold">{props.id.padStart(2, "0")}</strong>{" "}
          {props.question}
        </span>
        <FiChevronDown
          className={`text-primary duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
          size={23}
        />
      </a>
      <div
        className={` font-light text-base bg-emerald-50/75 tracking-wide`}
        {...getCollapseProps()}
      >
        {props.response.length > 1 ? (
          <ul className="px-8 py-4 flex flex-col gap-y-0.5">
            {props.response.map((item) => (
              <li key={item.id}>{item.value}</li>
            ))}
          </ul>
        ) : (
          <p className="px-8 py-4">{props.response[0].value}</p>
        )}
      </div>
    </article>
  );
};

export default function ComponentDoubts(props: PropsDoubts_I): JSX.Element {
  const { languageSelected } = useContext(ContextLanguage);

  return (
    <div className="overflow-hidden border border-gray/30">
      {LanguagePageHome[languageSelected].section11.items.map((doubt) => (
        <ArticleDoubt key={doubt.id} {...doubt} />
      ))}
    </div>
  );
}
