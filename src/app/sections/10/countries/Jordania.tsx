"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryJordania_I extends PropsCountryComponent {}

export default function ComponentCountryJordania(
  props: PropsComponentCountryJordania_I
): JSX.Element {
  return (
    <div
      onClick={() => !props.active && props.onSelect("jordania")}
      className="pointer-events-none group country jordania"
      title="Jordania"
    >
      <Image
        src={"/images/section-10/paises/icons/jordania.png"}
        height={28}
        width={28}
        alt="Jordania"
        className={`country icon-jordania duration-200 ${
          props.active ? "opacity-0" : "opacity-100 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <svg
        width="36"
        height="51"
        viewBox="0 0 36 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_225_44)">
          <path
            d="M11.793 50.3666L5.196 49.3959C3.70533 49.1765 2.60077 47.8975 2.60077 46.3908V25.9486L1.19813 15.8433C1.07274 14.9399 1.3599 14.0281 1.98028 13.3596L3.91532 11.2744C4.6821 10.4481 5.8434 10.1145 6.93183 10.4077L12.0092 11.7755C12.9383 12.0258 13.9311 11.821 14.6854 11.2236L25.9841 2.27334C27.4752 1.09216 29.6728 1.55668 30.5584 3.24026L33.8998 9.59275C34.6583 11.0347 34.1439 12.8183 32.7341 13.635L20.2732 20.8536C18.5954 21.8255 18.2455 24.0993 19.5534 25.5307L25.4724 32.0085C26.4937 33.1262 26.5359 34.8253 25.5714 35.9924L14.5766 49.2965C13.8997 50.1155 12.8442 50.5213 11.793 50.3666Z"
            fill={props.active ? "#e9d74e" : "#0C6746"}
            fillOpacity={props.active ? "0.8" : "0.5"}
            className={`duration-200 ${
              props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
            }`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M11.793 50.3666L5.196 49.3959C3.70533 49.1765 2.60077 47.8975 2.60077 46.3908V25.9486L1.19813 15.8433C1.07274 14.9399 1.3599 14.0281 1.98028 13.3596L3.91532 11.2744C4.6821 10.4481 5.8434 10.1145 6.93183 10.4077L12.0092 11.7755C12.9383 12.0258 13.9311 11.821 14.6854 11.2236L25.9841 2.27334C27.4752 1.09216 29.6728 1.55668 30.5584 3.24026L33.8998 9.59275C34.6583 11.0347 34.1439 12.8183 32.7341 13.635L20.2732 20.8536C18.5954 21.8255 18.2455 24.0993 19.5534 25.5307L25.4724 32.0085C26.4937 33.1262 26.5359 34.8253 25.5714 35.9924L14.5766 49.2965C13.8997 50.1155 12.8442 50.5213 11.793 50.3666Z"
            stroke="#F3F9F7"
            strokeOpacity="0.25"
            strokeWidth="1.19199"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_225_44"
            x="-5.5016"
            y="-5.05482"
            width="46.4221"
            height="62.1248"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.03742" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_225_44"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_225_44"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
