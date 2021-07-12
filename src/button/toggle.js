"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

import UpToggleSVG from "../svg/toggle/up";
import DownToggleSVG from "../svg/toggle/down";

class ToggleButton extends Button {
  childElements() {
    return ([

      <UpToggleSVG/>,
      <DownToggleSVG/>

    ]);
  }

  static defaultProperties = {
    className: "toggle"
  };
}

export default withStyle(ToggleButton)`

  background: transparent;
  
`;
