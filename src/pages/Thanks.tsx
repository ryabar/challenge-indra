import * as React from "react";
import { useHistory } from "react-router-dom";

import ThanksLayout from "@Layouts/ThanksLayout";
import BrotherThanks from "@Assets/img/Brother_Two.png";
import ButtonText from "@Components/common/ButtonText";

function Thanks() {
  const history = useHistory();

  const goLogin = () => {
    history.push("/");
  };

  return (
    <ThanksLayout>
      <div className="thanks">
        <img className="thanks__img" src={BrotherThanks} />
        <h4 className="thanks__title">
          ¡Gracias por <b>confiar en nosotros!</b>
        </h4>

        <p className="thanks__text">
          Queremos conocer mejor la salud de los asegurados. Un asesor{" "}
          <b>se pondrá en contacto</b> contigo en las siguientes{" "}
          <b>48 horas.</b>
        </p>

        {/* <button className="thanks__button">Ir a salud rimac</button> */}
        <div className="thanks__next">
          <ButtonText text="Ir a salud rimac" active={true} onTouch={goLogin} />
        </div>
      </div>
    </ThanksLayout>
  );
}

export default Thanks;
