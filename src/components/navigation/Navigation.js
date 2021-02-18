import React, { useState } from "react";
import Footer from "../footer/Footer";
import OurCompany from "../ourCompany/OurCompany";
import Services from "../services/Services";
import sprite from "../../assets/images/icons-sprite.svg";
import { NavigationStyled } from "./NavigationStyled";

const menu = [
  { text: "Услуги", linkOnComp: <Services /> },
  { text: "Наши работы", linkOnComp: null },
  { text: "О нас", linkOnComp: <OurCompany /> },
  { text: "Контакты", linkOnComp: <Footer /> },
];

const flagsIcon = [
  "#iconFlagOfRussia",
  "#iconFlagOfUkraine",
  "#iconUnitedKingdom",
];

const initialState = {
  isActive: true,
};

function Navigation() {
  const [flagActive, setFlags] = useState(initialState);
  const handleOnClick = (e) => {
    const { id } = e.target;
    setFlags({ [id]: !flagActive[id] });
  };
  return (
    <NavigationStyled>
      <div className="mobileMenu desktopMenu">
        <div className="container">
          <div className="wrapperMenu">
            <span>Меню</span>
            <ul className="flagList">
              {flagsIcon.map((flagIcon) => (
                <li className="flagElem" key={flagIcon}>
                  <svg
                    id={flagIcon}
                    className={`flagIcons ${flagActive.isActive && `apacity`}`}
                  >
                    <use onClick={handleOnClick} href={sprite + flagIcon} />
                  </svg>
                </li>
              ))}
            </ul>
          </div>

          <ul className="menuList">
            {menu.map((elem) => (
              <li className="menuElem" key={elem.text}>
                <a className="menuLink" href={elem.linkOnComp}>
                  {elem.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </NavigationStyled>
  );
}

export default Navigation;
