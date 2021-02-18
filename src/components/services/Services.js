import React from "react";
import { elems } from "./dataServices";
import { ServicesStyled } from "./ServicesStyled";

function Services() {
  return (
    <ServicesStyled>
      <div className="container">
        <h3>Услуги</h3>
        <ul>
          {elems.map((elem) => (
            <li key={elem.id}>
              <img src={elem.img} alt={elem.title} height="105" />
              <h4>{elem.title}</h4>
            </li>
          ))}
        </ul>
      </div>
    </ServicesStyled>
  );
}

export default Services;
