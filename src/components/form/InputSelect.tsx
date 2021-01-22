import * as React from "react";
import { useState, useEffect } from "react";

import IconDown from "@Assets/icons/Arrow_Down_Icon_Svg";

function InputSelect(props: any) {
  const [valueSelect, setValueSelect] = useState({ name: "", value: "" });
  const [options, setOptions] = useState([]);
  const [open, setOpen] = useState(false);
  // const [valueText, setValueText] = useState({ name: "", value: "" });
  // const [inputLabel, setInputLabel] = useState("");

  useEffect(() => {
    // console.log('-- props.options -- ');
    // console.log(props.options);
    // console.log(options);

    if (props.options) setOptions(props.options);
    if (props.defaultSelect) setValueSelect(props.defaultSelect);
    // if (props.defaultText) setValueText(props.defaultText);
    // if (props.inputLabel) setInputLabel(props.inputLabel);
  }, [props.options || props.defaultSelect]);

  const changeOption = (option: any) => {
    props.changeOption({
      name: option.name,
      value: option.value,
    });
    setValueSelect({
      name: option.name,
      value: option.value,
    });
    setOpen(false);
  };

  const handleOpenAndClose = () => {
    setOpen(!open);
  };

  // const changeValueText = (e: any) => {
  //   const { name, value } = e.target;
  //   props.changeText({
  //     name,
  //     value,
  //   });
  //   // setValueText({
  //   //   name,
  //   //   value,
  //   // });
  // };

  return (
    <div className="inputSelect">
      <button
        type="button"
        className="btn inputSelect__value"
        onClick={handleOpenAndClose}
      >
        <span className="inputSelect__text">{valueSelect.name}</span>{" "}
        <div
          className={`inputSelect__icon ${open && "inputSelect__icon--open"}`}
        >
          <IconDown />
        </div>
      </button>
      {open && (
        <div className="inputSelect__options">
          {options.map((option, key) => (
            <button
              type="button"
              className="btn inputSelect__checkOption"
              key={key}
              onClick={() =>
                changeOption({ name: option.name, value: option.value })
              }
            >
              <span className="inputSelect__option">{option.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* <label>
        <span>{inputLabel}</span>
        <input
          type="text"
          name={valueText.name}
          onChange={changeValueText}
          value={valueText.value}
        />
      </label> */}
    </div>
  );
}

export default InputSelect;
