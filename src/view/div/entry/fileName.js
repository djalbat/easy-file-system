"use strict";

import withStyle from "easy-with-style";  ///

import EntryDiv from "../../div/entry";

class FileNameEntryDiv extends EntryDiv {
  childElements() {
    const { fileName } = this.properties;

    return fileName;
  }

  static defaultProperties = {
    className: "file-name"
  };
}

export default withStyle(FileNameEntryDiv)`

  font-size: 2rem;
  background-color: lightgreen;
      
`;
