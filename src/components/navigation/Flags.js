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
    e.preventDefault();
    const { id } = e.target;
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

  return (
    <FlagsStyled className="flagList">
      {isMobileDevice && (
        <ul>
          <li className="flagElem" onClick={handleClick}>
            <svg className={`flagIcons ${!flag.iconFlagOfRussia && "apacity"}`}>
              <use id="iconFlagOfRussia" href={sprite + "#iconFlagOfRussia"} />
            </svg>
          </li>
          <li className="flagElem" onClick={handleClick}>
            <svg
              className={`flagIcons ${!flag.iconFlagOfUkraine && "apacity"}`}
            >
              <use
                id="iconFlagOfUkraine"
                href={sprite + "#iconFlagOfUkraine"}
              />
            </svg>
          </li>
          <li className="flagElem" onClick={handleClick}>
            <svg
              className={`flagIcons ${!flag.iconUnitedKingdom && "apacity"}`}
            >
              <use
                id="iconUnitedKingdom"
                href={sprite + "#iconUnitedKingdom"}
              />
            </svg>
          </li>
        </ul>
      )}

      {isDesktopDevice && (
        <>
          <ul>
            <li
              className={`flagElem ${flag.isShow && "substrate"}`}
              onClick={handleClick}
            >
              <svg className="flagIcons">
                <use
                  id={`${
                    (flag.iconFlagOfRussia && "iconFlagOfRussia") ||
                    (flag.iconFlagOfUkraine && "iconFlagOfUkraine") ||
                    (flag.iconUnitedKingdom && "iconUnitedKingdom")
                  }`}
                  href={
                    sprite +
                    `${
                      (flag.iconFlagOfRussia && "#iconFlagOfRussia") ||
                      (flag.iconFlagOfUkraine && "#iconFlagOfUkraine") ||
                      (flag.iconUnitedKingdom && "#iconUnitedKingdom")
                    }
                  `
                  }
                />
              </svg>
            </li>
            {flag.isShow && (
              <>
                <li className="flagElem" onClick={handleClick}>
                  <svg className="flagIcons">
                    <use
                      id={`${
                        (flag.iconFlagOfRussia && "iconFlagOfUkraine") ||
                        (flag.iconFlagOfUkraine && "iconFlagOfRussia") ||
                        (flag.iconUnitedKingdom && "iconFlagOfUkraine")
                      }`}
                      href={
                        sprite +
                        `${
                          (flag.iconFlagOfRussia && "#iconFlagOfUkraine") ||
                          (flag.iconFlagOfUkraine && "#iconFlagOfRussia") ||
                          (flag.iconUnitedKingdom && "#iconFlagOfUkraine")
                        }`
                      }
                    />
                  </svg>
                </li>
                <li className="flagElem" onClick={handleClick}>
                  <svg className="flagIcons">
                    <use
                      id={`${
                        (flag.iconFlagOfRussia && "iconUnitedKingdom") ||
                        (flag.iconFlagOfUkraine && "iconUnitedKingdom") ||
                        (flag.iconUnitedKingdom && "iconFlagOfRussia")
                      }`}
                      href={
                        sprite +
                        `${
                          (flag.iconFlagOfRussia && "#iconUnitedKingdom") ||
                          (flag.iconFlagOfUkraine && "#iconUnitedKingdom") ||
                          (flag.iconUnitedKingdom && "#iconFlagOfRussia")
                        }`
                      }
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
