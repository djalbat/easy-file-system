"use strict";

import DragEntryItemDiv from "../../../../div/item/entry/drag";

export default class FileNameDragEntryItemDiv extends DragEntryItemDiv {
  doubleClickHandler = (event, element) => {
    const explorer = this.getExplorer(),
          dragEntryItem = this.getDragEntryItem(),
          fileNameDragEntryItem = dragEntryItem;	///

    explorer.openFileNameDragEntryItem(fileNameDragEntryItem);
  }

  childElements() {
    const { name, NameInput, NameSpan, FileNameSVG } = this.properties;

    return ([

      <FileNameSVG/>,
      <NameSpan>
        {name}
      </NameSpan>,
      <NameInput>
        {name}
      </NameInput>

    ]);
  }

  static ignoredProperties = [
    "FileNameSVG"
  ];

  static defaultProperties = {
    className: "file-name"
  };
}
