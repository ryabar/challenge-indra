import * as React from "react";

function Cursor_Text_Svg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="96"
      fill="none"
      viewBox="0 0 96 96"
    >
      <g filter="url(#filter0_f)">
        <circle
          cx="48"
          cy="48"
          r="24"
          fill="#001AFF"
          fillOpacity="0.12"
          style={{ mixBlendMode: "multiply" }}
        ></circle>
      </g>
      <path
        fill="#000"
        d="M52.286 39.429c-2.381 0-3.572.833-3.572 2.5v4.642h1.429V48h-1.429v6.071c0 1.667 1.19 2.5 3.572 2.5H53V58h-.714c-2.024 0-3.453-.543-4.286-1.63-.833 1.087-2.262 1.63-4.286 1.63H43v-1.429h.714c2.381 0 3.572-.833 3.572-2.5V48h-1.429v-1.429h1.429V41.93c0-1.667-1.19-2.5-3.572-2.5H43V38h.714c2.024 0 3.453.543 4.286 1.63.833-1.087 2.262-1.63 4.286-1.63H53v1.429h-.714z"
      ></path>
      <defs>
        <filter
          id="filter0_f"
          width="96"
          height="96"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur"
            stdDeviation="12"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default React.memo(Cursor_Text_Svg);
