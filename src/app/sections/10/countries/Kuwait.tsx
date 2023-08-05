"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryKuwait_I extends PropsCountryComponent {}

export default function ComponentCountryKuwait(
  props: PropsComponentCountryKuwait_I
): JSX.Element {
  return (
    <div
      onClick={() => !props.active && props.onSelect("kuwait")}
      className="pointer-events-none group country kuwait"
      title="Kuwait"
    >
      <Image
        src={"/images/section-10/paises/icons/kuwait.png"}
        height={28}
        width={28}
        alt="Kuwait"
        className={`country icon-kuwait duration-200 ${
          props.active ? "opacity-0" : "opacity-100 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <svg
        width="23"
        height="19"
        viewBox="0 0 23 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_225_60)">
          <path
            d="M2.11525 3.44766L0.821218 9.98546C0.41782 12.0235 2.13379 13.856 4.19392 13.5871L5.60425 13.403C6.69123 13.2612 7.77032 13.716 8.42779 14.5931L10.1007 16.8249C10.7797 17.7309 11.9063 18.1839 13.0235 18.0004L17.9447 17.1919C20.0649 16.8436 21.1647 14.4631 20.0863 12.6046C18.1412 9.25253 16.3007 5.91101 14.5764 2.63652C14.0478 1.6327 13.0092 1 11.8747 1H5.09487C3.64471 1 2.39682 2.0251 2.11525 3.44766Z"
            fill={props.active ? "#e9d74e" : "#0C6746"}
            fillOpacity={props.active ? "0.8" : "0.5"}
            className={`duration-200 ${
              props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
            }`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M2.11525 3.44766L0.821218 9.98546C0.41782 12.0235 2.13379 13.856 4.19392 13.5871L5.60425 13.403C6.69123 13.2612 7.77032 13.716 8.42779 14.5931L10.1007 16.8249C10.7797 17.7309 11.9063 18.1839 13.0235 18.0004L17.9447 17.1919C20.0649 16.8436 21.1647 14.4631 20.0863 12.6046C18.1412 9.25253 16.3007 5.91101 14.5764 2.63652C14.0478 1.6327 13.0092 1 11.8747 1H5.09487C3.64471 1 2.39682 2.0251 2.11525 3.44766Z"
            stroke="#F3F9F7"
            strokeOpacity="0.25"
            strokeWidth="1.19199"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_225_60"
            x="-5.90931"
            y="-5.67079"
            width="33.0862"
            height="30.3823"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.03742" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_225_60"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_225_60"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
