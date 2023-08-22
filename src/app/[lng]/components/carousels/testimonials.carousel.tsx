import Carousel, { ResponsiveType } from "react-multi-carousel";
import LanguagePageHome from "../../../../language/home.page.json";
import { useContext } from "react";
import { ContextLanguage } from "@/contexts/language.context";

interface PropsComponentTestimonialsCarousel_I {}

const responsive: ResponsiveType = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    partialVisibilityGutter: 10,
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function ComponentTestimonialsCarousel(
  props: PropsComponentTestimonialsCarousel_I
): JSX.Element {
  const { languageSelected } = useContext(ContextLanguage);

  return (
    <div>
      <Carousel
        draggable
        infinite
        responsive={responsive}
        className="flex w-full"
        partialVisible
        autoPlay
        autoPlaySpeed={10000}
        transitionDuration={5000}
      >
        {LanguagePageHome[languageSelected].section6.items.map((item) => (
          <div className="p-5 first:pl-0" key={item.id}>
            <article className="flex flex-col items-end w-full p-5 text-lg text-white shadow-lg gap-y-3 shadow-black/30 bg-primary">
              <p className="line-clamp-6">{item.text}</p>
              <div className="flex flex-col items-end">
                <h3 className="font-semibold leading-tight tracking-widest">
                  {item.name}
                </h3>
              </div>
            </article>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
