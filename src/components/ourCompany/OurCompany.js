import React from "react";
import useDeviceSizes from "../../hooks/useDeviceSizes";
import { images } from "./dataImg";
import { OurCompanyStyled } from "./OurCompanyStyled";

function OurCompany() {
  const { isMobileDevice } = useDeviceSizes();

  return (
    <OurCompanyStyled>
      <h3>Наша компания</h3>
      <ul>
        <li>
          <img
            src={isMobileDevice ? images.mobile1 : images.desktop1}
            alt="тематический фон"
            height="360"
          />
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
          <img
            src={isMobileDevice ? images.mobile2 : images.desktop2}
            alt="тематический фон"
            height="360"
          />
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
