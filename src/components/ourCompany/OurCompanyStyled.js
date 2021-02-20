import styled from "styled-components";
import { colors } from "../../stylesheet/vars";
import { size } from "../../common/deviceSizes";

export const OurCompanyStyled = styled.section`
  h3 {
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: ${colors.textTitle};
    margin-bottom: 27px;
  }
  h3:after {
    display: block;
    content: "";
    height: 2px;
    width: 60px;
    background-color: ${colors.decor};
    margin: 0 auto;
    transform: translateY(5px);
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

  @media (min-width: ${size.desktop}) {
    h3 {
      font-size: 40px;
      line-height: 60px;
      margin-bottom: 32px;
    }
    h3:after {
      width: 82px;
      transform: translateY(0);
    }
    li {
      width: 1360px;
    }
    li:not(:last-child) {
      margin-bottom: 30px;
    }
    h4 {
      bottom: 60px;
      height: 260px;
      width: 750px;
      font-size: 40px;
      line-height: 60px;
      padding-top: 20px;
    }
    .whyWe {
      padding-left: 90px;
    }
    .advantages {
      padding-left: 115px;
    }
    h4::after {
      height: 212px;
    }
    .whyWe::after {
      right: 61px;
    }
    .advantages::after {
      left: 78px;
    }
    p {
      width: 545px;
      font-size: 18px;
      line-height: 23px;
      padding-top: 25px;
    }
  }
`;
