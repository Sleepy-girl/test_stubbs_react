import React from "react";
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

const flags = ["#iconFlagOfRussia", "#iconFlagOfUkraine", "#iconUnitedKingdom"];

function Navigation() {
  return (
    <NavigationStyled>
      <div className="mobileMenu desktopMenu">
        <div className="container">
          <div className="wrapperMenu">
            <span>Меню</span>
            <ul className="flagList">
              {flags.map((flag) => (
                <li className="flagElem" key={flag}>
                  <svg className="flagIcons apacity">
                    <use href={sprite + flag} />
                  </svg>
                </li>
              ))}
            </ul>
          </div>

          <ul className="menuList">
            {menu.map((elem) => (
              <li className="menuElem" key={elem.text}>
                <a href={elem.linkOnComp}>{elem.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </NavigationStyled>
  );
}

export default Navigation;
