import React from "react";
import useDeviceSizes from "../../hooks/useDeviceSizes";
import Flags from "./Flags";
import sprite from "../../assets/images/icons-sprite.svg";
import { NavigationStyled } from "./NavigationStyled";

const menuMobile = [
  { text: "Услуги", linkOnComp: "#" },
  { text: "Наши работы", linkOnComp: "#" },
  { text: "О нас", linkOnComp: "#" },
  { text: "Контакты", linkOnComp: "#" },
];
const menuDesktop = [
  { text: "Главная", linkOnComp: "#" },
  { text: "Услуги", linkOnComp: "#" },
  { text: "Наши работы", linkOnComp: "#" },
  { text: "О нас", linkOnComp: "#" },
  { text: "Контакты", linkOnComp: "#" },
];

function Navigation() {
  const { isMobileDevice } = useDeviceSizes();

  return (
    <NavigationStyled>
      {/* <div className="mobileMenu desktopMenu"> */}
      <div className="container">
        {isMobileDevice && (
          <div className="wrapperMenu">
            <span>Меню</span>
            <Flags />
          </div>
        )}

        <ul className="menuList">
          {isMobileDevice
            ? menuMobile.map((elem) => (
                <li className="menuElem" key={elem.text}>
                  <a className="menuLink" href={elem.linkOnComp}>
                    {elem.text}
                  </a>
                </li>
              ))
            : menuDesktop.map((elem) => (
                <li className="menuElem" key={elem.text}>
                  <a className="menuLink" href={elem.linkOnComp}>
                    {elem.text}
                  </a>
                  {elem.text === "Услуги" && (
                    <svg className="iconArrowDown">
                      <use href={sprite + "#iconArrowDown"} />
                    </svg>
                  )}
                </li>
              ))}
        </ul>
      </div>
      {/* </div> */}
    </NavigationStyled>
  );
}

export default Navigation;
