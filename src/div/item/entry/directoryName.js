"use strict";

import SVGButton from "../../../button/svg";
import EntryItemDiv from "../../../div/item/entry";
import BackgroundDiv from "../../../div/background";

export default class DirectoryNameEntryItemDiv extends EntryItemDiv {
  toggleButtonMouseDownHandler = (event, element) => {
    const dragEntryItem = this.getDragEntryItem(),
          directoryNameDragEntryItem = dragEntryItem; ///

    directoryNameDragEntryItem.toggle();

    event.stopPropagation();
  }

  nameButtonDoubleClickHandler = (event, element) => {
    const dragEntryItem = this.getDragEntryItem(),
          directoryNameDragEntryItem = dragEntryItem; ///

    directoryNameDragEntryItem.toggle();

    event.stopPropagation();
  }

  childElements() {
    const { name, NameInput, NameButton, ToggleButton, DirectoryNameSVG } = this.properties;

    return ([

      <ToggleButton onMouseDown={this.toggleButtonMouseDownHandler} />,
      <SVGButton>
        <DirectoryNameSVG/>
      </SVGButton>,
      <NameButton onDoubleClick={this.nameButtonDoubleClickHandler} >
        {name}
      </NameButton>,
      <NameInput>
        {name}
      </NameInput>,
      <BackgroundDiv/>

    ]);
  }

  static ignoredProperties = [
    "name",
    "NameInput",
    "NameButton",
    "ToggleButton",
    "DirectoryNameSVG"
  ];

  static defaultProperties = {
    className: "directory-name"
  };
}
