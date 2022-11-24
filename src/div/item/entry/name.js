"use strict";

import EntryItemDiv from "../../../div/item/entry";

export default class NameEntryItemDiv extends EntryItemDiv {
  nameInputChangeHandler = (event, element) => {

  }

  svgButtonClickHandler = (event, element) => {
    const explorer = this.getExplorer(),
          parentElement = this.getParentElement(),
          dragEntryItem = parentElement;  ///

    explorer.selectDragEntryItem(dragEntryItem);

    event.stopPropagation();
  }

  didMount() {
    this.hideNameInput();
  }

  willUnmount() {
    ///
  }

  initialise() {
    this.assignContext([
      "showNameInput",
      "hideNameInput",
      "showNameButton",
      "hideNameButton"
    ]);
  }

  static defaultProperties = {
    className: "name"
  };
}
