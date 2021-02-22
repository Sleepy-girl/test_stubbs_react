import styled from "styled-components";
import { colors } from "../../stylesheet/vars";
import { size } from "../../common/deviceSizes";

export const FooterStyled = styled.footer`
  .wrapperList {
    position: relative;
    width: 328px;
  }
  h4 {
    font-weight: 400;
  }
  .columnLink {
    line-height: 16px;
    color: ${colors.textHover};
  }
  .columnElem:not(:last-child) {
    margin-bottom: 15px;
  }
  .columnList::before,
  .columnList::after {
    position: absolute;
    display: block;
    content: "";
    top: -20px;
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
  h4,
  span,
  .columnElem:hover > .columnLink,
  .columnElem:focus > .columnLink {
    color: ${colors.textTitle};
  }
  h4,
  span {
    font-size: 16px;
    line-height: 19px;
  }
  .title,
  .postIndex,
  .schedule {
    margin-bottom: 20px;
  }
  .workDays {
    margin-right: 9px;
  }
  .contactsTitle,
  .phone {
    margin-bottom: 15px;
  }
  .wrapperList,
  .iconList {
    justify-content: space-between;
  }
  .iconList {
    width: 94px;
    margin-bottom: 10px;
  }

  svg {
    height: 21px;
    width: 21px;
    fill: ${colors.textTitle};
  }
  svg:hover,
  svg:focus {
    fill: ${colors.decor};
  }
  .wrapperList,
  .contacts,
  .iconList,
  .developedWrapper {
    display: flex;
  }
  .contacts,
  .developedWrapper {
    flex-direction: column;
  }
  .developedWrapper {
    align-items: center;
  }
  .address,
  .phone,
  .workTime,
  .by {
    font-family: "Roboto";
  }
  span,
  .by {
    font-weight: 300;
  }
  .by {
    line-height: 17px;
    margin-bottom: 2px;
  }
  .columnLink,
  .by,
  .stubbs {
    font-size: 14px;
  }
  .stubbs {
    font-family: "HelveticaNeueCyr";
    font-weight: normal;
    line-height: 14px;
    margin-bottom: 18px;
  }

  @media (max-width: ${size.beforeDesktop}) {
    .wrapperList {
      margin: 0 auto 30px;
    }
    .contacts {
      align-items: center;
    }
  }

  @media (min-width: ${size.desktop}) {
    width: 1180px;
    margin: 0 auto;
    .wrapperList {
      width: 826px;
      margin-bottom: 50px;
    }
    h4 {
      font-size: 18px;
    }
    .title {
      margin-bottom: 30px;
    }
    .columnLink {
      font-size: 16px;
    }
    .servicesListWrapper {
      width: 464px;
    }
    .container,
    .servicesListWrapper {
      display: flex;
      justify-content: space-between;
    }
    .columnList::before {
      left: 325px;
    }
    .columnList::after {
      right: -3px;
    }

    .contactsTitle {
      margin-bottom: 9px;
    }
    h4,
    .columnLink,
    span {
      line-height: 21px;
    }
    .postIndex,
    .schedule {
      margin-bottom: 15px;
    }
  }
`;
