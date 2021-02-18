import styled from "styled-components";
import { colors } from "../../stylesheet/vars";

export const OurCompanyStyled = styled.section`
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
  li {
    position: relative;
    width: 360px;
    margin: 0 auto;
  }
  li:not(:last-child) {
    margin-bottom: 20px;
  }
  h4 {
    position: absolute;
    bottom: 28px;
    height: 180px;
    width: 326px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: ${colors.textMain};
    background-color: ${colors.substrate};
    /* padding: 15px 20 15px 16px; */
  }
  .whyWe {
    padding-left: 16px;
  }
  .advantages {
    padding-left: 65px;
    right: 0;
  }
  h4::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    height: 100px;
    width: 2px;
    background-color: ${colors.decor};
    z-index: 5;
  }
  .whyWe::after {
    right: 20px;
  }
  .advantages::after {
    left: 20px;
  }
  p {
    width: 260px;
    font-size: 12px;
    line-height: 16px;
    color: ${colors.textMain};
  }
  h4,
  p {
    padding-top: 15px;
  }
`;
