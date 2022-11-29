"use strict";

import SVGButton from "../../../button/svg";
import EntryItemDiv from "../../../div/item/entry";
import BackgroundDiv from "../../../div/background";

export default class FileNameEntryItemDiv extends EntryItemDiv {
  nameButtonDoubleClickHandler = (event, element) => {
    const explorer = this.getExplorer(),
          dragEntryItem = this.getDragEntryItem(),
          fileNameDragEntryItem = dragEntryItem;	///

    explorer.openFileNameDragEntryItem(fileNameDragEntryItem);

    event.stopPropagation();
  }

  childElements() {
    const { name, NameInput, NameButton, FileNameSVG } = this.properties;

    return ([

      <SVGButton>
        <FileNameSVG/>
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
    "FileNameSVG"
  ];

  static defaultProperties = {
    className: "file-name"
  };
}
