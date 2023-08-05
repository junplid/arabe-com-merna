import { ProviderContextExploreMap } from "@/contexts/exploreMap.context";
import Section1PageHome from "./sections/1";
import Section10PageHome from "./sections/10";
import Section2PageHome from "./sections/2";
import Section3PageHome from "./sections/3";
import Section4PageHome from "./sections/4";
import Section5PageHome from "./sections/5";
import Section6PageHome from "./sections/6";
import Section7PageHome from "./sections/7";
import Section8PageHome from "./sections/8";
import Section9PageHome from "./sections/9";

export default function Home() {
  return (
    <div>
      <Section1PageHome />
      <Section2PageHome />
      <Section3PageHome />
      <Section4PageHome />
      <Section5PageHome />
      <Section6PageHome />
      <Section7PageHome />
      <Section8PageHome />
      <Section9PageHome />
      <ProviderContextExploreMap>
        <div style={{ background: "#021B11" }}>
          <Section10PageHome />
        </div>
      </ProviderContextExploreMap>
    </div>
  );
}
