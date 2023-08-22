"use client";
import ComponentElementScroll from "../../components/ElementScroll";
import Image from "next/image";
import LanguagePageHome from "../../../../language/home.page.json";
import { ContextLanguage } from "@/contexts/language.context";
import { useContext } from "react";

interface PropsSection9PageHome_I {}

export default function Section9PageHome(
  props: PropsSection9PageHome_I
): JSX.Element {
  const { languageSelected } = useContext(ContextLanguage);

  return (
    <ComponentElementScroll name="section9">
      <section
        style={{ background: "#F2FFEC" }}
        className="flex items-center px-4 py-24 text-white"
      >
        <div className="flex justify-between m-auto gap-x-14 max-w-default">
          <Image
            src={"/images/section-9/professora.png"}
            width={500}
            height={521}
            style={{ height: "auto", width: "100%" }}
            alt="Professora Merna"
            className=""
          />
          <div className="flex flex-col gap-y-6">
            <h3 className="font-bold text-primary">
              <span className="text-2xl">
                {LanguagePageHome[languageSelected].section9.subtitle}
              </span>{" "}
              <br />
              <span className="text-3xl">
                {LanguagePageHome[languageSelected].section9.title}
              </span>
            </h3>
            <div className="flex flex-col gap-y-5">
              {LanguagePageHome[languageSelected].section9.paragraphs.map(
                (paragraph) => (
                  <p
                    key={paragraph.id}
                    className="text-lg"
                    style={{ color: "#2A2A2A" }}
                  >
                    {paragraph.text}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </ComponentElementScroll>
  );
}
