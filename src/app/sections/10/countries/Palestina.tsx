"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryPalestina_I extends PropsCountryComponent {}

export default function ComponentCountryPalestina(
  props: PropsComponentCountryPalestina_I
): JSX.Element {
  return (
    <div
      onClick={() => !props.active && props.onSelect("palestina")}
      className="pointer-events-none group country palestina"
      title="Palestina"
    >
      <Image
        src={"/images/section-10/paises/icons/palestina.png"}
        height={28}
        width={28}
        alt="Palestina"
        className={`country icon-palestina duration-200 ${
          props.active ? "opacity-0" : "opacity-100 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <svg
        width="19"
        height="29"
        viewBox="0 0 19 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_225_47)">
          <path
            d="M16.3406 4.27057L16.6556 6.9958L17.456 12.7622L17.8437 14.7634C18.0463 15.8088 17.162 16.744 16.1069 16.6001C15.6253 16.5344 15.1407 16.6977 14.797 17.0414L14.1046 17.7339C13.2522 18.5862 11.8703 18.5862 11.0179 17.7339C10.2946 17.0106 10.1707 15.8818 10.7199 15.0188L11.1811 14.294C11.9777 13.0422 11.7533 11.3981 10.6505 10.4056L9.59342 9.45421C8.9534 8.8782 8.58793 8.0576 8.58792 7.19654L8.5879 4.86391C8.58789 3.71341 9.23792 2.66164 10.267 2.14713L11.3097 1.62577C12.1039 1.22865 13.0322 1.19899 13.8502 1.54459L14.5054 1.82143C15.5138 2.24747 16.2149 3.18314 16.3406 4.27057Z"
            fill={props.active ? "#e9d74e" : "#0C6746"}
            fillOpacity={props.active ? "0.8" : "0.5"}
            className={`duration-200 ${
              props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
            }`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M6.23692 17.2628L3.36262 13.9095C3.03383 13.5259 2.41663 13.8753 2.57639 14.3546C2.60974 14.4547 2.60773 14.5631 2.57071 14.6618L1.6294 17.1722C1.50153 17.5132 1.43603 17.8744 1.43603 18.2386L1.43599 24.6489L6.56872 26.8253C7.73673 27.3206 8.97222 26.2785 8.68101 25.0437C8.61996 24.7848 8.49327 24.546 8.31315 24.3503L7.11582 23.0494C6.53513 22.4184 6.24819 21.5714 6.32584 20.7174L6.55059 18.2455C6.583 17.889 6.46987 17.5346 6.23692 17.2628Z"
            fill={props.active ? "#e9d74e" : "#0C6746"}
            fillOpacity={props.active ? "0.8" : "0.5"}
            onClick={() => props.onSelect("palestina")}
            className={`duration-200 ${
              props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
            }`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M1.43599 24.6489C3.67972 23.8955 -0.255887 26.703 1.43599 24.6489ZM1.43599 24.6489L6.56872 26.8253C7.73673 27.3206 8.97222 26.2785 8.68101 25.0437V25.0437C8.61996 24.7848 8.49327 24.546 8.31315 24.3503L7.11582 23.0494C6.53513 22.4184 6.24819 21.5714 6.32584 20.7174L6.55059 18.2455C6.583 17.889 6.46987 17.5346 6.23692 17.2628L3.36262 13.9095C3.03383 13.5259 2.41663 13.8753 2.57639 14.3546V14.3546C2.60974 14.4547 2.60773 14.5631 2.57071 14.6618L1.6294 17.1722C1.50153 17.5132 1.43603 17.8744 1.43603 18.2386L1.43599 24.6489ZM16.6556 6.9958L16.3406 4.27057C16.2149 3.18314 15.5138 2.24747 14.5054 1.82143L13.8502 1.54459C13.0322 1.19899 12.1039 1.22865 11.3097 1.62577L10.267 2.14713C9.23792 2.66164 8.58789 3.71341 8.5879 4.86391L8.58792 7.19654C8.58793 8.0576 8.9534 8.8782 9.59342 9.45421L10.6505 10.4056C11.7533 11.3981 11.9777 13.0422 11.1811 14.294L10.7199 15.0188C10.1707 15.8818 10.2946 17.0106 11.0179 17.7339V17.7339C11.8703 18.5862 13.2522 18.5862 14.1046 17.7339L14.797 17.0414C15.1407 16.6977 15.6253 16.5344 16.1069 16.6001V16.6001C17.162 16.744 18.0463 15.8088 17.8437 14.7634L17.456 12.7622L16.6556 6.9958Z"
            stroke="#F3F9F7"
            strokeOpacity="0.25"
            strokeWidth="1.19199"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_225_47"
            x="-5.235"
            y="-5.36586"
            width="29.7791"
            height="38.989"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.03742" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_225_47"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_225_47"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
