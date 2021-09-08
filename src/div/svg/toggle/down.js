"use strict";

import { Element } from "easy";

import DownToggleSVG from "../../../svg/toggle/down";

export default class DownToggleSVGDiv extends Element {
  getDownToggleSVG() {
    const { DownToggleSVG } = this.constructor;

    return DownToggleSVG;
  }

  childElements() {
    const DownToggleSVG = this.getDownToggleSVG();

    return (

      <DownToggleSVG/>

    );
  }

  parentContext() {
    const showDownToggleSVGDiv = this.show.bind(this),  ///
          hideDownToggleSVGDiv = this.hide.bind(this);  ///

    return ({
      showDownToggleSVGDiv,
      hideDownToggleSVGDiv
    });
  }

  static DownToggleSVG = DownToggleSVG;

  static tagName = "div";

  static defaultProperties = {
    className: "down-toggle-svg"
  };
}
