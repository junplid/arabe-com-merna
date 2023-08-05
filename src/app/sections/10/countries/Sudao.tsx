"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountrySudao_I extends PropsCountryComponent {}

export default function ComponentCountrySudao(
  props: PropsComponentCountrySudao_I
): JSX.Element {
  return (
    <div
      onClick={() => !props.active && props.onSelect("sudao")}
      className="pointer-events-none group country sudao"
      title="Sudão"
    >
      <Image
        src={"/images/section-10/paises/icons/sudao-do-sul.png"}
        height={28}
        width={28}
        alt="Sudão"
        className={`country icon-sudao duration-200 ${
          props.active ? "opacity-0" : "opacity-100 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <svg
        width="175"
        height="166"
        viewBox="0 0 175 166"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_225_29)">
          <path
            d="M164.366 34.2004L155.693 4.15747C155.496 3.47815 155.067 2.89141 154.492 2.48031C154.179 2.2563 153.87 2.03042 153.567 1.80287C152.896 1.29952 152.056 1.06925 151.226 1.19133L101.543 8.50187C100.735 8.62088 99.9127 8.39831 99.2745 7.88745L98.9431 7.62215C97.8977 6.78533 96.3787 6.9203 95.4972 7.92832C95.0708 8.41597 94.4718 8.71915 93.8263 8.77404L33.6988 13.8879C32.0781 14.0258 30.8537 15.4158 30.9214 17.0408L31.629 34.0361C31.7009 35.7617 30.3214 37.1999 28.5943 37.1999H24.6157C22.9139 37.1999 21.5442 38.5978 21.5789 40.2993L21.6464 43.6069L22.4268 81.8708C22.4557 83.2873 21.5015 84.5356 20.1271 84.8794L15.812 85.9588C14.46 86.297 13.5117 87.5118 13.5117 88.9054V91.6391C13.5117 92.8236 12.8231 93.9 11.7477 94.3966L7.84206 96.2003C6.35992 96.8848 5.68393 98.6184 6.31152 100.126L7.47695 102.924C8.00964 104.203 7.58059 105.681 6.44561 106.476C5.65707 107.028 5.18749 107.93 5.18749 108.893V113.259C5.18749 113.987 4.87106 114.679 4.32048 115.155C2.66931 116.582 3.5057 119.291 5.67424 119.54L5.86469 119.562C7.26664 119.722 8.28205 120.976 8.14834 122.38L7.82828 125.743C7.77625 126.29 7.87339 126.84 8.10937 127.336L10.629 132.631C10.8401 133.074 11.1557 133.46 11.5486 133.755L12.2974 134.317C13.0618 134.89 13.5117 135.79 13.5117 136.746V139.303C13.5117 140.518 14.2702 141.584 15.2164 142.347C19.6955 145.957 21.9681 155.182 22.8116 161.938C23.0085 163.515 24.3226 164.739 25.912 164.739H28.044C29.072 164.739 30.0303 164.219 30.5906 163.358L33.6652 158.628C33.8739 158.307 34.023 157.931 34.1017 157.557C39.1196 133.65 49.2468 141.602 54.5103 149.72C55.1008 150.631 56.0942 151.215 57.1796 151.215H77.7168C78.8225 151.215 79.8348 150.609 80.4027 149.66C88.5142 136.105 96.4534 137.914 100.769 141.662C101.93 142.671 103.621 143.056 104.9 142.202C117.024 134.114 117.766 123.899 116.016 117.674C115.534 115.96 116.218 114.003 117.857 113.308L120.563 112.16C122.777 111.221 125.286 113.151 125.581 115.539C126.312 121.469 129.592 127.048 133.151 131.391C135.051 133.709 140.853 130.535 143.74 129.732C145.245 129.313 145.927 128.254 146.161 126.709C147.875 115.387 152.676 110.383 156.191 108.686C157.41 108.098 158.504 107.083 158.715 105.746L160.329 95.5231C160.398 95.0885 160.371 94.6442 160.251 94.2209L156.238 80.0666C156.072 79.4799 156.086 78.8567 156.279 78.2781L159.669 68.1008C159.773 67.7912 159.825 67.4671 159.825 67.1408V58.4974C159.825 56.8199 161.185 55.46 162.862 55.46H164.115C165.045 55.46 165.924 55.0338 166.5 54.3035L173.096 45.9401C174.118 44.6433 173.918 42.767 172.644 41.7161L165.351 35.7011C164.879 35.3116 164.536 34.7885 164.366 34.2004Z"
            fill={props.active ? "#e9d74e" : "#0C6746"}
            fillOpacity={props.active ? "0.8" : "0.5"}
            className={`duration-200 ${
              props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
            }`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M164.366 34.2004L155.693 4.15747C155.496 3.47815 155.067 2.89141 154.492 2.48031C154.179 2.2563 153.87 2.03042 153.567 1.80287C152.896 1.29952 152.056 1.06925 151.226 1.19133L101.543 8.50187C100.735 8.62088 99.9127 8.39831 99.2745 7.88745L98.9431 7.62215C97.8977 6.78533 96.3787 6.9203 95.4972 7.92832C95.0708 8.41597 94.4718 8.71915 93.8263 8.77404L33.6988 13.8879C32.0781 14.0258 30.8537 15.4158 30.9214 17.0408L31.629 34.0361C31.7009 35.7617 30.3214 37.1999 28.5943 37.1999H24.6157C22.9139 37.1999 21.5442 38.5978 21.5789 40.2993L21.6464 43.6069L22.4268 81.8708C22.4557 83.2873 21.5015 84.5356 20.1271 84.8794L15.812 85.9588C14.46 86.297 13.5117 87.5118 13.5117 88.9054V91.6391C13.5117 92.8236 12.8231 93.9 11.7477 94.3966L7.84206 96.2003C6.35992 96.8848 5.68393 98.6184 6.31152 100.126L7.47695 102.924C8.00964 104.203 7.58059 105.681 6.44561 106.476C5.65707 107.028 5.18749 107.93 5.18749 108.893V113.259C5.18749 113.987 4.87106 114.679 4.32048 115.155C2.66931 116.582 3.5057 119.291 5.67424 119.54L5.86469 119.562C7.26664 119.722 8.28205 120.976 8.14834 122.38L7.82828 125.743C7.77625 126.29 7.87339 126.84 8.10937 127.336L10.629 132.631C10.8401 133.074 11.1557 133.46 11.5486 133.755L12.2974 134.317C13.0618 134.89 13.5117 135.79 13.5117 136.746V139.303C13.5117 140.518 14.2702 141.584 15.2164 142.347C19.6955 145.957 21.9681 155.182 22.8116 161.938C23.0085 163.515 24.3226 164.739 25.912 164.739H28.044C29.072 164.739 30.0303 164.219 30.5906 163.358L33.6652 158.628C33.8739 158.307 34.023 157.931 34.1017 157.557C39.1196 133.65 49.2468 141.602 54.5103 149.72C55.1008 150.631 56.0942 151.215 57.1796 151.215H77.7168C78.8225 151.215 79.8348 150.609 80.4027 149.66C88.5142 136.105 96.4534 137.914 100.769 141.662C101.93 142.671 103.621 143.056 104.9 142.202C117.024 134.114 117.766 123.899 116.016 117.674C115.534 115.96 116.218 114.003 117.857 113.308L120.563 112.16C122.777 111.221 125.286 113.151 125.581 115.539C126.312 121.469 129.592 127.048 133.151 131.391C135.051 133.709 140.853 130.535 143.74 129.732C145.245 129.313 145.927 128.254 146.161 126.709C147.875 115.387 152.676 110.383 156.191 108.686C157.41 108.098 158.504 107.083 158.715 105.746L160.329 95.5231C160.398 95.0885 160.371 94.6442 160.251 94.2209L156.238 80.0666C156.072 79.4799 156.086 78.8567 156.279 78.2781L159.669 68.1008C159.773 67.7912 159.825 67.4671 159.825 67.1408V58.4974C159.825 56.8199 161.185 55.46 162.862 55.46H164.115C165.045 55.46 165.924 55.0338 166.5 54.3035L173.096 45.9401C174.118 44.6433 173.918 42.767 172.644 41.7161L165.351 35.7011C164.879 35.3116 164.536 34.7885 164.366 34.2004Z"
            stroke="#F3F9F7"
            strokeOpacity="0.25"
            strokeWidth="1.19199"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_225_29"
            x="-3.22132"
            y="-5.51185"
            width="183.64"
            height="176.922"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.03742" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_225_29"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_225_29"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
