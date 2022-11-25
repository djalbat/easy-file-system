"use strict";

import { RubbishBin } from "../../index"; ///

export default class extends RubbishBin {
  static defaultProperties = {
    ignoredReferences: [ "second-explorer" ]
  };
}
