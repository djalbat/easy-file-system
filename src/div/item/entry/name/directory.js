"use strict";

import SVGButton from "../../../../button/svg";
import BackgroundDiv from "../../../../div/background";
import NameEntryItemDiv from "../../../../div/item/entry/name";

export default class DirectoryNameEntryItemDiv extends NameEntryItemDiv {
  toggleButtonMouseDownHandler = (event, element) => {
    const parentElement = this.getParentElement(),
          directoryNameDragEntryItem = parentElement; ///

    directoryNameDragEntryItem.toggle();

    event.stopPropagation();
  }

  nameButtonDoubleClickHandler = (event, element) => {
    const parentElement = this.getParentElement(),
          directoryNameDragEntryItem = parentElement; ///

    directoryNameDragEntryItem.toggle();

    event.stopPropagation();
  }

  childElements() {
    const { name, NameInput, NameButton, ToggleButton, DirectoryNameSVG } = this.properties;

    return ([

      <ToggleButton onMouseDown={this.toggleButtonMouseDownHandler} />,
      <SVGButton onClick={this.svgButtonClickHandler} >
        <DirectoryNameSVG/>
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
    className: "directory"
  };
}
