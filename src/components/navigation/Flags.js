import React, { useState } from "react";
import useDeviceSizes from "../../hooks/useDeviceSizes";
import sprite from "../../assets/images/icons-sprite.svg";
import { FlagsStyled } from "./FlagsStyled";
import FlagsItem from "./FlagsItem";

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
            <FlagsItem
              key={item}
              isMobileDevice={isMobileDevice}
              flag={flag}
              item={item}
              handleClick={handleClick}
            />
          ))}
        </ul>
      )}

      {isDesktopDevice && (
        <>
          <ul>
            {flagItems.map((item) => {
              return (
                flag.currentFlagId === item && (
                  <FlagsItem
                    key={item}
                    flag={flag}
                    item={item}
                    handleClick={handleClick}
                  />
                )
              );
            })}
            {flag.isShow &&
              flagItems.map((item) => {
                return (
                  flag.currentFlagId !== item && (
                    <FlagsItem
                      key={item}
                      flag={flag}
                      item={item}
                      handleClick={handleClick}
                    />
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
