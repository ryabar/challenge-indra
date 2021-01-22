import * as React from "react";

import LogoRimac from "@Assets/svg/Logo_Rimac_Svg";
import Family from "@Assets/img/Family.png";

function StepsLayout(props: any) {
  return (
    <div className="stepsLayout">
      <div className="stepsLayout__logo">
        <LogoRimac />
      </div>
      <div>{/* <img src={Ilustration} /> */}</div>
      <div className="stepsLayout__group">
        <div className="stepsLayout__left">
          <img className="stepsLayout__image" src={Family} />
        </div>
        <div className="stepsLayout__body">{props.children}</div>
      </div>
      <div className="stepsLayout__footer">
        <p>© 2019 RIMAC Seguros y Reaseguros.</p>
      </div>
    </div>
  );
}

export default StepsLayout;
