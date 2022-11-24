"use strict";

import SVGButton from "../../../button/svg";
import EntryItemDiv from "../../../div/item/entry";
import BackgroundDiv from "../../../div/background";

export default class FileNameEntryItemDiv extends EntryItemDiv {
  nameButtonDoubleClickHandler = (event, element) => {
    const explorer = this.getExplorer(),
          parentElement = this.getParentElement(),
          fileNameDragEntryItem = parentElement;	///

    explorer.openFileNameDragEntryItem(fileNameDragEntryItem);

    event.stopPropagation();
  }

  svgButtonClickHandler = (event, element) => {
    const explorer = this.getExplorer(),
          parentElement = this.getParentElement(),
          dragEntryItem = parentElement;	///

    explorer.selectDragEntryItem(dragEntryItem);

    event.stopPropagation();
  }

  childElements() {
    const { name, NameButton, FileNameSVG } = this.properties;

    return ([

      <SVGButton onClick={this.svgButtonClickHandler} >
        <FileNameSVG/>
      </SVGButton>,
      <NameButton onDoubleClick={this.nameButtonDoubleClickHandler} >
        {name}
      </NameButton>,
      <BackgroundDiv/>

    ]);
  }

  static defaultProperties = {
    className: "file-name"
  };
}
