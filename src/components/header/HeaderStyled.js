import styled from "styled-components";
import { colors } from "../../stylesheet/vars";

export const HeaderStyled = styled.header`
  .container {
    display: flex;
    align-items: center;
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
