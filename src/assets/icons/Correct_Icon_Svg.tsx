import * as React from "react";

function Correct_Icon_Svg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <circle cx="8" cy="8" r="8" fill="#83CC5E"></circle>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.706 8l2.196 2.353 4.392-4.706"
      ></path>
    </svg>
  );
}

export default React.memo(Correct_Icon_Svg);
