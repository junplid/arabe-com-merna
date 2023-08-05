"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryEgito_I extends PropsCountryComponent {}

export default function ComponentCountryEgito(
  props: PropsComponentCountryEgito_I
): JSX.Element {
  return (
    <div
      onClick={() => !props.active && props.onSelect("egito")}
      className="pointer-events-none group country egito"
      title="Egito"
    >
      <Image
        src={"/images/section-10/paises/icons/egito.png"}
        height={28}
        width={28}
        alt="Egito"
        className={`country icon-egito duration-200 ${
          props.active ? "opacity-0" : "opacity-100 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <svg
        width="130"
        height="116"
        viewBox="0 0 130 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_225_26)">
          <path
            d="M60.1245 1.99546L43.9307 12.2216C43.2668 12.6409 42.4662 12.7867 41.697 12.6285L7.61112 5.61758C6.49992 5.38902 5.35398 5.79876 4.63961 6.68004L2.09481 9.81943C1.41656 10.6561 1.23215 11.7895 1.61015 12.7981L2.56967 15.3583C2.79784 15.9671 2.82464 16.6331 2.64612 17.2583L1.25115 22.1435C1.08735 22.7172 1.0961 23.3264 1.27632 23.8951L5.03721 35.7634C5.1201 36.025 5.16717 36.2966 5.17711 36.5708L7.92797 112.418C7.99087 114.153 9.49159 115.482 11.2208 115.335L71.0695 110.245C71.715 110.19 72.3139 109.887 72.7404 109.399C73.6219 108.391 75.1409 108.256 76.1863 109.093L76.5177 109.358C77.1559 109.869 77.9778 110.092 78.7865 109.973L122.825 103.493C125.457 103.105 126.426 99.6617 124.604 97.7227C118.933 91.6861 116.135 85.5431 115.262 82.2761C115.18 81.9712 115.065 81.6785 114.903 81.4075L93.4443 45.4382C92.9809 44.6615 92.8878 43.7188 93.1901 42.8665L100.131 23.2989C100.411 22.5096 100.353 21.6397 99.9699 20.8948L91.8542 5.10621C90.8561 3.16437 88.1373 2.88647 86.2515 3.98687C79.1807 8.11287 69.1438 4.92959 63.3261 1.90373C62.3114 1.37594 61.0916 1.38475 60.1245 1.99546Z"
            fill={props.active ? "#e9d74e" : "#0C6746"}
            fillOpacity={props.active ? "0.8" : "0.5"}
            className={`duration-200 ${
              props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
            }`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M60.1245 1.99546L43.9307 12.2216C43.2668 12.6409 42.4662 12.7867 41.697 12.6285L7.61112 5.61758C6.49992 5.38902 5.35398 5.79876 4.63961 6.68004L2.09481 9.81943C1.41656 10.6561 1.23215 11.7895 1.61015 12.7981L2.56967 15.3583C2.79784 15.9671 2.82464 16.6331 2.64612 17.2583L1.25115 22.1435C1.08735 22.7172 1.0961 23.3264 1.27632 23.8951L5.03721 35.7634C5.1201 36.025 5.16717 36.2966 5.17711 36.5708L7.92797 112.418C7.99087 114.153 9.49159 115.482 11.2208 115.335L71.0695 110.245C71.715 110.19 72.3139 109.887 72.7404 109.399C73.6219 108.391 75.1409 108.256 76.1863 109.093L76.5177 109.358C77.1559 109.869 77.9778 110.092 78.7865 109.973L122.825 103.493C125.457 103.105 126.426 99.6617 124.604 97.7227C118.933 91.6861 116.135 85.5431 115.262 82.2761C115.18 81.9712 115.065 81.6785 114.903 81.4075L93.4443 45.4382C92.9809 44.6615 92.8878 43.7188 93.1901 42.8665L100.131 23.2989C100.411 22.5096 100.353 21.6397 99.9699 20.8948L91.8542 5.10621C90.8561 3.16437 88.1373 2.88647 86.2515 3.98687C79.1807 8.11287 69.1438 4.92959 63.3261 1.90373C62.3114 1.37594 61.0916 1.38475 60.1245 1.99546Z"
            stroke="#F3F9F7"
            strokeOpacity="0.25"
            strokeWidth="1.19199"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_225_26"
            x="-5.53627"
            y="-5.14906"
            width="137.746"
            height="127.166"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.03742" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_225_26"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_225_26"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
