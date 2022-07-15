"use strict";

import EntryItemDiv from "../../../div/item/entry";
import BackgroundDiv from "../../../div/background";

export default class DirectoryNameEntryItemDiv extends EntryItemDiv {
  toggleButtonMouseDownHandler = (event, element) => {
    const parentElement = this.getParentElement(),
          directoryNameDragEntryItem = parentElement; ///

    directoryNameDragEntryItem.toggle();

    event.stopPropagation();
  }

  doubleClickHandler = (event, element) => {
    const parentElement = this.getParentElement(),
          directoryNameDragEntryItem = parentElement; ///

    directoryNameDragEntryItem.toggle();

    event.stopPropagation();
  }

  getExplorer() {
    const { explorer } = this.properties;

    return explorer;
  }

  childElements() {
    const { name, NameButton, ToggleButton, DirectoryNameSVG } = this.properties;

    return ([

      <ToggleButton onMouseDown={this.toggleButtonMouseDownHandler} />,
      <DirectoryNameSVG/>,
      <NameButton onDoubleClick={this.doubleClickHandler} >
        {name}
      </NameButton>,
      <BackgroundDiv/>

    ]);
  }

  static defaultProperties = {
    className: "directory-name"
  };
}
