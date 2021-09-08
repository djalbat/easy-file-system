"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

import UpToggleSVGDiv from "../div/svg/toggle/up";
import DownToggleSVGDiv from "../div/svg/toggle/down";

class ToggleButton extends Button {
  expand() {
    this.hideUpToggleSVGDiv();
    this.showDownToggleSVGDiv();
  }

  collapse() {
    this.showUpToggleSVGDiv();
    this.hideDownToggleSVGDiv();
  }

  getUpToggleSVGDiv() {
    const { UpToggleSVGDiv } = this.constructor;

    return UpToggleSVGDiv;
  }

  getDownToggleSVGDiv() {
    const { DownToggleSVGDiv } = this.constructor;

    return DownToggleSVGDiv;
  }

  childElements() {
    const UpToggleSVGDiv = this.getUpToggleSVGDiv(),
          DownToggleSVGDiv = this.getDownToggleSVGDiv();

    return ([

      <UpToggleSVGDiv/>,
      <DownToggleSVGDiv/>

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

  static UpToggleSVGDiv = UpToggleSVGDiv;

  static DownToggleSVGDiv = DownToggleSVGDiv;

  static defaultProperties = {
    className: "toggle"
  };
}

export default withStyle(ToggleButton)`

  cursor: pointer;
  background: transparent;
  
`;
