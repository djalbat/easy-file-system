"use strict";

import MarkerEntryDiv from "../../../div/entry/marker";

import { nameIsBeforeEntryDivName } from "../../../utilities/name";
import { FILE_NAME_TYPE, FILE_NAME_MARKER_TYPE, DIRECTORY_NAME_TYPE } from "../../../types";

export default class FileNameMarkerEntryDiv extends MarkerEntryDiv {
  isBefore(dragEntryDiv) {
    let before;

    const dragEntryDivType = dragEntryDiv.getType();

    switch (dragEntryDivType) {
      case FILE_NAME_TYPE:
        const name = this.getName(),
              dragEntryDivName = dragEntryDiv.getName();

        before = nameIsBeforeEntryDivName(name, dragEntryDivName);

        break;

      case DIRECTORY_NAME_TYPE:
        before = false;

        break;
    }

    return before;
  }

  static type = FILE_NAME_MARKER_TYPE;

  static defaultProperties = {
    className: "file-name"
  };
}
