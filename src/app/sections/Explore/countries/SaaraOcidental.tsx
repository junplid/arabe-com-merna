"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryMorocco_I extends PropsCountryComponent {}

export default function ComponentCountrySaaraOcidental(
  props: PropsComponentCountryMorocco_I
): JSX.Element {
  return (
    <g
      onClick={() => !props.active && props.onSelect("saaraOcidental")}
      className={`${!props.active ? "cursor-pointer" : ""} group`}
    >
      <title>Saara Ocidental</title>
      <path
        d="M23.1479 131.721L6.7506 154.785C5.46625 156.591 6.48682 159.12 8.66525 159.53L40.3907 165.491C42.3357 165.856 44.1075 164.293 44.1706 162.315C44.419 154.516 46.8232 144.538 54.9146 144.993C56.7513 145.097 58.6348 144.104 58.9993 142.3L63.4379 120.341C63.7831 118.633 65.4914 117.565 67.1781 118.003L91.1782 124.231C92.8214 124.658 94.4952 123.654 94.8937 122.004L97.3701 111.751L98.0443 106.932C98.2865 105.201 97.022 103.624 95.2802 103.483L60.5992 100.688C59.5678 100.605 58.7 99.8825 58.431 98.8834C57.8989 96.9069 55.3208 96.4164 54.1001 98.0595L48.9873 104.941C48.6925 105.338 48.3054 105.657 47.8595 105.87L41.8654 108.736C41.2716 109.02 40.786 109.489 40.4819 110.073L33.0568 124.327C32.8243 124.773 32.4847 125.155 32.0683 125.437L23.9181 130.967C23.6185 131.17 23.3576 131.426 23.1479 131.721Z"
        fill={props.active ? "#e9d74e" : "#0C6746"}
        fillOpacity={props.active ? "0.8" : "0.7"}
        className={`duration-200 ${
          props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <path
        d="M7.2365 155.13L23.6337 132.066C23.8023 131.829 24.012 131.624 24.2528 131.46L32.403 125.931C32.9011 125.593 33.3074 125.136 33.5855 124.602L41.0106 110.348C41.255 109.879 41.6453 109.502 42.1226 109.274L48.1167 106.407C48.6501 106.152 49.1132 105.771 49.4658 105.296L54.5786 98.4148C55.5023 97.1716 57.453 97.5427 57.8556 99.0382C58.1901 100.28 59.2691 101.179 60.5514 101.282L95.2325 104.077C96.6325 104.19 97.6488 105.458 97.4542 106.849L96.784 111.639L94.3145 121.864C93.9941 123.191 92.6488 123.997 91.328 123.654L67.3279 117.426C65.3103 116.902 63.2668 118.18 62.8538 120.223L58.4152 142.182C58.1298 143.594 56.6049 144.492 54.9482 144.398C52.7908 144.277 50.9873 144.853 49.507 145.929C48.0369 146.997 46.9146 148.535 46.0646 150.3C44.369 153.821 43.7003 158.36 43.575 162.296C43.5224 163.946 42.0512 165.196 40.5009 164.905L8.77546 158.944C7.02448 158.615 6.20416 156.582 7.2365 155.13Z"
        stroke="#F3F9F7"
      />

      {!props.active && (
        <>
          <rect x="16" y="111" width="28" height="28" fill="url(#pattern14)" />
          <defs>
            <pattern
              id="pattern14"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image14_317_273" transform="scale(0.0357143)" />
            </pattern>
            <image
              id="image14_317_273"
              width="28"
              height="28"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMwSURBVHgBrZZbSFRBGMf/c87sbmKymxsGBbUVuUbZTUKDIiMCBaUoHyKCDOylVtE3oQfpRaoHLREUEnrJh6iwokylsJtlWFpqeMFW6SUMNC+h617O9M2uK7rt6rq7f/ifMzNn5vudmfkGBlhZjJxJvkVuI4+TxbynyG/JlfN9olYReXQRYCUPk/MRgbaTO1YBCga2hMlCLvlPFDC/J8hnliV1IvmsDeZoQYHODQrrQ4qlD9apflhFjKFytbb5OYq/wCBaKR0TZNmG9WQzYiQT+Z6/wuWjX7VehGfpJkuo1NPN8YiBDnHOS+x2eyXzAmEdRoisWltaQL6EGGjIaDQmq7R3mUQtDtXL+b7T+9YfTls2mnDMwd1nh/Z7DOqGoNuR6HA4XquFMEtYxnLBVoLO3G3ARF4xmKJgzcnjYDoeKtSkalOTrkKIzVhBoaCz9c8wVVSO+JILSCi77IW5egZDzVJTKHH3I0z9vV5HvrO07UYdlI1J3r2WcrV/g+NBc9DxjLGdHJq2qjSUUCmZSO7BYXh+/oIh+wjE5DQmSyvgbHwHjcrOD10w1pSB79iyePg6BRGJ+V56va8WtwbMmAATAcBV3w/REgfAvFJooyewCsmZ+ZePWzZBWb8OzlftEC4XXJ+/I952Dua2enhGx4INn1ZtfMNpWtZNq4Ut/HGiEY6Gl1DiDDDkHKOkOgA1KRHcaqEE0gWG+KRe0RJTaYHSI4FJ6fZYoVBGztTeh5iZhW5vCphBFwxGh0E8ZL6DL1ojgQVKHh3FbATfuT3odwJmMgHBBvjucbjdpmhgYWjEZDJt5QxMdPGUm3FulAf2aE5X8UXfAlS0IFoZuOGafDN/Q7eS3KvX2K7FsKZ0FTHSwIuqnhRZWDiHLp3nFPNdC2IKkzGFU83y1xeAaXM/htwq8mM8M3g0VtBU+3XkP6DULs/Ak+YMnof5mUapCUXgRHN196PFjSxYz6zifRameeRRsSASCXxU3Dj/vKbHHviJLTcuqzA1nykoowAWhMMRGFKYqG6s6r0dqg9DGMouTD1KpyeHuh+k6gHMX7YIMUYBBuhq1iE0PG6q7n0D300tpP4BgxlW7mJqcqIAAAAASUVORK5CYII="
            />
          </defs>
        </>
      )}
    </g>
  );
}
