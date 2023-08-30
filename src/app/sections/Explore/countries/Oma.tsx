"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryOma_I extends PropsCountryComponent {}

export default function ComponentCountryOma(
  props: PropsComponentCountryOma_I
): JSX.Element {
  return (
    <div
      onClick={() => !props.active && props.onSelect("oma")}
      className="pointer-events-none group country oma"
      title="Omã"
    >
      <Image
        src={"/images/section-10/paises/icons/oma.png"}
        height={28}
        width={28}
        alt="Omã"
        className={`country icon-oma duration-200 ${
          props.active ? "opacity-0" : "opacity-100 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <svg
        width="60"
        height="93"
        viewBox="0 0 60 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_225_72)">
          <path
            d="M57.5176 7.47991L51.0213 2.36238C49.4871 1.15375 47.2273 1.68638 46.3944 3.45297L24.9667 48.8978C24.7601 49.3359 24.4518 49.7182 24.0674 50.0129L16.2461 56.0095L2.17787 66.7955C0.940991 67.7438 0.622586 69.4744 1.44094 70.8009L12.6167 88.9152C13.6752 90.6309 16.1033 90.867 17.7144 89.6552C21.7822 86.5955 27.0451 84.4904 31.4736 83.265C33.2372 82.777 34.2542 80.9037 34.2889 79.0742C34.3797 74.293 38.0933 70.5831 41.4119 68.4225C42.8154 67.5087 43.4295 65.7137 43.2852 64.0451C42.9104 59.7093 46.1696 56.3669 49.1906 54.4267C50.5201 53.5729 51.251 51.9533 50.8448 50.4264C48.4351 41.3683 50.6424 36.9349 53.0468 35.1799C54.0723 34.4314 55.0787 33.4732 55.2718 32.2183L58.6401 10.3278C58.8066 9.24559 58.3777 8.1575 57.5176 7.47991Z"
            fill={props.active ? "#e9d74e" : "#0C6746"}
            fillOpacity={props.active ? "0.8" : "0.5"}
            className={`duration-200 ${
              props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
            }`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M57.5176 7.47991L51.0213 2.36238C49.4871 1.15375 47.2273 1.68638 46.3944 3.45297L24.9667 48.8978C24.7601 49.3359 24.4518 49.7182 24.0674 50.0129L16.2461 56.0095L2.17787 66.7955C0.940991 67.7438 0.622586 69.4744 1.44094 70.8009L12.6167 88.9152C13.6752 90.6309 16.1033 90.867 17.7144 89.6552C21.7822 86.5955 27.0451 84.4904 31.4736 83.265C33.2372 82.777 34.2542 80.9037 34.2889 79.0742C34.3797 74.293 38.0933 70.5831 41.4119 68.4225C42.8154 67.5087 43.4295 65.7137 43.2852 64.0451C42.9104 59.7093 46.1696 56.3669 49.1906 54.4267C50.5201 53.5729 51.251 51.9533 50.8448 50.4264C48.4351 41.3683 50.6424 36.9349 53.0468 35.1799C54.0723 34.4314 55.0787 33.4732 55.2718 32.2183L58.6401 10.3278C58.8066 9.24559 58.3777 8.1575 57.5176 7.47991Z"
            stroke="#F3F9F7"
            strokeOpacity="0.25"
            strokeWidth="1.19199"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_225_72"
            x="-5.68275"
            y="-4.96058"
            width="71.0291"
            height="102.044"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.03742" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_225_72"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_225_72"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}