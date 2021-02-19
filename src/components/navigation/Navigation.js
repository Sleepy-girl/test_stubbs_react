import React from "react";
import useDeviceSizes from "../../hooks/useDeviceSizes";
import { NavigationStyled } from "./NavigationStyled";
import Flags from "./Flags";

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
  const { isMobileDevice, isDesktopDevice } = useDeviceSizes();

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
                </li>
              ))}
        </ul>
      </div>
      {/* </div> */}
      {/* {isDesktopDevice && null} */}
    </NavigationStyled>
  );
}

export default Navigation;
