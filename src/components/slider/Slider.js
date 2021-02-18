import React from "react";
import slide1 from "../../assets/images/slider/Rectangle.jpg";
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
  return (
    <SliderStyled>
      <img src={slide1} alt="slide1" height="216" />
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
