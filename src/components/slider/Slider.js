import React, { useState, useEffect } from "react";
import useDeviceSizes from "../../hooks/useDeviceSizes";
import { slides } from "./dataSlides";
import { SliderStyled } from "./SliderStyled";

function SliderComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isMobileDevice } = useDeviceSizes();

  const slideImg = [
    <img
      key={slides.mobile1}
      src={isMobileDevice ? slides.mobile1 : slides.desktop1}
      alt="firstSlide"
      height={isMobileDevice ? "216" : "448"}
    />,
    <img
      key={slides.mobile2}
      src={isMobileDevice ? slides.mobile2 : slides.desktop2}
      alt="firstSlide"
      height={isMobileDevice ? "216" : "448"}
    />,
    <img
      key={slides.mobile3}
      src={isMobileDevice ? slides.mobile3 : slides.desktop3}
      alt="firstSlide"
      height={isMobileDevice ? "216" : "448"}
    />,
    <img
      key={slides.mobile4}
      src={isMobileDevice ? slides.mobile4 : slides.desktop4}
      alt="firstSlide"
      height={isMobileDevice ? "216" : "448"}
    />,
  ];

  const prevImageIndex = activeIndex ? activeIndex - 1 : slideImg.length - 1;
  const nextImageIndex =
    activeIndex === slideImg.length - 1 ? 0 : activeIndex + 1;

  const handleClick = (e) => {
    e.preventDefault();
    const { id } = e.target;
    setActiveIndex(id - 1);
  };

  useEffect(() => {
    setInterval(() => {
      setActiveIndex((current) =>
        current === slideImg.length - 1 ? 0 : current + 1
      );
    }, 3000);
    return () => clearInterval();
  }, []);

  return (
    <SliderStyled>
      <ul className="slider">
        <li className="sliderElem slidePrev" key={prevImageIndex}>
          {slideImg[prevImageIndex]}
        </li>
        <li className="sliderElem" key={activeIndex}>
          {slideImg[activeIndex]}
        </li>
        <li className="sliderElem slideNext" key={nextImageIndex}>
          {slideImg[nextImageIndex]}
        </li>
        <h2>
          Высокоточное изготовление
          <span>изделий из металла по чертежам</span>
        </h2>
      </ul>
      <ul className="dotsList">
        <li
          className={`dots firstDot ${
            activeIndex === 0 ? "firstDotActive" : ""
          }`}
          id="1"
          onClick={handleClick}
        ></li>
        <li
          className={`dots secondDot ${
            activeIndex === 1 ? "secondDotActive" : ""
          }`}
          id="2"
          onClick={handleClick}
        ></li>
        <li
          className={`dots thirdDot ${
            activeIndex === 2 ? "thirdDotActive" : ""
          }`}
          id="3"
          onClick={handleClick}
        ></li>
        <li
          className={`dots fourthDot ${
            activeIndex === 3 ? "fourthDotActive" : ""
          }`}
          id="4"
          onClick={handleClick}
        ></li>
      </ul>
    </SliderStyled>
  );
}

export default SliderComponent;
