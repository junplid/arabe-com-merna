"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryPalestina_I extends PropsCountryComponent {}

export default function ComponentCountryPalestina(
  props: PropsComponentCountryPalestina_I
): JSX.Element {
  return (
    <g
      onClick={() => !props.active && props.onSelect("palestina")}
      className={`${!props.active ? "cursor-pointer" : ""} group`}
    >
      <title>Palestina</title>
      <path
        d="M517.341 59.2706L517.656 61.9959L518.456 67.7623L518.844 69.7635C519.046 70.8089 518.162 71.7441 517.107 71.6002C516.625 71.5345 516.141 71.6978 515.797 72.0415L515.105 72.734C514.252 73.5863 512.87 73.5863 512.018 72.734C511.295 72.0107 511.171 70.8819 511.72 70.0189L512.181 69.2941C512.978 68.0423 512.753 66.3982 511.65 65.4057L510.593 64.4543C509.953 63.8783 509.588 63.0577 509.588 62.1966L509.588 59.864C509.588 58.7135 510.238 57.6617 511.267 57.1472L512.31 56.6258C513.104 56.2287 514.032 56.1991 514.85 56.5447L515.505 56.8215C516.514 57.2475 517.215 58.1832 517.341 59.2706Z"
        fill={props.active ? "#e9d74e" : "#0C6746"}
        fillOpacity={props.active ? "0.8" : "0.7"}
        className={`duration-200 ${
          props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <path
        d="M507.237 72.2628L504.363 68.9095C504.034 68.5259 503.417 68.8753 503.576 69.3546C503.61 69.4547 503.608 69.5631 503.571 69.6618L502.629 72.1722C502.502 72.5132 502.436 72.8744 502.436 73.2386L502.436 79.6489L507.569 81.8253C508.737 82.3206 509.972 81.2785 509.681 80.0437C509.62 79.7848 509.493 79.546 509.313 79.3503L508.116 78.0494C507.535 77.4184 507.248 76.5714 507.326 75.7174L507.551 73.2455C507.583 72.889 507.47 72.5346 507.237 72.2628Z"
        fill={props.active ? "#e9d74e" : "#0C6746"}
        fillOpacity={props.active ? "0.8" : "0.7"}
        className={`duration-200 ${
          props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <path
        d="M502.436 79.649C500.744 81.7031 504.68 78.8956 502.436 79.649ZM502.436 79.649L507.569 81.8254C508.737 82.3207 509.972 81.2786 509.681 80.0438C509.62 79.7849 509.493 79.5461 509.313 79.3504L508.116 78.0495C507.535 77.4185 507.248 76.5715 507.326 75.7175L507.551 73.2456C507.583 72.8891 507.47 72.5347 507.237 72.2629L504.363 68.9096C504.034 68.526 503.417 68.8754 503.576 69.3547C503.61 69.4548 503.608 69.5632 503.571 69.6619L502.629 72.1723C502.502 72.5133 502.436 72.8745 502.436 73.2387L502.436 79.649ZM517.656 61.9959L517.341 59.2706C517.215 58.1832 516.514 57.2475 515.505 56.8215L514.85 56.5447C514.032 56.1991 513.104 56.2287 512.31 56.6258L511.267 57.1472C510.238 57.6617 509.588 58.7135 509.588 59.864L509.588 62.1966C509.588 63.0577 509.953 63.8783 510.593 64.4543L511.65 65.4057C512.753 66.3982 512.978 68.0423 512.181 69.2941L511.72 70.0189C511.171 70.8819 511.295 72.0107 512.018 72.734C512.87 73.5863 514.252 73.5863 515.105 72.734L515.797 72.0415C516.141 71.6978 516.625 71.5345 517.107 71.6002C518.162 71.7441 519.046 70.8089 518.844 69.7635L518.456 67.7623L517.656 61.9959Z"
        stroke="#F3F9F7"
      />
      {!props.active && (
        <>
          <rect x="472" y="48" width="28" height="28" fill="url(#pattern20)" />
          <defs>
            <pattern
              id="pattern20"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image20_317_273" transform="scale(0.0357143)" />
            </pattern>
            <image
              id="image20_317_273"
              width="28"
              height="28"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKBSURBVHgBtZbPaxNBFMffzGw2NG7TpNUakISILemhXgx48hBFvXho1BJbK1hFPa3iseJBPIii4A/iQc9SxYOg0IuKqNhDbaBFejDRQvIHaBJSJMkad3yzJaG0abLJpF94Oy+TN/uZnbz3NgBNxDknOEQopQ8dDsdXQkhOTAvDuT+MsS/oP1AUJQKy8nq91/BG2SrAhqVxA+ehVbnd7gGn0/mtBdAGMFrQFkxV1SgOOWgfZhkefQE3PtYQltL2ndKhTwq03nw+X6wu7DsMBZNkqJCEEO8wNIdPOljl0KpDgH/ElOwWvg7b0fqgQ/IUi8Xp6gcmLkkWOod7Obs2aj+4rHEeiiAr0zR3YcaXS6XSLLGAEErDJln1GH6h/QZZYQ2nDcPYQ/C3i1jH2UDZ00dBm7oIsvL7/QcVhEWbBfY+fwdaICANxa4VZTrrv45eoFmwMbtgjeqBMEjIZDrpjyNQtRMtC8VmoDGd995qZZEktItCWyLQriihNN/KApE42tQFaFMrlDP6w260JExokfK/lTk7kR2AibJI2Cr8ypUR2CYJE/J07YgQ8Rci5RjOQqXiqReUOOmG+RM9IC+eiU982E2xNjjpdt3dWpgFvCmutfxOOvcuQdkY3goYpWz50fhb651Yq0MFHMeRnu80jBBaKEP5SA1edQbKC8tUVSc7e4z4IIp66cn4p8wGoNCgsfRmcXTnGAW6ArLiPK8pPcfux2Zerp2u26OuvogE/5kMS4UEoQ0xyhL4wp24Nzrzc/13DZvi5elDkxhywy4YQZkupj29HXt1Z7MYW11Yf3Y4whgdMQHCYPIwEO5aXUzzWFYpzitzpklex8+8/yzKrNG9/gNJpxVVpRdhGgAAAABJRU5ErkJggg=="
            />
          </defs>
        </>
      )}
    </g>
  );
}
