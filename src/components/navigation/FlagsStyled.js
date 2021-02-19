import styled from "styled-components";
import { size } from "../../common/deviceSizes";
import { colors } from "../../stylesheet/vars";

export const FlagsStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 134px;

  .flagIcons {
    height: 21px;
  }
  .flagElem,
  .flagIcons {
    width: 31px;
  }
  .apacity {
    opacity: 0.3;
  }

  @media (min-width: ${size.desktop}) {
    width: 51px;
    flex-wrap: wrap;
    li:not(:first-child) {
      background-color: ${colors.flagsBackground};
    }
  }
`;
