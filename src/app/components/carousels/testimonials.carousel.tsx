"use client";
import { LanguageSectionDepositions } from "@/language/home/depositions";
import { FC } from "react";
import Carousel, { ResponsiveType } from "react-multi-carousel";

interface PropsComponentDepositionsCarousel_I {
  lng?: "pt-br" | "en";
}

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

interface PropsButtonDotCarousel_I {
  active: boolean;
  onClick(): void;
}

const ButtonDotCarousel: FC<PropsButtonDotCarousel_I> = (
  props: PropsButtonDotCarousel_I
): JSX.Element => {
  return (
    <button
      onClick={() => props.onClick()}
      className={`cursor-pointer h-3 duration-200 rounded-full ${
        props.active
          ? "bg-secondary w-11 -translate-y-0.5 shadow-md"
          : "bg-primary w-5"
      } `}
    ></button>
  );
};

export default function ComponentDepositionsCarousel({
  lng = "pt-br",
}: PropsComponentDepositionsCarousel_I): JSX.Element {
  return (
    <div>
      <Carousel
        ssr
        responsive={responsive}
        className="flex w-full"
        partialVisible
        // @ts-expect-error
        customDot={<ButtonDotCarousel />}
        keyBoardControl
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        showDots
        arrows={false}
        swipeable
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        slidesToSlide={1}
        dotListClass="flex items-center justify-center gap-x-2"
      >
        {LanguageSectionDepositions[lng].items.map((item) => (
          <div className="p-5 pb-10 first:pl-0" key={item.id}>
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
