import * as React from "react";
import { useState, useEffect } from "react";
import IconArrowRight from "@Assets/icons/Arrow_Right_Icon_Svg";

function ButtonText(props: any) {
  const [text, setText] = useState("");
  const [showIcon, setShowIcon] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (props.text) setText(props.text);
    if (props.showIcon) setShowIcon(true);
    if (props.active) setActive(props.active);
  }, []);

  const onTouch = () => {
    props.onTouch();
  };

  return (
    <button
      className={`btn btnText ${!active && "btnText--inactive"}`}
      disabled={!active}
      onClick={onTouch}
      type="button"
    >
      <span className={`btnText__text ${!active && "btnText__text--inactive"}`}>
        {text}
      </span>
      {showIcon && <IconArrowRight />}
    </button>
  );
}

export default ButtonText;
