"use strict";

import { DirectoryNameDragEntryItem } from "../../../../index"; ///

import { FORWARD_SLASH } from "../../../constants";

export default class extends DirectoryNameDragEntryItem {
  dragOverHandler(dragElement, element) {
    const path = this.getPath();

    const pathTopmostPath = isPathTopmostPath(path);

    if (pathTopmostPath) {
      return;
    }

    super.dragOverHandler(dragElement, element);
  }
}

function isPathTopmostPath(path) {
  const names = path.split(FORWARD_SLASH),
        namesLength = names.length,
        topmostPath = (namesLength === 1);

  return topmostPath;
}
