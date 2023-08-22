"use client";

import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { tv, VariantProps } from "tailwind-variants";
import LanguagePageHome from "../../../../language/home.page.json";
import { ContextLanguage } from "@/contexts/language.context";
import { useContext } from "react";

const article = tv({
  base: "flex items-center gap-x-5 group duration-300 justify-between w-full px-5 py-4 shadow-md shadow-slate-400/80 rounded-3xl",
  variants: {
    colors: {
      default: "bg-primary hover:bg-primary-hover",
      secondary: "bg-primary-hover hover:bg-primary",
    },
  },
  defaultVariants: {
    colors: "default",
  },
});

const name_user = tv({
  base: "absolute text-sm bottom-1 duration-300 -left-4 px-4 py-0.5 font-medium text-white shadow-md",
  variants: {
    colors: {
      default: "bg-green group-hover:bg-green-strong",
      secondary: "bg-green-strong group-hover:bg-green",
    },
  },
  defaultVariants: {
    colors: "default",
  },
});

interface PropsArticle_I
  extends VariantProps<typeof article | typeof name_user> {
  paragraph: string;
  name: string;
}

const ArticleComponent: React.FC<PropsArticle_I> = (
  props: PropsArticle_I
): JSX.Element => {
  return (
    <a className="cursor-pointer ">
      <article
        style={{ minWidth: 320 }}
        className={article({ colors: props.colors })}
      >
        <div>
          <p className="text-xl font-semibold leading-tight tracking-wide text-white line-clamp-5">
            <span className="text-2xl leading-none">{'"'}</span>
            {props.paragraph}
            <span className="text-2xl leading-none">{'"'}</span>
          </p>
        </div>
        <div className="relative">
          <div
            className="absolute top-0 left-0 p-1 shadow-md"
            style={{
              background: "#fff",
              transform: "rotateZ(-25deg) translateX(-10px) translateY(-5px)",
            }}
          >
            <BsFillEmojiHeartEyesFill className="text-yellow-500" size={24} />
          </div>
          <div
            style={{ background: "#fff" }}
            className="w-28 h-36 rounded-3xl"
          ></div>
          <span className={name_user({ colors: props.colors })}>
            {props.name}
          </span>
        </div>
      </article>
    </a>
  );
};

export const ResultsCarouselComponent: React.FC = (): JSX.Element => {
  const { languageSelected } = useContext(ContextLanguage);

  return (
    <div className="flex flex-col gap-y-8">
      <div className="grid pb-2 overflow-hidden gap-y-4">
        {LanguagePageHome[languageSelected].section5.carousels.map(
          (carousel) => (
            <div className="flex gap-x-3" key={carousel.id}>
              {carousel.items.map((item) => (
                <ArticleComponent
                  name="Rian Junplid"
                  key={item.id}
                  paragraph={item.paragraph}
                  colors="default"
                />
              ))}
            </div>
          )
        )}
      </div>
      <div className="flex gap-6">
        <button className="p-1 border-2 rounded-full group hover:border-primary-hover border-primary">
          <GoChevronLeft
            size={35}
            className="text-primary group-hover:text-primary-hover"
          />
        </button>
        <button className="p-1 border-2 rounded-full group hover:border-primary-hover border-primary">
          <GoChevronRight
            size={35}
            className="text-primary group-hover:text-primary-hover"
          />
        </button>
      </div>
    </div>
  );
};
