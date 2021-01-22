import * as React from "react";

import LogoRimac from "@Assets/svg/Logo_Rimac_Svg";
import ShapeTop from "@Assets/svg/Shape_Thanks_Svg";
import ShapeDesktop from "@Assets/svg/Shape_Three_Background_Svg";
import BrotherTop from "@Assets/img/Brother_Thanks_Mobile.png";
import Family from "@Assets/img/Family.png";
// import Background from "@Assets/svg/Shape_Three_Background.svg";

function ThanksLayout(props: any) {
  return (
    <div className="thanksLayout">
        
      <div className="thanksLayout__group">
        <div className="thanksLayout__logo">
          <LogoRimac />
        </div>
        <div className="thanksLayout__left">
          <div className="thanksLayout__topMobile">
            <ShapeTop  />
            <img src={BrotherTop} />
          </div>
          {/* <ShapeDesktop /> */}
          <img className="thanksLayout__imgDesktop" src={Family} />
        </div>
        <div className="thanksLayout__body">{props.children}</div>
      </div>
      <div className="thanksLayout__footer">
        <p>© 2019 RIMAC Seguros y Reaseguros.</p>
      </div>
    </div>
  );
}

export default ThanksLayout;
