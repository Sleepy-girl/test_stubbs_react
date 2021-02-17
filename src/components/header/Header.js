import React from "react";
import Navigation from "../navigation/Navigation";
import logo from "../../assets/images/logo.png";
import sprite from "../../assets/images/icons-sprite.svg";
import { HeaderStyled } from "./HeaderStyled";

function Header() {
  return (
    <HeaderStyled>
      <div className="container">
        <img className="logo" src={logo} alt="logo" height="56" />
        <svg>
          <use href={sprite + `#iconSearch`} />
        </svg>
        <ul className="wrapperBurger">
          <li className="firstElemOfBurger" />
          <li className="secondElemOfBurger" />
          <li className="thirdElemOfBurger" />
        </ul>
      </div>
      <Navigation />
    </HeaderStyled>
  );
}

export default Header;
