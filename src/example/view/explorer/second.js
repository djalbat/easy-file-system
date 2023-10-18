"use strict";

import { Explorer } from "../../../index";  ///

export default class SecondExplorer extends Explorer {
  initialise() {
    super.initialise();

    this.addFilePath("directory2/file4.txt");
    this.addFilePath("directory2/file5.txt");
  }

  static defaultProperties = {
    className: "first",
    reference: "second-explorer",
    singleClick: false,
    ignoredReferences: [ "first-explorer" ]
  };
}
