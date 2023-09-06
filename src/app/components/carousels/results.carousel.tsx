"use client";

import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import { LanguageSectionResults } from "@/language/home/results";
import { useState } from "react";
import styled from "styled-components";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import ReactPlayer from "react-player";
import { IoClose } from "react-icons/io5";

const ImageTum = styled.div<{ link: string }>`
  width: 112px;
  height: 144px;
  background-image: url(${({ link }) => link});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  border: 1px solid #fff;
`;

interface PropsSelected_I {
  code: string;
  text: string;
}
interface PropsArticle_I {
  paragraph: string;
  name: string;
  code: string;
  setSelected(vl: PropsSelected_I): void;
}

const ArticleComponent: React.FC<PropsArticle_I> = (
  props: PropsArticle_I
): JSX.Element => {
  return (
    <a
      onClick={() =>
        props.setSelected({
          code: props.code,
          text: props.paragraph,
        })
      }
      className="p-1.5 cursor-pointer"
    >
      <article
        style={{ minWidth: 320 }}
        className="flex items-center justify-between w-full px-5 py-4 duration-300 shadow-md bg-primary hover:bg-primary-hover gap-x-2 lg:gap-x-5 group shadow-slate-400/80 rounded-3xl"
      >
        <div>
          <p className="text-xl font-semibold leading-tight tracking-wide text-white line-clamp-5">
            <span className="text-2xl leading-none">{'"'}</span>
            {props.paragraph}
            <span className="text-2xl leading-none">{'"'}</span>
          </p>
        </div>
        <div className="relative">
          <div
            className="absolute top-0 left-0 p-1 shadow-md"
            style={{
              background: "#fff",
              transform: "rotateZ(-25deg) translateX(-10px) translateY(-5px)",
            }}
          >
            <BsFillEmojiHeartEyesFill className="text-yellow-500" size={24} />
          </div>
          <ImageTum
            link={`https://img.youtube.com/vi/${props.code}/hqdefault.jpg`}
          />
          {/* <span className={name_user({ colors: props.colors })}>
            {props.name}
          </span> */}
        </div>
      </article>
    </a>
  );
};

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1780 },
    items: 3,
    partialVisibilityGutter: 50,
  },
  desktop2: {
    breakpoint: { max: 1780, min: 1626 },
    items: 3,
    partialVisibilityGutter: 10,
  },
  desktop3: {
    breakpoint: { max: 1626, min: 1412 },
    items: 2,
    partialVisibilityGutter: 80,
  },
  desktop4: {
    breakpoint: { max: 1412, min: 1280 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  desktop5: {
    breakpoint: { max: 1280, min: 1194 },
    items: 1,
    partialVisibilityGutter: 280,
  },
  desktop6: {
    breakpoint: { max: 1194, min: 1074 },
    items: 1,
    partialVisibilityGutter: 180,
  },
  desktop7: {
    breakpoint: { max: 1074, min: 1024 },
    items: 1,
    partialVisibilityGutter: 100,
  },
  desktop8: {
    breakpoint: { max: 1024, min: 930 },
    items: 1,
    partialVisibilityGutter: 250,
  },
  desktop9: {
    breakpoint: { max: 930, min: 464 },
    items: 1,
    partialVisibilityGutter: 170,
  },
  desktop10: {
    breakpoint: { max: 842, min: 768 },
    items: 1,
    partialVisibilityGutter: 70,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
    partialVisibilityGutter: 10,
  },
  tablet2: {
    breakpoint: { max: 710, min: 640 },
    items: 1,
    partialVisibilityGutter: 290,
  },
  tablet3: {
    breakpoint: { max: 640, min: 564 },
    items: 1,
    partialVisibilityGutter: 200,
  },
  mobile: {
    breakpoint: { max: 564, min: 480 },
    items: 1,
    partialVisibilityGutter: 130,
  },
  mobile2: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
    partialVisibilityGutter: 80,
  },
  mobile3: {
    breakpoint: { max: 422, min: 0 },
    items: 1,
  },
};

interface PropsComponentResultsCarousel_I {
  lng?: "pt-br" | "en";
}

export const ComponentResultsCarousel: React.FC<
  PropsComponentResultsCarousel_I
> = ({ lng = "pt-br" }: PropsComponentResultsCarousel_I): JSX.Element => {
  const [selected, setSelected] = useState<PropsSelected_I | null>(
    null as PropsSelected_I | null
  );

  return (
    <div className="grid w-full">
      {selected && (
        <div className="fixed top-0 left-0 z-50 flex items-center w-screen h-screen bg-primary/60 backdrop-blur-md">
          <div className="w-full max-w-2xl p-5 pt-0 m-auto shadow-lg bg-slate-50">
            <div className="flex items-center justify-between gap-1 py-5">
              <p className="text-lg font-light leading-tight line-clamp-2 text-primary">
                {selected.text}
              </p>
              <button
                title="Fechar"
                onClick={() => {
                  const body = document.querySelector("body");
                  enableBodyScroll(body!);
                  setSelected(null);
                }}
              >
                <IoClose
                  size={45}
                  className="duration-300 text-primary hover:text-red-600"
                />
              </button>
            </div>
            <div>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${selected.code}`}
                controls={false}
                loop
                volume={100}
                fallback={<div>Carregando...</div>}
                style={{
                  width: "100%",
                }}
                width={"100%"}
                playing
              />
            </div>
          </div>
        </div>
      )}
      <Carousel
        draggable
        infinite
        responsive={responsive}
        className="flex w-full pb-14"
        partialVisible
        customLeftArrow={
          <button className="absolute z-10 p-1 duration-200 border-2 rounded-full hover:bg-primary/10 left-2 -bottom-0 group hover:border-primary-hover border-primary">
            <GoChevronLeft
              size={35}
              className="text-primary group-hover:text-primary-hover"
            />
          </button>
        }
        customRightArrow={
          <button className="absolute z-10 p-1 duration-200 border-2 rounded-full hover:bg-primary/10 -bottom-0 left-16 group hover:border-primary-hover border-primary">
            <GoChevronRight
              size={35}
              className="text-primary group-hover:text-primary-hover"
            />
          </button>
        }
        arrows
        keyBoardControl
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {LanguageSectionResults[lng].carousels.map((carousel_items, e) => (
          <div className="grid" key={e}>
            {carousel_items.map((item) => (
              <ArticleComponent
                key={item.id}
                name="Rian Junplid"
                paragraph={item.paragraph}
                code={item.link}
                setSelected={(vl) => {
                  const body = document.querySelector("body");
                  disableBodyScroll(body!);
                  setSelected(vl);
                }}
              />
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};
