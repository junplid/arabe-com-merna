import Image from "next/image";
import MainImage from "../../public/images/main.png";

import { ImStarFull, ImStarHalf } from "react-icons/im";
import { BiWorld } from "react-icons/bi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { PiMonitorPlayBold } from "react-icons/pi";

import { data_how_it_works } from "./data/howItWorks";

// images section 4
import Imagem1 from "../../public/images/section-4/carreira 1.jpg";
import { EnrollmentFormComponent } from "./components/EnrollmentForm";

// imagens section 5
import TeacherImg from "../../public/images/section-5/mulher.jpg";
import { ResultsCarouselComponent } from "./components/ResultsCarousel";

// imagens section 7
import ImageProfessora from "../../public/images/section-7/professora.png";

// data section 7
import DATA_LEVELS from "./data/levels.json";

export default function Home() {
  return (
    <div>
      {/* Section 1 */}
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
              Somos a primeira metodologia que garante a fluência no idioma
              Árabe e te insere de verdade na cultura
            </p>
            <a className="py-2 text-sm font-medium text-white duration-200 rounded-md cursor-pointer hover:bg-primary-hover bg-primary px-7">
              Comece agora
            </a>
          </div>
          <div className="px-5 md:max-w-md lg:max-w-2xl lg:px-0">
            <Image
              src={MainImage}
              alt="Imagem principal"
              width={580 + 380}
              height={406.55 + 380}
              priority
            />
          </div>
        </div>
      </section>
      {/* End section 1 */}

      {/* Section 2 */}
      <section className="flex items-center px-4 py-6 bg-primary">
        <div className="flex flex-col items-center justify-center w-full gap-3 m-auto sm:flex-row sm:gap-8 max-w-default">
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <div className="flex items-center gap-1">
              <ImStarFull className="text-secondary" size={28} />
              <ImStarFull className="text-secondary" size={28} />
              <ImStarFull className="text-secondary" size={28} />
              <ImStarFull className="text-secondary" size={28} />
              <ImStarHalf className="text-secondary" size={28} />
            </div>
            <span className="text-lg font-light text-center text-white">
              Baseado em +1mil avaliações de nossos alunos
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <BiWorld className="text-secondary" size={28} />
            <span className="text-lg font-light text-white">+20 Países</span>
          </div>
        </div>
      </section>
      {/* End section 2 */}

      {/* Section 3 */}
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
                  <strong className="font-semibold text-secondary">zero</strong>{" "}
                  e vai com você até o{" "}
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
      {/* End section 3 */}

      {/* Section 4 */}
      <section className="flex items-center px-4 py-20 bg-primary">
        <div className="w-full m-auto max-w-default">
          <div className="grid grid-cols-2 gap-10">
            <article className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-4">
                <h2 className="text-3xl text-white">
                  Porque aprender a{" "}
                  <strong className="font-semibold text-secondary">
                    lingua árabe
                  </strong>
                </h2>
                <p className="text-xl text-white">
                  O árabe é falado por mais de 400 milhões de pessoas em todo o
                  mundo, sendo a língua oficial em mais de 20 países.
                </p>
              </div>
              <div className="flex flex-col gap-y-6">
                <div className="flex items-center justify-between">
                  <button className="px-8 py-1.5 rounded-lg bg-terc font-semibold text-secondary shadow-sm">
                    Cultura
                  </button>
                  <button className="px-8 py-1.5 rounded-lg bg-secondary font-semibold text-terc shadow-sm">
                    Viagens
                  </button>
                  <button className="px-8 py-1.5 rounded-lg bg-secondary font-semibold text-terc shadow-sm">
                    Carreiras
                  </button>
                  <button className="px-8 py-1.5 rounded-lg bg-secondary font-semibold text-terc shadow-sm">
                    Região
                  </button>
                </div>
                <p className="text-lg font-light text-white">
                  Aprender árabe permite acesso a uma cultura rica e
                  diversificada, ligada à civilização islâmica, à literatura, à
                  arte e à música. Conhecer o idioma proporciona compreensão
                  profunda dessas tradições e estabelece conexão autêntica com
                  falantes nativos.
                </p>
                <div className="flex gap-2">
                  <Image width={279} height={228} alt="imagem" src={Imagem1} />
                  <Image width={279} height={228} alt="imagem" src={Imagem1} />
                </div>
              </div>
            </article>
            <article
              className="flex flex-col items-center p-8 shadow-lg rounded-3xl gap-y-5"
              style={{ background: "#fff" }}
            >
              <h3 className="text-2xl font-semibold text-primary">
                Quero me matricular
              </h3>
              <EnrollmentFormComponent />
              <small className="text-base font-light text-primary">
                Ao clicar em criar matricula você concorda com todos os{" "}
                <a className="font-semibold underline cursor-pointer underline-offset-2">
                  termos de uso
                </a>{" "}
                da plataforma Árabe com Merna
              </small>
            </article>
          </div>
        </div>
      </section>
      {/* End section 4 */}

      {/* Section 5 */}
      <section
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #E0FED6 100%)",
        }}
        className="flex items-center px-4 py-20 overflow-x-hidden"
      >
        <div className="flex flex-col gap-y-12">
          <div className="flex justify-center">
            <h2 className="text-3xl font-medium text-primary">
              Os{" "}
              <span className="font-semibold text-secondary">resultados</span>{" "}
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
                  src={TeacherImg}
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
      {/* End section 5 */}

      {/* Section 6 */}
      <section
        style={{
          background: "#E0FED6",
        }}
        className="flex items-center px-4 py-20 border-t border-slate-400"
      >
        <div className="flex flex-col w-11/12 m-auto">
          <div className="flex flex-col items-center gap-y-12">
            <h2 className="max-w-3xl text-3xl font-medium text-center text-primary">
              <span className="font-semibold text-secondary">Depoimentos</span>{" "}
              de quem escolheu a{" "}
              <span className="font-semibold text-secondary">
                Árabe com Merna
              </span>{" "}
              para aprender o idioma Árabe
            </h2>

            <div className="w-full">
              <div className="flex w-full pt-2 pb-8 overflow-x-hidden gap-x-4">
                <article
                  style={{ minWidth: 310, width: 310 }}
                  className="flex flex-col items-end p-5 text-lg text-white shadow-lg gap-y-3 shadow-black/30 bg-primary"
                >
                  <p className="font-light leading-relaxed tracking-wider line-clamp-[8]">
                    Minha experiência com a{" "}
                    <span className="text-secondary">Árabe com Merna</span> foi
                    surpreendente. Aqui tive meu primeiro contato com um ensino
                    profissional de alta qualidade. Graças a professora Merna,
                    destravei...
                  </p>
                  <div className="flex flex-col items-end">
                    <h3 className="font-semibold leading-tight tracking-widest">
                      Rian Junplid
                    </h3>
                    <span
                      className="font-light leading-tight"
                      style={{ color: "#D8D8C0" }}
                    >
                      Salvador BA
                    </span>
                  </div>
                </article>
                <article
                  style={{ minWidth: 310, width: 310 }}
                  className="flex flex-col items-end p-5 text-lg text-white shadow-lg shadow-black/30 bg-primary"
                >
                  <p className="font-light leading-relaxed tracking-wider line-clamp-[8]">
                    Minha experiência com a{" "}
                    <span className="text-secondary">Árabe com Merna</span> foi
                    surpreendente. Aqui tive meu primeiro contato com um ensino
                    profissional de alta qualidade. Graças a professora Merna,
                    destravei...
                  </p>
                  <div className="flex flex-col items-end">
                    <h3 className="font-semibold leading-tight tracking-widest">
                      Rian Junplid
                    </h3>
                    <span
                      className="font-light leading-tight"
                      style={{ color: "#D8D8C0" }}
                    >
                      Salvador BA
                    </span>
                  </div>
                </article>
                <article
                  style={{ minWidth: 310, width: 310 }}
                  className="flex flex-col items-end p-5 text-lg text-white shadow-lg shadow-black/30 bg-primary"
                >
                  <p className="font-light leading-relaxed tracking-wider line-clamp-[8]">
                    Minha experiência com a{" "}
                    <span className="text-secondary">Árabe com Merna</span> foi
                    surpreendente. Aqui tive meu primeiro contato com um ensino
                    profissional de alta qualidade. Graças a professora Merna,
                    destravei...
                  </p>
                  <div className="flex flex-col items-end">
                    <h3 className="font-semibold leading-tight tracking-widest">
                      Rian Junplid
                    </h3>
                    <span
                      className="font-light leading-tight"
                      style={{ color: "#D8D8C0" }}
                    >
                      Salvador BA
                    </span>
                  </div>
                </article>
                <article
                  style={{ minWidth: 310, width: 310 }}
                  className="flex flex-col items-end p-5 text-lg text-white shadow-lg shadow-black/30 bg-primary"
                >
                  <p className="font-light leading-relaxed tracking-wider line-clamp-[8]">
                    Minha experiência com a{" "}
                    <span className="text-secondary">Árabe com Merna</span> foi
                    surpreendente. Aqui tive meu primeiro contato com um ensino
                    profissional de alta qualidade. Graças a professora Merna,
                    destravei...
                  </p>
                  <div className="flex flex-col items-end">
                    <h3 className="font-semibold leading-tight tracking-widest">
                      Rian Junplid
                    </h3>
                    <span
                      className="font-light leading-tight"
                      style={{ color: "#D8D8C0" }}
                    >
                      Salvador BA
                    </span>
                  </div>
                </article>
                <article
                  style={{ minWidth: 310, width: 310 }}
                  className="flex flex-col items-end p-5 text-lg text-white shadow-lg shadow-black/30 bg-primary"
                >
                  <p className="font-light leading-relaxed tracking-wider line-clamp-[8]">
                    Minha experiência com a{" "}
                    <span className="text-secondary">Árabe com Merna</span> foi
                    surpreendente. Aqui tive meu primeiro contato com um ensino
                    profissional de alta qualidade. Graças a professora Merna,
                    destravei...
                  </p>
                  <div className="flex flex-col items-end">
                    <h3 className="font-semibold leading-tight tracking-widest">
                      Rian Junplid
                    </h3>
                    <span
                      className="font-light leading-tight"
                      style={{ color: "#D8D8C0" }}
                    >
                      Salvador BA
                    </span>
                  </div>
                </article>
                <article
                  style={{ minWidth: 310, width: 310 }}
                  className="flex flex-col items-end p-5 text-lg text-white shadow-lg shadow-black/30 bg-primary"
                >
                  <p className="font-light leading-relaxed tracking-wider line-clamp-[8]">
                    Minha experiência com a{" "}
                    <span className="text-secondary">Árabe com Merna</span> foi
                    surpreendente. Aqui tive meu primeiro contato com um ensino
                    profissional de alta qualidade. Graças a professora Merna,
                    destravei...
                  </p>
                  <div className="flex flex-col items-end">
                    <h3 className="font-semibold leading-tight tracking-widest">
                      Rian Junplid
                    </h3>
                    <span
                      className="font-light leading-tight"
                      style={{ color: "#D8D8C0" }}
                    >
                      Salvador BA
                    </span>
                  </div>
                </article>
                <article
                  style={{ minWidth: 310, width: 310 }}
                  className="flex flex-col items-end p-5 text-lg text-white shadow-lg shadow-black/30 bg-primary"
                >
                  <p className="font-light leading-relaxed tracking-wider line-clamp-[8]">
                    Minha experiência com a{" "}
                    <span className="text-secondary">Árabe com Merna</span> foi
                    surpreendente. Aqui tive meu primeiro contato com um ensino
                    profissional de alta qualidade. Graças a professora Merna,
                    destravei...
                  </p>
                  <div className="flex flex-col items-end">
                    <h3 className="font-semibold leading-tight tracking-widest">
                      Rian Junplid
                    </h3>
                    <span
                      className="font-light leading-tight"
                      style={{ color: "#D8D8C0" }}
                    >
                      Salvador BA
                    </span>
                  </div>
                </article>
              </div>
              <div className="flex items-center justify-center mt-2 gap-x-2">
                <span className="block h-3 rounded-full w-14 bg-secondary"></span>
                <span className="block w-3 h-3 rounded-full bg-primary"></span>
                <span className="block w-3 h-3 rounded-full bg-primary"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End section 6 */}

      {/* Section 7 */}
      <section
        className="flex items-center px-4 py-20 text-white border-t border-slate-400"
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
                    Com o ensino estruturado em seis modulos, com conteúdos
                    atuais que vão do básico ao avançado.
                  </p>
                </div>
                <a className="flex gap-5 py-2 text-sm font-medium duration-200 bg-white rounded-md cursor-pointer px-7 text-primary">
                  Comece agora
                </a>
              </div>
              <Image
                src={ImageProfessora}
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
                    <PiMonitorPlayBold size={25} />
                    <h3 className="text-lg font-semibold">{level.title}</h3>
                  </div>
                  <p style={{ fontSize: 15, color: "#323232" }}>{level.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* End section 7 */}
    </div>
  );
}
