"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class EntryItem extends Element {
  getType() {
    const { type } = this.constructor;

    return type;
  }

  getName() {
    const { name } = this.properties;

    return name;
  }

  getExplorer() {
    const { explorer } = this.properties;

    return explorer;
  }

  static tagName = "li";

  static ignoredProperties = [
    "name",
    "explorer"
  ];

  static defaultProperties = {
    className: "entry"
  };
}

export default withStyle(EntryItem)`

  width: fit-content;
  cursor: pointer;
  list-style: none;
  
`;
