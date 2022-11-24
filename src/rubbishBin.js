"use strict";

import withStyle from "easy-with-style";  ///

import { dropMixins } from "easy-drag-and-drop";
import { Element, eventTypes } from "easy";
import { asynchronousUtilities } from "necessary";

import DragEntryItem from "./item/entry/drag";
import OpenRubbishBinSVG from "./svg/rubbishBin/open";
import ClosedRubbishBinSVG from "./svg/rubbishBin/closed";
import FileNameMarkerEntryItem from "./item/entry/marker/fileName";
import DirectoryNameMarkerEntryItem from "./item/entry/marker/directoryName";

import { nonNullPathFromName } from "./utilities/pathMap";
import { sourceEntryPathFromDragEntryItemPath } from "./utilities/pathMap";
import { DIRECTORY_NAME_DRAG_ENTRY_TYPE, FILE_NAME_DRAG_ENTRY_TYPE } from "./entryTypes";

const { forEach } = asynchronousUtilities,
      { REMOVE_EVENT_TYPE } = eventTypes;

class RubbishBin extends Element {
  dropHandler = (dragElement, aborted, element, done) => {
    const dragElementDragEntryItem = (dragElement instanceof DragEntryItem);

    if (!dragElementDragEntryItem) {
      done();

      return;
    }

    const dragEntryItem = dragElement,  ///
          markerEntryItem = this.retrieveMarkerEntryItem(),
          markerEntryItemExplorer = markerEntryItem.getExplorer();

    if (aborted) {
      markerEntryItemExplorer.removeMarker();

      done();

      return;
    }

    markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, done);
  }

  dragOverHandler = (dragElement, element) => {
    const dragElementDragEntryItem = (dragElement instanceof DragEntryItem);

    if (!dragElementDragEntryItem) {
      return;
    }

    const dragEntryItem = dragElement,  ///
          dragEntryItemExplorer = dragEntryItem.getExplorer(),
          dragEntryItemExplorerIgnored = this.isExplorerIgnored(dragEntryItemExplorer);

    if (dragEntryItemExplorerIgnored) {
      return;
    }

    const markerEntryItem = this.retrieveMarkerEntryItem();

    let markerEntryItemPath = markerEntryItem.getPath(),
        markerEntryItemExplorer = markerEntryItem.getExplorer(),
        previousMarkerEntryItemPath = markerEntryItemPath, ///
        previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///

    markerEntryItemPath = null; ///

    markerEntryItemExplorer = this;  ///

    if ((markerEntryItemExplorer !== previousMarkerEntryItemExplorer) || (markerEntryItemPath !== previousMarkerEntryItemPath)) {
      const dragEntryItemType = dragEntryItem.getType();

      previousMarkerEntryItemExplorer.removeMarker();

      markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
    }
  }

  isExplorerIgnored(explorer) {
    const reference = explorer.getReference(),
          ignoredReferences = this.getIgnoredReferences(),
          ignoredReferencesIncludesReference = ignoredReferences.includes(reference),
          explorerIgnored = ignoredReferencesIncludesReference;	///

    return explorerIgnored;
  }

  getIgnoredReferences() {
    const { ignoredReferences = [] } = this.properties;

    return ignoredReferences;
  }

  retrieveMarkerEntryItem() {
    const { markerEntryItem } = globalThis;

    return markerEntryItem;
  }

  addMarker(markerEntryItemPath, dragEntryItemType) {
    const markerEntryItemName = markerEntryItemPath;  ///

    this.addMarkerEntryItem(markerEntryItemName, dragEntryItemType);

    this.open();
  }

  removeMarker() {
    this.removeMarkerEntryItem();

    this.close();
  }

  addMarkerEntryItem(markerEntryItemName, dragEntryItemType) {
    let markerEntryItem;

    const name = markerEntryItemName, ///
          type = dragEntryItemType;  ///

    switch (type) {
      case FILE_NAME_DRAG_ENTRY_TYPE : {
        const explorer = this,  ///
              fileNameMarkerEntryItem =

                <FileNameMarkerEntryItem name={name} explorer={explorer} />

              ;

        markerEntryItem = fileNameMarkerEntryItem;  ///

        break;
      }

      case DIRECTORY_NAME_DRAG_ENTRY_TYPE : {
        const explorer = this,  ///
              directoryNameMarkerEntryItem =

                <DirectoryNameMarkerEntryItem name={name} explorer={explorer} />

              ;

        markerEntryItem = directoryNameMarkerEntryItem; ///

        break;
      }
    }

    Object.assign(globalThis, {
      markerEntryItem
    });
  }

  removeMarkerEntryItem() {
    const markerEntryItem = null;

    Object.assign(globalThis, {
      markerEntryItem
    });
  }

  onRemove(removeHandler, element) {
    const eventType = REMOVE_EVENT_TYPE,
          handler = removeHandler;  ///

    this.addEventListener(eventType, handler, element);
  }

  offRemove(removeHandler, element) {
    const eventType = REMOVE_EVENT_TYPE,
          handler = removeHandler;  ///

    this.removeEventListener(eventType, handler, element);
  }

  dropDragEntryItem(dragEntryItem, done) {
    const dragEntryItemPath = dragEntryItem.getPath(),
          dragEntryItemExplorer = dragEntryItem.getExplorer(),
          sourceEntryPath = sourceEntryPathFromDragEntryItemPath(dragEntryItemPath),
          targetEntryPath = null,
          pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath),
          explorer = dragEntryItemExplorer;  ///

    this.removeDragEntryItems(pathMaps, explorer, () => {
      this.removeMarker();

      done();
    });
  }

  removeDragEntryItems(pathMaps, explorer, done) {
    this.callRemoveHandlersAsync(pathMaps, () => {
      pathMaps.forEach((pathMap) => this.removeDragEntryItem(pathMap, explorer));

      done();
    });
  }

  removeDragEntryItem(pathMap, explorer) {
    const { entryDirectory } = pathMap;

    entryDirectory ?
      this.removeDirectoryNameDragEntryItem(pathMap, explorer) :
        this.removeFileNameDragEntryItem(pathMap, explorer);
  }

  removeFileNameDragEntryItem(pathMap, explorer) {
    const { sourceEntryPath } = pathMap;

    if (sourceEntryPath === null) {
      return;
    }

    const filePath = sourceEntryPath; ///

    explorer.removeFilePath(filePath);
  }

  removeDirectoryNameDragEntryItem(pathMap, explorer) {
    const { sourceEntryPath } = pathMap;

    if (sourceEntryPath === null) {
      return;
    }

    const directoryPath = sourceEntryPath;  ///

    explorer.removeDirectoryPath(directoryPath);
  }

  callRemoveHandlersAsync(pathMaps, done) {
    const eventType = REMOVE_EVENT_TYPE,
          eventListeners = this.findEventListeners(eventType);

    forEach(eventListeners, (eventListener, next) => {
      const { handler, element } = eventListener,
          removeHandler = handler,  ///
          done = next;  ///

      removeHandler.call(element, pathMaps, done);
    }, done);
  }

  open() {
    this.showOpenRubbishBinSVG();
    this.hideClosedRubbishBinSVG();
  }

  close() {
    this.hideOpenRubbishBinSVG();
    this.showClosedRubbishBinSVG();
  }

  didMount() {
    const { onRemove } = this.properties,
          removeHandler = onRemove; ///

    this.enableDrop();

    this.onDrop(this.dropHandler);

    this.onDragOver(this.dragOverHandler);

    removeHandler && this.onRemove(removeHandler);

    this.close();
  }

  willUnmount() {
    const { onRemove } = this.properties,
          removeHandler = onRemove; ///

    this.disableDrop();

    this.offDrop(this.dropHandler);

    this.offDragOver(this.dragOverHandler);

    removeHandler && this.offRemove(removeHandler);
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
    const { OpenRubbishBinSVG, ClosedRubbishBinSVG } = this.constructor;

    return ([

      <OpenRubbishBinSVG/>,
      <ClosedRubbishBinSVG/>

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

  static OpenRubbishBinSVG = OpenRubbishBinSVG;

  static ClosedRubbishBinSVG = ClosedRubbishBinSVG;

  static tagName = "div";

  static ignoredProperties = [
    "onRemove",
    "ignoredReferences"
  ];

  static defaultProperties = {
    className: "rubbish-bin"
  };
}

Object.assign(RubbishBin.prototype, dropMixins);

export default withStyle(RubbishBin)`
  
  display: inline-block;
      
`;
