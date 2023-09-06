"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryLibano_I extends PropsCountryComponent {}

export default function ComponentCountryLibano(
  props: PropsComponentCountryLibano_I
): JSX.Element {
  return (
    <g
      className={`${!props.active ? "cursor-pointer" : ""} group`}
      onClick={() => !props.active && props.onSelect("libano")}
    >
      <title>Libano</title>
      <path
        d="M521.338 39.7113C520.963 43.831 520.173 48.9585 519.227 53.5189C518.83 55.4349 520.933 56.9992 522.615 55.9984C522.767 55.9077 522.908 55.7988 523.034 55.674L529.389 49.3784C529.616 49.1539 529.806 48.8951 529.952 48.6115L533.098 42.5039C534.008 40.738 533.006 38.5886 531.068 38.1503L525.191 36.8207C523.317 36.3967 521.511 37.7976 521.338 39.7113Z"
        fill={props.active ? "#e9d74e" : "#0C6746"}
        fillOpacity={props.active ? "0.8" : "0.7"}
        className={`duration-200 ${
          props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <path
        d="M521.338 39.7113C520.963 43.831 520.173 48.9585 519.227 53.5189C518.83 55.4349 520.933 56.9992 522.615 55.9984C522.767 55.9077 522.908 55.7988 523.034 55.674L529.389 49.3784C529.616 49.1539 529.806 48.8951 529.952 48.6115L533.098 42.5039C534.008 40.738 533.006 38.5886 531.068 38.1503L525.191 36.8207C523.317 36.3967 521.511 37.7976 521.338 39.7113Z"
        stroke="#F3F9F7"
      />
      {!props.active && (
        <>
          <rect x="487" y="19" width="29" height="29" fill="url(#pattern9)" />
          <defs>
            <pattern
              id="pattern9"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image9_317_273" transform="scale(0.0344828)" />
            </pattern>
            <image
              id="image9_317_273"
              width="29"
              height="29"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMSSURBVHgBtZZLTBNBGMf/O+yWl5EiIZEEtAVDeRkRIiHBCEQNRm8mevDkwRBvxoOPyIHIReRguBjiwcTExIPPRi8aDSJGOShpCGBbXi1BIQK2FWm7C90dZ1dLKBi6W9tfMv06j2+++Wa/mfmABJgoOVTkhMWilm+trVkwCKdnkLe8pUByz7TSNK6JW41UU8AcMwkho4D8GYpst2HSHm++LY06UWbhstJ7EJaOgVLoxEuhXC/H+D0YNeqC7QII6YSiZCAROM7L1tlcDpd3Yxf51/gxoeouE90JG1Sh1MJxXP+IUFG9sWuTpy6hoger8nkkCWYggOysJlvQMRRti/HUjdL2ZBpUUYOOBkP2L7tbCtYt5A9a0IB6kCrSTY/LpOFTMUY9x889oUvBk0ghwsGa5qLOS32aUVEUS1iZQIqhlPbl5uY2k79Gr8Eg4moICVDn9/vN0UCqgUEeDHbB82PUkA47QlmsHCU+ny+H1auNKI/ODTCDI+gdfwijsC1uIDzPV8IgL533Nellnrq+f4JBdhFZlk1GNBxf3yIQnl+rv2ILUKiiW59tby6BAdTJe8cexbQtBmfxYeoFjEAikcic3sHvp+wxXkbpn3yqO5qZpz/55eXlaXZ2VI24j3FJXhXyay9DjATxbOg2rHmVqLec0PoiiqRnCvaGKA7earWKgUBAjYbGeAqF5lJNBsILmjRn5qNiZx0M8k67kdixuULUt9MA/tA8MoVtyBAMZSuLZrM5n1f/sX2+Iy/4b3CcvvRFJQcC+5WgQNKrAo5Pe67JaIM7fe8tKq1cRKogHGXBX6xmEmtHJiT96mDpySxSBS+0R1OXmO1k3h5h3r5GssnM+FgWHmqIVmMuB5s0/IaJZG+x10TJmfUNm26kMri7YTJdZdGF/0ZIG8zevqO2WHRMb2lUM7wyfJOlj1Z1lUgEFjQkO7PL1na6vmhpwLexO647LHc6S9JIG5XlPfHGapmfibeLK5GOfXB7thinD6f5QCMXEutZ4B9GRE4HTwrZJ6BsMTMcT8YUSR4QIdr3wxuIN9dvZoQlJhIVuXcAAAAASUVORK5CYII="
            />
          </defs>
        </>
      )}
    </g>
  );
}
