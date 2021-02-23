import styled from "styled-components";
import { size } from "../../common/deviceSizes";
import { colors } from "../../stylesheet/vars";

export const FlagsStyled = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    width: 134px;
  }
  .flagElem,
  .flagIcons {
    width: 31px;
  }
  .flagIcons {
    height: 21px;
    transform: scale(1.5);
  }
  .apacity {
    opacity: 0.3;
  }

  @media (min-width: ${size.desktop}) {
    ul,
    .substrate::after,
    .iconArrowDown {
      position: absolute;
    }
    ul {
      /* position: absolute; */
      top: 64px;
      left: 1128px;
      width: 51px;
      flex-wrap: wrap;
      z-index: 2;
    }
    li:first-child {
      margin-bottom: 30px;
    }
    .substrate::after {
      /* position: absolute; */
      display: block;
      content: "";
      bottom: -1px;
      left: -10px;
      width: 51px;
      height: 82px;
      background-color: ${colors.flagsBackground};
    }
    li:not(:first-child) {
      margin-bottom: 15px;
    }
    svg {
      cursor: pointer;
    }
    .iconArrowDown {
      /* position: absolute; */
      top: 64px;
      left: 1170px;
      width: 26px;
      height: 20px;
      padding: 6px;
      fill: ${colors.decor};
    }
    .arrowChange {
      transform: rotate(180deg);
    }
  }
`;
