import { LanguageSectionBonus } from "@/language/home/bonus";
import ComponentElementScroll from "../../components/ElementScroll";
import Image from "next/image";
import AnimationSessionBonusComponent from "./animation";

interface PropsSection8PageHome_I {
  lng?: "pt-br" | "en";
}

export default function SectionBonusHomePage({
  lng = "pt-br",
}: PropsSection8PageHome_I): JSX.Element {
  return (
    <ComponentElementScroll name="section8">
      <section
        style={{ background: "#F2FFEC" }}
        className="flex items-center px-4 py-24 text-white"
      >
        <div className="flex flex-col items-center m-auto gap-y-8 max-w-default">
          <h2 className="max-w-4xl text-3xl font-medium text-center text-primary">
            {LanguageSectionBonus[lng].title["part-1-normal"]}{" "}
            <span className="font-semibold text-secondary">
              {LanguageSectionBonus[lng].title["part-2-semibold"]}
            </span>{" "}
            {LanguageSectionBonus[lng].title["part-3-normal"]}{" "}
            <span className="font-semibold text-secondary">
              {LanguageSectionBonus[lng].title["part-4-semibold"]}
            </span>{" "}
            {LanguageSectionBonus[lng].title["part-5-normal"]}
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
            {LanguageSectionBonus[lng].items.map((item, i) => (
              <AnimationSessionBonusComponent i={i} key={item.id}>
                <article className="flex flex-col justify-start gap-y-3">
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
                    width={item.w}
                    height={item.h}
                    alt="App Árabe com Merna"
                    className="mx-auto"
                  />
                  <div className="flex flex-col items-center justify-start gap-y-2">
                    <h3
                      className="text-lg font-medium"
                      style={{ color: "#fff" }}
                    >
                      {item.subtitle}
                    </h3>
                    {item.paragraph.map((paragraph) => (
                      <p
                        key={paragraph.id}
                        className="text-lg text-center"
                        style={{ color: "##E1E1E1" }}
                      >
                        {paragraph.text}
                      </p>
                    ))}
                  </div>
                </article>
              </AnimationSessionBonusComponent>
            ))}
          </div>
        </div>
      </section>
    </ComponentElementScroll>
  );
}
