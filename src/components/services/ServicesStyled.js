import styled from "styled-components";
import { colors } from "../../stylesheet/vars";
import { size } from "../../common/deviceSizes";

export const ServicesStyled = styled.section`
  margin-bottom: 30px;
  h3 {
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: ${colors.textTitle};
    margin-bottom: 27px;
  }
  h3::after {
    display: block;
    content: "";
    height: 2px;
    width: 60px;
    background-color: ${colors.decor};
    margin: 0 auto;
    transform: translateY(5px);
  }
  ul {
    width: 328px;
    margin: 0 auto 15px;
  }
  li {
    position: relative;
    display: inline-block;
    height: 105px;
    width: 159px;
    cursor: pointer;
  }
  .fistPartElem::after,
  .secondPartElem::after {
    position: absolute;
    content: "";
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .fistPartElem:hover::after,
  .secondPartElem:hover::after {
    background-color: rgba(255, 255, 255, 0.2);
  }
  img {
    height: 105px;
    width: 159px;
  }
  h4 {
    position: absolute;
    top: 20px;
    height: 36px;
    width: 150px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: ${colors.textMain};
    background-color: ${colors.substrate};
    padding: 4px 16px 4px 6px;
    z-index: 5;
  }
  h4::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    right: 10px;
    height: 23px;
    width: 2px;
    background-color: ${colors.decor};
    z-index: 5;
  }
  div {
    text-align: center;
  }
  button {
    width: 328px;
    height: 36px;
    font-size: 14px;
    font-weight: 400;
    color: ${colors.textMain};
    background: ${colors.background};
  }
  button:hover,
  button:focus {
    background: ${colors.substrate};
  }
  @media (max-width: ${size.beforeDesktop}) {
    li:nth-child(odd) {
      margin-right: 10px;
    }
    li:not(:nth-last-child(-n + 2)) {
      margin-bottom: 10px;
    }
  }
  @media (min-width: ${size.desktop}) {
    position: relative;
    margin-bottom: 40px;

    svg {
      position: absolute;
      fill: ${colors.dears};
    }
    .topLeftDear {
      left: 12px;
      top: 200px;
      transform: rotate(-15deg);
    }
    .bottomLeftDear {
      left: 22px;
      top: 434px;
      transform: rotate(-15deg);
    }
    .topRightDear {
      right: 10px;
      top: 184px;
      transform: rotate(45deg);
    }
    .bottomRightDear {
      right: 46px;
      top: 386px;
      transform: rotate(45deg);
    }
    .topLeftDear,
    .bottomRightDear {
      width: 208px;
      height: 208px;
    }
    .bottomLeftDear,
    .topRightDear {
      width: 176px;
      height: 176px;
    }
    h3 {
      font-size: 40px;
      line-height: 60px;
      margin-bottom: 42px;
    }
    h3:after {
      width: 82px;
      transform: translateY(10px);
    }
    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 1360px;
      margin-bottom: 0px;
    }
    .fistPartElem:not(:nth-child(3n)) {
      margin-right: 11px;
    }
    .fistPartElem {
      margin-bottom: 10px;
    }
    .secondPart {
      margin-bottom: 20px;
    }
    .secondPartElem,
    .secondPartImg {
      height: 201px;
      width: 585px;
    }
    .secondPartElem:first-child {
      margin-right: 10px;
    }
    li,
    img {
      height: 201px;
      width: 386px;
    }
    h4 {
      top: 30px;
      height: 56px;
      width: 339px;
      font-size: 20px;
      line-height: 56px;
      padding: 0 0 0 15px;
    }
    h4::after {
      right: 15px;
      height: 46px;
    }
    button {
      width: 379px;
      height: 43px;
      font-size: 20px;
    }
  }
`;
