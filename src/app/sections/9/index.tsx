import Image from "next/image";

interface PropsSection9PageHome_I {}

export default function Section9PageHome(
  props: PropsSection9PageHome_I
): JSX.Element {
  return (
    <section
      style={{ background: "#F2FFEC" }}
      className="flex items-center px-4 py-20 text-white"
    >
      <div className="flex justify-between m-auto gap-x-14 max-w-default">
        <Image
          src={"/images/section-9/professora.png"}
          width={500}
          height={521}
          style={{ height: "auto", width: "100%" }}
          alt="Professora Merna"
          className=""
        />
        <div className="flex flex-col gap-y-6">
          <h3 className="font-bold text-primary">
            <span className="text-2xl">Ei, aluno!</span> <br />
            <span className="text-3xl">Professora Merna aqui! 💚</span>
          </h3>
          <div className="flex flex-col gap-y-5">
            <p className="text-lg" style={{ color: "#2A2A2A" }}>
              Sou professora de árabe há quase 10 anos. Comecei o meu trabalho
              no campo dos idiomas em 2014, lecionando inglês e árabe para
              estrangeiros em minha cidade natal, Cairo. Por ser criada em um
              ambiente bilíngue, desenvolvi uma habilidade inata tanto para
              aprender quanto para ensinar idiomas.
            </p>
            <p className="text-lg" style={{ color: "#2A2A2A" }}>
              Após minha chegada ao Brasil, continuei minha trajetória como
              professora de árabe e inglês em diversas instituições
              educacionais. Com o avanço do ensino à distância, principalmente
              durante o período de pandemia, aprofundei-me nesse campo e
              desenvolvi minha própria metodologia de ensino do idioma árabe.
            </p>
            <p className="text-lg" style={{ color: "#2A2A2A" }}>
              Inspirada por minha paixão em tornar o aprendizado mais acessível
              e envolvente, decidi inaugurar minha própria escola. Nesse
              empreendimento, tenho obtido resultados excepcionais no ensino do
              idioma{" "}
              <strong className="font-semibold text-primary">árabe</strong>,
              apesar de ser reconhecido como uma das línguas mais desafiadoras
              do mundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
