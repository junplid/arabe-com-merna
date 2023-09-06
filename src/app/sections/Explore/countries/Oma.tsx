"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryOma_I extends PropsCountryComponent {}

export default function ComponentCountryOma(
  props: PropsComponentCountryOma_I
): JSX.Element {
  return (
    <g
      onClick={() => !props.active && props.onSelect("oma")}
      className={`${!props.active ? "cursor-pointer" : ""} group`}
    >
      <title>Omã</title>
      <path
        d="M757.518 121.48L751.021 116.362C749.487 115.154 747.227 115.686 746.394 117.453L724.967 162.898C724.76 163.336 724.452 163.718 724.067 164.013L716.246 170.01L702.178 180.796C700.941 181.744 700.623 183.474 701.441 184.801L712.617 202.915C713.675 204.631 716.103 204.867 717.714 203.655C721.782 200.596 727.045 198.49 731.474 197.265C733.237 196.777 734.254 194.904 734.289 193.074C734.38 188.293 738.093 184.583 741.412 182.423C742.815 181.509 743.429 179.714 743.285 178.045C742.91 173.709 746.17 170.367 749.191 168.427C750.52 167.573 751.251 165.953 750.845 164.426C748.435 155.368 750.642 150.935 753.047 149.18C754.072 148.431 755.079 147.473 755.272 146.218L758.64 124.328C758.807 123.246 758.378 122.158 757.518 121.48Z"
        fill={props.active ? "#e9d74e" : "#0C6746"}
        fillOpacity={props.active ? "0.8" : "0.7"}
        className={`duration-200 ${
          props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <path
        d="M757.518 121.48L751.021 116.362C749.487 115.154 747.227 115.686 746.394 117.453L724.967 162.898C724.76 163.336 724.452 163.718 724.067 164.013L716.246 170.01L702.178 180.796C700.941 181.744 700.623 183.474 701.441 184.801L712.617 202.915C713.675 204.631 716.103 204.867 717.714 203.655C721.782 200.596 727.045 198.49 731.474 197.265C733.237 196.777 734.254 194.904 734.289 193.074C734.38 188.293 738.093 184.583 741.412 182.423C742.815 181.509 743.429 179.714 743.285 178.045C742.91 173.709 746.17 170.367 749.191 168.427C750.52 167.573 751.251 165.953 750.845 164.426C748.435 155.368 750.642 150.935 753.047 149.18C754.072 148.431 755.079 147.473 755.272 146.218L758.64 124.328C758.807 123.246 758.378 122.158 757.518 121.48Z"
        stroke="#F3F9F7"
      />
      {!props.active && (
        <>
          <rect x="726" y="163" width="29" height="29" fill="url(#pattern13)" />
          <defs>
            <pattern
              id="pattern13"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image13_317_273" transform="scale(0.0344828)" />
            </pattern>
            <image
              id="image13_317_273"
              width="29"
              height="29"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALbSURBVHgBvZdPSBRRHMe/b3bW1QVlF4oCWd0oM8lQ6VKHaFMIiqA6eVhLD+WthA7RoSKL6BKUuBF0UaMkOnQLIa1WEC9tJEK526VV2chq22FrXXX+vH4zrOKf3Vp1Zj/w5r35vd/Md36/+b3hDcM6SSQSXuq8i+ecczWVSoU8Hk8633uwfJwkSWqi7jy1o9TcOdyC1J7TQwy43e4oNioaKas/vuV1321bVWU98ifNGHuUTCZvUvS/sjkI2Ywf4HWFheounky/VL/H1yOoU0LRdpSWlr6nV1GXl2hkd2O5kzmC0HARm8NLEb+jiFv/KRo70e7kn2MjnKMO5mDXNK2XIj6SUzQ5MPIAyyrTLCjiF5mqXykase9tZaraBmtwkXDPGlGuqDdgLT6K1qcPRP0QKWs4xpOzXru3fPEBwEQb5GgM8mhIxm8JZqBJf65RFzTWacRe/YzLaPa8fQxdWBdVYjOY9p2B2aQx7zbSy1Uc0vsfl+4YokW7KhDvDMAKnLbik2yieI+XzfEvusEz1AP7zgpjUpn5iakDzTAbZmf3RFFBpZoxfDt3dWlSKHHAElS+VVQUhTHYjHO9cKyG21i5kCnggsEEKAIDn0QB4TKfEByukgRll6NAMIFNCjukMQkqhlEgmFt9Y7xQVsRe8QXuy+Y0U+uQ550CzEBMadONH8fHDNHZhbmHTjguU45dqx1HT5XZv9YUwxy0u/BnPvgNiEoaeBcshUfBHU/10VLe5rBwn7ooLEPo7G4ZSK4Q1aNVYDutCZBhMhzsVrd/sHdJfvlkLT6NMY21w0Q4Z30B/+D15bY1ZVmDcC8XmY+Gm/5oUGEGAi2DbavtWddCjRIeppT4aCH3YWNqU7S58wf8QxeyTedcgBRxtFoLt0nbiw4zzp7oicL/xSIa2BXaBO4LtAz153LL67dCp6O/aZuq4iBtsPaTehVduIXMcRKKc1Ebh6yFAmeDoXzu9Re2UxD4F45J3QAAAABJRU5ErkJggg=="
            />
          </defs>
        </>
      )}
    </g>
  );
}
