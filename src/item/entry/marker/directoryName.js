"use strict";

import MarkerEntryItem from "../../../item/entry/marker";

import { FILE_NAME_DRAG_TYPE, DIRECTORY_NAME_DRAG_TYPE, DIRECTORY_NAME_MARKER_TYPE } from "../../../types";

export default class DirectoryNameMarkerEntryItem extends MarkerEntryItem {
  isBefore(dragEntryItem) {
    let before;

    const dragEntryItemType = dragEntryItem.getType();

    switch (dragEntryItemType) {
      case FILE_NAME_DRAG_TYPE:
        before = true;

        break;

      case DIRECTORY_NAME_DRAG_TYPE:
        const name = this.getName(),
              dragEntryItemName = dragEntryItem.getName();

        before = (name.localeCompare(dragEntryItemName) < 0);

        break;
    }

    return before;
  }

  static type = DIRECTORY_NAME_MARKER_TYPE;

  static defaultProperties = {
    className: "directory-name"
  };
}
