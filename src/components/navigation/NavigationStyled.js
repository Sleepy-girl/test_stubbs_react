import styled from "styled-components";
import { colors } from "../../stylesheet/vars";

export const NavigationStyled = styled.nav`
  position: relative;
  .container,
  .wrapperMenu {
    display: flex;
    flex-wrap: wrap;
  }
  span {
    color: ${colors.textHover};
    margin-right: 142px;
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
      transform: translate(-100%);
      /* transition: background-position 3000ms translate(100%); */
      /* cubic-bezier(0.455, 0.03, 0.515, 0.955); */

      .wrapperMenu::after {
        content: "";
        width: 100%;
        height: 1px;
        background-color: ${colors.decorMenu};
        margin-bottom: 20px;
      }
      .menuElem::after {
        display: block;
        content: "";
        width: 328px;
        height: 1px;
        background-color: ${colors.decorMenu};
        margin-top: 20px;
      }
      .menuElem:not(:last-of-type) {
        margin-bottom: 20px;
      }
      .menuLink {
        color: ${colors.textMain};
      }
      .menuLink:hover {
        color: ${colors.textHover};
      }
    }
  }

  .desktopMenu {
    @media (min-width: 1360px) {
      position: static;
    }
  }
`;
