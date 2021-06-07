"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class EntryDiv extends Element {
  static tagName = "div";

  static defaultProperties = {
    className: "entry"
  };
}

export default withStyle(EntryDiv)`

  width: fit-content;
  cursor: pointer;
  
`;
