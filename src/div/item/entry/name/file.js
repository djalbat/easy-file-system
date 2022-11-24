"use strict";

import SVGButton from "../../../../button/svg";
import BackgroundDiv from "../../../../div/background";
import NameEntryItemDiv from "../../../../div/item/entry/name";

export default class FileNameEntryItemDiv extends NameEntryItemDiv {
  nameButtonDoubleClickHandler = (event, element) => {
    const explorer = this.getExplorer(),
          parentElement = this.getParentElement(),
          fileNameDragEntryItem = parentElement;	///

    explorer.openFileNameDragEntryItem(fileNameDragEntryItem);

    event.stopPropagation();
  }

  childElements() {
    const { name, NameInput, NameButton, FileNameSVG } = this.properties;

    return ([

      <SVGButton onClick={this.svgButtonClickHandler} >
        <FileNameSVG/>
      </SVGButton>,
      <NameButton onDoubleClick={this.nameButtonDoubleClickHandler} >
        {name}
      </NameButton>,
      <NameInput onChange={this.nameInputChangeHandler} >
        {name}
      </NameInput>,
      <BackgroundDiv/>

    ]);
  }

  static defaultProperties = {
    className: "file"
  };
}
