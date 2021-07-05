"use strict";

import withStyle from "easy-with-style";  ///

import EntryItem from "../../item/entry";
import MarkerSVG from "../../svg/marker";

class MarkerEntryItem extends EntryItem {
  childElements() {
    return (

      <MarkerSVG/>

    );
  }
  static defaultProperties = {
    className: "marker"
  };
}

export default withStyle(MarkerEntryItem)`

  width: 2rem;
  height: 2.4rem;

`;
