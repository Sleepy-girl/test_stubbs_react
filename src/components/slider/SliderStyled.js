import styled from "styled-components";
import { colors } from "../../stylesheet/vars";

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
    transform: translateX(-16px);
    height: 1px;
    width: 210px;
    background-color: ${colors.decorMenu};
  }
  ul {
    display: flex;
    position: absolute;
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
`;
