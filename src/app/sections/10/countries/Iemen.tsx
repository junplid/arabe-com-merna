"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryIemen_I extends PropsCountryComponent {}

export default function ComponentCountryIemen(
  props: PropsComponentCountryIemen_I
): JSX.Element {
  return (
    <div
      onClick={() => !props.active && props.onSelect("iemen")}
      className="pointer-events-none group country iemen"
      title="Iemen"
    >
      <Image
        src={"/images/section-10/paises/icons/iemen.png"}
        height={28}
        width={28}
        alt="Iemen"
        className={`country icon-iemen duration-200 ${
          props.active ? "opacity-0" : "opacity-100 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <svg
        width="99"
        height="91"
        viewBox="0 0 99 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_225_38)">
          <path
            d="M62.3694 65.6022L93.6841 37.7364C94.5767 36.9421 94.8878 35.7023 94.6897 34.5239C94.121 31.1402 94.982 28.1937 96.7158 25.6638C97.4834 24.5436 97.6542 23.0737 96.9412 21.918L84.7204 2.10973C83.9628 0.881767 82.4315 0.357967 81.0846 0.875362C52.6461 11.7996 46.2531 24.0145 46.6025 30.2642C46.6646 31.3746 46.4454 32.5386 45.6821 33.3473L43.9279 35.2059C42.6659 36.5429 40.4929 36.3783 39.4468 34.8663C38.9133 34.0953 38.0296 33.6287 37.092 33.6274C27.7991 33.615 21.457 34.4993 17.2421 35.6996C14.41 36.5062 5.25666 39.934 4.88019 42.8545C4.78548 43.5893 4.72326 44.3387 4.68788 45.0452C4.66271 45.5478 4.52863 46.0393 4.27902 46.4763L1.8482 50.7324C1.3216 51.6544 1.31525 52.784 1.82722 53.7142C8.33631 65.5408 14.518 77.9356 19.157 87.7893C19.9272 89.4253 21.9431 90.0429 23.4916 89.109L61.9188 65.9342C62.0789 65.8376 62.2297 65.7265 62.3694 65.6022Z"
            fill={props.active ? "#e9d74e" : "#0C6746"}
            fillOpacity={props.active ? "0.8" : "0.5"}
            className={`duration-200 ${
              props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
            }`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M62.3694 65.6022L93.6841 37.7364C94.5767 36.9421 94.8878 35.7023 94.6897 34.5239C94.121 31.1402 94.982 28.1937 96.7158 25.6638C97.4834 24.5436 97.6542 23.0737 96.9412 21.918L84.7204 2.10973C83.9628 0.881767 82.4315 0.357967 81.0846 0.875362C52.6461 11.7996 46.2531 24.0145 46.6025 30.2642C46.6646 31.3746 46.4454 32.5386 45.6821 33.3473L43.9279 35.2059C42.6659 36.5429 40.4929 36.3783 39.4468 34.8663C38.9133 34.0953 38.0296 33.6287 37.092 33.6274C27.7991 33.615 21.457 34.4993 17.2421 35.6996C14.41 36.5062 5.25666 39.934 4.88019 42.8545C4.78548 43.5893 4.72326 44.3387 4.68788 45.0452C4.66271 45.5478 4.52863 46.0393 4.27902 46.4763L1.8482 50.7324C1.3216 51.6544 1.31525 52.784 1.82722 53.7142C8.33631 65.5408 14.518 77.9356 19.157 87.7893C19.9272 89.4253 21.9431 90.0429 23.4916 89.109L61.9188 65.9342C62.0789 65.8376 62.2297 65.7265 62.3694 65.6022Z"
            stroke="#F3F9F7"
            strokeOpacity="0.25"
            strokeWidth="1.19199"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_225_38"
            x="-5.22279"
            y="-5.99379"
            width="109.287"
            height="102.211"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.03742" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_225_38"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_225_38"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
