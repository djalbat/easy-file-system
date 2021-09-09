"use strict";

import EntryItem from "../../item/entry";
import MarkerSVG from "../../svg/entryItem/marker";

export default class MarkerEntryItem extends EntryItem {
  getMarkerSVG() {
    const { MarkerSVG } = this.constructor;

    return MarkerSVG;
  }

  childElements() {
    const MarkerSVG = this.getMarkerSVG();

    return (

      <MarkerSVG/>

    );
  }

  static MarkerSVG = MarkerSVG;

  static defaultProperties = {
    className: "marker"
  };
}
