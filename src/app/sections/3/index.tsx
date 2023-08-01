import { data_how_it_works } from "@/app/data/howItWorks";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

interface PropsSection3PageHome_I {}

export default function Section3PageHome(
  props: PropsSection3PageHome_I
): JSX.Element {
  return (
    <section className="flex items-center px-4 py-20 bg-section-1">
      <div className="w-full m-auto max-w-default">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-baseline gap-y-7">
            <div className="flex flex-col gap-y-1">
              <span className="font-medium uppercase text-gray">
                Como funciona
              </span>
              <h2 className="text-3xl text-primary">
                Aprender a{" "}
                <strong className="font-semibold text-secondary">ler</strong>,{" "}
                <strong className="font-semibold text-secondary">
                  escrever
                </strong>{" "}
                e{" "}
                <strong className="font-semibold text-secondary">
                  conversar
                </strong>{" "}
                em Árabe com mais confiança... Um curso que começa do{" "}
                <strong className="font-semibold text-secondary">zero</strong> e
                vai com você até o{" "}
                <strong className="font-semibold text-secondary">
                  avançado
                </strong>
              </h2>
            </div>
            <a className="flex gap-5 px-5 py-2 text-sm font-medium text-white duration-200 rounded-md cursor-pointer hover:bg-primary-hover bg-primary">
              Reservar minha vaga
              <HiArrowNarrowRight size={20} className="text-white" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {data_how_it_works.map((item) => (
              <article
                style={{ background: "#FFF" }}
                className="flex items-center px-6 py-4 font-light border shadow-md select-none gap-x-4 text-primary rounded-xl shadow-gray/10 border-slate-400/70"
                key={item.key}
              >
                <Image
                  src={item.Icon}
                  width={32}
                  height={32}
                  priority
                  alt="Icone"
                />
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
