import * as React from "react";

function Calendar_Icon_Svg(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ? props.width : "16"}
      height={props.height ? props.height : "16"}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#EF3340"
        d="M13.333 4h-.667v-.667A.66.66 0 0012 2.667a.66.66 0 00-.667.666V4H8.666v-.667A.66.66 0 008 2.667a.66.66 0 00-.667.666V4H4.666v-.667A.66.66 0 004 2.667a.66.66 0 00-.667.666V4h-.667c-.733 0-1.333.6-1.333 1.333v8c0 .734.6 1.334 1.333 1.334h10.667c.733 0 1.333-.6 1.333-1.334v-8c0-.733-.6-1.333-1.333-1.333zM5 12.667h-.667A.66.66 0 013.666 12a.66.66 0 01.667-.667H5a.66.66 0 01.666.667.66.66 0 01-.666.667zM5 10h-.667a.66.66 0 01-.667-.667.66.66 0 01.667-.666H5a.66.66 0 01.666.666A.66.66 0 015 10zm3.333 2.667h-.667A.66.66 0 017 12a.66.66 0 01.666-.667h.667A.66.66 0 019 12a.66.66 0 01-.667.667zm0-2.667h-.667A.66.66 0 017 9.333a.66.66 0 01.666-.666h.667A.66.66 0 019 9.333a.66.66 0 01-.667.667zm3.333 2.667H11a.66.66 0 01-.667-.667.66.66 0 01.667-.667h.666a.66.66 0 01.667.667.66.66 0 01-.667.667zm0-2.667H11a.66.66 0 01-.667-.667.66.66 0 01.667-.666h.666a.66.66 0 01.667.666.66.66 0 01-.667.667z"
      ></path>
    </svg>
  );
}

export default React.memo(Calendar_Icon_Svg);
