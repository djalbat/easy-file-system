"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { dropMixins } from "@djalbat/easy-drag-and-drop";
import { pathUtilities, asynchronousUtilities } from "necessary";

import OpenRubbishBinDiv from "./div/rubbishBin/open";
import ClosedRubbishBinDiv from "./div/rubbishBin/closed";

import { REMOVE } from "./constants";
import { nonNullPathFromName } from "./utilities/pathMap";
import { DIRECTORY_NAME_DRAG_TYPE, FILE_NAME_DRAG_TYPE } from "./types";

const { forEach } = asynchronousUtilities,
      { pathWithoutBottommostNameFromPath } = pathUtilities;

class RubbishBin extends Element {
  getOpenRubbishBinDiv() {
    const { OpenRubbishBinDiv } = this.constructor;

    return OpenRubbishBinDiv;
  }

  getClosedRubbishBinDiv() {
    const { ClosedRubbishBinDiv } = this.constructor;

    return ClosedRubbishBinDiv;
  }

  retrieveMarkerEntryItem() {
    const { markerEntryItem } = globalThis;

    return markerEntryItem;
  }

  openRubbishBin() {
    this.showOpenRubbishBinDiv();
    this.hideClosedRubbishBinDiv();
  }

  closeRubbishBin() {
    this.hideOpenRubbishBinDiv();
    this.showClosedRubbishBinDiv();
  }

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
    const { sourcePath, targetPath } = pathMap;

    explorer.removeFilePath(sourcePath);

    if (targetPath !== null) {
      explorer.addFilePath(targetPath);
    }
  }

  removeDirectoryNameDragEntryItem(pathMap, explorer) {
    const { sourcePath, targetPath } = pathMap;

    explorer.removeDirectoryPath(sourcePath);

    if (targetPath !== null) {
      const { collapsed } = pathMap;

      explorer.addDirectoryPath(targetPath, collapsed);
    }
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

  dropDragEntryItem(dragEntryItem) {
    const dragEntryItemPath = dragEntryItem.getPath(),
          dragEntryItemExplorer = dragEntryItem.getExplorer(),
          dragEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(dragEntryItemPath),
          sourcePath = nonNullPathFromName(dragEntryItemPathWithoutBottommostName), ///
          targetPath = null,	///
          pathMaps = dragEntryItem.getPathMaps(sourcePath, targetPath),
          explorer = dragEntryItemExplorer;  ///

    this.closeRubbishBin();

    this.removeDragEntryItems(pathMaps, explorer);
  }

  dragOutHandler(dragElement, element) {
    const dragEntryItem = dragElement,  ///
          dragEntryItemType = dragEntryItem.getType(),
          markerEntryItemPath = this.getMarkerEntryItemPath(),
          markerEntryItemExplorer = this.getMarkerEntryItemExplorer();

    this.closeRubbishBin();

    markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
  }

  dragOverHandler(dragElement, element) {
    const markerEntryItem = this.retrieveMarkerEntryItem(),
          markerEntryItemPath = markerEntryItem.getPath(),
          markerEntryItemExplorer = markerEntryItem.getExplorer();

    this.openRubbishBin();

    this.setMarkerEntryItemPath(markerEntryItemPath);

    this.setMarkerEntryItemExplorer(markerEntryItemExplorer);

    markerEntryItemExplorer.removeMarker();
  }

  didMount() {
    const { onRemove } = this.properties,
          removeHandler = onRemove; ///

    this.enableDrop();

    this.onDrop(this.dropHandler, this);

    this.onDragOut(this.dragOutHandler, this);

    this.onDragOver(this.dragOverHandler, this);

    removeHandler && this.onRemove(removeHandler, this);

    this.closeRubbishBin();
  }

  willUnmount() {
    const { onRemove } = this.properties,
          removeHandler = onRemove; ///

    this.disableDrop();

    this.offDrop(this.dropHandler, this);

    this.offDragOut(this.dragOutHandler, this);

    this.offDragOver(this.dragOverHandler, this);

    removeHandler && this.offMove(removeHandler, this);
  }

  getMarkerEntryItemPath() {
    const state = this.getState(),
          { markerEntryItemPath } = state;

    return markerEntryItemPath;
  }

  getMarkerEntryItemExplorer() {
    const state = this.getState(),
          { markerEntryItemExplorer } = state;

    return markerEntryItemExplorer;
  }

  setMarkerEntryItemPath(markerEntryItemPath) {
    this.updateState({
      markerEntryItemPath
    });
  }

  setMarkerEntryItemExplorer(markerEntryItemExplorer) {
    this.updateState({
      markerEntryItemExplorer
    });
  }

  childElements() {
    const OpenRubbishBinDiv = this.getOpenRubbishBinDiv(),
          ClosedRubbishBinDiv = this.getClosedRubbishBinDiv();

    return ([

      <OpenRubbishBinDiv/>,
      <ClosedRubbishBinDiv/>

    ]);
  }

  initialise() {
    const markerEntryItemPath = null,
          markerEntryItemExplorer = null;

    this.assignContext();

    this.setState({
      markerEntryItemPath,
      markerEntryItemExplorer
    });
  }

  static OpenRubbishBinDiv = OpenRubbishBinDiv;

  static ClosedRubbishBinDiv = ClosedRubbishBinDiv;

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
  
  display: inline-block;
      
`;
