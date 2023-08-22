"use client";
import { useContext } from "react";
import LanguagePageHome from "../../../../language/home.page.json";
import { ContextLanguage } from "@/contexts/language.context";

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
  const { languageSelected } = useContext(ContextLanguage);

  return (
    <form className="flex flex-col w-full gap-y-3">
      <div className="flex flex-col gap-y-4">
        <input
          className="w-full h-10 pl-4 border outline-primary rounded-xl border-border-gray"
          type="text"
          placeholder={
            LanguagePageHome[languageSelected].section4.register.inputs.name
          }
        />
        <div className="flex items-center gap-x-4">
          <input
            className="w-full h-10 pl-4 border outline-primary rounded-xl border-border-gray"
            type="text"
            placeholder={
              LanguagePageHome[languageSelected].section4.register.inputs
                .whatsapp
            }
          />
          <input
            className="w-full h-10 pl-4 border outline-primary rounded-xl border-border-gray"
            type="text"
            placeholder={
              LanguagePageHome[languageSelected].section4.register.inputs.email
            }
          />
        </div>
        <div className="flex items-center gap-x-4">
          <input
            className="w-full h-10 pl-4 border outline-primary rounded-xl border-border-gray"
            type="text"
            placeholder={
              LanguagePageHome[languageSelected].section4.register.inputs
                .country
            }
          />
          <input
            className="w-full h-10 pl-4 border outline-primary rounded-xl border-border-gray"
            type="text"
            placeholder={
              LanguagePageHome[languageSelected].section4.register.inputs.state
            }
          />
        </div>
        <div className="flex items-center gap-x-4">
          <input
            className="w-full h-10 pl-4 border outline-primary rounded-xl border-border-gray"
            type="text"
            placeholder={
              LanguagePageHome[languageSelected].section4.register.inputs
                .password
            }
          />
          <input
            className="w-full h-10 pl-4 border outline-primary rounded-xl border-border-gray"
            type="text"
            placeholder={
              LanguagePageHome[languageSelected].section4.register.inputs[
                "confirm-password"
              ]
            }
          />
        </div>
      </div>

      <div className="flex flex-col items-center w-full gap-y-2">
        <span className="text-lg font-semibold text-primary">
          {LanguagePageHome[languageSelected].section4.register["label-level"]}
        </span>
        <div
          className="flex flex-wrap justify-between font-light gap-x-5 gap-y-2 text-gray"
          style={{ minWidth: 120 }}
        >
          {LanguagePageHome[languageSelected].section4.register.level.map(
            (level) => (
              <LabelCheckBox label={level.label} key={level.id} />
            )
          )}
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="px-8 py-3 font-semibold text-white rounded-2xl bg-primary"
          type="submit"
        >
          {
            LanguagePageHome[languageSelected].section4.register[
              "button-submit"
            ]
          }
        </button>
      </div>
    </form>
  );
};
