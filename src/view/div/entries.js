"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import FileNameEntryDiv from "../div/entry/fileName";

class EntriesDiv extends Element {
  childElements() {
    return ([

      <FileNameEntryDiv fileName="test.jpg" />

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "entries"
  };
}

export default withStyle(EntriesDiv)`

  background-color: yellow;
      
`;
