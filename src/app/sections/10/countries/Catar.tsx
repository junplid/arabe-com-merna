"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryCatar_I extends PropsCountryComponent {}

export default function ComponentCountryCatar(
  props: PropsComponentCountryCatar_I
): JSX.Element {
  return (
    <div
      onClick={() => !props.active && props.onSelect("catar")}
      className="pointer-events-none group country catar"
      title="Catar"
    >
      <Image
        src={"/images/section-10/paises/icons/catar.png"}
        height={28}
        width={28}
        alt="Catar"
        className={`country icon-catar duration-200 ${
          props.active ? "opacity-0" : "opacity-100 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <svg
        width="21"
        height="33"
        viewBox="0 0 21 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_225_66)">
          <path
            d="M19.6808 9.99032L14.7957 27.3595C14.1729 29.5741 11.4097 30.3193 9.75779 28.7181L2.17181 21.3655C1.44006 20.6563 1.11274 19.6274 1.30019 18.6257L2.42976 12.59C2.46425 12.4058 2.4816 12.2187 2.4816 12.0313V8.12319C2.4816 7.04288 3.0554 6.04387 3.98855 5.49953L11.1316 1.33275C12.4412 0.568779 14.1137 0.887605 15.0504 2.07981L19.1452 7.29136C19.7444 8.05392 19.9434 9.05675 19.6808 9.99032Z"
            fill={props.active ? "#e9d74e" : "#0C6746"}
            fillOpacity={props.active ? "0.8" : "0.5"}
            className={`duration-200 ${
              props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
            }`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M19.6808 9.99032L14.7957 27.3595C14.1729 29.5741 11.4097 30.3193 9.75779 28.7181L2.17181 21.3655C1.44006 20.6563 1.11274 19.6274 1.30019 18.6257L2.42976 12.59C2.46425 12.4058 2.4816 12.2187 2.4816 12.0313V8.12319C2.4816 7.04288 3.0554 6.04387 3.98855 5.49953L11.1316 1.33275C12.4412 0.568779 14.1137 0.887605 15.0504 2.07981L19.1452 7.29136C19.7444 8.05392 19.9434 9.05675 19.6808 9.99032Z"
            stroke="#F3F9F7"
            strokeOpacity="0.25"
            strokeWidth="1.19199"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_225_66"
            x="-5.4225"
            y="-5.75209"
            width="31.8875"
            height="41.9998"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.03742" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_225_66"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_225_66"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}