"use strict";

import withStyle from "easy-with-style";  ///

import EntryDiv from "../../div/entry";

class MarkerEntryDiv extends EntryDiv {
  getName() {
    const { name } = this.properties;

    return name;
  }

  static defaultProperties = {
    className: "marker"
  };
}

export default withStyle(MarkerEntryDiv)`

  width: 4rem;
  height: 2.4rem;
  margin-left: 2rem;
  background-color: yellow;
  background-image: url("css/image/marker.png");
  background-repeat: no-repeat;
  background-position: 0 1rem;

`;
