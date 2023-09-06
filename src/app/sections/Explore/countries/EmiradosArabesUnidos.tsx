"use client";

import { PropsCountryComponent } from "../map";

interface PropsComponentCountryEmiradosArabesUnidos_I
  extends PropsCountryComponent {}

export default function ComponentCountryEmiradosArabesUnidos(
  props: PropsComponentCountryEmiradosArabesUnidos_I
): JSX.Element {
  return (
    <g
      onClick={() => !props.active && props.onSelect("emiradosArabesUnidos")}
      className={`${!props.active ? "cursor-pointer" : ""} group`}
    >
      <title>Emirados Árabes Unidos</title>
      <path
        d="M717.41 134.257L699.608 135.648C699.269 135.674 698.928 135.645 698.601 135.554C695.173 134.599 691.781 133.09 688.445 131.128C685.933 129.649 682.524 131.92 683.245 134.744L688.839 156.663C689.068 157.559 689.692 158.301 690.534 158.681L713.832 169.18C714.851 169.64 716.041 169.502 716.928 168.821L723.308 163.93C723.693 163.635 724.001 163.253 724.208 162.815L745.22 118.25C746.17 116.235 744.701 113.917 742.473 113.917H734.005C733.2 113.917 732.427 113.597 731.858 113.027L725.719 106.889C725.149 106.32 724.377 106 723.571 106H723.248C721.57 106 720.211 107.36 720.211 109.037V131.229C720.211 132.815 718.991 134.134 717.41 134.257Z"
        fill={props.active ? "#e9d74e" : "#0C6746"}
        fillOpacity={props.active ? "0.8" : "0.7"}
        className={`duration-200 ${
          props.active ? "" : "group-hover:fill-yellow-200 cursor-pointer"
        }`}
        style={{ pointerEvents: "all" }}
      />
      <path
        d="M717.41 134.257L699.608 135.648C699.269 135.674 698.928 135.645 698.601 135.554C695.173 134.599 691.781 133.09 688.445 131.128C685.933 129.649 682.524 131.92 683.245 134.744L688.839 156.663C689.068 157.559 689.692 158.301 690.534 158.681L713.832 169.18C714.851 169.64 716.041 169.502 716.928 168.821L723.308 163.93C723.693 163.635 724.001 163.253 724.208 162.815L745.22 118.25C746.17 116.235 744.701 113.917 742.473 113.917H734.005C733.2 113.917 732.427 113.597 731.858 113.027L725.719 106.889C725.149 106.32 724.377 106 723.571 106H723.248C721.57 106 720.211 107.36 720.211 109.037V131.229C720.211 132.815 718.991 134.134 717.41 134.257Z"
        stroke="#F3F9F7"
      />
      {!props.active && (
        <>
          <rect x="693" y="124" width="29" height="29" fill="url(#pattern5)" />
          <defs>
            <pattern
              id="pattern5"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image5_317_273" transform="scale(0.0344828)" />
            </pattern>
            <image
              id="image5_317_273"
              width="29"
              height="29"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMYSURBVHgBvZffS1NhGMef9z1nx7mN3CY6ylYG1UU3ipEook6QzCC666KLRIOgIFvdeBGV/0BRdlFgLNMgyCuDrjKYBFGMagWtu3aaml74Y7jNzZ3znrf3LLQtz9mObuwD5/D+4vme5wfPy0GwAzxPPXarYHUSTA6oc0eFg/IxPjzRNxHZiR1U6EDY02gfvFI3CBj1UoU2E0pw9r6cUoCkqAgI+zEhz6YvT/sL2UT5xDhquRW1koGhPocd8iDFFVBkmhlzCItue9013znfK73zWGtxtqu10ywJQZMs30AU5RXMCJn/fTuhSr24OjvVPdo7Ylh0oa25j5OInw0PgkEwjzJPNooiX+15cvr7wIuBfXlFf/Z2nmFBGkMUdgw2bV+TiHQsEp9/PfRyqEpTdKGlsV5IJMcLVpauqGammMdKY2D1y7CmqGSzPecIFMyfHgj/fbShXs+jbk+OqNjTcd6UTLdBkSBOP048h4dzRIVE6hKUAH1PWZgp7dz0Fqm5BE4I6xqqdUGFbxwMoSgsknmqEKEHjupqL6ZVznYoFahgGZ5VXxhiseNQKgqJUlofj8ddGHFcA5SRZDJZh1mGoZzwAHsw7LYbFAFmcf4FZcTEcSuYKkoQSgUtmKo1m9P5DfO11Z+gfHxWX5mMzrW3rnAKcWidilVWwk1HLRhBSqfVBq+776qp6R/1+cb4jDIhI0z+jqboWgz8X0NghI2NDSCEaO5ZLJa4x+N5o44z3TItpO8rQKNQJPm8pJTenZycnN8SPeQPRpM8dxuKhOoXkri0tDS8Odm6Fw7PfHhIOfwYdoleWDHGUbbXlbOWPQk2nPAmhIoZKJEoz/PrLpfrQiqVErPXt/UjFiI039F8j1OQV53/lmQ4FZ6FfKhhZYZzwqt6aLVaTy4uLgb+P7/t2kUI0f3vAteZhX6gIIIBZFnOETSbzW/dbneDlqCm6CZ73wfGPtrMHesIX2RTUe+cWrGSJKmegSAIfvbRXcvLy92hUEj3V8Nwu29qamqJRCItzPARlqujzDvMvJszmUwLLJ8/EonEVJRhxNYfKs88QNsxtO8AAAAASUVORK5CYII="
            />
          </defs>
        </>
      )}
    </g>
  );
}
