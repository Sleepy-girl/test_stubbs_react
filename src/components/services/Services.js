import React from "react";
import useDeviceSizes from "../../hooks/useDeviceSizes";
import { elems, elemsDesktop } from "./dataServices";
import { ServicesStyled } from "./ServicesStyled";

function Services() {
  const { isMobileDevice, isDesktopDevice } = useDeviceSizes();

  return (
    <ServicesStyled>
      <h3>Услуги</h3>
      <ul className="fistPart">
        {elems.map(
          (elem) =>
            (isDesktopDevice && elem.imgDesktop !== "#" && (
              <li className="fistPartElem" key={elem.id}>
                <img
                  // className="fistPartImg"
                  src={isMobileDevice ? elem.imgMobile : elem.imgDesktop}
                  alt={elem.title}
                  height={isMobileDevice ? "105" : "201"}
                />
                <h4>{elem.title}</h4>
              </li>
            )) ||
            (isMobileDevice && (
              <li className="fistPartElem" key={elem.id}>
                <img
                  // className="fistPartImg"
                  src={isMobileDevice ? elem.imgMobile : elem.imgDesktop}
                  alt={elem.title}
                  height={isMobileDevice ? "105" : "201"}
                />
                <h4>{elem.title}</h4>
              </li>
            ))
        )}
      </ul>
      {!isMobileDevice && (
        <ul className="secondPart">
          {elemsDesktop.map((elem) => (
            <li className="secondPartElem" key={elem.id}>
              <img
                className="secondPartImg"
                src={elem.imgDesktop}
                alt={elem.title}
                height="201"
              />
              <h4>{elem.title}</h4>
            </li>
          ))}
        </ul>
      )}
      <div>
        <button>Расчет стоимости</button>
      </div>
    </ServicesStyled>
  );
}

export default Services;
