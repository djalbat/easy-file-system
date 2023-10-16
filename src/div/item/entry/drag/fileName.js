"use strict";

import DragEntryItemDiv from "../../../../div/item/entry/drag";

export default class FileNameDragEntryItemDiv extends DragEntryItemDiv {
  childElements() {
    const { name, NameSpan, FileNameSVG } = this.properties;

    return ([

      <FileNameSVG/>,
      <NameSpan>
        {name}
      </NameSpan>

    ]);
  }

  static ignoredProperties = [
    "FileNameSVG"
  ];

  static defaultProperties = {
    className: "file-name"
  };
}
