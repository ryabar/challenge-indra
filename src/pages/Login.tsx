import * as React from "react";

import LoginLayout from "@Layouts/LoginLayout";
import InputCheckbox from "@Components/form/InputCheckbox";
// import InputRadio from "@Components/form/InputRadio";
// import InputSelect from "@Components/form/InputSelect";
import InputText from "@Components/form/InputText";
import InputDocument from "@Components/form/InputDocument";
import InputCalendar from "@Components/form/InputCalendar";
import ButtonText from "@Components/common/ButtonText";

import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const goNext = () => {
    history.push("/obtener-seguro/proceso/1");
  };

  return (
    <LoginLayout>
      <form action="#">
        <h6>
          Obtén tu <b>seguro ahora</b>
        </h6>
        <p>Ingresa los datos para comenzar.</p>
        <div>
          <InputDocument
            defaultTypeDocument={{ name: "DNI", value: "dni" }}
            optionsTypeDocument={[
              {
                name: "DNI",
                value: "dni",
              },
              {
                name: "CE",
                value: "ce",
              },
            ]}
            changeTypeDocument={(data: any) => console.log(data)}
            inputLabelDocument="Nro. de Documento"
            changeDocument={(data: any) => console.log(data)}
          />
          <InputCalendar
            // text=""
            inputLabel="Fecha de nacimiento"
            changeInput={(data: any) => console.log(data)}
          />
          <InputText
            inputLabel="Nombre Completo"
            changeInput={(data: any) => console.log(data)}
          />

          <InputCheckbox
            text="Acepto la"
            textLink={{
              text:
                "Política de Protección de Datos Personales y los Términos y Condiciones.",
              link: "https://www.rimac.com/comprar/soat-digital/",
            }}
          />
          <InputCheckbox
            text="Acepto la"
            textLink={{
              text:
                "Política de Protección de Datos Personales y los Términos y Condiciones.",
              link: "https://www.rimac.com/comprar/soat-digital/",
            }}
          />
        </div>
        <ButtonText text="Comencemos" onTouch={goNext} active={true} />
      </form>
    </LoginLayout>
  );
}

export default Login;
