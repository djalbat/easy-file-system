"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class EntryItem extends Element {
  getType() {
    const { type } = this.constructor;

    return type;
  }

  static tagName = "li";

  static defaultProperties = {
    className: "entry"
  };
}

export default withStyle(EntryItem)`

  width: fit-content;
  cursor: pointer;
  list-style: none;
  
`;
