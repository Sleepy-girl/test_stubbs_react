import React, { useState } from "react";
import useDeviceSizes from "../../hooks/useDeviceSizes";
import sprite from "../../assets/images/icons-sprite.svg";
import { FlagsStyled } from "./FlagsStyled";

const initialState = {
  currentFlagId: "iconFlagOfRussia",
  isShow: false,
};

function Flags() {
  const [flag, setFlags] = useState(initialState);
  const { isMobileDevice, isDesktopDevice } = useDeviceSizes();

  const handleClick = (e) => {
    const id = e.target.closest("[id]").id;
    if (isDesktopDevice && id === "iconArrowDown") {
      setFlags((prev) => ({ ...prev, isShow: !prev.isShow }));
      return;
    }
    setFlags({
      isShow: false,
      currentFlagId: id,
    });
  };

  const flagItems = [
    "iconFlagOfRussia",
    "iconFlagOfUkraine",
    "iconUnitedKingdom",
  ];

  return (
    <FlagsStyled className="flagList">
      {isMobileDevice && (
        <ul>
          {flagItems.map((item) => (
            <li className="flagElem" id={item} key={item}>
              <svg
                className={`flagIcons ${
                  flag.currentFlagId !== item && "opacity"
                }`}
              >
                <use href={`${sprite}#${item}`} onClick={handleClick} />
              </svg>
            </li>
          ))}
        </ul>
      )}

      {isDesktopDevice && (
        <>
          <ul>
            {flagItems.map((item) => {
              return (
                flag.currentFlagId === item && (
                  <li
                    className={`flagElem ${flag.isShow && "substrate"}`}
                    key={item}
                    id={`${item}`}
                  >
                    <svg className="flagIcons">
                      <use href={sprite + `#${item}`} onClick={handleClick} />
                    </svg>
                  </li>
                )
              );
            })}
            {flag.isShow &&
              flagItems.map((item) => {
                return (
                  flag.currentFlagId !== item && (
                    <li className={`flagElem`} key={item} id={`${item}`}>
                      <svg className="flagIcons">
                        <use href={sprite + `#${item}`} onClick={handleClick} />
                      </svg>
                    </li>
                  )
                );
              })}
          </ul>

          <svg
            className={`iconArrowDown ${flag.isShow ? "arrowChange" : ""}`}
            id="iconArrowDown"
            onClick={handleClick}
          >
            <use href={sprite + "#iconArrowDown"} />
          </svg>
        </>
      )}
    </FlagsStyled>
  );
}

export default Flags;
