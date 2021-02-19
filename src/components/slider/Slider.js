import React from "react";
import useDeviceSizes from "../../hooks/useDeviceSizes";
import slideMobile1 from "../../assets/images/slider/Rectangle.jpg";
import slideDesktop1 from "../../assets/images/slider/slide1-desktop.jpg";
import { SliderStyled } from "./SliderStyled";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const settings = {
//   fade: true,
//   dots: true,
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   // autoplay: true,
//   speed: 500,
//   autoplaySpeed: 2300,
//   cssEase: "linear",
// };
function Slider() {
  const { isMobileDevice } = useDeviceSizes();

  return (
    <SliderStyled>
      <img
        src={isMobileDevice ? slideMobile1 : slideDesktop1}
        alt="slide1"
        height="216"
      />
      <h2>
        Высокоточное изготовление
        <span>изделий из металла по чертежам</span>
      </h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </SliderStyled>
  );
}

export default Slider;
