import React from "react";
import useDeviceSizes from "../../hooks/useDeviceSizes";
import {
  aboutCompany,
  servicesListMobile,
  servicesListDesktop1,
  servicesListDesktop2,
} from "./dataList";
import { socialMobile, socialDesktop } from "./dataIcons";
import { FooterStyled } from "./FooterStyled";

function Footer() {
  const { isMobileDevice, isDesktopDevice } = useDeviceSizes();

  return (
    <FooterStyled>
      <div className="container">
        <ul className="wrapperList">
          <li>
            <h4 className="title">О компании</h4>
            <ul className="columnList">
              {aboutCompany.map((elem) => (
                <li className="columnElem" key={elem.id}>
                  <a className="columnLink" href="#">
                    {elem.text}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <h4 className="title">Услуги</h4>
            {isMobileDevice && (
              <ul>
                {servicesListMobile.map((elem) => (
                  <li className="columnElem" key={elem.id}>
                    <a className="columnLink" href="#">
                      {elem.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {isDesktopDevice && (
              <div className="servicesListWrapper">
                <ul>
                  {servicesListDesktop1.map((elem) => (
                    <li className="columnElem" key={elem.id}>
                      <a className="columnLink" href="#">
                        {elem.text}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul>
                  {servicesListDesktop2.map((elem) => (
                    <li className="columnElem" key={elem.id}>
                      <a className="columnLink" href="#">
                        {elem.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
        <div className="contacts">
          <h4 className="contactsTitle">Контактная информация</h4>
          <span className="address">Заводская улица, 2 В,</span>
          <span className="address">Буча,</span>
          <span className="address postIndex">Киевская область, 08292</span>
          <div className="schedule">
            <span className="workDays">ПН - ПТ:</span>
            <span className="workTime">09:00 - 18:00</span>
          </div>
          <span className="phone">+38(097)123-45-67</span>
          <ul className="iconList">
            {isMobileDevice
              ? socialMobile.map((icon) => (
                  <li className="iconElem" key={icon.id}>
                    <a className="iconLink" href={icon.link}>
                      <svg>
                        <use href={icon.icon} />
                      </svg>
                    </a>
                  </li>
                ))
              : socialDesktop.map((icon) => (
                  <li className="iconElem" key={icon.id}>
                    <a className="iconLink" href={icon.link}>
                      <svg>
                        <use href={icon.icon} />
                      </svg>
                    </a>
                  </li>
                ))}
          </ul>
        </div>
      </div>
      <div className="developedWrapper">
        <span className="by">{isMobileDevice ? "by" : "Developed by"}</span>
        <span className="stubbs">Anna Vygovska</span>
      </div>
    </FooterStyled>
  );
}

export default Footer;
