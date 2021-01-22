import * as React from "react";

import LogoRimac from "@Assets/svg/Logo_Rimac_Svg";
import Ilustration from "@Assets/img/Family.png";
import IconLeft from "@Assets/icons/Arrow_Left_Icon_Svg";
import IconRight from "@Assets/icons/Arrow_Right_Icon_Svg";
import IconShield from "@Assets/icons/Shield_Icon_Svg";
import IconMobile from "@Assets/icons/Mobile_Icon_Svg";
import IconMoney from "@Assets/icons/Money_Icon_Svg";
import IconClinic from "@Assets/icons/Clinic_Icon_Svg";

function LoginLayout(props: any) {
  return (
    <div className="loginLayout">
      <div className="loginLayout__logo">
        <LogoRimac />
      </div>
      <div className="loginLayout__group">
        <h6 className="loginLayout__title">
          Seguro de {" "}
          <b>Salud</b>
        </h6>
        {/* <img src={Ilustration} /> */}
        <ul className="loginLayout__features">
          <li className="loginLayout__feature">
            <IconShield />
            <p className="loginLayout__feature__text">
              Cómpralo de manera fácil y rápida
            </p>
          </li>
          <li className="loginLayout__feature">
            <IconMobile />
            <p className="loginLayout__feature__text">
              Cotiza y compra tu seguro 100% digital
            </p>
          </li>
          <li className="loginLayout__feature">
            <IconMoney />
            <p className="loginLayout__feature__text">
              Hasta S/.12 millones de cobertura anual
            </p>
          </li>
          <li className="loginLayout__feature">
            <IconClinic />
            <p className="loginLayout__feature__text">
              Más de 300 clínicas en todo el Perú
            </p>
          </li>
          {/* <div>
            <button>
              <IconLeft />
            </button>
            <span>01</span>
            <span>/</span>
            <span>04</span>
            <button>
              <IconRight />
            </button>
          </div> */}
        </ul>
        <p className="loginLayout__footer">
          © 2020 RIMAC Seguros y Reaseguros.
        </p>
      </div>
      <div className="loginLayout__body">
        {props.children}
        </div>
    </div>
  );
}

export default LoginLayout;
