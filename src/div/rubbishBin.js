"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class RubbishBinDiv extends Element {
  static tagName = "div";

  static defaultProperties = {
    className: "rubbish-bin"
  };
}

export default withStyle(RubbishBinDiv)`

  width: 100%;
  height: 100%;
  
`;
