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
  const { isDesktopDevice } = useDeviceSizes();

  const handleClick = (e) => {
    e.preventDefault();
    const { id } = e.target;
    console.log("e.target", e.target);
    console.log("flag-before", flag);
    if (isDesktopDevice && id === "iconArrowDown") {
      setFlags((prev) => ({ ...prev, isShow: !prev.isShow }));
      // console.log("flag-after", flag);
      return;
      // console.log(flag.isShow);
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
      {flag.isShow && (
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
        <svg
          className={`iconArrowDown ${flag.isShow ? "arrowChange" : ""}`}
          id="iconArrowDown"
          onClick={handleClick}
        >
          <use href={sprite + "#iconArrowDown"} />
        </svg>
      )}
    </FlagsStyled>
  );
}

export default Flags;

/* <FlagsStyled className="flagList">
<ul>
  <li className="flagElem">
    <svg
      className={`flagIcons ${!flag.iconFlagOfRussia && "apacity"}`}
      id="iconFlagOfRussia"
    >
      <use
        href={sprite + "#iconFlagOfRussia"}
        onClick={() => handleClick("iconFlagOfRussia")}
      />
    </svg>
  </li>
  <li className="flagElem">
    <svg
      className={`flagIcons ${!flag.iconFlagOfUkraine && "apacity"}`}
      id="iconFlagOfUkraine"
    >
      <use
        href={sprite + "#iconFlagOfUkraine"}
        onClick={() => handleClick("iconFlagOfUkraine")}
      />
    </svg>
  </li>
  <li className="flagElem">
    <svg
      className={`flagIcons ${!flag.iconUnitedKingdom && "apacity"}`}
      id="iconUnitedKingdom"
    >
      <use
        href={sprite + "#iconUnitedKingdom"}
        onClick={() => handleClick("iconUnitedKingdom")}
      />
    </svg>
  </li>
</ul>
{isDesktopDevice && (
  <div className="arrowWrapper" id="iconArrowDown" onClick={handleClick}>
    <svg className="iconArrowDown">
      <use href={sprite + "#iconArrowDown"} />
    </svg>
  </div>
)}
</FlagsStyled> */
