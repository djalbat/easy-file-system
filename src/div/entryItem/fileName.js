"use strict";

import EntryItemDiv from "../../div/entryItem";
import BackgroundDiv from "../../div/background";

export default class FileNameEntryItemDiv extends EntryItemDiv {
  getExplorer() {
    const { explorer } = this.properties;

    return explorer;
  }

  doubleClickHandler(event, element) {
    const explorer = this.getExplorer(),
          parentElement = this.getParentElement(),
          fileNameDragEntryItem = parentElement;	///

    explorer.openFileNameDragEntryItem(fileNameDragEntryItem);

    event.stopPropagation();
  }

  childElements() {
    const { name, NameButton, FileNameSVG } = this.properties,
          doubleClickHandler = this.doubleClickHandler.bind(this);

    return ([

      <FileNameSVG/>,
      <NameButton onDoubleClick={doubleClickHandler} >
        {name}
      </NameButton>,
      <BackgroundDiv/>

    ]);
  }

  static defaultProperties = {
    className: "file-name"
  };
}
