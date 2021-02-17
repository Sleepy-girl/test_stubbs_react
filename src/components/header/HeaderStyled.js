import styled from "styled-components";
import { colors } from "../../stylesheet/vars";

export const HeaderStyled = styled.header`
  .container {
    width: 328px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    height: 60px;
  }

  img {
    width: 80px;
    height: 56;
    margin-right: 178px;
  }
  svg {
    width: 17.4px;
    height: 18px;
    fill: ${colors.textTitle};
    margin-right: 24px;
  }
  .firstElemOfBurger,
  .secondElemOfBurger,
  .thirdElemOfBurger {
    width: 26px;
    height: 2.6px;
    background-color: ${colors.textTitle};
  }
  li:not(:last-of-type) {
    margin-bottom: 5px;
  }
`;
