import { ResultsCarouselComponent } from "@/app/components/ResultsCarousel";
import Image from "next/image";

interface PropsSection5PageHome_I {}

export default function Section5PageHome(
  props: PropsSection5PageHome_I
): JSX.Element {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #FFF 0%, #E0FED6 100%)",
      }}
      className="flex items-center px-4 py-20 overflow-x-hidden"
    >
      <div className="flex flex-col gap-y-12">
        <div className="flex justify-center">
          <h2 className="text-3xl font-medium text-primary">
            Os <span className="font-semibold text-secondary">resultados</span>{" "}
            dos nossos alunos
          </h2>
        </div>
        <div className="w-11/12 ml-auto ">
          <div className="grid grid-cols-[minmax(360px,440px)_1fr] gap-x-5">
            <div className="flex flex-col items-center">
              <Image
                width={376}
                height={334}
                alt="Teacher"
                src={"/images/section-5/mulher.jpg"}
              />
              <p className="max-w-md text-2xl font-medium text-center -translate-y-5 text-primary">
                Todos eles{" "}
                <strong className="font-semibold text-secondary">
                  conseguiram
                </strong>{" "}
                falar em árabe e{" "}
                <strong className="font-semibold text-secondary">
                  você também vai
                </strong>
              </p>
            </div>
            <div>
              <ResultsCarouselComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
