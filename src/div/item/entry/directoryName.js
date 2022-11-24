"use strict";

import SVGButton from "../../../button/svg";
import EntryItemDiv from "../../../div/item/entry";
import BackgroundDiv from "../../../div/background";

export default class DirectoryNameEntryItemDiv extends EntryItemDiv {
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

  svgButtonClickHandler = (event, element) => {
    console.log("directory click!")
  }

  getExplorer() {
    const { explorer } = this.properties;

    return explorer;
  }

  childElements() {
    const { name, NameButton, ToggleButton, DirectoryNameSVG } = this.properties;

    return ([

      <ToggleButton onMouseDown={this.toggleButtonMouseDownHandler} />,
      <SVGButton onClick={this.svgButtonClickHandler} >
        <DirectoryNameSVG/>
      </SVGButton>,
      <NameButton onDoubleClick={this.nameButtonDoubleClickHandler} >
        {name}
      </NameButton>,
      <BackgroundDiv/>

    ]);
  }

  static defaultProperties = {
    className: "directory-name"
  };
}
