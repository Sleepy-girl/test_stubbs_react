import React from "react";
import { elems } from "./dataServices";
import { ServicesStyled } from "./ServicesStyled";

function Services() {
  return (
    <ServicesStyled>
      <h3>Услуги</h3>
      <ul>
        {elems.map((elem) => (
          <li key={elem.id}>
            <img src={elem.img} alt={elem.title} height="105" />
            <h4>{elem.title}</h4>
          </li>
        ))}
      </ul>
      <div>
        <button>Расчет стоимости</button>
      </div>
    </ServicesStyled>
  );
}

export default Services;
