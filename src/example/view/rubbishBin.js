"use strict";

import { RubbishBin } from "../../index"; ///

export default class extends RubbishBin {
  static defaultProperties = {
    reference: "rubbish-bin",
    references: [
      "first-explorer",
      "second-explorer"
    ]
  };
}
