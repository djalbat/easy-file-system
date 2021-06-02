"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class EntriesDiv extends Element {
  static tagName = "div";

  static defaultProperties = {
    className: "entries"
  };
}

export default withStyle(EntriesDiv)`

  margin-left: 2rem;
  background-color: yellow;
      
`;
