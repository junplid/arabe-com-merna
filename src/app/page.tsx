import Image from "next/image";
import MainImage from "../../public/images/main.png";

export default function Home() {
  return (
    <div>
      <div className="px-4 pt-5 bg-section-1">
        <section className="flex-col lg:flex-row gap-5 flex items-center max-w-default m-auto">
          <div
            style={{ maxWidth: 563 }}
            className="py-4 lg:py-0 flex flex-col gap-y-4 items-baseline"
          >
            <h1 className="text-3xl lg:text-4xl leading-tight text-primary font-medium">
              Torne-se{" "}
              <span className="text-secondary font-semibold">
                fluente em Árabe
              </span>{" "}
              de forma eficiente e descomplicado
            </h1>
            <p className="text-primary text-lg lg:text-xl">
              Somos a primeira metodologia que garante a fluência no idioma
              Árabe e te insere de verdade na cultura
            </p>
            <a className="hover:bg-primary-hover text-sm font-medium duration-200 bg-primary py-2 px-7 text-white cursor-pointer rounded-md">
              Comece agora
            </a>
          </div>
          <div className="md:max-w-md lg:max-w-2xl px-5 lg:px-0">
            <Image
              src={MainImage}
              alt="Imagem principal"
              width={580 + 380}
              height={406.55 + 380}
              priority
            />
          </div>
        </section>
      </div>
    </div>
  );
}
