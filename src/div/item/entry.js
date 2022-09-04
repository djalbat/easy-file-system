"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { entryItemDivHeight, entryItemDivPaddingTop } from "../../styles";

class EntryItemDiv extends Element {
  static tagName = "div";

  static defaultProperties = {
    className: "entry-item"
  };
}

export default withStyle(EntryItemDiv)`

  height: ${entryItemDivHeight};
  padding-top: ${entryItemDivPaddingTop};

`;
