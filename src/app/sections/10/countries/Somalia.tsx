"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountrySomalia_I extends PropsCountryComponent {}

export default function ComponentCountrySomalia(
  props: PropsComponentCountrySomalia_I
): JSX.Element {
  return (
    <div
      onClick={() => !props.active && props.onSelect("somalia")}
      className="pointer-events-none group country somalia"
      title="Somalia"
    >
      <Image
        src={"/images/section-10/paises/icons/somalia.png"}
        height={28}
        width={28}
        alt="Somalia"
        className={`country icon-somalia duration-200 ${
          props.active ? "opacity-0" : "opacity-100 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <svg
        width="98"
        height="148"
        viewBox="0 0 98 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_225_35)">
          <path
            d="M20.8079 24.0165L16.6204 9.96075C16.5475 9.71586 16.3751 9.51281 16.1453 9.40105C15.7978 9.23203 15.3815 9.3004 15.1063 9.57168L11.8622 12.7696C11.5682 13.0594 11.1719 13.2219 10.759 13.2219H9.65553C8.6863 13.2219 8.22786 14.4617 8.83736 15.2153C9.26365 15.7424 9.02373 16.4504 8.48094 16.8565C3.76902 20.3818 5.03897 28.2382 6.46779 32.282C6.55852 32.5388 6.69411 32.7848 6.85587 33.0039C23.175 55.1067 43.1552 56.8903 56.6529 53.5679C59.6574 52.8284 63.0704 56.5308 61.5676 59.2354L44.9696 89.1073C44.3261 90.2654 43.0058 90.8462 41.6844 90.7503C25.7849 89.5964 8.7 109.922 1.45363 121.336C1.15097 121.813 1 122.359 1 122.924V144.092C1 145.77 2.3599 147.129 4.03742 147.129H17.8751C18.278 147.129 18.658 147.06 19.0261 146.896C49.3109 133.45 97.8896 48.5706 96.8108 3.78925C96.7725 2.19989 95.4455 1 93.8557 1H92.1075C91.4326 1 90.7646 1.23525 90.2297 1.64684C53.2604 30.0953 30.0879 29.7487 22.0775 25.6323C21.44 25.3048 21.0125 24.7033 20.8079 24.0165Z"
            fill={props.active ? "#e9d74e" : "#0C6746"}
            fillOpacity={props.active ? "0.8" : "0.5"}
            className={`duration-200 ${
              props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
            }`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M20.8079 24.0165L16.6204 9.96075C16.5475 9.71586 16.3751 9.51281 16.1453 9.40105C15.7978 9.23203 15.3815 9.3004 15.1063 9.57168L11.8622 12.7696C11.5682 13.0594 11.1719 13.2219 10.759 13.2219H9.65553C8.6863 13.2219 8.22786 14.4617 8.83736 15.2153C9.26365 15.7424 9.02373 16.4504 8.48094 16.8565C3.76902 20.3818 5.03897 28.2382 6.46779 32.282C6.55852 32.5388 6.69411 32.7848 6.85587 33.0039C23.175 55.1067 43.1552 56.8903 56.6529 53.5679C59.6574 52.8284 63.0704 56.5308 61.5676 59.2354L44.9696 89.1073C44.3261 90.2654 43.0058 90.8462 41.6844 90.7503C25.7849 89.5964 8.7 109.922 1.45363 121.336C1.15097 121.813 1 122.359 1 122.924V144.092C1 145.77 2.3599 147.129 4.03742 147.129H17.8751C18.278 147.129 18.658 147.06 19.0261 146.896C49.3109 133.45 97.8896 48.5706 96.8108 3.78925C96.7725 2.19989 95.4455 1 93.8557 1H92.1075C91.4326 1 90.7646 1.23525 90.2297 1.64684C53.2604 30.0953 30.0879 29.7487 22.0775 25.6323C21.44 25.3048 21.0125 24.7033 20.8079 24.0165Z"
            stroke="#F3F9F7"
            strokeOpacity="0.25"
            strokeWidth="1.19199"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_225_35"
            x="-5.67103"
            y="-5.67103"
            width="109.17"
            height="159.471"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.03742" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_225_35"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_225_35"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
