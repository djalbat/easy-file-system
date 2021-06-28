"use strict";

import { pathUtilities } from "necessary";

const { pathWithoutBottommostNameFromPath } = pathUtilities;

function enableMarker() {
  this.onDragOver(dragOverHandler, this);
}

function disableMarker() {
  this.offDragOver(dragOverHandler, this);
}

function dragOverHandler(dragElement) {
  const path = this.getPath(),
        explorer = this.getExplorer(),
        dragEntryItem = dragElement,  ///
        markerEntryItem = explorer.retrieveMarkerEntryItem(),
        markerEntryItemPath = markerEntryItem.getPath(),
        dragEntryItemExplorer = dragEntryItem.getExplorer(),
        markerEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(markerEntryItemPath);

  if ((explorer !== dragEntryItemExplorer) || (path !== markerEntryItemPathWithoutBottommostName)) {
    const dragEntryItemType = dragEntryItem.getType(),
          dragEntryItemName = dragEntryItem.getName(),
          markerEntryItemPath = (path === null) ?
                                  dragEntryItemName : ///
                                    `${path}/${dragEntryItemName}`;

    explorer.removeMarker();

    explorer.addMarker(markerEntryItemPath, dragEntryItemType);
  }
}

export default {
  enableMarker,
  disableMarker
};
