import ComponentElementScroll from "../components/ElementScroll";
import Image from "next/image";
import { ComponentResultsCarousel } from "../components/carousels/results.carousel";
import { LanguageSectionResults } from "@/language/home/results";

interface PropsSection5PageHome_I {
  lng?: "pt-br" | "en";
}

export default function SectionResultsHomePage({
  lng = "pt-br",
}: PropsSection5PageHome_I): JSX.Element {
  return (
    <ComponentElementScroll name="section5">
      <section
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #E0FED6 100%)",
        }}
        className="flex items-center py-24 overflow-x-hidden"
      >
        <div className="flex flex-col gap-y-12">
          <div className="flex justify-center w-screen">
            <h2 className="text-3xl font-medium text-center text-primary">
              {LanguageSectionResults[lng].title["part-1-normal"]}{" "}
              <span className="font-semibold text-secondary">
                {LanguageSectionResults[lng].title["part-2-semibold"]}
              </span>{" "}
              {LanguageSectionResults[lng].title["part-3-normal"]}
            </h2>
          </div>
          <div className="w-full lg:w-11/12 lg:ml-auto">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(200px,320px)_1fr] lg:grid-cols-[minmax(360px,440px)_1fr] gap-x-2 lg:gap-x-5">
              <div className="flex flex-col items-center max-w-xs m-auto lg:m-0 lg:w-full">
                <Image
                  width={376}
                  height={334}
                  alt="Teacher"
                  src={"/images/section-5/mulher.jpg"}
                />
                <p className="max-w-md text-2xl font-medium text-center -translate-y-5 text-primary">
                  {LanguageSectionResults[lng].paragraph["part-1-normal"]}{" "}
                  <strong className="font-semibold text-secondary">
                    {LanguageSectionResults[lng].paragraph["part-2-semibold"]}
                  </strong>{" "}
                  {LanguageSectionResults[lng].paragraph["part-3-normal"]}{" "}
                  <strong className="font-semibold text-secondary">
                    {LanguageSectionResults[lng].paragraph["part-4-semibold"]}
                  </strong>
                </p>
              </div>
              <div className="w-full">
                <ComponentResultsCarousel lng={lng} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ComponentElementScroll>
  );
}
