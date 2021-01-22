import * as React from "react";
// import { useState, useEffect } from "react";

import InputSelect from "@Components/form/InputSelect";
import InputText from "@Components/form/InputText";

function InputDocument(props: any) {
  const changeTypeDocument = (data: any) => {
    props.changeTypeDocument(data);
  };

  const changeDocument = (data: any) => {
    props.changeDocument(data);
  };

  return (
    <div className="inputDocument">
      <InputSelect
        changeOption={changeTypeDocument}
        options={props.optionsTypeDocument}
        defaultSelect={props.defaultTypeDocument}
      />
      <InputText
        inputLabel={props.inputLabelDocument}
        changeInput={changeDocument}
      />
    </div>
  );
}

export default InputDocument;
