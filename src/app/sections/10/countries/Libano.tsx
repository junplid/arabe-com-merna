"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryLibano_I extends PropsCountryComponent {}

export default function ComponentCountryLibano(
  props: PropsComponentCountryLibano_I
): JSX.Element {
  return (
    <div
      onClick={() => !props.active && props.onSelect("libano")}
      className="pointer-events-none group country libano"
      title="Libano"
    >
      <Image
        src={"/images/section-10/paises/icons/libano.png"}
        height={28}
        width={28}
        alt="Libano"
        className={`country icon-libano duration-200 ${
          props.active ? "opacity-0" : "opacity-100 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <svg
        width="17"
        height="23"
        viewBox="0 0 17 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_225_51)">
          <path
            d="M3.33771 3.71131C2.9634 7.831 2.17323 12.9585 1.22728 17.5189C0.829837 19.4349 2.93323 20.9992 4.61472 19.9984C4.76708 19.9077 4.90781 19.7988 5.03378 19.674L11.3896 13.3784C11.6163 13.1539 11.8062 12.8951 11.9523 12.6115L15.0986 6.5039C16.0082 4.73805 15.006 2.58865 13.0686 2.15034L7.19143 0.820754C5.31726 0.396761 3.51157 1.79767 3.33771 3.71131Z"
            fill={props.active ? "#e9d74e" : "#0C6746"}
            fillOpacity={props.active ? "0.8" : "0.5"}
            className={`duration-200 ${
              props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
            }`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M3.33771 3.71131C2.9634 7.831 2.17323 12.9585 1.22728 17.5189C0.829837 19.4349 2.93323 20.9992 4.61472 19.9984C4.76708 19.9077 4.90781 19.7988 5.03378 19.674L11.3896 13.3784C11.6163 13.1539 11.8062 12.8951 11.9523 12.6115L15.0986 6.5039C16.0082 4.73805 15.006 2.58865 13.0686 2.15034L7.19143 0.820754C5.31726 0.396761 3.51157 1.79767 3.33771 3.71131Z"
            stroke="#F3F9F7"
            strokeOpacity="0.25"
            strokeWidth="1.19199"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_225_51"
            x="-5.49232"
            y="-5.92689"
            width="27.6013"
            height="32.9124"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.03742" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_225_51"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_225_51"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}