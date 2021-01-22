import * as React from "react";

function Heart_Icon_Svg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#EF3340"
        d="M7.288 13.4a1.36 1.36 0 001.423 0c1.662-1.04 5.689-3.844 5.689-6.648 0-3.528-4.541-4.898-6.323-1.921-.052.078-.12.078-.172 0C6.123 1.854 1.6 3.24 1.6 6.768c0 2.804 4.026 5.592 5.688 6.631z"
      ></path>
    </svg>
  );
}

export default React.memo(Heart_Icon_Svg);
