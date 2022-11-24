"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { entryItemDivMinHeight, entryItemDivPaddingTop } from "../../styles";

class EntryItemDiv extends Element {
  deselect() {
    this.removeClass("selected");
  }

  select() {
    this.addClass("selected");
  }

  parentContext() {
    const context = this.getContext(),
          select = this.select.bind(this),
          deselect = this.deselect.bind(this);

    return ({
      ...context,
      select,
      deselect
    });
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

  min-height: ${entryItemDivMinHeight};
  padding-top: ${entryItemDivPaddingTop};
  
  font-weight: normal;
  
  .selected {
    font-weight: bold;
  }

`;
