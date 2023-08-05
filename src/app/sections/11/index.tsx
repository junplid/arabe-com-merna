import ComponentDoubts from "./doubts";

interface PropsSection10PageHome_I {}

export default function Section11PageHome(
  props: PropsSection10PageHome_I
): JSX.Element {
  return (
    <section className="flex items-center px-4 py-20 duration-300">
      <div className="w-full m-auto max-w-default">
        <div className="flex flex-col gap-y-10">
          <div className="flex justify-center w-full">
            <h2 className="text-3xl text-primary">
              <strong className="font-semibold">Dúvidas?</strong> Veja nossa
              seção de perguntas frequentes
            </h2>
          </div>
          <ComponentDoubts />
        </div>
      </div>
    </section>
  );
}
