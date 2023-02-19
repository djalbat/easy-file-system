"use strict";

import DragEntryItemDiv from "../../../../div/item/entry/drag";

export default class DirectoryNameDragEntryItemDiv extends DragEntryItemDiv {
  toggleButtonMouseDownHandler = (event, element) => {
    const dragEntryItem = this.getDragEntryItem(),
          directoryNameDragEntryItem = dragEntryItem; ///

    directoryNameDragEntryItem.toggle();
  }

  doubleClickHandler = (event, element) => {
    const dragEntryItem = this.getDragEntryItem(),
          directoryNameDragEntryItem = dragEntryItem; ///

    directoryNameDragEntryItem.toggle();
  }

  childElements() {
    const { name, NameInput, NameButton, ToggleButton, DirectoryNameSVG } = this.properties;

    return ([

      <ToggleButton onMouseDown={this.toggleButtonMouseDownHandler} />,
      <DirectoryNameSVG/>,
      <NameButton>
        {name}
      </NameButton>,
      <NameInput>
        {name}
      </NameInput>

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
