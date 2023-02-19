"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { entryItemDivPaddingTop } from "../../styles";

class EntryItemDiv extends Element {
  getExplorer() {
    const { explorer } = this.properties;

    return explorer;
  }

  getDragEntryItem() {
    const parentElement = this.getParentElement(),
          dragEntryItem = parentElement;  ///

    return dragEntryItem; ///
  }

  static tagName = "div";

  static ignoredProperties = [
    "name",
    "explorer"
  ];

  static defaultProperties = {
    className: "entry-item"
  };
}

export default withStyle(EntryItemDiv)`

  position: relative;
  padding-top: ${entryItemDivPaddingTop};
  
`;
