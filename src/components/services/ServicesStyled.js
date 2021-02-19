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
  }
  h3:after {
    display: block;
    content: "";
    height: 2px;
    width: 60px;
    background-color: ${colors.decor};
    margin: 5px auto 20px;
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
  li:nth-child(odd) {
    margin-right: 10px;
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
  @media (min-width: ${size.desktop}) {
  }
`;
