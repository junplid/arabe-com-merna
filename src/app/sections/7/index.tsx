import Image from "next/image";
import DATA_LEVELS from "../../data/levels.json";

import { PiMonitorPlayBold } from "react-icons/pi";

interface PropsSection7PageHome_I {}

export default function Section7PageHome(
  props: PropsSection7PageHome_I
): JSX.Element {
  return (
    <section
      className="flex items-center px-4 py-20 text-white"
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
                  É assim que você vai{" "}
                  <strong className="font-semibold text-secondary">
                    aprender
                  </strong>
                </h2>
                <p className="max-w-xl text-lg text-white lg:text-xl">
                  Com o ensino estruturado em seis modulos, com conteúdos atuais
                  que vão do básico ao avançado.
                </p>
              </div>
              <a className="flex gap-5 py-2 text-sm font-medium duration-200 bg-white rounded-md cursor-pointer px-7 text-primary">
                Comece agora
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
            {DATA_LEVELS.map((level) => (
              <article
                style={{ background: "#fff" }}
                className="flex flex-col p-5 shadow-lg gap-y-2 rounded-3xl text-primary"
                key={level.id}
              >
                <div className="flex items-center gap-x-2">
                  <PiMonitorPlayBold size={29} />
                  <h3 className="text-lg font-semibold">{level.title}</h3>
                </div>
                <p style={{ fontSize: 15, color: "#323232" }}>{level.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
