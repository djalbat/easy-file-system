"use strict";

function enableMarker() {
  this.onDragOver(dragOverHandler, this);
}

function disableMarker() {
  this.offDragOver(dragOverHandler, this);
}

function dragOverHandler(dragElement, element) {
  const path = this.getPath(),
        explorer = this.getExplorer(),
        dragEntryItem = dragElement,  ///
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
