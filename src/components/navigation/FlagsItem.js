import React from "react";
import sprite from "../../assets/images/icons-sprite.svg";

function FlagsItem({ isMobileDevice = false, flag, item, handleClick }) {
  return (
    <li
      className={`flagElem ${
        flag.currentFlagId === item && flag.isShow ? "substrate" : ""
      }`}
      id={item}
    >
      <svg
        className={`flagIcons ${
          isMobileDevice ? flag.currentFlagId !== item && "opacity" : ""
        }`}
      >
        <use href={`${sprite}#${item}`} onClick={handleClick} />
      </svg>
    </li>
  );
}

export default FlagsItem;
