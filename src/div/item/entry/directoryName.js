"use strict";

import EntryItemDiv from "../../../div/item/entry";
import BackgroundDiv from "../../../div/background";

export default class DirectoryNameEntryItemDiv extends EntryItemDiv {
  getExplorer() {
    const { explorer } = this.properties;

    return explorer;
  }

  doubleClickHandler(event, element) {
    const parentElement = this.getParentElement(),
          directoryNameDragEntryItem = parentElement; ///

    directoryNameDragEntryItem.toggle();

    event.stopPropagation();
  }

  toggleButtonMouseDownHandler(event, element) {
    const parentElement = this.getParentElement(),
          directoryNameDragEntryItem = parentElement; ///

    directoryNameDragEntryItem.toggle();

    event.stopPropagation();
  }

  childElements() {
    const { name, NameButton, ToggleButton, DirectoryNameSVG } = this.properties,
          toggleButtonMouseDownHandler = this.toggleButtonMouseDownHandler.bind(this),
          doubleClickHandler = this.doubleClickHandler.bind(this);

    return ([

      <ToggleButton onMouseDown={toggleButtonMouseDownHandler} />,
      <DirectoryNameSVG/>,
      <NameButton onDoubleClick={doubleClickHandler} >
        {name}
      </NameButton>,
      <BackgroundDiv/>

    ]);
  }

  static defaultProperties = {
    className: "directory-name"
  };
}
