import styled from "styled-components";
import { colors } from "../../stylesheet/vars";

export const HeaderStyled = styled.header`
  .container {
    width: 328px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    height: 60px;
  }

  img {
    width: 80px;
    height: 56;
  }
  .searchWrapper {
    position: relative;
  }
  input {
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    color: ${colors.textTitle};
    border: solid 1px ${colors.search};
    padding-left: 12px;
    transform: translateY(-150%);
    transition: transform 500ms;
  }
  .inputAnimate {
    transform: translate(0);
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
  .iconWrapper {
    position: absolute;
    top: 6px;
    right: 7px;
    width: 22px;
    height: 22px;
    cursor: pointer;
  }
  svg {
    width: 17.4px;
    height: 18px;
    fill: ${colors.textTitle};
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

  /* } */
  /* Animation */
  /* .enter {
    transform: translateX(-100%);
  }
  .enterActive {
    transform: translateX(0);
    transition: all 250ms linear;
  }
  .exit {
    transform: translateX(0);
  }
  .exitActive {
    transform: translateX(-100%);
    transition: all 250ms linear;
  } */
`;
