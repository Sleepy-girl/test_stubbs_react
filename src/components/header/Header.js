import React, { useState } from "react";
import Navigation from "../navigation/Navigation";
import logo from "../../assets/images/logo.png";
import sprite from "../../assets/images/icons-sprite.svg";
import useDeviceSizes from "../../hooks/useDeviceSizes";
import { HeaderStyled } from "./HeaderStyled";
import Flags from "../navigation/Flags";

const initialState = {
  isShowSearch: false,
  isShowNavigation: false,
};

function Header() {
  const [state, setstate] = useState(initialState);
  const { isMobileDevice, isDesktopDevice } = useDeviceSizes();

  const handleClick = (id) => {
    setstate({ ...state, [id]: !state[id] });
  };

  return (
    <HeaderStyled>
      <div className="container">
        <img className="logo" src={logo} alt="logo" height="56" />
        {isDesktopDevice && <Navigation />}
        <div className="searchWrapper">
          <input
            className={state.isShowSearch ? "inputAnimate" : ""}
            type="text"
            name="search"
            placeholder="Поиск"
          />
          <div
            className="iconWrapper"
            id="isShowSearch"
            onClick={() => handleClick("isShowSearch")}
          >
            <svg>
              <use href={sprite + `#iconSearch`} />
            </svg>
          </div>
        </div>
        {isDesktopDevice && <Flags />}

        {isMobileDevice && (
          <ul
            className="wrapperBurger"
            id="isShowNavigation"
            onClick={() => handleClick("isShowNavigation")}
          >
            <li
              className={
                !state.isShowNavigation
                  ? "elemOfBurger firstElemOfBurger"
                  : "firstElemOfCross"
              }
            />
            <li
              className={
                !state.isShowNavigation
                  ? "elemOfBurger secondElemOfBurger"
                  : "secondElemOfCross"
              }
            />
            <li
              className={
                !state.isShowNavigation
                  ? "elemOfBurger thirdElemOfBurger"
                  : "thirdElemOfCross"
              }
            />
          </ul>
        )}
      </div>
      {state.isShowNavigation && <Navigation />}
    </HeaderStyled>
  );
}

export default Header;
