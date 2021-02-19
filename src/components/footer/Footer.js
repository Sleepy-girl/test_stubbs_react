import React from "react";
import { socialIcons } from "./dataIcons";
import { FooterStyled } from "./FooterStyled";

function Footer() {
  return (
    <FooterStyled>
      <ul className="wrapperList">
        <li>
          <h4 className="title">О компании</h4>
          <ul className="columnList">
            <li className="columnElem">Наши работы</li>
            <li className="columnElem">Контакты</li>
            <li className="columnElem">Доставка</li>
            <li className="columnElem">Форма заказа</li>
          </ul>
        </li>
        <li>
          <h4 className="title">Услуги</h4>
          <ul>
            <li className="columnElem">Производство оборудования</li>
            <li className="columnElem">Арт-объекты</li>
            <li className="columnElem">Металлическая мебель</li>
            <li className="columnElem">Металлообработка</li>
            <li className="columnElem">Лазерная резка</li>
            <li className="columnElem">Металлоконструкции</li>
            <li className="columnElem">Аренда спецтехники</li>
          </ul>
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
          {socialIcons.map((icon) => (
            <li className="iconElem" key={icon.id}>
              <a href={icon.link}>
                <svg>
                  <use href={icon.icon} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
        <span className="by">by</span>
        <span className="stubbs">Anna Vygovska</span>
      </div>
    </FooterStyled>
  );
}

export default Footer;
