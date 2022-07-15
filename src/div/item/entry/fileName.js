"use strict";

import EntryItemDiv from "../../../div/item/entry";
import BackgroundDiv from "../../../div/background";

export default class FileNameEntryItemDiv extends EntryItemDiv {
  doubleClickHandler = (event, element) => {
    const explorer = this.getExplorer(),
          parentElement = this.getParentElement(),
          fileNameDragEntryItem = parentElement;	///

    explorer.openFileNameDragEntryItem(fileNameDragEntryItem);

    event.stopPropagation();
  }

  getExplorer() {
    const { explorer } = this.properties;

    return explorer;
  }

  childElements() {
    const { name, NameButton, FileNameSVG } = this.properties;

    return ([

      <FileNameSVG/>,
      <NameButton onDoubleClick={this.doubleClickHandler} >
        {name}
      </NameButton>,
      <BackgroundDiv/>

    ]);
  }

  static defaultProperties = {
    className: "file-name"
  };
}
