import Image from "next/image";

interface PropsSection1_I {}

export default function Section1PageHome(props: PropsSection1_I): JSX.Element {
  return (
    <section className="px-4 pt-5 bg-section-1">
      <div className="flex flex-col items-center gap-5 m-auto lg:flex-row max-w-default">
        <div
          style={{ maxWidth: 563 }}
          className="flex flex-col items-baseline py-4 lg:py-0 gap-y-4"
        >
          <h1 className="text-3xl font-medium leading-tight lg:text-4xl text-primary">
            Torne-se{" "}
            <span className="font-semibold text-secondary">
              fluente em Árabe
            </span>{" "}
            de forma eficiente e descomplicado
          </h1>
          <p className="text-lg text-primary lg:text-xl">
            Somos a primeira metodologia que garante a fluência no idioma Árabe
            e te insere de verdade na cultura
          </p>
          <a className="py-2 text-sm font-medium text-white duration-200 rounded-md cursor-pointer hover:bg-primary-hover bg-primary px-7">
            Comece agora
          </a>
        </div>
        <div className="px-5 md:max-w-md lg:max-w-2xl lg:px-0">
          <Image
            src={"/images/main.png"}
            alt="Imagem principal"
            width={580 + 380}
            height={406.55 + 380}
            priority
          />
        </div>
      </div>
    </section>
  );
}
