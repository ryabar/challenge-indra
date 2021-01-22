import * as React from "react";
import { useState, useEffect } from "react";

function InputText(props: any) {
  // const inputRef = useRef();
  const [text, setText] = useState({ name: "", value: "" });
  const [inputLabel, setInputLabel] = useState("");
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (props.text) setText(props.text);
    if (props.inputLabel) setInputLabel(props.inputLabel);
  }, []);

  const changeInput = (e: any) => {
    const { name, value } = e.target;
    setText({ name, value });
    props.changeInput({ name, value });
  };

  const handleOnFocus = () => {
    setFocus(true);
  };
  const handleOnBlur = () => {
    setFocus(false);
  };

  return (
    <label className="inputText">
      <input
        className="inputText__input"
        onChange={changeInput}
        type="text"
        // ref={inputRef}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        name={text.name}
        value={text.value}
      />
      <span
        className={`inputText__label ${
          (focus || text.value) && "inputText__label--focused"
        }`}
      >
        {inputLabel}
      </span>
    </label>
  );
}

export default InputText;
