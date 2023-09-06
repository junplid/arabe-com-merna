"use client";

import Image from "next/image";
import { PropsCountryComponent } from "../map";

interface PropsComponentCountryIemen_I extends PropsCountryComponent {}

export default function ComponentCountryIemen(
  props: PropsComponentCountryIemen_I
): JSX.Element {
  return (
    <g
      onClick={() => !props.active && props.onSelect("iemen")}
      className={`${!props.active ? "cursor-pointer" : ""} group`}
    >
      <title>Iemen</title>
      <path
        d="M678.369 248.602L709.684 220.736C710.577 219.942 710.888 218.702 710.69 217.524C710.121 214.14 710.982 211.194 712.716 208.664C713.483 207.544 713.654 206.074 712.941 204.918L700.72 185.11C699.963 183.882 698.432 183.358 697.085 183.875C668.646 194.8 662.253 207.014 662.603 213.264C662.665 214.375 662.445 215.539 661.682 216.347L659.928 218.206C658.666 219.543 656.493 219.378 655.447 217.866C654.913 217.095 654.03 216.629 653.092 216.627C643.799 216.615 637.457 217.499 633.242 218.7C630.41 219.506 621.257 222.934 620.88 225.854C620.786 226.589 620.723 227.339 620.688 228.045C620.663 228.548 620.529 229.039 620.279 229.476L617.848 233.732C617.322 234.654 617.315 235.784 617.827 236.714C624.336 248.541 630.518 260.936 635.157 270.789C635.927 272.425 637.943 273.043 639.492 272.109L677.919 248.934C678.079 248.838 678.23 248.726 678.369 248.602Z"
        fill={props.active ? "#e9d74e" : "#0C6746"}
        fillOpacity={props.active ? "0.8" : "0.7"}
        className={`duration-200 ${
          props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <path
        d="M678.369 248.602L709.684 220.736C710.577 219.942 710.888 218.702 710.69 217.524C710.121 214.14 710.982 211.194 712.716 208.664C713.483 207.544 713.654 206.074 712.941 204.918L700.72 185.11C699.963 183.882 698.432 183.358 697.085 183.875C668.646 194.8 662.253 207.014 662.603 213.264C662.665 214.375 662.445 215.539 661.682 216.347L659.928 218.206C658.666 219.543 656.493 219.378 655.447 217.866C654.913 217.095 654.03 216.629 653.092 216.627C643.799 216.615 637.457 217.499 633.242 218.7C630.41 219.506 621.257 222.934 620.88 225.854C620.786 226.589 620.723 227.339 620.688 228.045C620.663 228.548 620.529 229.039 620.279 229.476L617.848 233.732C617.322 234.654 617.315 235.784 617.827 236.714C624.336 248.541 630.518 260.936 635.157 270.789C635.927 272.425 637.943 273.043 639.492 272.109L677.919 248.934C678.079 248.838 678.23 248.726 678.369 248.602Z"
        stroke="#F3F9F7"
      />
      {!props.active && (
        <>
          <rect x="651" y="213" width="29" height="29" fill="url(#pattern6)" />
          <defs>
            <pattern
              id="pattern6"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image6_317_273" transform="scale(0.0344828)" />
            </pattern>
            <image
              id="image6_317_273"
              width="29"
              height="29"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALGSURBVHgBvZdLaxNRFMfP3JlkBgM1YgtxN61Q8LGoRZCWoNaN0oXUleAqKIW6shWXQpu67MLHF6hV3NSFu2IR2iCCFozjq0IraARLgobOKHnNI3M9dyRp82we7fwg3Ln33Nz/PWfunDnDQYMkZmZ8icXFE+bm5kkiSUfBND2OYZ/029DUt8Z+n3Lm5crXRtbidprwPRQKqOvrt2zDuIZdf7U5hp4F27aA83gVMHIPBlfX5ziOo02LKiMjfntjY5Ly/BhYlgT1oBR0PY1NUSfGS+LUQPTjXMOir/v6ZFGSlmzL6oYGsUwd92aUjBFRujv47sPN8rmkmqDH41luRpAhCN6KMVvPTbw61jv7eX6+xMhVE8Q4ydAChp7Be5uvZroXXF2bKHRKPJX8/qetCjqLEaGWafzN6YGrhU7R02h/f4gSMgttYOctMIxsLbNmevTuofcxregpntJJaBOO8PXMfsHwjrMLJx5fRkcvcV6vDG1CLQu8eaOmneOFG3R1LeyEV9O0J/iMXYHdwLad57b2zugQ+d/S8+AWhJwjqqqy1HYQ3ILS4wTpBXc5QDAxi+AyBO9nHFyGdHR0/AIXQSf/sPD+xesYuATP8y8KGekZuASm2hUnOXR2dp5Fj5dhF8hkMjVt+Ab7honosONpMpmMYBOBNrFZNqqDaZp3WLuV8CkNw96KxtLp9MMSUeYt/uk+7JFoT0/PxcJ1yUt8enr6NsZdgRbJ56tWDezEhj8hhX5FYTY8PBxQFGXJsqwj0ATMy1wuVzGOBzScSqWmto9VFGYLCwuJYDA4gLubgybATZYPaV1dXdfLBZ2NQB0CgUAIQ8YqCrnePFbvZrNbZYoois/xNxaPx39Um79jhV8Qx0Uu48IXaNkLmvVZWAVBUNHbR5IkPcZDGa23XkOi25Fl+RQmgEMo5nxi+Hw+FceikUjkZ6Nr/AP94SnxSRsEsQAAAABJRU5ErkJggg=="
            />
          </defs>
        </>
      )}
    </g>
  );
}
