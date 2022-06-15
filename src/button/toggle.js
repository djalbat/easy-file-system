"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

import UpToggleSVG from "../svg/toggle/up";
import DownToggleSVG from "../svg/toggle/down";

class ToggleButton extends Button {
  expand() {
    this.hideUpToggleSVG();
    this.showDownToggleSVG();
  }

  collapse() {
    this.showUpToggleSVG();
    this.hideDownToggleSVG();
  }

  childElements() {
    const { UpToggleSVG, DownToggleSVG } = this.constructor;

    return ([

      <UpToggleSVG/>,
      <DownToggleSVG/>

    ]);
  }

  parentContext() {
    const expandToggleButton = this.expand.bind(this), ///
          collapseToggleButton = this.collapse.bind(this);  ///

    return ({
      expandToggleButton,
      collapseToggleButton
    });
  }

  initialise() {
    this.assignContext();
  }

  static UpToggleSVG = UpToggleSVG;

  static DownToggleSVG = DownToggleSVG;

  static defaultProperties = {
    className: "toggle"
  };
}

export default withStyle(ToggleButton)`

  cursor: pointer;
  outline: none;
  background: transparent;
  vertical-align: bottom;
  
`;
