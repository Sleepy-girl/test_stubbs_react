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
  }
  li:not(:nth-last-child(-n + 2)) {
    margin-bottom: 10px;
  }
  img {
    height: 105px;
    width: 159px;
  }
  h4 {
    position: absolute;
    bottom: 48px;
    height: 36px;
    width: 150px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: ${colors.textMain};
    background-color: ${colors.substrate};
    padding: 4px 16px 4px 6px;
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
    line-height: 36px;
    font-weight: normal;
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
  }
  @media (min-width: ${size.desktop}) {
    margin-bottom: 40px;
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
      width: 1360px;
      margin-bottom: 0px;
      /* margin-bottom: 20px; */
    }
    .secondPartElem,
    .secondPartImg {
      height: 202px;
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
    li:not(:nth-last-child(-n + 2)) {
      height: 201px;
      width: 386px;
      /* margin-bottom: 10px; */
    }
  }
`;
