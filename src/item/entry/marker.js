"use strict";

import withStyle from "easy-with-style";  ///

import EntryItem from "../../item/entry";
import MarkerSVG from "../../svg/entryItem/marker";

import { entryItemMinHeight } from "../../styles";

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

  min-height: ${entryItemMinHeight};

`;
