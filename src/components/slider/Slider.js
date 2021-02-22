import React, { useState, useEffect } from "react";
import useDeviceSizes from "../../hooks/useDeviceSizes";
import slideMobile1 from "../../assets/images/slider/mobile/Rectangle.jpg";
import slideMobile2 from "../../assets/images/slider/mobile/slide2.jpg";
import slideMobile3 from "../../assets/images/slider/mobile/slide3.jpg";
import slideMobile4 from "../../assets/images/slider/mobile/slide4.jpg";
import slideDesktop1 from "../../assets/images/slider/slide1-desktop.jpg";
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
      src={isMobileDevice ? slideMobile2 : slideDesktop1}
      alt="firstSlide"
      height={isMobileDevice ? "216" : "448"}
    />,
    <img
      key={slideMobile3}
      src={isMobileDevice ? slideMobile3 : slideDesktop1}
      alt="firstSlide"
      height={isMobileDevice ? "216" : "448"}
    />,
    <img
      key={slideMobile4}
      src={isMobileDevice ? slideMobile4 : slideDesktop1}
      alt="firstSlide"
      height={isMobileDevice ? "216" : "448"}
    />,
  ];

  const prevImageIndex = activeIndex ? activeIndex - 1 : slideImg.length - 1;
  const nextImageIndex =
    activeIndex === slideImg.length - 1 ? 0 : activeIndex + 1;

  const handleClick = (e) => {
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
        <li className="dots firstDot" id="1" onClick={handleClick}></li>
        <li className="dots secondDot" id="2" onClick={handleClick}></li>
        <li className="dots thirdDot" id="3" onClick={handleClick}></li>
        <li className="dots fourthDot" id="4" onClick={handleClick}></li>
      </ul>
    </SliderStyled>
  );
}

export default SliderComponent;
// { id: "slide-1", srcMobile: slideMobile1, srcDesktop: slideDesktop1 },
// { id: "slide-2", srcMobile: slideMobile1, srcDesktop: slideDesktop1 },
// { id: "slide-3", srcMobile: slideMobile1, srcDesktop: slideDesktop1 },
// { id: "slide-4", srcMobile: slideMobile1, srcDesktop: slideDesktop1 },
/* <ul className="slider">
          {slideImg.map((slide) => (
            <li key={slide.id} className="sliderElem">
              <img
                src={isMobileDevice ? slide.srcMobile : slide.srcDesktop}
                alt="slide1"
                height={isMobileDevice ? "216" : "448"}
              />
              <h2>
                Высокоточное изготовление
                <span>изделий из металла по чертежам</span>
              </h2>
            </li>
          ))}
        </ul> */
/* <ul className="dotsList">
        <li className="dots"></li>
        <li className="dots"></li>
        <li className="dots"></li>
        <li className="dots"></li>
      </ul> */
