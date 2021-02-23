import styled from "styled-components";
import { colors } from "../../stylesheet/vars";
import { size } from "../../common/deviceSizes";

export const ServicesStyled = styled.section`
  margin-bottom: 30px;
  h3,
  div {
    text-align: center;
  }
  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: ${colors.textTitle};
    margin-bottom: 27px;
  }
  h3::after,
  h4::after,
  .fistPartElem::after,
  .secondPartElem::after {
    display: block;
    content: "";
  }
  h3::after,
  h4::after {
    background-color: ${colors.decor};
  }
  h3::after {
    height: 2px;
    width: 60px;
    margin: 0 auto;
    transform: translateY(5px);
  }
  ul,
  button {
    width: 328px;
  }
  ul {
    margin: 0 auto 15px;
  }
  li,
  img {
    height: 105px;
    width: 159px;
  }
  li {
    position: relative;
    display: inline-block;
    width: 159px;
    cursor: pointer;
  }
  h4,
  h4::after,
  .fistPartElem::after,
  .secondPartElem::after {
    position: absolute;
  }
  h4::after,
  .fistPartElem::after,
  .secondPartElem::after {
    top: 0;
  }
  .fistPartElem::after,
  .secondPartElem::after {
    left: 0;
    height: 100%;
    width: 100%;
  }
  .fistPartElem:hover::after,
  .secondPartElem:hover::after {
    background-color: rgba(255, 255, 255, 0.2);
  }
  h4,
  button {
    height: 36px;
    font-weight: 400;
    color: ${colors.textMain};
  }
  h4,
  h4::after {
    z-index: 5;
  }
  h4 {
    top: 20px;
    width: 150px;
    font-size: 12px;
    line-height: 14px;
    background-color: ${colors.substrate};
    padding: 4px 16px 4px 6px;
  }
  h4::after {
    right: 10px;
    height: 23px;
    width: 2px;
  }
  button {
    font-size: 14px;
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
    margin-bottom: 40px;
    .dearWrapper {
      position: relative;
      width: 1180px;
      margin: 0 auto;
    }
    svg {
      position: absolute;
      fill: ${colors.dears};
    }
    .topLeftDear {
      left: -78px;
      top: 216px;
      transform: rotate(-15deg);
    }
    .bottomLeftDear {
      left: -66px;
      top: 440px;
      transform: rotate(-15deg);
    }
    .topRightDear {
      right: -84px;
      top: 186px;
      transform: rotate(45deg);
    }
    .bottomRightDear {
      right: -46px;
      top: 396px;
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
    li,
    img,
    .secondPartElem,
    .secondPartImg {
      height: 201px;
    }
    .secondPartElem,
    .secondPartImg {
      width: 585px;
    }
    .secondPartElem:first-child {
      margin-right: 10px;
    }
    li,
    img {
      width: 386px;
    }
    h4,
    button {
      font-size: 20px;
    }
    h4 {
      top: 30px;
      height: 56px;
      width: 339px;
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
    }
  }
`;
