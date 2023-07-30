"use client";

interface PropsLabelCheckBox_I {
  label: string;
}

const LabelCheckBox: React.FC<PropsLabelCheckBox_I> = ({
  label,
}): JSX.Element => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="radio" name="level" />
      <span className="text-lg">{label}</span>
    </label>
  );
};

export const EnrollmentFormComponent = () => {
  return (
    <form className="flex flex-col w-full gap-y-3">
      <div className="flex flex-col gap-y-4">
        <input
          className="w-full h-10 pl-4 border outline-primary rounded-xl border-border-gray"
          type="text"
          placeholder="Nome completo"
        />
        <div className="flex items-center gap-x-4">
          <input
            className="w-full h-10 pl-4 border outline-primary rounded-xl border-border-gray"
            type="text"
            placeholder="Whatsapp"
          />
          <input
            className="w-full h-10 pl-4 border outline-primary rounded-xl border-border-gray"
            type="text"
            placeholder="E-mail"
          />
        </div>
        <div className="flex items-center gap-x-4">
          <input
            className="w-full h-10 pl-4 border outline-primary rounded-xl border-border-gray"
            type="text"
            placeholder="País"
          />
          <input
            className="w-full h-10 pl-4 border outline-primary rounded-xl border-border-gray"
            type="text"
            placeholder="Estado"
          />
        </div>
        <div className="flex items-center gap-x-4">
          <input
            className="w-full h-10 pl-4 border outline-primary rounded-xl border-border-gray"
            type="text"
            placeholder="Senha"
          />
          <input
            className="w-full h-10 pl-4 border outline-primary rounded-xl border-border-gray"
            type="text"
            placeholder="Confirmar senha"
          />
        </div>
      </div>

      <div className="flex flex-col items-center w-full gap-y-2">
        <span className="text-lg font-semibold text-primary">
          Nível em árabe
        </span>
        <div
          className="flex flex-wrap justify-between font-light gap-x-5 gap-y-2 text-gray"
          style={{ minWidth: 120 }}
        >
          <LabelCheckBox label="Iniciante" />
          <LabelCheckBox label="Intermediário" />
          <LabelCheckBox label="Avançado" />
          <LabelCheckBox label="Não sei identificar meu nível" />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="px-8 py-3 font-semibold text-white rounded-2xl bg-primary"
          type="submit"
        >
          Criar matricula
        </button>
      </div>
    </form>
  );
};
