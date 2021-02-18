import React from "react";
import img1 from "../../assets/images/ourCompany/img1.jpg";
import img2 from "../../assets/images/ourCompany/img2.jpg";
import { OurCompanyStyled } from "./OurCompanyStyled";

function OurCompany() {
  return (
    <OurCompanyStyled>
      <h3>Наша компания</h3>
      <ul>
        <li>
          <img src={img1} alt="фоновая картинка" height="236" />
          <h4 className="whyWe">
            Почему мы?
            <p>
              Люди – профессионалы с большим опытом работы. Полный спектр работ
              по металлообработке в одном месте – комплексный индивидуальный
              подход. Конструкторский отдел. Логистика. Многолетний опыт
              машиностроения – создание промышленного
            </p>
          </h4>
        </li>
        <li>
          <img src={img2} alt="фоновая картинка" height="236" />
          <h4 className="advantages">
            Наши преимущества
            <p>
              Люди – профессионалы с большим опытом работы. Полный спектр работ
              по металлообработке в одном месте – комплексный индивидуальный
              подход. Конструкторский отдел. Логистика. Многолетний опыт
              машиностроения – создание промышленного
            </p>
          </h4>
        </li>
      </ul>
    </OurCompanyStyled>
  );
}

export default OurCompany;
