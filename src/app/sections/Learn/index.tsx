import Image from "next/image";

import { PiMonitorPlayBold } from "react-icons/pi";
import ComponentElementScroll from "../../components/ElementScroll";
import { LanguageSectionLearn } from "@/language/home/learn";
import AnimationSessionLearnComponent from "./animation";

interface PropsSection7PageHome_I {
  lng?: "pt-br" | "en";
}

export default function SectionLearnHomePage({
  lng = "pt-br",
}: PropsSection7PageHome_I): JSX.Element {
  return (
    <ComponentElementScroll name="section7">
      <section
        className="flex items-center px-4 py-24 text-white"
        style={{
          backgroundImage: `url('/images/section-7/bg.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full m-auto max-w-default">
          <div className="flex flex-col gap-y-1">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-baseline gap-y-7">
                <div className="flex flex-col gap-y-2">
                  <h2 className="text-3xl">
                    {LanguageSectionLearn[lng].title["part-1-normal"]}{" "}
                    <strong className="font-semibold text-secondary">
                      {LanguageSectionLearn[lng].title["part-2-semibold"]}
                    </strong>
                  </h2>
                  <p className="max-w-xl text-lg text-white lg:text-xl">
                    {LanguageSectionLearn[lng].paragraph}
                  </p>
                </div>
                <a className="flex gap-5 py-2 text-sm font-medium duration-200 bg-white rounded-md cursor-pointer px-7 text-primary">
                  {LanguageSectionLearn[lng].button}
                </a>
              </div>
              <Image
                src={"/images/section-7/professora.png"}
                alt="Imagem professora"
                width={209}
                height={280}
              />
            </div>
            <div className="-translate-y-2 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
              {LanguageSectionLearn[lng].items.map((level, i) => (
                <AnimationSessionLearnComponent i={i} key={level.id}>
                  <article className="flex flex-col gap-y-2">
                    <div className="flex items-center gap-x-2">
                      <PiMonitorPlayBold size={29} />
                      <h3 className="text-lg font-semibold">{level.title}</h3>
                    </div>
                    <p style={{ fontSize: 16, color: "#323232" }}>
                      {level.paragraph}
                    </p>
                  </article>
                </AnimationSessionLearnComponent>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ComponentElementScroll>
  );
}
