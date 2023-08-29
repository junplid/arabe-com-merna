"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountrySiria_I extends PropsCountryComponent {}

export default function ComponentCountrySiria(
  props: PropsComponentCountrySiria_I
): JSX.Element {
  return (
    <div
      onClick={() => !props.active && props.onSelect("siria")}
      className="pointer-events-none group country siria"
      title="Siria"
    >
      <Image
        src={"/images/section-10/paises/icons/siria.png"}
        height={28}
        width={28}
        alt="Siria"
        className={`country icon-siria duration-200 ${
          props.active ? "opacity-0" : "opacity-100 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <svg
        width="52"
        height="63"
        viewBox="0 0 52 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_225_54)">
          <path
            d="M4.81321 14.0776L1.40122 25.8865C1.14738 26.7651 1.30286 27.7123 1.85786 28.4392C2.70063 29.5429 3.26109 30.2775 3.48069 31.9565C3.66789 33.3878 4.58981 34.6632 5.99772 34.9817L13.0837 36.5847C15.0211 37.023 16.0233 39.1725 15.1136 40.9383L11.9673 47.0459C11.8212 47.3295 11.6313 47.5883 11.4047 47.8128L6.03464 53.132C5.30183 53.8578 4.98746 54.906 5.19983 55.9153L5.75629 58.5601C5.99162 59.6786 6.83491 60.5702 7.93854 60.8675L12.987 62.2276C13.9161 62.4778 14.9089 62.2731 15.6631 61.6756L29.8317 50.4521L46.2706 35.4986C47.0038 34.8316 47.3655 33.8489 47.2395 32.8657L44.3998 10.7021C44.2968 9.89876 44.519 9.08755 45.017 8.44876L46.0281 7.15161C47.8198 4.85298 45.6599 1.59514 42.845 2.35068L6.94385 11.9871C5.91662 12.2628 5.10844 13.0558 4.81321 14.0776Z"
            fill={props.active ? "#e9d74e" : "#0C6746"}
            fillOpacity={props.active ? "0.8" : "0.5"}
            className={`duration-200 ${
              props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
            }`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M4.81321 14.0776L1.40122 25.8865C1.14738 26.7651 1.30286 27.7123 1.85786 28.4392C2.70063 29.5429 3.26109 30.2775 3.48069 31.9565C3.66789 33.3878 4.58981 34.6632 5.99772 34.9817L13.0837 36.5847C15.0211 37.023 16.0233 39.1725 15.1136 40.9383L11.9673 47.0459C11.8212 47.3295 11.6313 47.5883 11.4047 47.8128L6.03464 53.132C5.30183 53.8578 4.98746 54.906 5.19983 55.9153L5.75629 58.5601C5.99162 59.6786 6.83491 60.5702 7.93854 60.8675L12.987 62.2276C13.9161 62.4778 14.9089 62.2731 15.6631 61.6756L29.8317 50.4521L46.2706 35.4986C47.0038 34.8316 47.3655 33.8489 47.2395 32.8657L44.3998 10.7021C44.2968 9.89876 44.519 9.08755 45.017 8.44876L46.0281 7.15161C47.8198 4.85298 45.6599 1.59514 42.845 2.35068L6.94385 11.9871C5.91662 12.2628 5.10844 13.0558 4.81321 14.0776Z"
            stroke="#F3F9F7"
            strokeOpacity="0.25"
            strokeWidth="1.19199"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_225_54"
            x="-5.38783"
            y="-4.43275"
            width="59.323"
            height="73.4358"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.03742" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_225_54"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_225_54"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
