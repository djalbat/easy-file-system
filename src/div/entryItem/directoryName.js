"use strict";

import EntryItemDiv from "../../div/entryItem";
import BackgroundDiv from "../../div/background";

export default class DirectoryNameEntryItemDiv extends EntryItemDiv {
  getExplorer() {
    const { explorer } = this.properties;

    return explorer;
  }

  toggleButtonMouseDownHandler(event, element) {
    const parentElement = this.getParentElement(),
          directoryNameDragEntryItem = parentElement; ///

    directoryNameDragEntryItem.toggle();

    event.stopPropagation();
  }

  childElements() {
    const { name, NameButton, ToggleButton, DirectoryNameSVG } = this.properties,
          toggleButtonMouseDownHandler = this.toggleButtonMouseDownHandler.bind(this);

    return ([

      <ToggleButton onMouseDown={toggleButtonMouseDownHandler} />,
      <DirectoryNameSVG/>,
      <NameButton>
        {name}
      </NameButton>,
      <BackgroundDiv/>

    ]);
  }

  static defaultProperties = {
    className: "directory-name"
  };
}
