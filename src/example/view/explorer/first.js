"use strict";

import { Explorer } from "../../../index";  ///

export default class FirstExplorer extends Explorer {
  didMount() {
    const readOnly = true;

    this.addFilePath("directory1/file1.txt", readOnly);
    this.addFilePath("directory1/file2.txt", readOnly);

    this.addDirectoryPath("directory1/directory3", readOnly);
  }

  willUnmount() {
    ///
  }

  static defaultProperties = {
    className: "first",
    reference: "first-explorer",
    references: [
      "rubbish-bin",
      "first-explorer"
    ],
    singleClick: true
  };
}
