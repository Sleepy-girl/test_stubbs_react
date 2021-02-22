import styled from "styled-components";
import { colors } from "../../stylesheet/vars";
import { size } from "../../common/deviceSizes";

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
    margin-bottom: 15px;
  }
  span,
  a {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }
  .menuLink {
    color: ${colors.textMain};
  }

  @media (max-width: ${size.beforeDesktop}) {
    position: absolute;
    width: 100vw;
    height: 580px;
    background: ${colors.background};
    padding-top: 15px;
    z-index: 100;

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
    .menuLink:hover {
      color: ${colors.textHover};
    }
  }

  @media (min-width: ${size.desktop}) {
    .menuList {
      display: flex;
    }
    .menuElem:not(:last-child) {
      margin-right: 60px;
    }
    .menuElem:first-child {
      transform: translateY(65px);
    }
    .menuElem:not(:first-child) {
      transform: translateY(-30px);
    }
    .menuElem:not(:first-child)::before {
      display: block;
      content: "";
      width: 1px;
      height: 95px;
      background-color: ${colors.search};
      transform: translate(-30px, 30px);
    }
    .menuElem:nth-child(2) {
      padding-right: 26px;
    }
    .menuLink {
      color: ${colors.textTitle};
    }
    .menuLink::after {
      display: block;
      content: "";
      width: 100%;
      height: 2px;
      margin-top: 7px;
    }
    .menuElem:hover > .menuLink::after,
    .menuElem:focus > .menuLink::after {
      background-color: ${colors.decor};
    }
    .iconArrowDown {
      width: 14px;
      height: 8px;
      fill: ${colors.decor};
      transform: translate(70px, -30px);
      cursor: pointer;
    }
  }
`;
