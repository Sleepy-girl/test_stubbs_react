import styled from "styled-components";
import { colors } from "../../stylesheet/vars";
import { size } from "../../common/deviceSizes";

export const HeaderStyled = styled.header`
  .container {
    display: flex;
    width: 328px;
    height: 60px;
    margin: 0 auto;
  }
  img {
    width: 80px;
    height: 56px;
  }
  .searchWrapper {
    position: relative;
  }

  input {
    font-size: 14px;
    font-weight: 400;
    line-height: 30px;
    border: solid 1px ${colors.search};
    color: ${colors.textTitle};
    padding-left: 12px;
  }
  .searchWrapper,
  input {
    width: 194px;
    height: 30px;
  }
  input::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: ${colors.placeholder};
  }
  svg {
    width: 17.4px;
    height: 18px;
    fill: ${colors.textTitle};
  }
  .iconWrapper {
    position: absolute;
    top: 6px;
    right: 7px;
    width: 22px;
    height: 22px;
    cursor: pointer;
  }

  @media (max-width: ${size.beforeDesktop}) {
    .container {
      align-items: center;
      justify-content: space-between;
    }
    input {
      transform: translateY(-150%);
      transition: transform 500ms;
    }
    .inputAnimate {
      transform: translate(0);
    }
    .firstElemOfBurger,
    .secondElemOfBurger,
    .thirdElemOfBurger,
    .firstElemOfCross,
    .thirdElemOfCross {
      width: 26px;
      height: 2.6px;
      background-color: ${colors.textTitle};
      transition: transform 50ms linear;
    }
    .elemOfBurger:not(:last-of-type) {
      margin-bottom: 5px;
    }
    .firstElemOfCross {
      transform: rotate(45deg);
      transition: transform 50ms linear;
    }
    .thirdElemOfCross {
      transform: translateY(-2.6px) rotate(-45deg);
      transition: transform 50ms linear;
    }
  }

  @media (min-width: ${size.desktop}) {
    .container {
      position: relative;
      width: 1180px;
      height: 106px;
      padding-bottom: 11px;
    }
    img {
      width: 123px;
      height: 90px;
      margin: 5px 148px 0 0;
    }
    .searchWrapper {
      position: absolute;
      top: 56px;
      left: 802px;
      z-index: 1;
    }
    .positionChange {
      top: 106px;
    }
    .inputShow {
      transform: translateY(0px);
    }
    input {
      font-size: 16px;
      line-height: 40px;
      border: none;
      background-color: ${colors.inputBackground};
      padding-left: 31px;
      transform: translateY(-100px);
    }
    .searchWrapper,
    input {
      width: 314px;
      height: 41px;
    }
    input::placeholder {
      font-size: 16px;
      color: ${colors.textTitle};
    }
    .iconWrapper {
      top: 0px;
      right: 0px;
      width: 50px;
      height: 41px;
      padding: 12px;
    }
  }
`;
