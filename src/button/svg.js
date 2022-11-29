"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

class SVGButton extends Button {
  parentContext() {
    const onSVGButtonClick = this.onClick.bind(this), ///
          offSVGButtonClick = this.onClick.bind(this); ///

    return ({
      onSVGButtonClick,
      offSVGButtonClick
    });
  }

  static defaultProperties = {
    className: "svg"
  };
}

export default withStyle(SVGButton)`

  outline: none;
  background: transparent;
  
`;
