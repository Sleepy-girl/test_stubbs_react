import React, { useState, useEffect } from "react";
import useDeviceSizes from "../../hooks/useDeviceSizes";
import { elems, elemsDesktop } from "./dataServices";
import sprite from "../../assets/images/icons-sprite.svg";
import { ServicesStyled } from "./ServicesStyled";

function Services() {
  const { isMobileDevice, isDesktopDevice } = useDeviceSizes();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => setOffset(window.pageYOffset);
  }, []);

  return (
    <ServicesStyled offset={offset}>
      {isDesktopDevice && (
        <div className="dearWrapper">
          <svg className="topLeftDear">
            <use href={sprite + "#dear"} />
          </svg>
          <svg className="bottomLeftDear">
            <use href={sprite + "#dear"} />
          </svg>
          <svg className="topRightDear">
            <use href={sprite + "#dear"} />
          </svg>
          <svg className="bottomRightDear">
            <use href={sprite + "#dear"} />
          </svg>
        </div>
      )}
      <h3>Услуги</h3>
      <ul className="fistPart">
        {elems.map(
          (elem) =>
            (isMobileDevice && (
              <li className="fistPartElem" key={elem.id}>
                <img src={elem.imgMobile} alt={elem.title} height="105" />
                <h4>{elem.title}</h4>
              </li>
            )) ||
            (isDesktopDevice && elem.imgDesktop !== "#" && (
              <li className="fistPartElem" key={elem.id}>
                <img src={elem.imgDesktop} alt={elem.title} height="201" />
                <h4>{elem.title}</h4>
              </li>
            ))
        )}
      </ul>
      {isDesktopDevice && (
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
        <button>
          {isMobileDevice
            ? "Расчет стоимости"
            : "Быстрый расчет цены по чертежу"}
        </button>
      </div>
    </ServicesStyled>
  );
}

export default Services;
