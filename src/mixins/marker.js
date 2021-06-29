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
        dragEntryItemType = dragEntryItem.getType(),
        dragEntryItemName = dragEntryItem.getName(),
        markerEntryItemPath = (path === null) ?
                                dragEntryItemName : ///
                                  `${path}/${dragEntryItemName}`;

  explorer.removeMarker();

  explorer.addMarker(markerEntryItemPath, dragEntryItemType);
}

export default {
  enableMarker,
  disableMarker
};
