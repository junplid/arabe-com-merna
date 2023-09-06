"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryCatar_I extends PropsCountryComponent {}

export default function ComponentCountryCatar(
  props: PropsComponentCountryCatar_I
): JSX.Element {
  return (
    <g
      className={`${!props.active ? "cursor-pointer" : ""} group`}
      onClick={() => !props.active && props.onSelect("catar")}
    >
      <title>Catar</title>
      <path
        d="M688.681 105.99L683.795 123.359C683.173 125.574 680.409 126.319 678.758 124.718L671.172 117.365C670.44 116.656 670.112 115.627 670.3 114.626L671.429 108.59C671.464 108.406 671.481 108.219 671.481 108.031V104.123C671.481 103.043 672.055 102.044 672.988 101.499L680.131 97.3327C681.441 96.5687 683.113 96.8875 684.05 98.0797L688.145 103.291C688.744 104.054 688.943 105.057 688.681 105.99Z"
        fill={props.active ? "#e9d74e" : "#0C6746"}
        fillOpacity={props.active ? "0.8" : "0.7"}
        className={`duration-200 ${
          props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <path
        d="M688.681 105.99L683.795 123.359C683.173 125.574 680.409 126.319 678.758 124.718L671.172 117.365C670.44 116.656 670.112 115.627 670.3 114.626L671.429 108.59C671.464 108.406 671.481 108.219 671.481 108.031V104.123C671.481 103.043 672.055 102.044 672.988 101.499L680.131 97.3327C681.441 96.5687 683.113 96.8875 684.05 98.0797L688.145 103.291C688.744 104.054 688.943 105.057 688.681 105.99Z"
        stroke="#F3F9F7"
      />
      {!props.active && (
        <>
          <rect x="682" y="86" width="29" height="29" fill="url(#pattern3)" />
          <defs>
            <pattern
              id="pattern3"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image3_317_273" transform="scale(0.0344828)" />
            </pattern>
            <image
              id="image3_317_273"
              width="29"
              height="29"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO8SURBVHgBxZZbTBNpFIDPP9N2KK22oNu4mM02urrsbtxdE8OTDzUhMeiL0fjikz775iVqouLdipp4T0xM8AKJ4gXwBoKCoKIYQRCDMUWtooAi7ZRep52Zev5qSR1b0tJJ/JLpnPnPmZ45/3/O+X8CaXBw0erZQ92OxRqWLZEi0ixGp7XIkpgLhPkMkvSesExXVJRrywYbatL5PzKect20YhshpBQIsUEaMBp2UMtxNVEjs2/30ytvM3LqdrvN3k/uXa9aO1e3nawGfmAYMsSZY560ZWfv5YpkSjaJQyvDMHc5g77k139mwNzlxeB+9xGG+/ohA8xiKLx0/qSZ8MD7qkWpJEqHOJ3NKFoFbwDaz1yHxxV1IIz6YaKgg21lAw3bE8fGIo1Go6wgCI9QnBny+qHpQCU8v3Efgm4vZIlt/uQ/PBjxo4QP+YrH49mGjksTrXGKoLeuDdpO1cLImw+QBbzOZPx/94uvycXQHzqtSocUKSKCHyPFrIQsMYu+wOH4QyxSjLIcna6MD4b9QWg5fhG6rzRntZ5KLL9N+299+9lnrMPh4HJzc0/gmCGuZHVamGotAI1OA6MfhiGESaUGwUDI88DjuENwahdgxjalMsQZgOq1h+BF/UPIFm0O93LP62uFxOVy2bEuNygNaMk8PncTnlTWQ8A9Cmox5W+rGdspO51Gk4goROD2gYpYdIJXvTWljPaP/E54nm9EuTipwdAIOB/2wD1Mqgm0wqREZXkBg1GGUxnoTUaQJRmMljxQEw1eP4RAHbUevQBPzjeoWjIUzmwIU6eflQqGZWKNXsB67WvuUG1qKTNm/9lDS8b2rcmn5OqmY9BT2wrZgknbZ++vm0Uj7cKLx8ucaEBLpvPibei61AQu5wCoAaNlG2P3vLw8HiP9YbNtOVaF61qlmkOKzsAdofdY78UGMQcbRAeK2kQjD7bA123dMMHTgwJyev/ArVVUiu0y+fn5PVg6J5Rmkwumgt5sBNP0XyAbcJcKsTIZ28g1cSESiWzmOG4hOi+kz7QhtGMbVKNkCEN22IfqnGMfERcsFotPluUSFGPKf5fYoLC4CEwFWUap05TZnTf3fvcRSqPEcxJ9FnwBaNhTDs9qWiBTcIvcZ3fe2KgcT3UEtWLUpR2V9SufX22Fwd43kAmEAJ9jMqzZ0VtdnlQ/3sub/1q2RPQHtkqiNBfSgyc69mSYD9oP8Xf5VEYE0mDXvBVFQY9vmeALFmk53RwxHJkSe5llIgRIP2ZGp16vb+SHXFXjOfupfAHTwagO6dKpYQAAAABJRU5ErkJggg=="
            />
          </defs>
        </>
      )}
    </g>
  );
}
