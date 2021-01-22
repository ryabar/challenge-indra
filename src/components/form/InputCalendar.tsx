import * as React from "react";
import { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";

// Import Components
import CalendarIcon from "@Assets/icons/Calendar_Icon_Svg";

registerLocale("es", es);

function InputCalendar(props: any) {
  // const [text, setText] = useState({ name: "", value: "" });
  const [inputLabel, setInputLabel] = useState("");
  // const [showCalendar, setShowCalendar] = useState(true);

  const [dateSelected, setDateSelected] = useState(null);
  const [maxDate, setMaxDate] = useState(null);
  const [minDate, setMinDate] = useState(null);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    // if (props.text) setText(props.text);
    if (props.inputLabel) setInputLabel(props.inputLabel);
    if (props.defaultDate) setDateSelected(props.defaultDate);
    if (props.minDate) setMinDate(props.minDate);
    if (props.maxDate) setMaxDate(props.maxDate);
  }, []);

  // const changeInput = (e: any) => {
  //   const { name, value } = e.target;
  //   setText({ name, value });
  //   props.changeInput({ name, value });
  // };

  const changeDateInCalendar = (date: any) => {
    setDateSelected(date);
    props.changeInput(date);
  };

  const handleOnFocus = () => {
    setFocus(true);
  };

  const handleOnBlur = () => {
    setFocus(false);
  };

  return (
    <div className="datePickerRimac">
      <label
        className="datePickerRimac__group"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      >
        <span
          className={`datePickerRimac__label ${
            (focus || dateSelected) && "datePickerRimac__label--focused"
          }`}
        >
          {inputLabel}
        </span>
        <DatePicker
          dateFormat="dd/MM/yy"
          locale="es"
          //   clearIcon={null}
          selected={dateSelected}
          maxDate={maxDate}
          minDate={minDate}
          onChange={(date) => {
            changeDateInCalendar(date);
          }}
        />
        <CalendarIcon width="18" height="25" />
      </label>
    </div>
  );
}

export default InputCalendar;
