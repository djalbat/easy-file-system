"use strict";

import SVGButton from "../../../button/svg";
import EntryItemDiv from "../../../div/item/entry";
import BackgroundDiv from "../../../div/background";

export default class DirectoryNameEntryItemDiv extends EntryItemDiv {
  toggleButtonMouseDownHandler = (event, element) => {
    const dragEntryItem = this.getDragEntryItem(),
          directoryNameDragEntryItem = dragEntryItem; ///

    directoryNameDragEntryItem.toggle();

    event.stopPropagation();
  }

  nameButtonDoubleClickHandler = (event, element) => {
    const dragEntryItem = this.getDragEntryItem(),
          directoryNameDragEntryItem = dragEntryItem; ///

    directoryNameDragEntryItem.toggle();

    event.stopPropagation();
  }

  childElements() {
    const { name, NameInput, NameButton, ToggleButton, DirectoryNameSVG, onNameChange, onNameCancel, onSVGButtonClick } = this.properties,
          changeHandler = onNameChange, ///
          cancelHandler = onNameCancel, ///
          svgButtonClickHandler = onSVGButtonClick; ///

    return ([

      <ToggleButton onMouseDown={this.toggleButtonMouseDownHandler} />,
      <SVGButton onClick={svgButtonClickHandler} >
        <DirectoryNameSVG/>
      </SVGButton>,
      <NameButton onDoubleClick={this.nameButtonDoubleClickHandler} >
        {name}
      </NameButton>,
      <NameInput onChange={changeHandler} onCancel={cancelHandler} >
        {name}
      </NameInput>,
      <BackgroundDiv/>

    ]);
  }

  static ignoredProperties = [
    "name",
    "NameInput",
    "NameButton",
    "ToggleButton",
    "DirectoryNameSVG",
    "onNameChange",
    "onNameCancel",
    "onSVGButtonClick"
  ];

  static defaultProperties = {
    className: "directory-name"
  };
}
