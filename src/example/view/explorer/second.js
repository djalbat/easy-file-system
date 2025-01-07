"use strict";

import { Explorer } from "../../../index";  ///

export default class SecondExplorer extends Explorer {
  didMount() {
    this.addFilePath("directory2/file4.txt");
    this.addFilePath("directory2/file5.txt");
  }

  willUnmount() {
    ///
  }

  static defaultProperties = {
    className: "first",
    reference: "second-explorer",
    references: [
      "first-explorer"
    ],
    singleClick: false
  };
}
