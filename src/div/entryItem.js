"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { entryItemDivMinHeight, entryItemDivPaddingTop } from "../styles";

class EntryItemDiv extends Element {
  static tagName = "div";

  static defaultProperties = {
    className: "entry-item"
  };
}

export default withStyle(EntryItemDiv)`

  position: relative;
  min-height: ${entryItemDivMinHeight};
  padding-top: ${entryItemDivPaddingTop};

`;
