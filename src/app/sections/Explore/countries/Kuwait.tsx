"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryKuwait_I extends PropsCountryComponent {}

export default function ComponentCountryKuwait(
  props: PropsComponentCountryKuwait_I
): JSX.Element {
  return (
    <g
      onClick={() => !props.active && props.onSelect("kuwait")}
      className={`${!props.active ? "cursor-pointer" : ""} group`}
    >
      <title>Kuwait</title>
      <path
        d="M629.023 74.4477L627.786 80.9855C627.4 83.0235 629.041 84.856 631.012 84.5871L632.361 84.403C633.4 84.2612 634.433 84.716 635.061 85.5931L636.662 87.8249C637.311 88.7309 638.389 89.1839 639.457 89.0004L644.165 88.1919C646.193 87.8436 647.245 85.4631 646.213 83.6046C644.353 80.2525 642.592 76.911 640.943 73.6365C640.437 72.6327 639.444 72 638.359 72H631.873C630.486 72 629.293 73.0251 629.023 74.4477Z"
        fill={props.active ? "#e9d74e" : "#0C6746"}
        fillOpacity={props.active ? "0.8" : "0.7"}
        className={`duration-200 ${
          props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <path
        d="M629.023 74.4477L627.786 80.9855C627.4 83.0235 629.041 84.856 631.012 84.5871L632.361 84.403C633.4 84.2612 634.433 84.716 635.061 85.5931L636.662 87.8249C637.311 88.7309 638.389 89.1839 639.457 89.0004L644.165 88.1919C646.193 87.8436 647.245 85.4631 646.213 83.6046C644.353 80.2525 642.592 76.911 640.943 73.6365C640.437 72.6327 639.444 72 638.359 72H631.873C630.486 72 629.293 73.0251 629.023 74.4477Z"
        stroke="#F3F9F7"
      />

      {!props.active && (
        <>
          <rect x="635" y="36" width="29" height="29" fill="url(#pattern19)" />
          <defs>
            <pattern
              id="pattern19"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image19_317_273" transform="scale(0.0344828)" />
            </pattern>
            <image
              id="image19_317_273"
              width="29"
              height="29"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN5SURBVHgBxZZLaBNBGMe/md1mkyaxhSgo1qaKpjHWF/UtiogIrYIHD4IiHgqCl/rAiyhIxYuCDzwIFRQ9iAeheClWUKgigniolWJja2msNhUSTdu0afYxM85EUpI2m93SoD/Y3dlvvp3/fDPfzCzAfwDZcWpqa67r/TVwyCD6JsrQRoSYX9gxwmxSJ92E4JgEUtsETXVEznZG5iXa+Pjo7lgy1sLd9hTzm1ApGDT7xh7qQFqKiUuFjNfe3veObU1fS6mpVi5YAxZgDKCR7Bva4MDy6YUNqyDe8fV1If9ZkdbX1y801skvHVsr1sMcyI/2L4okt55saD7dvKpRzbXnRRoKhapHRkbeJfsSQalMBsXvBtvw7usk30QY3dT7rXvDSPuXJ6aiHo/nqaZp9aI8NTCeaci53At2wAiBarBZdo3ogSWNwYpYR/+LWaKBQODc+Pj4qdwP0oMTgBkGZYUHrOCafHgZ0Nm6PGKyvfpg6PXP532RTAfFLRgM1iSTyfOFGvvdGYVE23fAFIMVIlozNGpcn/YTt1Qqtd8wjCVmH4x1xSF6Lww0TaAYUpF+6dTYvPLWvj2iLIvb1NTUBbAgPTwJKz4tguNnTpj7GBroOjOtd8rK+cPwslPmcxlMJBI1YIPF7kWwa9k203rGmBi1Yk3sHB4eLsc8W+e0HudJpSRJizHv2Wr4t2zBbrd7KZQIhKzPD56wTpFvtk6aUoIJIUNQIkQiWaEoShzz5VIyUTuoqvoD+3y+TigRVpHyOY9VVVV9lMPhcMTv9w/xLK4GC3zRKKTb203rKaGgarppPV5Q+Uo8MzsSpfQef1yFIhzxeOBYTw9M8MsMwndJ3TBvwwDUKp6ZzK3k8Ake5OKVhZybXK7MZYXOgyTUpNLp7F8b7g6IYmaLHuXwLG4p5HvK67UlKCg2pZLTeSBbnj4X4vH4ba/X+yzX8VxFBRwvKwO7UBNRCqgl9PF9f/Y9b2MQw+xyud45GFt9hUe4A1ufoVlM51NxPlj7pbsp15TXqhjm2travTd9vg9zEcyKzgQpyt2Zghm7SRvQV1d3Fen6RbCBmEtVyzON4vLyy2s+d90p5G8aTqCn55KB0HKG0COwEMxZmkLshntdbdBMUGBrs+/l/1Cyw9HA10Qj31WWUoQCmNJyhnGMGBDVKepiuvGGQPrZxkhk1Kq9P5YKZbEy8qaMAAAAAElFTkSuQmCC"
            />
          </defs>
        </>
      )}
    </g>
  );
}
