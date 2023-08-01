import Image from "next/image";

interface PropsSection8PageHome_I {}

export default function Section8PageHome(
  props: PropsSection8PageHome_I
): JSX.Element {
  return (
    <section
      style={{ background: "#F2FFEC" }}
      className="flex items-center px-4 py-20 text-white"
    >
      <div className="flex flex-col items-center m-auto gap-y-8 max-w-default">
        <h2 className="max-w-4xl text-3xl font-medium text-center text-primary">
          Entrando para a minha nova turma, você recebe um{" "}
          <span className="font-semibold text-secondary">
            Desconto especial
          </span>{" "}
          e ainda tem acesso a{" "}
          <span className="font-semibold text-secondary">bônus exclusivos</span>{" "}
          incríveis
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
          <article
            style={{
              backgroundImage: `url('/images/section-8/bg-bonus.jpg')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="flex flex-col justify-start p-5 shadow-md gap-y-3 shadow-gray rounded-xl"
          >
            <span
              style={{
                background:
                  "linear-gradient(157deg, #E1A50A 0%, #E1BF0B 40.97%, #CF9809 99.01%)",
              }}
              className="block w-full py-3 font-semibold text-center uppercase rounded-lg select-none"
            >
              Bônus 1
            </span>
            <Image
              src={"/images/section-8/demostração-app.png"}
              width={150}
              height={150}
              alt="App Árabe com Merna"
              className="mx-auto"
            />
            <div className="flex flex-col items-center justify-start gap-y-2">
              <h3 className="text-lg font-medium" style={{ color: "#fff" }}>
                App do{" "}
                <strong className="font-semibold text-secondary">
                  Árabe com Merna
                </strong>
              </h3>
              <p className="text-center" style={{ color: "##E1E1E1" }}>
                Você terá acesso a lições interativas e exercícios práticos, que
                irão{" "}
                <strong style={{ color: "#fff" }} className="font-semibold">
                  reforçar
                </strong>{" "}
                o conteúdo aprendido em sala de aula.
              </p>
              <p className="text-center" style={{ color: "##E1E1E1" }}>
                Além disso, o aplicativo oferece recursos de{" "}
                <strong style={{ color: "#fff" }} className="font-semibold">
                  áudio
                </strong>{" "}
                e{" "}
                <strong style={{ color: "#fff" }} className="font-semibold">
                  pronúncia
                </strong>
                , permitindo que você pratique a escuta e melhore sua pronúncia.
              </p>
            </div>
          </article>
          <article
            style={{
              backgroundImage: `url('/images/section-8/bg-bonus.jpg')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="flex flex-col p-5 shadow-md gap-y-3 shadow-gray rounded-xl"
          >
            <span
              style={{
                background:
                  "linear-gradient(157deg, #E1A50A 0%, #E1BF0B 40.97%, #CF9809 99.01%)",
              }}
              className="block w-full py-3 font-semibold text-center uppercase rounded-lg select-none"
            >
              Bônus 2
            </span>
            <Image
              src={"/images/section-8/club-tradruções.png"}
              width={237}
              height={130}
              alt="App Árabe com Merna"
              className="mx-auto"
            />
            <div className="flex flex-col items-center gap-y-2">
              <h3 className="text-lg font-medium" style={{ color: "#fff" }}>
                Clube de traduções de{" "}
                <strong className="font-semibold text-secondary">música</strong>
              </h3>
              <p className="text-center" style={{ color: "##E1E1E1" }}>
                Uma excelente oportunidade é oferecida aos alunos, que têm a
                vantagem exclusiva de desfrutar do acesso{" "}
                <strong style={{ color: "#fff" }} className="font-semibold">
                  completo e totalmente gratuito
                </strong>{" "}
                ao nosso inovador painel de traduções musicais.
              </p>
            </div>
          </article>
          <article
            style={{
              backgroundImage: `url('/images/section-8/bg-bonus.jpg')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="flex flex-col p-5 shadow-md gap-y-3 shadow-gray rounded-xl"
          >
            <span
              style={{
                background:
                  "linear-gradient(157deg, #E1A50A 0%, #E1BF0B 40.97%, #CF9809 99.01%)",
              }}
              className="block w-full py-3 font-semibold text-center uppercase rounded-lg select-none"
            >
              Bônus 3
            </span>
            <Image
              src={"/images/section-8/egipcio-normal.png"}
              width={230.5}
              height={150}
              alt="App Árabe com Merna"
              className="mx-auto"
            />
            <div className="flex flex-col items-center gap-y-2">
              <h3 className="text-lg font-medium" style={{ color: "#fff" }}>
                Super{" "}
                <strong className="font-semibold text-secondary">
                  desconto
                </strong>
              </h3>
              <p className="text-center" style={{ color: "##E1E1E1" }}>
                Alunos do árabe egípcio recebem um desconto de 70% no curso de{" "}
                <strong className="font-semibold" style={{ color: "#fff" }}>
                  árabe padrão
                </strong>
                , enquanto alunos do{" "}
                <strong className="font-semibold" style={{ color: "#fff" }}>
                  árabe padrão
                </strong>{" "}
                desfrutam de um desconto de 70% no curso de{" "}
                <strong className="font-semibold" style={{ color: "#fff" }}>
                  árabe egípcio
                </strong>
                .
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
