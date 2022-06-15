"use strict";

import EntryItem from "../../item/entry";
import MarkerSVG from "../../svg/marker";
import MarkerEntryItemDiv from "../../div/item/entry/marker";

export default class MarkerEntryItem extends EntryItem {
  childElements() {
    const { MarkerSVG } = this.constructor;

    return (

      <MarkerEntryItemDiv MarkerSVG={MarkerSVG} />

    );
  }

  static MarkerSVG = MarkerSVG;

  static defaultProperties = {
    className: "marker"
  };
}
