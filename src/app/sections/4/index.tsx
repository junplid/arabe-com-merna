import { EnrollmentFormComponent } from "@/app/components/EnrollmentForm";
import Image from "next/image";

interface PropsSection4PageHome_I {}

export default function Section4PageHome(
  props: PropsSection4PageHome_I
): JSX.Element {
  return (
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
                <Image
                  width={279}
                  height={228}
                  alt="imagem"
                  src={"/images/section-4/carreira 1.jpg"}
                />
                <Image
                  width={279}
                  height={228}
                  alt="imagem"
                  src={"/images/section-4/carreira 1.jpg"}
                />
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
  );
}
