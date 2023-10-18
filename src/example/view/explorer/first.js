"use strict";

import { Explorer } from "../../../index";  ///

export default class FirstExplorer extends Explorer {
  initialise() {
    super.initialise();

    const readOnly = true;

    this.addFilePath("directory1/file1.txt", readOnly);
    this.addFilePath("directory1/file2.txt", readOnly);

    this.addDirectoryPath("directory1/directory3", readOnly);
  }

  static defaultProperties = {
    className: "first",
    reference: "first-explorer",
    singleClick: true
  };
}
