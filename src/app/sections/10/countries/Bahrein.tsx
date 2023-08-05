"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryBahrein_I extends PropsCountryComponent {}

export default function ComponentCountryBahrein(
  props: PropsComponentCountryBahrein_I
): JSX.Element {
  return (
    <div
      onClick={() => !props.active && props.onSelect("bahrein")}
      className="pointer-events-none group country bahrein"
      title="Bahrein"
    >
      <Image
        src={"/images/section-10/paises/icons/bahrein.png"}
        height={28}
        width={28}
        alt="Bahrein"
        className={`country icon-bahrein duration-200 ${
          props.active ? "opacity-0" : "opacity-100 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <svg
        width="10"
        height="33"
        viewBox="0 0 10 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_225_63)">
          <path
            d="M2.39763 17.8006L1.31759 14.1774C1.11252 13.4894 1.15775 12.751 1.44527 12.0932L3.74112 6.8406C4.80023 4.41751 8.28548 4.5636 9.13809 7.06682C9.2737 7.46495 9.32099 7.88782 9.27669 8.30606L8.329 17.2529C7.97935 20.5538 3.34585 20.9817 2.39763 17.8006Z"
            fill={props.active ? "#e9d74e" : "#0C6746"}
            fillOpacity={props.active ? "0.8" : "0.5"}
            className={`duration-200 ${
              props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
            }`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M2.39763 17.8006L1.31759 14.1774C1.11252 13.4894 1.15775 12.751 1.44527 12.0932L3.74112 6.8406C4.80023 4.41751 8.28548 4.5636 9.13809 7.06682C9.2737 7.46495 9.32099 7.88782 9.27669 8.30606L8.329 17.2529C7.97935 20.5538 3.34585 20.9817 2.39763 17.8006Z"
            stroke="#F3F9F7"
            strokeOpacity="0.25"
            strokeWidth="1.19199"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_225_63"
            x="-5.47963"
            y="-1.56703"
            width="21.4431"
            height="28.2093"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.03742" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_225_63"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_225_63"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
