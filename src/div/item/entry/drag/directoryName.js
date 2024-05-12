"use strict";

import DragEntryItemDiv from "../../../../div/item/entry/drag";

export default class DirectoryNameDragEntryItemDiv extends DragEntryItemDiv {
  toggleButtonClickHandler = (event, element) => {
    const dragEntryItem = this.getDragEntryItem(),
          directoryNameDragEntryItem = dragEntryItem; ///

    directoryNameDragEntryItem.doubleClick(event, element); ///

    event.stopPropagation();
  }

  childElements() {
    const { name, NameSpan, ToggleButton, DirectoryNameSVG } = this.properties;

    return ([

      <ToggleButton onClick={this.toggleButtonClickHandler} />,
      <DirectoryNameSVG/>,
      <NameSpan>
        {name}
      </NameSpan>

    ]);
  }

  static ignoredProperties = [
    "ToggleButton",
    "DirectoryNameSVG"
  ];

  static defaultProperties = {
    className: "directory-name"
  };
}
