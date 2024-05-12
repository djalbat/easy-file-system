"use strict";

import EntryItemDiv from "../../../div/item/entry";

export default class DragEntryItemDiv extends EntryItemDiv {
  clickHandler = (event, element) => {
    const explorer = this.getExplorer(),
          dragEntryItem = this.getDragEntryItem();

    explorer.clickDragEntryItem(event, element, dragEntryItem);
  }

  didMount() {
    this.onClick(this.clickHandler)
  }

  willUnmount() {
    this.offClick(this.clickHandler);
  }

  static ignoredProperties = [
    "name",
    "NameSpan"
  ];

  static defaultProperties = {
    className: "drag"
  };
}
