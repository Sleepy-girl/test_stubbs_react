import React, { useState, useEffect } from "react";
import useDeviceSizes from "../../hooks/useDeviceSizes";
import slideMobile1 from "../../assets/images/slider/mobile/Rectangle.jpg";
import slideMobile2 from "../../assets/images/slider/mobile/slide2.jpg";
import slideMobile3 from "../../assets/images/slider/mobile/slide3.jpg";
import slideMobile4 from "../../assets/images/slider/mobile/slide4.jpg";
import slideDesktop1 from "../../assets/images/slider/forDesktop/slide1.jpg";
import slideDesktop2 from "../../assets/images/slider/forDesktop/slide2.jpg";
import slideDesktop3 from "../../assets/images/slider/forDesktop/slide3.jpg";
import slideDesktop4 from "../../assets/images/slider/forDesktop/slide4.jpg";
import { SliderStyled } from "./SliderStyled";

function SliderComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isMobileDevice } = useDeviceSizes();

  const slideImg = [
    <img
      key={slideMobile1}
      src={isMobileDevice ? slideMobile1 : slideDesktop1}
      alt="firstSlide"
      height={isMobileDevice ? "216" : "448"}
    />,
    <img
      key={slideMobile2}
      src={isMobileDevice ? slideMobile2 : slideDesktop2}
      alt="firstSlide"
      height={isMobileDevice ? "216" : "448"}
    />,
    <img
      key={slideMobile3}
      src={isMobileDevice ? slideMobile3 : slideDesktop3}
      alt="firstSlide"
      height={isMobileDevice ? "216" : "448"}
    />,
    <img
      key={slideMobile4}
      src={isMobileDevice ? slideMobile4 : slideDesktop4}
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
