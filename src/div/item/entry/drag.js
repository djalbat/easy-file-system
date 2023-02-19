"use strict";

import EntryItemDiv from "../../../div/item/entry";

export default class DragEntryItemDiv extends EntryItemDiv {
  mouseDownHandler = (event, element) => {
    const explorer = this.getExplorer(),
          dragEntryItem = this.getDragEntryItem();

    explorer.selectDragEntryItem(dragEntryItem);
  }

  didMount() {
    this.onMouseDown(this.mouseDownHandler);

    this.onDoubleClick(this.doubleClickHandler);
  }

  willUnmount() {
    this.offMouseDown(this.mouseDownHandler);

    this.offDoubleClick(this.doubleClickHandler);
  }

  static ignoredProperties = [
    "name",
    "NameSpan",
    "NameInput"
  ];

  static defaultProperties = {
    className: "drag"
  };
}
