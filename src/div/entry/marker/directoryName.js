"use strict";

import MarkerEntryDiv from "../../../div/entry/marker";

import { FILE_NAME_TYPE, DIRECTORY_NAME_TYPE, DIRECTORY_NAME_MARKER_TYPE } from "../../../types";

export default class DirectoryNameMarkerEntryDiv extends MarkerEntryDiv {
  isBefore(dragEntryDiv) {
    let before;

    const dragEntryDivType = dragEntryDiv.getType();

    switch (dragEntryDivType) {
      case FILE_NAME_TYPE:
        before = true;

        break;

      case DIRECTORY_NAME_TYPE:
        const name = this.getName(),
              dragEntryDivName = dragEntryDiv.getName();

        before = (name.localeCompare(dragEntryDivName) < 0);

        break;
    }

    return before;
  }

  static type = DIRECTORY_NAME_MARKER_TYPE;

  static defaultProperties = {
    className: "directory-name"
  };
}
