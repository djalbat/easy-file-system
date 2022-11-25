"use strict";

import { Explorer } from "../../../index";  ///

export default class FirstExplorer extends Explorer {
  initialise() {
    super.initialise();

    this.addFilePath("directory1/file1.txt");
    this.addFilePath("directory1/file2.txt");
    this.addFilePath("directory1/file3.txt");
  }

  static defaultProperties = {
    className: "first",
    reference: "first-explorer"
  };
}
