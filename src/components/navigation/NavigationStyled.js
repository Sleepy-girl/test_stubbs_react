import styled from "styled-components";
import { colors } from "../../stylesheet/vars";

export const NavigationStyled = styled.nav`
  position: relative;
  /* width: 100%;
  height: 580px; */
  .wrapperMenu {
    display: flex;
  }
  span {
    color: ${colors.textHover};
    margin-right: 144px;
  }
  .flagList {
    display: flex;
    justify-content: space-between;
    width: 134px;
  }
  .flagElem {
    width: 31px;
  }
  .flagIcons {
    width: 31px;
    height: 21px;
  }
  .apacity {
    opacity: 0.3;
  }
  span,
  a {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }

  .mobileMenu {
    @media (max-width: 1359px) {
      position: absolute;
      width: 100vw;
      height: 580px;
      background: ${colors.background};
      padding-top: 15px;

      a {
        color: ${colors.textMain};
      }
      /* .flagElem:not(:last-of-type) {
        margin-right: 20px;
      } */
    }
  }

  .desktopMenu {
    @media (min-width: 1360px) {
      position: static;
    }
  }
`;
