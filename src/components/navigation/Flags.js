import React, { useState } from "react";
import sprite from "../../assets/images/icons-sprite.svg";
import { FlagsStyled } from "./FlagsStyled";

const initialState = {
  iconFlagOfRussia: true,
  iconFlagOfUkraine: false,
  iconUnitedKingdom: false,
};

function Flags() {
  const [flag, setFlags] = useState(initialState);

  const handleClick = (id) => {
    setFlags({
      iconFlagOfRussia: false,
      iconFlagOfUkraine: false,
      iconUnitedKingdom: false,
      [id]: true,
    });
  };

  return (
    <FlagsStyled className="flagList">
      <li className="flagElem">
        <svg
          id="iconFlagOfRussia"
          className={`flagIcons ${!flag.iconFlagOfRussia && "apacity"}`}
        >
          <use
            onClick={() => handleClick("iconFlagOfRussia")}
            href={sprite + "#iconFlagOfRussia"}
          />
        </svg>
      </li>
      <li className="flagElem">
        <svg
          id="iconFlagOfUkraine"
          className={`flagIcons ${!flag.iconFlagOfUkraine && "apacity"}`}
        >
          <use
            onClick={() => handleClick("iconFlagOfUkraine")}
            href={sprite + "#iconFlagOfUkraine"}
          />
        </svg>
      </li>
      <li className="flagElem">
        <svg
          id="iconUnitedKingdom"
          className={`flagIcons ${!flag.iconUnitedKingdom && "apacity"}`}
        >
          <use
            onClick={() => handleClick("iconUnitedKingdom")}
            href={sprite + "#iconUnitedKingdom"}
          />
        </svg>
      </li>
    </FlagsStyled>
  );
}

export default Flags;
