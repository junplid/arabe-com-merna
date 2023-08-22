"use client";
import ComponentElementScroll from "../../components/ElementScroll";
import Image from "next/image";
import LanguagePageHome from "../../../../language/home.page.json";
import { ContextLanguage } from "@/contexts/language.context";
import { useContext } from "react";

interface PropsSection8PageHome_I {}

export default function Section8PageHome(
  props: PropsSection8PageHome_I
): JSX.Element {
  const { languageSelected } = useContext(ContextLanguage);

  return (
    <ComponentElementScroll name="section8">
      <section
        style={{ background: "#F2FFEC" }}
        className="flex items-center px-4 py-24 text-white"
      >
        <div className="flex flex-col items-center m-auto gap-y-8 max-w-default">
          <h2 className="max-w-4xl text-3xl font-medium text-center text-primary">
            {LanguagePageHome[languageSelected].section8.title["part-1-normal"]}{" "}
            <span className="font-semibold text-secondary">
              {
                LanguagePageHome[languageSelected].section8.title[
                  "part-2-semibold"
                ]
              }
            </span>{" "}
            {LanguagePageHome[languageSelected].section8.title["part-3-normal"]}{" "}
            <span className="font-semibold text-secondary">
              {
                LanguagePageHome[languageSelected].section8.title[
                  "part-4-semibold"
                ]
              }
            </span>{" "}
            {LanguagePageHome[languageSelected].section8.title["part-5-normal"]}
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
            {LanguagePageHome[languageSelected].section8.items.map((item) => (
              <article
                key={item.id}
                style={{
                  backgroundImage: `url('/images/section-8/bg-bonus.jpg')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="flex flex-col justify-start p-5 shadow-md gap-y-3 shadow-gray rounded-xl"
              >
                <span
                  style={{
                    background:
                      "linear-gradient(157deg, #E1A50A 0%, #E1BF0B 40.97%, #CF9809 99.01%)",
                  }}
                  className="block w-full py-3 font-semibold text-center uppercase rounded-lg select-none"
                >
                  {item.title}
                </span>
                <Image
                  src={item.img}
                  width={150}
                  height={150}
                  alt="App Árabe com Merna"
                  className="mx-auto"
                />
                <div className="flex flex-col items-center justify-start gap-y-2">
                  <h3 className="text-lg font-medium" style={{ color: "#fff" }}>
                    {item.subtitle}
                  </h3>
                  {item.paragraph.map((paragraph) => (
                    <p
                      key={paragraph.id}
                      className="text-center"
                      style={{ color: "##E1E1E1" }}
                    >
                      {paragraph.text}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </ComponentElementScroll>
  );
}
