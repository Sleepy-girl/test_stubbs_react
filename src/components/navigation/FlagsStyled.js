import styled from "styled-components";
import { size } from "../../common/deviceSizes";
import { colors } from "../../stylesheet/vars";

export const FlagsStyled = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    width: 134px;
  }

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
    ul {
      position: absolute;
      top: 67px;
      left: 1212px;
      width: 51px;
      flex-wrap: wrap;
      z-index: 2;
    }

    li:not(:first-child) {
      background-color: ${colors.flagsBackground};
    }
    /* .arrowWrapper {
      width: 20px;
      height: 20px;
      margin: auto;
    } */
    .iconArrowDown {
      position: absolute;
      top: 67px;
      left: 1256px;
      width: 34px;
      height: 28px;
      padding: 10px;
      fill: ${colors.decor};
      cursor: pointer;
    }
    .arrowChange {
      transform: rotate(180deg);
    }
  }
`;
