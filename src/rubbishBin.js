"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { asynchronousUtilities } from "necessary";

import dropMixins from "./mixins/drop";

import { REMOVE } from "./constants";
import { FILE_NAME_DRAG_TYPE, DIRECTORY_NAME_DRAG_TYPE } from "./types";

const { forEach } = asynchronousUtilities;

class RubbishBin extends Element {
  removeDragEntryItem(pathMap, explorer) {
    const { type } = pathMap;

    switch(type) {
      case FILE_NAME_DRAG_TYPE :
        this.removeFileNameDragEntryItem(pathMap, explorer);

        break;
    }

    switch(type) {
      case DIRECTORY_NAME_DRAG_TYPE :
        this.removeDirectoryNameDragEntryItem(pathMap, explorer);

        break;
    }
  }

  removeDragEntryItems(pathMaps, explorer) {
    this.callRemoveHandlers(pathMaps, () => {
      pathMaps.forEach((pathMap) => this.removeDragEntryItem(pathMap, explorer));
    });
  }

  removeFileNameDragEntryItem(pathMap, explorer) {
    const { sourcePath } = pathMap;

    explorer.removeFilePath(sourcePath);
  }

  removeDirectoryNameDragEntryItem(pathMap, explorer) {
    const { sourcePath } = pathMap;

    explorer.removeDirectoryPath(sourcePath);
  }

  callRemoveHandlers(pathMaps, done) {
    const eventType = REMOVE,
          eventListeners = this.findEventListeners(eventType);

    forEach(eventListeners, (eventListener, next) => {
      const { handler, element } = eventListener,
            removeHandler = handler,  ///
            done = next;  ///

      removeHandler.call(element, pathMaps, done);
    }, done);
  }

  onRemove(removeHandler, element) {
    const eventType = REMOVE,
          handler = removeHandler;  ///

    this.addEventListener(eventType, handler, element);
  }

  offRemove(removeHandler, element) {
    const eventType = REMOVE,
          handler = removeHandler;  ///

    this.removeEventListener(eventType, handler, element);
  }

  dropHandler(dragElement, element) {
    const dragEntryItem = dragElement;	///

    this.dropDragEntryItem(dragEntryItem);
  }

  dragOverHandler(dragElement, element) {
    debugger

    // const dragEntryItem = dragElement,  ///
    //       markerEntryItem = this.retrieveMarkerEntryItem(),
    //       dragEntryItemName = dragEntryItem.getName(),
    //       markerEntryItemPath = markerEntryItem.getPath(),
    //       oldMarkerEntryItemPath = markerEntryItemPath, ///
    //       newMarkerEntryItemPath = (path === null) ?
    //                                   dragEntryItemName : ///
    //                                     `${path}/${dragEntryItemName}`,
    //       markerEntryItemExplorer = markerEntryItem.getExplorer(),
    //       oldMarkerEntryItemExplorer = markerEntryItemExplorer, ///
    //       newMarkerEntryItemExplorer = explorer;  ///
    //
    // if ((oldMarkerEntryItemExplorer !== newMarkerEntryItemExplorer) || (oldMarkerEntryItemPath !== newMarkerEntryItemPath)) {
    //   const dragEntryItemType = dragEntryItem.getType(),
    //         markerEntryItemPath = newMarkerEntryItemPath; ///
    //
    //   explorer.removeMarker();
    //
    //   explorer.addMarker(markerEntryItemPath, dragEntryItemType);
    // }
  }

  dropDragEntryItem(dragEntryItem) {
    // const markerEntryItem = this.retrieveMarkerEntryItem(),
    //       dragEntryItemPath = dragEntryItem.getPath(),
    //       markerEntryItemPath = markerEntryItem.getPath(),
    //       dragEntryItemExplorer = dragEntryItem.getExplorer(),
    //       markerEntryItemExplorer = markerEntryItem.getExplorer();
    //
    // if ((dragEntryItemExplorer !== markerEntryItemExplorer) || (dragEntryItemPath !== markerEntryItemPath)) {
    //   const dragEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(dragEntryItemPath),
    //         markerEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(markerEntryItemPath),
    //         sourcePath = dragEntryItemPathWithoutBottommostName,	///
    //         targetPath = markerEntryItemPathWithoutBottommostName,	///
    //         pathMaps = dragEntryItem.getPathMaps(sourcePath, targetPath),
    //         explorer = this;  ///
    //
    //   dragEntryItemExplorer.moveDragEntryItems(pathMaps, explorer);
    //
    //   dragEntryItemExplorer.removeMarker();
    // }
  }

  didMount() {
    const { onRemove } = this.properties,
          removeHandler = onRemove; ///

    this.enableDrop();

    this.onDrop(this.dropHandler, this);

    this.onDragOver(this.dragOverHandler, this);

    removeHandler && this.onRemove(removeHandler, this);
  }

  willUnmount() {
    const { onRemove } = this.properties,
          removeHandler = onRemove; ///

    this.disableDrop();

    this.offDrop(this.dropHandler, this);

    this.offDragOver(this.dragOverHandler, this);

    removeHandler && this.offMove(removeHandler, this);
  }

  static tagName = "div";

  static ignoredProperties = [
    "onRemove"
  ];

  static defaultProperties = {
    className: "rubbish-bin"
  };
}

Object.assign(RubbishBin.prototype, dropMixins);

export default withStyle(RubbishBin)`
  
  min-width: 10rem;
  min-height: 10rem;
      
`;
