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
  "iconFlagOfRussia",
  "iconFlagOfUkraine",
  "iconUnitedKingdom",
];

const initialState = {
  iconFlagOfRussia: true,
  iconFlagOfUkraine: false,
  iconUnitedKingdom: false,
};

function Navigation() {
  const [flag, setFlags] = useState(initialState);
  const handleClick = (id) => {
    setFlags({
      iconFlagOfRussia: false,
      iconFlagOfUkraine: false,
      iconUnitedKingdom: false,
      [id]: true,
    });
  };
  return (
    <NavigationStyled>
      <div className="mobileMenu desktopMenu">
        <div className="container">
          <div className="wrapperMenu">
            <span>Меню</span>
            <ul className="flagList">
              {console.log("flag.iconFlagOfRussia", flag.iconFlagOfRussia)}
              {console.log("flag.iconFlagOfUkraine", flag.iconFlagOfUkraine)}
              {console.log("flag.iconUnitedKingdom", flag.iconUnitedKingdom)}
              <li className="flagElem">
                <svg
                  id="iconFlagOfRussia"
                  className={`flagIcons ${!flag.iconFlagOfRussia && "apacity"}`}
                >
                  <use
                    onClick={() => handleClick("iconFlagOfRussia")}
                    href={sprite + "#iconFlagOfRussia"}
                  />
                </svg>
              </li>
              <li className="flagElem">
                <svg
                  id="iconFlagOfUkraine"
                  className={`flagIcons ${
                    !flag.iconFlagOfUkraine && "apacity"
                  }`}
                >
                  <use
                    onClick={() => handleClick("iconFlagOfUkraine")}
                    href={sprite + "#iconFlagOfUkraine"}
                  />
                </svg>
              </li>
              <li className="flagElem">
                <svg
                  id="iconUnitedKingdom"
                  className={`flagIcons ${
                    !flag.iconUnitedKingdom && "apacity"
                  }`}
                >
                  <use
                    onClick={() => handleClick("iconUnitedKingdom")}
                    href={sprite + "#iconUnitedKingdom"}
                  />
                </svg>
              </li>
              {/* {flagsIcon.map((flagIcon) => ( */}
              {/* <li className="flagElem" key={flagIcon}>
                  <svg
                    id={flagIcon}
                    className={`flagIcons ${
                      !flag.iconFlagOfRussia && "apacityRu"
                        ? !flag.iconFlagOfUkraine && "apacityUa"
                        : !flag.iconUnitedKingdom && "apacityEn"
                    }`}
                  >
                    <use
                      onClick={() => handleClick(flagIcon)}
                      href={sprite + `#${flagIcon}`}
                    />
                  </svg>
                </li> */}
              {/* ))} */}
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
