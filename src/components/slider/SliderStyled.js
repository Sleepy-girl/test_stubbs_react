import styled from "styled-components";
import { colors } from "../../stylesheet/vars";
import { size } from "../../common/deviceSizes";

export const SliderStyled = styled.section`
  position: relative;

  .slider,
  .sliderElem,
  .sliderElem img {
    height: 216px;
  }
  .slider {
    position: relative;
    margin-bottom: 20px;
    overflow: hidden;
  }
  .sliderElem,
  .sliderElem img {
    width: 100%;
  }
  h2,
  .sliderElem,
  .dotsList {
    position: absolute;
  }
  .sliderElem {
    transition: all 200ms;
  }
  .sliderElem img {
    object-fit: cover;
  }
  .slidePrev {
    transform: translateX(-100%);
  }
  .slideNext {
    transform: translateX(100%);
  }
  h2 {
    bottom: 52px;
    height: 110px;
    width: 252px;
    background-color: ${colors.substrate};
    padding: 30px 0 30px 16px;
  }
  h2,
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    color: ${colors.textMain};
  }
  span::before {
    display: block;
    content: "";
    height: 1px;
    width: 210px;
    background-color: ${colors.decorMenu};
    transform: translateX(-16px);
  }
  .dotsList {
    display: flex;
    bottom: 10px;
    left: calc(50% - 32px);
  }
  .dots {
    width: 8px;
    height: 8px;
    border-radius: 50pc;
    background-color: ${colors.textMain};
    cursor: pointer;
  }
  .dots:not(:last-child) {
    margin-right: 10px;
  }
  .firstDotActive,
  .secondDotActive,
  .thirdDotActive,
  .fourthDotActive {
    background-color: ${colors.decor};
  }

  @media (min-width: ${size.desktop}) {
    .slider,
    .sliderElem img {
      height: 448px;
    }
    .slider {
      margin-bottom: 30px;
    }
    h2 {
      height: 260px;
      width: 751px;
      bottom: 94px;
      padding: 65px 0 65px 90px;
    }
    h2,
    span {
      font-size: 40px;
      line-height: 65px;
    }
    span::before {
      height: 2px;
      width: 642px;
      transform: translateX(-90px);
    }
    .dotsList {
      bottom: 15px;
      left: calc(50% - 48px);
    }
    .dots {
      width: 14px;
      height: 14px;
    }
    .dots:not(:last-child) {
      margin-right: 15px;
    }
  }
`;
