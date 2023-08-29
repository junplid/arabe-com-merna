import { LanguageSectionDepositions } from "@/language/home/depositions";
import ComponentElementScroll from "../components/ElementScroll";
import ComponentDepositionsCarousel from "../components/carousels/testimonials.carousel";

interface PropsSection6PageHome_I {
  lng?: "pt-br" | "en";
}

export default function SectionDepositionsHomePage({
  lng = "pt-br",
}: PropsSection6PageHome_I): JSX.Element {
  return (
    <ComponentElementScroll name="section6">
      <section
        style={{
          background: "#E0FED6",
        }}
        className="flex items-center px-4 py-24"
      >
        <div className="flex flex-col w-11/12 m-auto">
          <div className="flex flex-col items-center gap-y-12">
            <h2 className="max-w-3xl text-3xl font-medium text-center text-primary">
              <span className="font-semibold text-secondary">
                {LanguageSectionDepositions[lng].title["part-1-semibold"]}
              </span>{" "}
              {LanguageSectionDepositions[lng].title["part-2-normal"]}{" "}
              <span className="font-semibold text-secondary">
                {LanguageSectionDepositions[lng].title["part-3-semibold"]}
              </span>{" "}
              {LanguageSectionDepositions[lng].title["part-4-normal"]}
            </h2>

            <div className="w-full">
              <ComponentDepositionsCarousel lng={lng} />
            </div>
          </div>
        </div>
      </section>
    </ComponentElementScroll>
  );
}
