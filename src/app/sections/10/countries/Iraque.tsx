"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryIraque_I extends PropsCountryComponent {}

export default function ComponentCountryIraque(
  props: PropsComponentCountryIraque_I
): JSX.Element {
  return (
    <div
      onClick={() => !props.active && props.onSelect("iraque")}
      className="pointer-events-none group country iraque"
      title="Iraque"
    >
      <Image
        src={"/images/section-10/paises/icons/iraque.png"}
        height={28}
        width={28}
        alt="Iraque"
        className={`country icon-iraque duration-200 ${
          props.active ? "opacity-0" : "opacity-100 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <svg
        width="93"
        height="89"
        viewBox="0 0 93 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_225_57)">
          <path
            d="M57.0171 11.9585C45.9971 0.991085 30.9253 0.292077 24.6142 1.36159L22.7536 1.86101C22.1159 2.03218 21.5513 2.40649 21.1454 2.92724L15.1852 10.5735C14.6873 11.2123 14.4651 12.0235 14.568 12.8269L17.4078 34.9905C17.5338 35.9736 17.1721 36.9564 16.4389 37.6234L1.73827 50.9956C0.714701 51.9267 0.449771 53.4319 1.09392 54.6565L5.5493 63.1268C6.07442 64.1251 7.10952 64.7502 8.23752 64.7502H16.855C17.35 64.7502 17.8375 64.8712 18.2751 65.1026L61.4527 87.9388C62.0848 88.2731 62.8146 88.3737 63.5135 88.2228L76.8083 85.3536C77.9927 85.098 78.9119 84.1629 79.1471 82.9743L80.8748 74.2457C81.1564 72.8231 82.4043 71.798 83.8544 71.798H87.4848C89.7623 71.798 91.2326 69.382 90.2195 67.3424C86.8686 60.5965 84.0773 54.3159 81.9568 49.0459C81.579 48.107 80.7589 47.4204 79.7826 47.1538C61.6803 42.211 57.6377 24.0407 57.8757 14.2174C57.896 13.3765 57.6132 12.5519 57.0171 11.9585Z"
            fill={props.active ? "#e9d74e" : "#0C6746"}
            fillOpacity={props.active ? "0.8" : "0.5"}
            className={`duration-200 ${
              props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
            }`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M57.0171 11.9585C45.9971 0.991085 30.9253 0.292077 24.6142 1.36159L22.7536 1.86101C22.1159 2.03218 21.5513 2.40649 21.1454 2.92724L15.1852 10.5735C14.6873 11.2123 14.4651 12.0235 14.568 12.8269L17.4078 34.9905C17.5338 35.9736 17.1721 36.9564 16.4389 37.6234L1.73827 50.9956C0.714701 51.9267 0.449771 53.4319 1.09392 54.6565L5.5493 63.1268C6.07442 64.1251 7.10952 64.7502 8.23752 64.7502H16.855C17.35 64.7502 17.8375 64.8712 18.2751 65.1026L61.4527 87.9388C62.0848 88.2731 62.8146 88.3737 63.5135 88.2228L76.8083 85.3536C77.9927 85.098 78.9119 84.1629 79.1471 82.9743L80.8748 74.2457C81.1564 72.8231 82.4043 71.798 83.8544 71.798H87.4848C89.7623 71.798 91.2326 69.382 90.2195 67.3424C86.8686 60.5965 84.0773 54.3159 81.9568 49.0459C81.579 48.107 80.7589 47.4204 79.7826 47.1538C61.6803 42.211 57.6377 24.0407 57.8757 14.2174C57.896 13.3765 57.6132 12.5519 57.0171 11.9585Z"
            stroke="#F3F9F7"
            strokeOpacity="0.25"
            strokeWidth="1.19199"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_225_57"
            x="-5.9264"
            y="-5.67054"
            width="103.143"
            height="100.633"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.03742" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_225_57"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_225_57"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
