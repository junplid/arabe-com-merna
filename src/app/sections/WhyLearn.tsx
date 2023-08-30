"use client";
import { LanguageSectionWhyLearn } from "@/language/home/why-learn";
import ComponentElementScroll from "../components/ElementScroll";
import { EnrollmentFormComponent } from "../components/EnrollmentForm";
import Image from "next/image";
import { useState } from "react";

interface PropsSection4PageHome_I {
  lng?: "pt-br" | "en";
}

export default function SectionWhyLearnHomePage({
  lng = "pt-br",
}: PropsSection4PageHome_I): JSX.Element {
  const [selected, setSelected] = useState<string>("1" as string);

  return (
    <ComponentElementScroll name="section4">
      <section className="flex items-center px-4 py-24 bg-primary">
        <div className="w-full m-auto max-w-default">
          <div className="grid items-start grid-cols-2 gap-10">
            <article className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-4">
                <h2 className="text-3xl text-white">
                  {LanguageSectionWhyLearn[lng].title["part-1-normal"]}{" "}
                  <strong className="font-semibold text-secondary">
                    {LanguageSectionWhyLearn[lng].title["part-2-semibold"]}
                  </strong>
                </h2>
                <p className="text-xl text-white">
                  {LanguageSectionWhyLearn[lng]["paragraph-1"]}
                </p>
              </div>
              <div className="flex flex-col gap-y-6">
                <div className="flex items-center justify-between">
                  {LanguageSectionWhyLearn[lng].list["buttons-items"].map(
                    (btn) => (
                      <button
                        onClick={() => setSelected(btn.id)}
                        key={btn.label}
                        className={`px-8 duration-200 py-1.5 rounded-lg ${
                          selected === btn.id
                            ? "bg-terc text-secondary"
                            : "bg-secondary text-terc"
                        }  font-semibold  shadow-sm`}
                      >
                        {btn.label}
                      </button>
                    )
                  )}
                </div>
                <p className="text-lg font-light text-white">
                  {
                    LanguageSectionWhyLearn[lng].list.values.find(
                      (e) => e.id === selected
                    )?.text
                  }
                </p>
                <div className="flex gap-2">
                  {LanguageSectionWhyLearn[lng].list.values
                    .find((e) => e.id === selected)
                    ?.imgs.map((img) => (
                      <Image
                        width={279}
                        height={228}
                        alt="imagem"
                        src={img}
                        key={img}
                      />
                    ))}
                </div>
              </div>
            </article>
            <article
              className="flex flex-col items-center p-8 shadow-lg rounded-3xl gap-y-5"
              style={{ background: "#fff" }}
            >
              <h3 className="text-2xl font-semibold text-primary">
                {LanguageSectionWhyLearn[lng].register.title}
              </h3>
              <EnrollmentFormComponent lng={lng} />
              <small className="text-base font-light text-primary">
                {LanguageSectionWhyLearn[lng].register.warning["part-1-normal"]}{" "}
                <a className="font-semibold underline cursor-pointer underline-offset-2">
                  {
                    LanguageSectionWhyLearn[lng].register.warning[
                      "part-2-link-semibold"
                    ]
                  }
                </a>{" "}
                {LanguageSectionWhyLearn[lng].register.warning["part-3-normal"]}
              </small>
            </article>
          </div>
        </div>
      </section>
    </ComponentElementScroll>
  );
}