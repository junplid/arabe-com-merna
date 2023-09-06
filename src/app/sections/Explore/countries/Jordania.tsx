"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryJordania_I extends PropsCountryComponent {}

export default function ComponentCountryJordania(
  props: PropsComponentCountryJordania_I
): JSX.Element {
  return (
    <g
      onClick={() => !props.active && props.onSelect("jordania")}
      className={`${!props.active ? "cursor-pointer" : ""} group`}
    >
      <title>Jordânia</title>
      <path
        d="M530.793 103.367L524.196 102.396C522.706 102.176 521.601 100.897 521.601 99.3907V78.9485L520.198 68.8432C520.073 67.9398 520.36 67.028 520.98 66.3595L522.915 64.2743C523.682 63.448 524.844 63.1144 525.932 63.4076L531.009 64.7754C531.938 65.0257 532.931 64.8209 533.686 64.2235L544.984 55.2733C546.475 54.0921 548.673 54.5566 549.559 56.2402L552.9 62.5927C553.658 64.0346 553.144 65.8182 551.734 66.6349L539.273 73.8535C537.596 74.8254 537.246 77.0992 538.554 78.5306L544.473 85.0084C545.494 86.1261 545.536 87.8252 544.572 88.9923L533.577 102.296C532.9 103.115 531.844 103.521 530.793 103.367Z"
        fill={props.active ? "#e9d74e" : "#0C6746"}
        fillOpacity={props.active ? "0.8" : "0.7"}
        className={`duration-200 ${
          props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <path
        d="M530.793 103.367L524.196 102.396C522.706 102.176 521.601 100.897 521.601 99.3907V78.9485L520.198 68.8432C520.073 67.9398 520.36 67.028 520.98 66.3595L522.915 64.2743C523.682 63.448 524.844 63.1144 525.932 63.4076L531.009 64.7754C531.938 65.0257 532.931 64.8209 533.686 64.2235L544.984 55.2733C546.475 54.0921 548.673 54.5566 549.559 56.2402L552.9 62.5927C553.658 64.0346 553.144 65.8182 551.734 66.6349L539.273 73.8535C537.596 74.8254 537.246 77.0992 538.554 78.5306L544.473 85.0084C545.494 86.1261 545.536 87.8252 544.572 88.9923L533.577 102.296C532.9 103.115 531.844 103.521 530.793 103.367Z"
        stroke="#F3F9F7"
      />
      {!props.active && (
        <>
          <rect x="526" y="74" width="29" height="29" fill="url(#pattern8)" />
          <defs>
            <pattern
              id="pattern8"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image8_317_273" transform="scale(0.0344828)" />
            </pattern>
            <image
              id="image8_317_273"
              width="29"
              height="29"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANcSURBVHgBtZZbSBRRGMf/58yZnXWr1bVaNTIXKwqJyvIhyweVKILoZlsQ0YVSqJeCgoJu1kNEEFFB9SBRgUVBEBVEUWEPURQlgaXRRTNBJc1r6+ruzPSNtdu6rqvurH/45ty+s7/znTPznQVGqczMzEQqXIaRUjEWcrvdCSkpKZsSEhJuUbOWTA+zNiHES6vVeuzfYmJXSUmJbLFYDjDG2iKAhjTO+dWY4IqiTKfJlaOBhZokSb204MMjBsqyvJCKUUU3lBH45LDAD3JW9h1ktE2CMA0MifpKOEcKVKox28U17aETIjUf4/EI3fBAg1npup5NRQfZq0AfD1YkZmyFy6hnwoLrSAdFjHiIXsYT6enpc4Jt41ElZhUKP56GO39DHzbiO7riEDGBKyjqAqPeH6lQ2ZFIjkbEt5ABJ5NBb7MpI2h+WlpaTv8Cqq3zXczbUxttlWJmBpIfXAJPmQiTOpmUlHSIw+fNDx9hNuuAtv/zd/xauQtacytMapnx4BDS4vAR+6l94FOcg8Bt6/eYBefQuQpWI7Kewa/2H7CteD2UwlzIi+ZC/dYA3duLjl3HodY3BmeZ3WrKdi5OQBbo6Hv5HsqKPHCHHfLCLOMjGwA0FNhqvaMLscjj8aT9/04TJyDx/KEBDpa8BbBtXTNoorVoGRj5xyJKs4wzi2gyGhqtvLVwG7y3HwajaM3bDM+1uwMmjT9YTLYTscrr9dYKvc/fHNrpq6xBZ+lFWFcVQG1uiSuQpDqdziZWJbIoG6lPh/OOA9DIwxUOh6NA+PyedzKUdroSkoZy7tq9FD3FufjZ+gFmNE6ecM0oRTbq2muUOWXo9e2P5PimyI7XSz7RHXEMZiSY8NmViU+M+t/cO3XKeUr9XRGB6xIRD6nQTh8vKm8IQmd8ffyDCUvZWAHpNOscyuTLgRYLHaphsyrpvp8fXyAw2ebMObr2xttAm4cOyqmTVhOsLp5AqNr2UOAg6PTGF/Xv3MkFEpeqYV7tEuc7Lmx5djV8gA01Y0/58lMa1AOITc+FLO08u+HRl0iDLNrMvTfzXX5VKuWMb9X7/9xFF90PFYpiKzvjvlcezS8qNKDSe+5pnb+7c/2aP5eyyjzORTLdP3bOpBZV9VVBlz9yJlec23z/zUh+7w9yJVUHfwsLBgAAAABJRU5ErkJggg=="
            />
          </defs>
        </>
      )}
    </g>
  );
}
