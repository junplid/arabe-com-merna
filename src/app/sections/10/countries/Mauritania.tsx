"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryMauritania_I extends PropsCountryComponent {}

export default function ComponentCountryMauritania(
  props: PropsComponentCountryMauritania_I
): JSX.Element {
  return (
    <div
      onClick={() => !props.active && props.onSelect("mauritania")}
      className="pointer-events-none group country mauritania"
      title="Mauritania"
    >
      <Image
        src={"/images/section-10/paises/icons/mauritania.png"}
        height={28}
        width={28}
        alt="Mauritania"
        className={`country icon-mauritania duration-200 ${
          props.active ? "opacity-0" : "opacity-100 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <svg
        width="127"
        height="138"
        viewBox="0 0 127 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_225_10)">
          <path
            d="M104.959 124.179L108.404 32.4259C108.475 30.5225 110.261 29.1538 112.117 29.5792L124.377 32.3883C125.671 31.3373 125.787 29.4036 124.627 28.2058L101.168 3.96671C99.5029 2.24638 96.5949 3.03882 96.0328 5.36601L94.8525 10.2533C94.4539 11.9035 92.7802 12.9067 91.1369 12.4802L67.1368 6.25173C65.4502 5.81401 63.7419 6.88201 63.3966 8.58998L58.958 30.5495C58.5936 32.3527 56.71 33.346 54.8733 33.2426C46.7819 32.787 44.3778 42.7651 44.1293 50.5645C44.0663 52.5425 42.2945 54.1053 40.3495 53.7399L11.2808 48.278C8.60522 47.7753 6.4918 50.9225 7.37319 53.4983C9.54469 59.8442 8.27128 65.2139 6.6428 68.3428C6.09371 69.3978 5.99614 70.6584 6.36716 71.7883C8.45023 78.1326 6.03477 87.5577 3.217 94.8235C2.21294 97.4125 5.00313 100.837 7.7429 101.29C19.1748 103.179 29.9263 116.99 35.9201 127.333C37.056 129.294 39.8659 129.523 41.2147 127.702L42.4788 125.996C43.6777 124.378 46.0911 124.353 47.3227 125.947L48.8188 127.883C49.6414 128.947 51.2601 128.909 52.0316 127.807C52.4893 127.153 53.2926 126.835 54.0738 126.998L102.265 137.062C103.774 137.377 105.28 136.512 105.768 135.049L107.322 130.386C107.668 129.349 107.43 128.206 106.698 127.394L105.736 126.325C105.208 125.738 104.929 124.968 104.959 124.179Z"
            fill={props.active ? "#e9d74e" : "#0C6746"}
            fillOpacity={props.active ? "0.8" : "0.5"}
            className={`duration-200 ${
              props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
            }`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M124.377 32.3883L112.117 29.5792C110.261 29.1538 108.475 30.5225 108.404 32.4259L104.959 124.179C104.929 124.968 105.208 125.738 105.736 126.325L106.698 127.394C107.43 128.206 107.668 129.349 107.322 130.386L105.768 135.049C105.28 136.512 103.774 137.377 102.265 137.062L54.0738 126.998C53.2926 126.835 52.4893 127.153 52.0316 127.807V127.807C51.2601 128.909 49.6414 128.947 48.8188 127.883L47.3227 125.947C46.0911 124.353 43.6777 124.378 42.4788 125.996L41.2147 127.702C39.8659 129.523 37.056 129.294 35.9201 127.333C29.9263 116.99 19.1748 103.179 7.7429 101.29C5.00313 100.837 2.21294 97.4125 3.217 94.8235C6.03477 87.5577 8.45023 78.1326 6.36716 71.7883C5.99614 70.6584 6.09371 69.3978 6.6428 68.3428C8.27128 65.2139 9.54469 59.8442 7.37319 53.4983C6.4918 50.9225 8.60522 47.7753 11.2808 48.278L40.3495 53.7399C42.2945 54.1053 44.0663 52.5425 44.1293 50.5645C44.3778 42.7651 46.7819 32.787 54.8733 33.2426C56.71 33.346 58.5936 32.3527 58.958 30.5495L63.3966 8.58998C63.7419 6.88201 65.4502 5.81401 67.1368 6.25173L91.137 12.4802C92.7802 12.9067 94.4539 11.9035 94.8525 10.2533L96.0328 5.36601C96.5949 3.03882 99.5029 2.24638 101.168 3.96671L124.627 28.2058C125.787 29.4036 125.671 31.3373 124.377 32.3883V32.3883ZM124.377 32.3883L124.62 32.2118L124.863 32.0353"
            stroke="#F3F9F7"
            strokeOpacity="0.25"
            strokeWidth="1.19199"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_225_10"
            x="-3.66371"
            y="-3.63148"
            width="135.762"
            height="147.429"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.03742" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_225_10"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_225_10"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
