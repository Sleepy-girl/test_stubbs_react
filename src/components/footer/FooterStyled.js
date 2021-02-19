import styled from "styled-components";
import { colors } from "../../stylesheet/vars";
import { size } from "../../common/deviceSizes";

export const FooterStyled = styled.footer`
  .wrapperList {
    position: relative;
    display: flex;
    width: 328px;
    justify-content: space-between;
    margin: 0 auto 30px;
    padding-top: 20px;
  }
  h4 {
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    color: ${colors.textTitle};
  }
  .title {
    margin-bottom: 20px;
    margin-bottom: 20px;
  }
  .columnList::before,
  .columnList::after {
    position: absolute;
    display: block;
    content: "";
    top: 0;
    width: 1px;
    height: 55px;
    background-color: ${colors.decor};
  }
  .columnList::before {
    left: 110px;
  }
  .columnList::after {
    right: -5px;
  }
  .columnLink {
    font-size: 14px;
    line-height: 16px;
    color: ${colors.textHover};
  }
  .columnElem:not(:last-child) {
    margin-bottom: 15px;
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contactsTitle {
    font-weight: 400;
  }
  span {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.textTitle};
  }
  .postIndex,
  .schedule {
    margin-bottom: 20px;
  }
  .workDays {
    margin-right: 9px;
  }
  .address,
  .phone,
  .workTime {
    font-family: "Roboto";
  }
  .contactsTitle,
  .phone {
    margin-bottom: 15px;
  }
  .iconList {
    display: flex;
    width: 94px;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  svg {
    width: 21px;
    height: 21px;
    fill: ${colors.textTitle};
  }
  .by {
    font-family: "Roboto";
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 2px;
  }
  .stubbs {
    font-family: "HelveticaNeueCyr";
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 18px;
  }

  @media (min-width: ${size.desktop}) {
  }
`;
