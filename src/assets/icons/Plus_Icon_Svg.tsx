import * as React from "react";

function Plus_Icon_Svg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        fill="#939DFF"
        d="M11 0C4.935 0 0 4.934 0 11s4.935 11 11 11 11-4.934 11-11S17.065 0 11 0zm0 21.154C5.401 21.154.846 16.599.846 11S5.401.846 11 .846 21.154 5.401 21.154 11 16.599 21.154 11 21.154z"
      ></path>
      <path
        fill="#939DFF"
        stroke="#939DFF"
        strokeWidth="0.5"
        d="M14.713 10.806h-3.407v-3.26a.296.296 0 10-.592 0v3.26H7.306a.296.296 0 100 .592h3.407v3.556a.296.296 0 10.593 0v-3.556h3.408a.296.296 0 100-.592z"
      ></path>
    </svg>
  );
}

export default React.memo(Plus_Icon_Svg);
