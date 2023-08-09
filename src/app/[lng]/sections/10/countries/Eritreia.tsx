"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryEritreia_I extends PropsCountryComponent {}

export default function ComponentCountryEritreia(
  props: PropsComponentCountryEritreia_I
): JSX.Element {
  return (
    <div
      onClick={() => !props.active && props.onSelect("eritreia")}
      className="pointer-events-none group country eritreia"
      title="Eritreia"
    >
      <Image
        src={"/images/section-10/paises/icons/eritreia.png"}
        height={28}
        width={28}
        alt="Eritreia"
        className={`country icon-eritreia duration-200 ${
          props.active ? "opacity-0" : "opacity-100 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <svg
        width="74"
        height="54"
        viewBox="0 0 74 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_225_32)">
          <path
            d="M36.8944 30.1669L23.1271 2.94921C22.9378 2.57494 22.6727 2.24371 22.3492 1.97682C21.035 0.892775 19.085 1.10023 18.03 2.4379L11.5168 10.6966C10.9409 11.4269 10.062 11.8531 9.13186 11.8531H7.87933C6.20181 11.8531 4.84191 13.213 4.84191 14.8905V23.5338C4.84191 23.8601 4.78934 24.1843 4.68622 24.4938L1.29581 34.6712C1.10308 35.2498 1.08895 35.8729 1.25528 36.4596L4.04902 46.3142C4.37929 47.4792 6.06258 47.3784 6.25147 46.1823C6.30964 45.814 6.55307 45.4941 6.8911 45.3368C34.2418 32.6039 54.3014 42.5561 63.6343 51.6192C64.2283 52.1961 65.0154 52.5379 65.8435 52.5379H67.6286C68.4266 52.5379 69.1926 52.2238 69.7609 51.6636L69.9769 51.4506C71.4699 49.9789 71.0584 47.4731 69.1732 46.5561L38.2762 31.5273C37.6793 31.237 37.194 30.7592 36.8944 30.1669Z"
            fill={props.active ? "#e9d74e" : "#0C6746"}
            fillOpacity={props.active ? "0.8" : "0.5"}
            className={`duration-200 ${
              props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
            }`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M36.8944 30.1669L23.1271 2.94921C22.9378 2.57494 22.6727 2.24371 22.3492 1.97682C21.035 0.892775 19.085 1.10023 18.03 2.4379L11.5168 10.6966C10.9409 11.4269 10.062 11.8531 9.13186 11.8531H7.87933C6.20181 11.8531 4.84191 13.213 4.84191 14.8905V23.5338C4.84191 23.8601 4.78934 24.1843 4.68622 24.4938L1.29581 34.6712C1.10308 35.2498 1.08895 35.8729 1.25528 36.4596L4.04902 46.3142C4.37929 47.4792 6.06258 47.3784 6.25147 46.1823C6.30964 45.814 6.55307 45.4941 6.8911 45.3368C34.2418 32.6039 54.3014 42.5561 63.6343 51.6192C64.2283 52.1961 65.0154 52.5379 65.8435 52.5379H67.6286C68.4266 52.5379 69.1926 52.2238 69.7609 51.6636L69.9769 51.4506C71.4699 49.9789 71.0584 47.4731 69.1732 46.5561L38.2762 31.5273C37.6793 31.237 37.194 30.7592 36.8944 30.1669Z"
            stroke="#F3F9F7"
            strokeOpacity="0.25"
            strokeWidth="1.19199"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_225_32"
            x="-5.53089"
            y="-5.3888"
            width="83.0843"
            height="64.5974"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.03742" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_225_32"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_225_32"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
