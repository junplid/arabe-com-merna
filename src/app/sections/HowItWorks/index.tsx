import ComponentElementScroll from "../../components/ElementScroll";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { LanguageSectionHowItWorks } from "@/language/home/how-it-works";
import { AnimationOnScroll } from "react-animation-on-scroll";
import AnimationSessionHowItWorksComponent from "./animation";

interface PropsSection3PageHome_I {
  lng?: "pt-br" | "en";
}

export default function SectionHowItWorksHomePage({
  lng = "pt-br",
}: PropsSection3PageHome_I): JSX.Element {
  return (
    <ComponentElementScroll name="section3">
      <section className="flex items-center px-4 py-24 bg-section-1">
        <div className="w-full m-auto max-w-default">
          <div className="grid grid-cols-1 gap-y-6 lg:gap-4 lg:grid-cols-2">
            <div className="flex flex-col items-baseline gap-y-5 lg:gap-y-7">
              <div className="flex flex-col gap-y-1">
                <span className="font-medium uppercase text-gray">
                  {LanguageSectionHowItWorks[lng].hook}
                </span>
                <h2 className="text-3xl text-primary">
                  {LanguageSectionHowItWorks[lng].title["part-1-normal"]}{" "}
                  <strong className="font-semibold text-secondary">
                    {LanguageSectionHowItWorks[lng].title["part-2-semibold"]}
                  </strong>
                  ,{" "}
                  <strong className="font-semibold text-secondary">
                    {LanguageSectionHowItWorks[lng].title["part-3-semibold"]}
                  </strong>{" "}
                  {LanguageSectionHowItWorks[lng].title["part-4-normal"]}{" "}
                  <strong className="font-semibold text-secondary">
                    {LanguageSectionHowItWorks[lng].title["part-5-semibold"]}
                  </strong>{" "}
                  {LanguageSectionHowItWorks[lng].title["part-6-normal"]}{" "}
                  <strong className="font-semibold text-secondary">
                    {LanguageSectionHowItWorks[lng].title["part-7-semibold"]}
                  </strong>{" "}
                  {LanguageSectionHowItWorks[lng].title["part-8-normal"]}{" "}
                  <strong className="font-semibold text-secondary">
                    {LanguageSectionHowItWorks[lng].title["part-9-semibold"]}
                  </strong>
                </h2>
              </div>
              <a className="flex gap-5 px-5 py-2 text-sm font-medium text-white duration-200 rounded-md cursor-pointer animate__fadeInUp animate__animated hover:bg-primary-hover bg-primary">
                {LanguageSectionHowItWorks[lng].button}
                <HiArrowNarrowRight size={20} className="text-white" />
              </a>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-2 gap-2 md:gap-4">
              {LanguageSectionHowItWorks[lng].items.map((item, i) => (
                <AnimationSessionHowItWorksComponent key={item.id} i={i}>
                  <article
                    style={{ background: "#FFF" }}
                    className="flex flex-col items-start h-full px-6 py-4 font-light border shadow-md select-none lg:items-center lg:flex-row gap-y-2 lg:gap-x-4 text-primary rounded-xl shadow-gray/10 border-slate-400/70"
                  >
                    <Image
                      src={item.img}
                      width={32}
                      height={32}
                      priority
                      alt="Icone"
                    />
                    <span dangerouslySetInnerHTML={{ __html: item.html }} />
                  </article>
                </AnimationSessionHowItWorksComponent>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ComponentElementScroll>
  );
}
