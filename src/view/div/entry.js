"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import dragMixins from "../../mixins/drag";

class EntryDiv extends Element {
  getCollapsedBounds() {
    const bounds = this.getBounds(),
          collapsedBounds = bounds; ///

    return collapsedBounds;
  }

  didMount() {
    this.enableDrag();
  }

  willUnmount() {
    this.disableDrag();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "entry"
  };
}

Object.assign(EntryDiv.prototype, dragMixins);

export default withStyle(EntryDiv)`

  width: fit-content;

  .drag {
    z-index: 1;
    position: fixed;
  }
  
`;
