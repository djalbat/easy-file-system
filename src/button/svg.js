"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

class SVGButton extends Button {
  static defaultProperties = {
    className: "svg"
  };
}

export default withStyle(SVGButton)`

  outline: none;
  background: transparent;
  
`;
