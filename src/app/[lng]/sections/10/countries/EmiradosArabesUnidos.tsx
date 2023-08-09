"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryEmiradosArabesUnidos_I
  extends PropsCountryComponent {}

export default function ComponentCountryEmiradosArabesUnidos(
  props: PropsComponentCountryEmiradosArabesUnidos_I
): JSX.Element {
  return (
    <div
      onClick={() => !props.active && props.onSelect("emiradosArabesUnidos")}
      className="pointer-events-none group country emirados-arabes-unidos"
      title="Emirados Arabes Unidos"
    >
      <Image
        src={"/images/section-10/paises/icons/emirados-arabes-unidos.png"}
        height={28}
        width={28}
        alt="Egito"
        className={`country icon-emirados-arabes-unidos duration-200 ${
          props.active ? "opacity-0" : "opacity-100 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <svg
        width="67"
        height="66"
        viewBox="0 0 67 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_225_69)">
          <path
            d="M36.4097 29.2572L18.6079 30.6477C18.2691 30.6742 17.9281 30.6448 17.6008 30.5536C14.1727 29.5987 10.7807 28.0904 7.44524 26.1276C4.93274 24.6491 1.5235 26.9197 2.2445 29.7443L7.83934 51.6632C8.06792 52.5587 8.69181 53.3014 9.53444 53.6812L32.8318 64.1803C33.8512 64.6397 35.0405 64.5019 35.9279 63.8215L42.3084 58.9296C42.6927 58.6349 43.001 58.2526 43.2076 57.8146L64.2204 13.2495C65.1704 11.2348 63.7006 8.91672 61.4731 8.91672H53.0052C52.1997 8.91672 51.4272 8.59676 50.8576 8.02723L44.719 1.88949C44.1494 1.31996 43.3768 1 42.5713 1H42.248C40.5704 1 39.2105 2.3599 39.2105 4.03742V26.229C39.2105 27.8148 37.9906 29.1337 36.4097 29.2572Z"
            fill={props.active ? "#e9d74e" : "#0C6746"}
            fillOpacity={props.active ? "0.8" : "0.5"}
            className={`duration-200 ${
              props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
            }`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M36.4097 29.2572L18.6079 30.6477C18.2691 30.6742 17.9281 30.6448 17.6008 30.5536C14.1727 29.5987 10.7807 28.0904 7.44524 26.1276C4.93274 24.6491 1.5235 26.9197 2.2445 29.7443L7.83934 51.6632C8.06792 52.5587 8.69181 53.3014 9.53444 53.6812L32.8318 64.1803C33.8512 64.6397 35.0405 64.5019 35.9279 63.8215L42.3084 58.9296C42.6927 58.6349 43.001 58.2526 43.2076 57.8146L64.2204 13.2495C65.1704 11.2348 63.7006 8.91672 61.4731 8.91672H53.0052C52.1997 8.91672 51.4272 8.59676 50.8576 8.02723L44.719 1.88949C44.1494 1.31996 43.3768 1 42.5713 1H42.248C40.5704 1 39.2105 2.3599 39.2105 4.03742V26.229C39.2105 27.8148 37.9906 29.1337 36.4097 29.2572Z"
            stroke="#F3F9F7"
            strokeOpacity="0.25"
            strokeWidth="1.19199"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_225_69"
            x="-4.52504"
            y="-5.67103"
            width="75.7107"
            height="76.7903"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.03742" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_225_69"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_225_69"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
