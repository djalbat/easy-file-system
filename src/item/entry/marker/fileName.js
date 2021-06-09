"use strict";

import MarkerEntryItem from "../../../item/entry/marker";

import { nameIsBeforeEntryItemName } from "../../../utilities/name";
import { FILE_NAME_TYPE, FILE_NAME_MARKER_TYPE, DIRECTORY_NAME_TYPE } from "../../../types";

export default class FileNameMarkerEntryItem extends MarkerEntryItem {
  isBefore(dragEntryItem) {
    let before;

    const dragEntryItemType = dragEntryItem.getType();

    switch (dragEntryItemType) {
      case FILE_NAME_TYPE:
        const name = this.getName(),
              dragEntryItemName = dragEntryItem.getName();

        before = nameIsBeforeEntryItemName(name, dragEntryItemName);

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
