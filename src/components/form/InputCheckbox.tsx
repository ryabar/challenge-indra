import * as React from "react";
import { useState, useEffect } from "react";

import IconCheck from "@Assets/icons/Check_Icon_Svg";

function InputCheckbox(props: any) {
  const [value, setValue] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [textLink, setTextLink] = useState({ text: "", link: "" });

  useEffect(() => {
    if (props.name) setName(props.name);
    if (props.text) setText(props.text);
    if (props.textLink) setTextLink(props.textLink);
  }, []);

  useEffect(() => {
    if (props.value) setValue(props.value);
  }, [props.value]);

  const onTouch = () => {
    setValue(!value);
    props.changeValue(!value);
  };

  return (
    <label className="inputCheckbox">
      <input
        className="inputCheckbox__input"
        onChange={onTouch}
        type="checkbox"
        name={name}
        checked={value}
      />
      <span className="inputCheckbox__box">{value && <IconCheck />}</span>
      {(text || textLink) && (
        <p className="inputChekbox__group">
          {text && <span className="inputChekbox__text">{text} </span>}
          {textLink.text && textLink.link && (
            <a
              className="inputChekbox__link"
              target="_blank"
              href={textLink.link}
            >
              {textLink.text}
            </a>
          )}
        </p>
      )}
    </label>
  );
}

export default InputCheckbox;
