"use strict";

import EntryItem from "../../item/entry";
import MarkerSVG from "../../svg/entryItem/marker";

export default class MarkerEntryItem extends EntryItem {
  childElements() {
    return (

      <MarkerSVG/>

    );
  }
  static defaultProperties = {
    className: "marker"
  };
}
