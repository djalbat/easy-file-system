"use strict";

import withStyle from "easy-with-style";  ///

import EntryItem from "../../item/entry";

class MarkerEntryItem extends EntryItem {
  static defaultProperties = {
    className: "marker"
  };
}

export default withStyle(MarkerEntryItem)`

  width: 2rem;
  height: 2.4rem;
  background-color: yellow;
  background-image: url("css/image/marker.png");
  background-repeat: no-repeat;
  background-position: 0 1rem;

`;
