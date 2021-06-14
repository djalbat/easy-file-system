"use strict";

import { pathUtilities } from "necessary";

const { pathWithoutBottommostNameFromPath } = pathUtilities;

function enableMarker() {
  // this.onDrop(dropHandler, this);

  this.onDragOver(dragOverHandler, this);
}

function disableMarker() {
  // this.offDrop(dropHandler, this);

  this.offDragOver(dragOverHandler, this);
}

function dropHandler(dragElement) {
  const name = this.getName(),
        dragEntryItem = dragElement, ///
        dragEntryItemName = dragEntryItem.getName();

  console.log(`Drop '${dragEntryItemName}' onto ${name}'`)
}

function dragOverHandler(dragElement) {
  const path = this.getPath(),
        explorer = this.getExplorer(),
        markerEntryItem = explorer.retrieveMarkerEntryItem(),
        markerEntryItemPath = markerEntryItem.getPath(),
        markerEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(markerEntryItemPath);

  console.log(path)

  if (path !== markerEntryItemPathWithoutBottommostName) {
    const dragEntryItem = dragElement, ///
          dragEntryItemType = dragEntryItem.getType(),
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
