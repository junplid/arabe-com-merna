"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountrySiria_I extends PropsCountryComponent {}

export default function ComponentCountrySiria(
  props: PropsComponentCountrySiria_I
): JSX.Element {
  return (
    <g
      onClick={() => !props.active && props.onSelect("siria")}
      className={`${!props.active ? "cursor-pointer" : ""} group`}
    >
      <title>Síria</title>
      <path
        d="M522.813 16.0777L519.401 27.8866C519.147 28.7652 519.303 29.7124 519.858 30.4393C520.7 31.543 521.261 32.2776 521.481 33.9566C521.668 35.3879 522.59 36.6633 523.998 36.9818L531.084 38.5848C533.021 39.0231 534.023 41.1726 533.113 42.9384L529.967 49.046C529.821 49.3296 529.631 49.5884 529.405 49.8129L524.034 55.1321C523.302 55.8579 522.987 56.9061 523.2 57.9154L523.756 60.5602C523.991 61.6787 524.835 62.5703 525.938 62.8676L530.987 64.2277C531.916 64.4779 532.909 64.2732 533.663 63.6757L547.832 52.4522L564.27 37.4987C565.004 36.8317 565.365 35.849 565.239 34.8658L562.4 12.7022C562.297 11.8988 562.519 11.0876 563.017 10.4488L564.028 9.15167C565.82 6.85304 563.66 3.5952 560.845 4.35074L524.944 13.9872C523.916 14.2629 523.108 15.0559 522.813 16.0777Z"
        fill={props.active ? "#e9d74e" : "#0C6746"}
        fillOpacity={props.active ? "0.8" : "0.7"}
        className={`duration-200 ${
          props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <path
        d="M522.813 16.0777L519.401 27.8866C519.147 28.7652 519.303 29.7124 519.858 30.4393C520.7 31.543 521.261 32.2776 521.481 33.9566C521.668 35.3879 522.59 36.6633 523.998 36.9818L531.084 38.5848C533.021 39.0231 534.023 41.1726 533.113 42.9384L529.967 49.046C529.821 49.3296 529.631 49.5884 529.405 49.8129L524.034 55.1321C523.302 55.8579 522.987 56.9061 523.2 57.9154L523.756 60.5602C523.991 61.6787 524.835 62.5703 525.938 62.8676L530.987 64.2277C531.916 64.4779 532.909 64.2732 533.663 63.6757L547.832 52.4522L564.27 37.4987C565.004 36.8317 565.365 35.849 565.239 34.8658L562.4 12.7022C562.297 11.8988 562.519 11.0876 563.017 10.4488L564.028 9.15167C565.82 6.85304 563.66 3.5952 560.845 4.35074L524.944 13.9872C523.916 14.2629 523.108 15.0559 522.813 16.0777Z"
        stroke="#F3F9F7"
      />

      {!props.active && (
        <>
          <rect x="531" y="11" width="29" height="29" fill="url(#pattern15)" />
          <defs>
            <pattern
              id="pattern15"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image15_317_273" transform="scale(0.0344828)" />
            </pattern>
            <image
              id="image15_317_273"
              width="29"
              height="29"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPJSURBVHgBrZZJbBNJFIZfL94GnNjBWewwVpKZoBlNJrKYiAwBZggaDVKEhCBInJDgBoeIG0cIEXfEgQObFAQHQCCWA+IWCQkRRAIhJGDCZowwToIXSNvurbp51QLLxO0ldr5Ddy2v31/1qup1MVAmjwMBl+52/6OJYivPcW1EVWtYhpmXlEyEyPJkz5PpEYZh9HJ8MaUMHnZ1bWZ5/rBOSC/o+T51XQNZSoPRo2vDXEPz2fUjI/cqEp3o61ujzs2dwuJmKAFRFVAUMXcowwphj/YGg6GyRce6uw8CIYNYdEGZSGLKmHUWlg2zVtvBnvGJGyVFx7u6jmCoBmGJqIoEqirntXMcs3f9ZPB8bhubW3nU0zNQiaDhnLeYthOiD49u6P47ty070/uBQIvV4XilKwoHFSKJAoY4f7NxFv6TCKn23olQktazM7U7nWeqEaQwrPnnRFE9dlvd8e91Q5QeC5LJ/AdVwrGFx0yE1N6nu3f8Tss8fdRs3HhA/fIFqkXTCaiyXLCfa27eh69DTCKRcGEmieNalEwUZUFIsd6k2+Nx0/AGignOxENQLq8T4VImrnQs9jOradraYlaXn9+G8eg0lMPpiSvwJvG+qI2iaZvomtYs7pDwkF+cvgUfhXkY+zgFL2Ih+G1VK6zzdcL/rRt+sE0pabj07LZhO/rhCSxIAvhW1sP29i3wp2dNvijDrGLNRmPjrdD3y7/wWVownM3E38Kvbn+eIGWF5SfDdi4Vh4wqwhhGhYqZCVI4hqkzFaV4cbQumxNqrCvBylmgva4Fitk6bSugzbXaqNOIFILoeozHnfupkIG/thmu7zoJgpyCu+GH8FfTHwWd0UEd3TQA8wvz8HRuBrytHlM7nueDTDqdXidJ0gNYLoofGbqRvKzD4ZjEchKWA734xQGjGmxoaIjS8IqNjY0X8OgMQJUQnCVGrWB/bW3tOfo2NpLP57sGywAOvGCf1WqV4/H4VVo2MnQ0Gn1XX1+/WlGUtVAFqqqa/tq+DegY7h/jFpFNf36/353JZB5hsQUqBL8vJBoSBKHt+20xe07D4XDCYrHsZFlWgAqgoTUTRJ8JXOve3OvpD8khEok89nq9e1B4AZYIDe1iOI6L4JJtEUUxlNtu+nfp6OjonJ2dvQlLCPXi0OIMZ1Bs62JBimkanJqamuzv7++22+0ncdZQCpxNrmDSZrMNDg0NdZoJUkr+uJuamlpwZ++PxWLb0HleHqRhlfG2gOltFMN5B9f2RBIp5nNJtwUXgs4DTqfTj7vRCAGWp/H8vSwllMtXSc6n+zxcEJAAAAAASUVORK5CYII="
            />
          </defs>
        </>
      )}
    </g>
  );
}
