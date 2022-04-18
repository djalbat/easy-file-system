"use strict";

import EntryItemDiv from "../../../div/item/entry";
import BackgroundDiv from "../../../div/background";

export default class MarkerEntryItemDiv extends EntryItemDiv {
  childElements() {
    const { MarkerSVG } = this.properties;

    return ([

      <MarkerSVG/>,
      <BackgroundDiv/>

    ]);
  }

  static defaultProperties = {
    className: "file-name"
  };
}
