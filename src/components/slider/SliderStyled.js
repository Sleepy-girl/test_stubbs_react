import styled from "styled-components";
import { colors } from "../../stylesheet/vars";
import { size } from "../../common/deviceSizes";

export const SliderStyled = styled.section`
  position: relative;
  height: 216px;
  width: 360px;
  margin: 0 auto 20px;

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
  ul {
    position: absolute;
    display: flex;
    bottom: 10px;
    left: 149px;
  }
  li {
    width: 8px;
    height: 8px;
    border-radius: 50pc;
    background-color: ${colors.textMain};
  }
  li:hover,
  li:focus {
    background-color: ${colors.decor};
  }
  li:not(:last-child) {
    margin-right: 10px;
  }
  @media (min-width: ${size.desktop}) {
    height: 448px;
    width: 1360px;
    margin-bottom: 30px;

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
    ul {
      bottom: 15px;
      left: 630px;
    }
    li {
      width: 14px;
      height: 14px;
    }
    li:not(:last-child) {
      margin-right: 15px;
    }
  }
`;
