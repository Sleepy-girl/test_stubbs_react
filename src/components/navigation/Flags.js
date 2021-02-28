import React, { useState } from "react";
import useDeviceSizes from "../../hooks/useDeviceSizes";
import sprite from "../../assets/images/icons-sprite.svg";
import { FlagsStyled } from "./FlagsStyled";

const initialState = {
  iconFlagOfRussia: true,
  iconFlagOfUkraine: false,
  iconUnitedKingdom: false,
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
      iconFlagOfRussia: false,
      iconFlagOfUkraine: false,
      iconUnitedKingdom: false,
      isShow: false,
      [id]: true,
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
              <svg className={`flagIcons ${!flag[item] && "opacity"}`}>
                <use href={`${sprite}#${item}`} onClick={handleClick} />
              </svg>
            </li>
          ))}
        </ul>
      )}

      {isDesktopDevice && (
        <>
          <ul>
            <li
              className={`flagElem ${flag.isShow && "substrate"}`}
              id={`${
                (flag.iconFlagOfRussia && "iconFlagOfRussia") ||
                (flag.iconFlagOfUkraine && "iconFlagOfUkraine") ||
                (flag.iconUnitedKingdom && "iconUnitedKingdom")
              }`}
            >
              <svg className="flagIcons">
                <use
                  href={
                    sprite +
                    `${
                      (flag.iconFlagOfRussia && "#iconFlagOfRussia") ||
                      (flag.iconFlagOfUkraine && "#iconFlagOfUkraine") ||
                      (flag.iconUnitedKingdom && "#iconUnitedKingdom")
                    }
                  `
                  }
                  onClick={handleClick}
                />
              </svg>
            </li>
            {flag.isShow && (
              <>
                <li
                  className="flagElem"
                  id={`${
                    (flag.iconFlagOfRussia && "iconFlagOfUkraine") ||
                    (flag.iconFlagOfUkraine && "iconFlagOfRussia") ||
                    (flag.iconUnitedKingdom && "iconFlagOfUkraine")
                  }`}
                >
                  <svg className="flagIcons">
                    <use
                      href={
                        sprite +
                        `${
                          (flag.iconFlagOfRussia && "#iconFlagOfUkraine") ||
                          (flag.iconFlagOfUkraine && "#iconFlagOfRussia") ||
                          (flag.iconUnitedKingdom && "#iconFlagOfUkraine")
                        }`
                      }
                      onClick={handleClick}
                    />
                  </svg>
                </li>
                <li
                  className="flagElem"
                  id={`${
                    (flag.iconFlagOfRussia && "iconUnitedKingdom") ||
                    (flag.iconFlagOfUkraine && "iconUnitedKingdom") ||
                    (flag.iconUnitedKingdom && "iconFlagOfRussia")
                  }`}
                >
                  <svg className="flagIcons">
                    <use
                      href={
                        sprite +
                        `${
                          (flag.iconFlagOfRussia && "#iconUnitedKingdom") ||
                          (flag.iconFlagOfUkraine && "#iconUnitedKingdom") ||
                          (flag.iconUnitedKingdom && "#iconFlagOfRussia")
                        }`
                      }
                      onClick={handleClick}
                    />
                  </svg>
                </li>
              </>
            )}
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
