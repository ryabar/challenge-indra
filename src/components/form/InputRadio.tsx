import * as React from "react";
import { useState, useEffect } from "react";

function InputRadio(props: any) {
  const [value, setValue] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (props.name) setName(props.name);
    if (props.text) setText(props.text);
  }, []);

  useEffect(() => {
    if (props.value) setValue(props.value);
  }, [props.value]);

  // useEffect(() => {
  //   // setValue(!value);
  //   props.changeValue({ name, value: !value, id: props.id });
  // }, [value]);

  const onTouch = () => {
    setValue(!value);
    props.changeValue({ name, value: !value, id: props.id });
  };

  return (
    <label className="inputRadio">
      <input
        className="inputRadio__input"
        onChange={onTouch}
        type="radio"
        name={name}
        checked={value}
      />
      <span className="inputRadio__radio" />
      {text && <span className="inputRadio__text">{text}</span>}
    </label>
  );
}

export default InputRadio;
