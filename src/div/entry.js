"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import dragMixins from "../mixins/drag";

class EntryDiv extends Element {
  getCollapsedBounds() {
    const bounds = this.getBounds(),
          collapsedBounds = bounds; ///

    return collapsedBounds;
  }

  didMount() {
    this.enableDrag();

    this.onMouseDown(mouseDownHandler, this);
  }

  willUnmount() {
    this.disableDrag();

    this.offMouseDown(mouseDownHandler, this);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "entry"
  };
}

Object.assign(EntryDiv.prototype, dragMixins);

export default withStyle(EntryDiv)`

  width: fit-content;
  cursor: pointer;

  .drag {
    z-index: 1;
    position: fixed;
    pointer-events: none;
  }
  
`;

function mouseDownHandler(event, element) {
  const entry = element,  ///
        { properties } = entry,
        { fileName, directoryName } = properties;

  event.stopPropagation();

  console.log(`mouse down - '${fileName || directoryName}'`)
}
