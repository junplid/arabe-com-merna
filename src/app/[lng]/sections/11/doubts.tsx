"use client";

import DataListDoubts from "./data.json";
import { useCollapse } from "react-collapsed";
import { FiChevronDown } from "react-icons/fi";

interface PropsDoubts_I {}

interface PropsArticleDoubt_I {
  label: string;
  text?: string;
  id: string;
  list: string[];
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
      key={props.id}
    >
      <a
        className={`flex justify-between items-center gap-x-4 px-8 duration-200 relative py-6 text-lg tracking-wide ${
          isExpanded ? "shadow-md shadow-gray/10" : ""
        } text-zinc-700`}
        {...getToggleProps()}
      >
        <span className="flex items-center gap-x-7">
          <strong className="font-semibold">{props.id.padStart(2, "0")}</strong>{" "}
          {props.label}
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
        {props?.text && <p className="px-8 py-4">{props.text}</p>}
        {props?.list && (
          <ul className="px-8 py-4 flex flex-col gap-y-0.5">
            {props.list.map((item, i) => (
              <li key={i}>- {item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export default function ComponentDoubts(props: PropsDoubts_I): JSX.Element {
  return (
    <div className="overflow-hidden border border-gray/30">
      {(DataListDoubts as PropsArticleDoubt_I[]).map((doubt) => (
        <ArticleDoubt key={doubt.id} {...doubt} />
      ))}
    </div>
  );
}
