"use client";
import { LanguageSectionDepositions } from "@/language/home/depositions";
import { FC } from "react";
import Carousel, { ResponsiveType } from "react-multi-carousel";

interface PropsComponentDepositionsCarousel_I {
  lng?: "pt-br" | "en";
}

const responsive: ResponsiveType = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1500 },
    partialVisibilityGutter: 10,
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1500, min: 1300 },
    partialVisibilityGutter: 10,
    items: 4,
  },
  desktop2: {
    breakpoint: { max: 1300, min: 1150 },
    partialVisibilityGutter: 70,
    items: 3,
  },
  desktop3: {
    breakpoint: { max: 1150, min: 1070 },
    partialVisibilityGutter: 40,
    items: 3,
  },
  desktop4: {
    breakpoint: { max: 1070, min: 850 },
    partialVisibilityGutter: 10,
    items: 3,
  },
  tablet: {
    breakpoint: { max: 850, min: 720 },
    partialVisibilityGutter: 50,
    items: 2,
  },
  tablet2: {
    breakpoint: { max: 720, min: 592 },
    partialVisibilityGutter: 10,
    items: 2,
  },
  tablet1: {
    breakpoint: { max: 592, min: 470 },
    partialVisibilityGutter: 150,
    items: 1,
  },
  mobile: {
    breakpoint: { max: 470, min: 395 },
    partialVisibilityGutter: 80,
    items: 1,
  },
  mobile2: {
    breakpoint: { max: 395, min: 0 },
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
          <div className="pb-10 m-1.5" key={item.id}>
            <article className="flex flex-col items-end w-full h-full p-5 text-lg text-white shadow-lg gap-y-3 shadow-black/30 bg-primary">
              <p className="line-clamp-6">{item.text}</p>
              <div className="flex flex-col items-end">
                <h3 className="text-base font-semibold leading-tight tracking-widest lg:text-lg">
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
