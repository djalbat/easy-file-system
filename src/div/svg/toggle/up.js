"use strict";

import { Element } from "easy";

import UpToggleSVG from "../../../svg/toggle/up";

export default class UpToggleSVGDiv extends Element {
  getUpToggleSVG() {
    const { UpToggleSVG } = this.constructor;

    return UpToggleSVG;
  }

  childElements() {
    const UpToggleSVG = this.getUpToggleSVG();

    return (

      <UpToggleSVG/>

    );
  }

  parentContext() {
    const showUpToggleSVGDiv = this.show.bind(this),  ///
          hideUpToggleSVGDiv = this.hide.bind(this);  ///

    return ({
      showUpToggleSVGDiv,
      hideUpToggleSVGDiv
    });
  }

  static UpToggleSVG = UpToggleSVG;

  static tagName = "div";

  static defaultProperties = {
    className: "up-toggle-svg"
  };
}
