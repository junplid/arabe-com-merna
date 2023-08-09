"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryMorocco_I extends PropsCountryComponent {}

export default function ComponentCountrySaaraOcidental(
  props: PropsComponentCountryMorocco_I
): JSX.Element {
  return (
    <div
      onClick={() => !props.active && props.onSelect("saaraOcidental")}
      className="pointer-events-none group country saara"
      title="Saara Ocidental"
    >
      <Image
        src={"/images/section-10/paises/icons/saara-ocidental.png"}
        height={28}
        width={28}
        alt="Saara Ocidental"
        className={`country icon-saara duration-200 ${
          props.active ? "opacity-0" : "opacity-100 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <svg
        width="95"
        height="73"
        viewBox="0 0 95 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_226_2)">
          <g filter="url(#filter0_b_226_2)">
            <path
              d="M19.1477 37.7207L2.75041 60.7846C1.46606 62.5911 2.48663 65.1204 4.66506 65.5297L36.3905 71.4908C38.3355 71.8562 40.1073 70.2934 40.1704 68.3154C40.4188 60.516 42.823 50.5379 50.9144 50.9935C52.7511 51.0969 54.6346 50.1036 54.9991 48.3004L59.4377 26.3409C59.7829 24.6329 61.4912 23.5649 63.1779 24.0026L87.178 30.2311C88.8212 30.6576 90.495 29.6544 90.8935 28.0042L93.3699 17.7509L94.0441 12.9318C94.2863 11.2012 93.0218 9.62371 91.28 9.48332L56.599 6.68793C55.5676 6.60481 54.6998 5.88253 54.4308 4.88342C53.8987 2.90692 51.3206 2.41648 50.0999 4.05952L44.9871 10.9411C44.6923 11.3379 44.3052 11.6567 43.8593 11.8699L37.8652 14.7362C37.2714 15.0202 36.7858 15.4894 36.4817 16.0732L29.0566 30.3273C28.8241 30.7735 28.4845 31.155 28.0681 31.4375L19.9179 36.9672C19.6183 37.1705 19.3574 37.4257 19.1477 37.7207Z"
              fill={props.active ? "#e9d74e" : "#0C6746"}
              fillOpacity={props.active ? "0.8" : "0.5"}
              className={`duration-200 ${
                props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
              }`}
              style={{ pointerEvents: "all" }}
            />
            <path
              d="M3.23616 61.1299L19.6334 38.0661C19.802 37.8289 20.0117 37.6238 20.2525 37.4604L28.4027 31.9307C28.9008 31.5928 29.3071 31.1364 29.5852 30.6026L37.0103 16.3485C37.2547 15.8793 37.645 15.5021 38.1223 15.2739L44.1164 12.4076C44.6498 12.1525 45.1129 11.7712 45.4655 11.2966L50.5783 4.41496C51.502 3.17175 53.4527 3.54284 53.8553 5.03837C54.1898 6.2806 55.2688 7.17865 56.5511 7.282L91.2322 10.0774C92.6322 10.1902 93.6485 11.4582 93.4539 12.8492L92.7837 17.6394L90.3142 27.8643C89.9938 29.1907 88.6485 29.997 87.3277 29.6542L63.3276 23.4258C61.31 22.9021 59.2665 24.1797 58.8535 26.2228L54.4149 48.1824C54.1295 49.5943 52.6046 50.4917 50.9479 50.3984C48.7905 50.277 46.987 50.8534 45.5067 51.9289C44.0366 52.997 42.9143 54.5353 42.0643 56.3002C40.3687 59.8208 39.7 64.3606 39.5747 68.2964C39.5221 69.946 38.0509 71.1963 36.5006 70.905L4.77512 64.944C3.02414 64.615 2.20382 62.582 3.23616 61.1299Z"
              stroke="#F3F9F7"
              strokeOpacity="0.25"
              strokeWidth="1.19199"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_b_226_2"
            x="-3.8888"
            y="-3.00502"
            width="104.037"
            height="80.624"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.03742" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_226_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_226_2"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_226_2">
            <rect width="94.4904" height="72.2109" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}