"use client";
import { LanguageSectionWhyLearn } from "@/language/home/why-learn";
import ComponentElementScroll from "../components/ElementScroll";
import { EnrollmentFormComponent } from "../components/EnrollmentForm";
import Image from "next/image";
import { useState } from "react";
import { keyframes, styled } from "styled-components";

interface PropsSection4PageHome_I {
  lng?: "pt-br" | "en";
}

const animationP = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Paragraph = styled.p`
  animation: ${animationP} forwards;
  animation-duration: 300ms;
`;

const animationImg = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const ItemImage = styled.div<{ delay: string }>`
  animation: ${animationImg} forwards;
  animation-duration: 300ms;
  opacity: 0;
  animation-delay: ${({ delay }) => `${delay}ms`};
`;

export default function SectionWhyLearnHomePage({
  lng = "pt-br",
}: PropsSection4PageHome_I): JSX.Element {
  const [selected, setSelected] = useState<string>("1" as string);

  return (
    <ComponentElementScroll name="section4">
      <section className="flex items-center px-4 py-24 bg-primary">
        <div className="w-full m-auto max-w-default">
          <div className="grid items-start flex-col sm:grid-cols-[repeat(auto-fit,minmax(315px,1fr))] gap-8">
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
                <div className="grid items-center justify-between grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2">
                  {LanguageSectionWhyLearn[lng].list["buttons-items"].map(
                    (btn) => (
                      <button
                        onClick={() => setSelected(btn.id)}
                        key={btn.label}
                        className={`px-0.5 duration-200 py-1.5 rounded-lg ${
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

                {LanguageSectionWhyLearn[lng].list.values.map((item) => (
                  <Paragraph
                    key={item.id}
                    className={`text-lg font-light text-white ${
                      item.id === selected ? "" : "hidden"
                    } `}
                  >
                    {item.text}
                  </Paragraph>
                ))}
                <div className="flex justify-center gap-2">
                  {LanguageSectionWhyLearn[lng].list.values.map((item) => {
                    if (item.id === selected) {
                      return item.imgs.map((img, i) => (
                        <ItemImage
                          delay={i === 0 ? "200" : "400"}
                          key={img}
                          className={`border text-lg font-light text-white ${
                            item.id === selected ? "" : "hidden"
                          } `}
                        >
                          <Image
                            width={279}
                            height={228}
                            alt="imagem"
                            src={img}
                          />
                        </ItemImage>
                      ));
                    }
                    return undefined;
                  })}
                </div>
              </div>
            </article>
            <article
              className="flex flex-col items-center px-4 py-8 shadow-lg sm:p-8 rounded-3xl gap-y-5"
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
