import { ProviderContextExploreMap } from "@/contexts/exploreMap.context";
import SectionIntroductionHomePage from "./sections/Introduction";
import SectionAssessmentsHomePage from "./sections/Assessments";
import SectionHowItWorksHomePage from "./sections/HowItWorks";
import SectionWhyLearnHomePage from "./sections/WhyLearn";
import SectionResultsHomePage from "./sections/Results";
import SectionDepositionsHomePage from "./sections/Depositions";
import SectionLearnHomePage from "./sections/Learn";
import SectionBonusHomePage from "./sections/Bonus";
import SectionTeacherHomePage from "./sections/Teacher";
import SectionExploreHomePage from "./sections/Explore";
import SectionDoubtsHomePage from "./sections/Doubts";

interface PropsPage {
  params: {};
  searchParams: { lng?: "en" | "pt-br" | undefined };
}

export default function Home(props: PropsPage) {
  const lng = props.searchParams?.lng;

  return (
    <div>
      <SectionIntroductionHomePage lng={lng} />
      <SectionAssessmentsHomePage lng={lng} />
      <SectionHowItWorksHomePage lng={lng} />
      <SectionWhyLearnHomePage lng={lng} />
      <SectionResultsHomePage lng={lng} />
      <SectionDepositionsHomePage lng={lng} />
      <SectionLearnHomePage lng={lng} />
      <SectionBonusHomePage lng={lng} />
      <SectionTeacherHomePage />
      <ProviderContextExploreMap>
        <div style={{ background: "#021B11" }}>
          <SectionExploreHomePage />
        </div>
      </ProviderContextExploreMap>
      <SectionDoubtsHomePage />
    </div>
  );
}
