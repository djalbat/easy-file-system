"use strict";

import { isPathTopmostPath } from "../utilities/path";
import { DRAG_INTO_RUBBISH_BIN_ONLY, DRAG_INTO_TOPMOST_DIRECTORIES_ONLY } from "../options";

function enableMarker() {
  this.onDragOver(dragOverHandler, this);
}

function disableMarker() {
  this.offDragOver(dragOverHandler, this);
}

function dragOverHandler(dragElement, element) {
  const collapsed = this.isCollapsed();

  if (collapsed) {
    return;
  }

  const path = this.getPath(),
        explorer = this.getExplorer(),
        dragEntryItem = dragElement,  ///
        markerEntryItem = this.retrieveMarkerEntryItem(),
        dragEntryItemExplorer = dragEntryItem.getExplorer(),
        dragIntoRubbishBinOnlyOptionPresent = dragEntryItemExplorer.isOptionPresent(DRAG_INTO_RUBBISH_BIN_ONLY),
        dragIntoTopmostDirectoriesOnlyOptionPresent = explorer.isOptionPresent(DRAG_INTO_TOPMOST_DIRECTORIES_ONLY);

  if (dragIntoRubbishBinOnlyOptionPresent) {
    return;
  }

  if (dragIntoTopmostDirectoriesOnlyOptionPresent) {
    const pathTopmostPath = isPathTopmostPath(path);

    if (!pathTopmostPath) {
      return;
    }
  }

  const dragEntryItemName = dragEntryItem.getName(),
        markerEntryItemPath = markerEntryItem.getPath(),
        oldMarkerEntryItemPath = markerEntryItemPath, ///
        newMarkerEntryItemPath = (path === null) ?
                                   dragEntryItemName : ///
                                     `${path}/${dragEntryItemName}`,
        markerEntryItemExplorer = markerEntryItem.getExplorer(),
        oldMarkerEntryItemExplorer = markerEntryItemExplorer, ///
        newMarkerEntryItemExplorer = explorer;  ///

  if ((oldMarkerEntryItemExplorer !== newMarkerEntryItemExplorer) || (oldMarkerEntryItemPath !== newMarkerEntryItemPath)) {
    const dragEntryItemType = dragEntryItem.getType(),
          markerEntryItemPath = newMarkerEntryItemPath; ///

    explorer.removeMarker();

    explorer.addMarker(markerEntryItemPath, dragEntryItemType);
  }
}

export default {
  enableMarker,
  disableMarker
};
