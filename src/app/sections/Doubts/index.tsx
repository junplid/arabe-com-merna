import ComponentDoubts from "./doubts";
import ComponentElementScroll from "../../components/ElementScroll";
import { LanguageSectionDoubts } from "@/language/home/doubts";

interface PropsSection10PageHome_I {
  lng?: "pt-br" | "en";
}

export default function SectionDoubtsHomePage({
  lng = "pt-br",
}: PropsSection10PageHome_I): JSX.Element {
  return (
    <ComponentElementScroll name="section11">
      <section className="flex items-center px-4 py-24 duration-300">
        <div className="w-full m-auto max-w-default">
          <div className="flex flex-col gap-y-10">
            <div className="flex justify-center w-full">
              <h2 className="text-3xl text-center text-primary">
                <strong className="font-semibold">
                  {LanguageSectionDoubts[lng].title["part-1-semibold"]}
                </strong>{" "}
                {LanguageSectionDoubts[lng].title["part-2-normal"]}
              </h2>
            </div>
            <ComponentDoubts lng={lng} />
          </div>
        </div>
      </section>
    </ComponentElementScroll>
  );
}
