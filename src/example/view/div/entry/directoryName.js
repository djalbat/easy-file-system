"use strict";

import withStyle from "easy-with-style";  ///

import EntryDiv from "../../div/entry";

class DirectoryNameEntryDiv extends EntryDiv {
  childElements() {
    const { childElements, directoryName } = this.properties;

    return ([
      directoryName,
      ...childElements
    ]);
  }

  static defaultProperties = {
    className: "directory-name"
  };
}

export default withStyle(DirectoryNameEntryDiv)`

  font-size: 2rem;
  background-color: lightblue;
      
`;
