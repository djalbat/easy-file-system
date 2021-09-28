"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { dropMixins } from "easy-drag-and-drop";
import { pathUtilities, asynchronousUtilities } from "necessary";

import OpenRubbishBinSVG from "./svg/rubbishBin/open";
import ClosedRubbishBinSVG from "./svg/rubbishBin/closed";
import FileNameMarkerEntryItem from "./item/entry/marker/fileName";
import DirectoryNameMarkerEntryItem from "./item/entry/marker/directoryName";

import { REMOVE_EVENT_TYPE } from "./eventTypes";
import { nonNullPathFromName } from "./utilities/pathMap";
import { DIRECTORY_NAME_DRAG_TYPE, FILE_NAME_DRAG_TYPE } from "./types";

const { forEach } = asynchronousUtilities,
      { pathWithoutBottommostNameFromPath } = pathUtilities;

class RubbishBin extends Element {
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

  getOpenRubbishBinSVG() {
    const { OpenRubbishBinSVG } = this.constructor;

    return OpenRubbishBinSVG;
  }

  getClosedRubbishBinSVG() {
    const { ClosedRubbishBinSVG } = this.constructor;

    return ClosedRubbishBinSVG;
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

  open() {
    this.showOpenRubbishBinSVG();
    this.hideClosedRubbishBinSVG();
  }

  close() {
    this.hideOpenRubbishBinSVG();
    this.showClosedRubbishBinSVG();
  }

  removeDragEntryItem(pathMap, explorer) {
    const { directory } = pathMap;

    directory ?
      this.removeDirectoryNameDragEntryItem(pathMap, explorer) :
        this.removeFileNameDragEntryItem(pathMap, explorer);
  }

  removeDragEntryItems(pathMaps, explorer, done) {
    this.callRemoveHandlers(pathMaps, () => {
      pathMaps.forEach((pathMap) => this.removeDragEntryItem(pathMap, explorer));

      done();
    });
  }

  addMarkerEntryItem(markerEntryItemName, dragEntryItemType) {
    let markerEntryItem;

    const name = markerEntryItemName, ///
          type = dragEntryItemType;  ///

    switch (type) {
      case FILE_NAME_DRAG_TYPE : {
        const explorer = this,  ///
              fileNameMarkerEntryItem =

                <FileNameMarkerEntryItem name={name} explorer={explorer} />

              ;

        markerEntryItem = fileNameMarkerEntryItem;  ///

        break;
      }

      case DIRECTORY_NAME_DRAG_TYPE : {
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

  removeFileNameDragEntryItem(pathMap, explorer) {
    const { sourcePath, targetPath } = pathMap;

    if (sourcePath === targetPath) {
      return;
    }

    explorer.removeFilePath(sourcePath);
  }

  removeDirectoryNameDragEntryItem(pathMap, explorer) {
    const { sourcePath, targetPath } = pathMap;

    if (sourcePath === targetPath) {
      return;
    }

    explorer.removeDirectoryPath(sourcePath);
  }

  callRemoveHandlers(pathMaps, done) {
    const eventType = REMOVE_EVENT_TYPE,
          eventListeners = this.findEventListeners(eventType);

    forEach(eventListeners, (eventListener, next) => {
      const { handler, element } = eventListener,
            removeHandler = handler,  ///
            done = next;  ///

      removeHandler.call(element, pathMaps, done);
    }, done);
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

  dropHandler(dragElement, element, done) {
    const dragEntryItem = dragElement,	///
          markerEntryItem = this.retrieveMarkerEntryItem(),
          markerEntryItemExplorer = markerEntryItem.getExplorer();

    markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, done);
  }

  dragOverHandler(dragElement, element) {
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

    markerEntryItemPath = null;///

    markerEntryItemExplorer = this;  ///

    if ((markerEntryItemExplorer !== previousMarkerEntryItemExplorer) || (markerEntryItemPath !== previousMarkerEntryItemPath)) {
      const dragEntryItemType = dragEntryItem.getType();

      previousMarkerEntryItemExplorer.removeMarker();

      markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
    }
  }

  dropDragEntryItem(dragEntryItem, done) {
    const dragEntryItemPath = dragEntryItem.getPath(),
          dragEntryItemExplorer = dragEntryItem.getExplorer(),
          dragEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(dragEntryItemPath),
          sourcePath = nonNullPathFromName(dragEntryItemPathWithoutBottommostName), ///
          targetPath = null,	///
          pathMaps = dragEntryItem.getPathMaps(sourcePath, targetPath),
          explorer = dragEntryItemExplorer;  ///

    this.removeDragEntryItems(pathMaps, explorer, () => {
      this.close();

      done();
    });
  }

  didMount() {
    const { onRemove } = this.properties,
          removeHandler = onRemove; ///

    this.enableDrop();

    this.onDrop(this.dropHandler, this);

    this.onDragOver(this.dragOverHandler, this);

    removeHandler && this.onRemove(removeHandler);

    this.close();
  }

  willUnmount() {
    const { onRemove } = this.properties,
          removeHandler = onRemove; ///

    this.disableDrop();

    this.offDrop(this.dropHandler, this);

    this.offDragOver(this.dragOverHandler, this);

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
    const OpenRubbishBinSVG = this.getOpenRubbishBinSVG(),
          ClosedRubbishBinSVG = this.getClosedRubbishBinSVG();

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
