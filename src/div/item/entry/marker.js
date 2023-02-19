"use strict";

import EntryItemDiv from "../../../div/item/entry";

export default class MarkerEntryItemDiv extends EntryItemDiv {
  childElements() {
    const { MarkerSVG } = this.properties;

    return ([

      <MarkerSVG/>

    ]);
  }

  static defaultProperties = {
    className: "file-name"
  };
}
