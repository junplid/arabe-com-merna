"use client";

import { PropsCountryComponent } from "../map";

interface PropsComponentCountryBahrein_I extends PropsCountryComponent {}

export default function ComponentCountryBahrein(
  props: PropsComponentCountryBahrein_I
): JSX.Element {
  return (
    <g
      onClick={() => !props.active && props.onSelect("bahrein")}
      className={`${!props.active ? "cursor-pointer" : ""} group`}
    >
      <title>Bahrein</title>
      <path
        d="M662.398 96.8007L661.317 93.1775C661.112 92.4895 661.158 91.7511 661.445 91.0933L663.741 85.8407C664.8 83.4176 668.285 83.5637 669.138 86.0669C669.274 86.465 669.321 86.8879 669.277 87.3061L668.329 96.253C667.979 99.5539 663.346 99.9818 662.398 96.8007Z"
        fill={props.active ? "#e9d74e" : "#0C6746"}
        fillOpacity={props.active ? "0.8" : "0.7"}
        className={`duration-200 ${
          props.active ? "" : "group-hover:fill-yellow-200"
        }`}
      />
      <path
        d="M662.398 96.8007L661.317 93.1775C661.112 92.4895 661.158 91.7511 661.445 91.0933L663.741 85.8407C664.8 83.4176 668.285 83.5637 669.138 86.0669C669.274 86.465 669.321 86.8879 669.277 87.3061L668.329 96.253C667.979 99.5539 663.346 99.9818 662.398 96.8007Z"
        stroke="#F3F9F7"
      />
      {!props.active && (
        <>
          <rect x="661" y="55" width="28" height="28" fill="url(#pattern2)" />
          <defs>
            <pattern
              id="pattern2"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image2_317_273" transform="scale(0.0357143)" />
            </pattern>
            <image
              id="image2_317_273"
              width="28"
              height="28"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANLSURBVHgBrZZbSFRBGMf/M2c3s4udLYoiCis0kwpCCuylC71FYQURCeGLL1HQm12gKMEMIvQhDVHpQmUpYQ9pb14IwtQsybxspmSRG9junuOulz3nTDOLR+y462X3/OAwM9/3cb6Z+b6ZbwjmgTFGekjKAUKlLCI5MqFpqYxBDiupFAQxOqjOWnWQ1zvQ0zjf/8hcyv61+/NCPiUPoZALC2MQEvLT9N7KaAY0ktDj8Wzz1NR3GolLChfhTJAMHRU92D7QjbTkBTlUFOVYQkJCW8KRzF2r35Qi8exRxEAyIej8mrTnjFXx35b6fL5TvKmxGgXuP4N6rRixIG1cfzrlV1P1LIder5fPinzm3SRTZvwZQbDyFYIlL2AoKmKBO/DpSYn70pVPbjF2TCsIaTCdMb+KQGkVgqXckT82RyYMkKWx0FPe3SfG4RjyuOVABHwKwz8K468fTNNhByyk7XWvyrgi+uEt5bEbmOnQRP/xG6N3yjFWVccHBuKBOKWB1MmubYTH7gDfzsZohmwyBPVqMYLl1YgXBnJIxPBERKWmYfzlW4wWlEH/6YEdEOhZDr66PVaFPjQMb9YFaP1DsBWnM1MkzSyH0qb1kJ/fxdKsw7ATorFUwhOGzWUUau+CeqsEk01tsAM6nwEbG487Q2ciYjjCS9Aaq2LyXTtGC8t5+xG2QWmA6rreZ5VrX9zwn8+31xmHMHRQvsIPVoVjZwrWdtZiVcl1SJs3wC6IRNvEwT84dY9GJZ5qMRPmIIeIeELwu3SYt+usBma1CBQ/4ckzgTgZTEPvFpE0jK+ygLdF0zMR1aKEV4sH8VeL6X/CuCna8LFwuVzFfIXTB01UC1EpmG5PtSBOx7cdcD8M900hvwC28qadf7IpE9UiUPQYwUe1sZ9FKqnMMHbzF91geGjKZVn+Tik9N9NWZGjSvTysuJyLWCHLluaazsJjq4Gqqic1TavgMZVF0iiXCjFe14xFOxJPC5ecne5tqbPIZyPeNxP1zQ3KxYJkY8SHRTtzOlr1xBXZ6UqLO8JEosPfljkE7AYivAYiIkmDRF5Ztn2k5XY0E4IF0O3YeZASdhyakcEIMmAYy8MKSn2Ekj6e0e95Na9NY91N4pjN9a9/WyBq69gsYS4AAAAASUVORK5CYII="
            />
          </defs>
        </>
      )}
    </g>
  );
}
