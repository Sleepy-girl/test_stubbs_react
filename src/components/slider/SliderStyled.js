import styled from "styled-components";
import { colors } from "../../stylesheet/vars";
import { size } from "../../common/deviceSizes";

export const SliderStyled = styled.section`
  position: relative;
  .slider {
    position: relative;
    height: 216px;
    margin-bottom: 20px;
    overflow: hidden;
  }
  .sliderElem {
    position: absolute;
    width: 100%;
    height: 216px;
    transition: all 200ms;
  }
  .sliderElem img {
    width: 100%;
    height: 216px;
    object-fit: cover;
  }
  .slidePrev {
    transform: translateX(-100%);
  }
  .slideNext {
    transform: translateX(100%);
  }

  h2 {
    position: absolute;
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
    position: absolute;
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
  .dots:hover,
  .dots:focus,
  .dots:active {
    background-color: ${colors.decor};
  }
  .dots:not(:last-child) {
    margin-right: 10px;
  }

  @media (min-width: ${size.desktop}) {
    .slider {
      height: 448px;
      margin-bottom: 30px;
    }
    .sliderElem img {
      height: 448px;
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
