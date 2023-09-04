import { LanguageSectionTeacher } from "@/language/home/teacher";
import ComponentElementScroll from "../components/ElementScroll";
import Image from "next/image";

interface PropsSection9PageHome_I {
  lng?: "pt-br" | "en";
}

export default function SectionTeacherHomePage({
  lng = "pt-br",
}: PropsSection9PageHome_I): JSX.Element {
  return (
    <ComponentElementScroll name="section9">
      <section
        style={{ background: "#F2FFEC" }}
        className="flex items-center px-4 py-24 text-white"
      >
        <div className="flex flex-row items-start justify-between m-auto lg:items-center lg: gap-x-14 max-w-default">
          <Image
            src={"/images/section-9/professora.png"}
            width={500}
            height={521}
            style={{ height: "auto", width: "100%", objectFit: "contain" }}
            alt="Professora Merna"
            className="sticky top-32 md:top-20"
          />
          <div
            style={{ minWidth: 300 }}
            className="flex flex-col w-full gap-y-6"
          >
            <h3 className="font-bold text-primary">
              <span className="text-2xl">
                {LanguageSectionTeacher[lng].subtitle}
              </span>{" "}
              <br />
              <span className="text-3xl">
                {LanguageSectionTeacher[lng].title}
              </span>
            </h3>
            <div className="flex flex-col gap-y-5">
              {LanguageSectionTeacher[lng].paragraphs.map((paragraph) => (
                <p
                  key={paragraph.id}
                  className="text-lg"
                  style={{ color: "#2A2A2A" }}
                >
                  {paragraph.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ComponentElementScroll>
  );
}
