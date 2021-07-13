"use strict";

import { REMOVE_ONLY } from "../options";

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

  const dragEntryItem = dragElement,  ///
        dragEntryItemExplorer = dragEntryItem.getExplorer(),
        removeOnlyOptionPresent = dragEntryItemExplorer.isOptionPresent(REMOVE_ONLY);

  if (removeOnlyOptionPresent) {
    return;
  }

  const path = this.getPath(),
        explorer = this.getExplorer(),
        markerEntryItem = this.retrieveMarkerEntryItem(),
        dragEntryItemName = dragEntryItem.getName(),
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
