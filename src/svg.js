"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class SVG extends Element {
  static tagName = "svg";
}

export default withStyle(SVG)`

  width: auto;
  stroke: #000000;
  pointer-events: none;
  
`;
