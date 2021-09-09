"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { dropMixins } from "easy-drag-and-drop";
import { pathUtilities, asynchronousUtilities } from "necessary";

import OpenRubbishBinSVG from "./svg/rubbishBin/open";
import ClosedRubbishBinSVG from "./svg/rubbishBin/closed";

import { REMOVE_EVENT_TYPE } from "./eventTypes";
import { nonNullPathFromName } from "./utilities/pathMap";

const { forEach } = asynchronousUtilities,
      { pathWithoutBottommostNameFromPath } = pathUtilities;

class RubbishBin extends Element {
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

  openRubbishBin() {
    this.showOpenRubbishBinSVG();
    this.hideClosedRubbishBinSVG();
  }

  closeRubbishBin() {
    this.hideOpenRubbishBinSVG();
    this.showClosedRubbishBinSVG();
  }

  removeDragEntryItem(pathMap, explorer) {
    const { directory } = pathMap;

    directory ?
      this.removeDirectoryNameDragEntryItem(pathMap, explorer) :
        this.removeFileNameDragEntryItem(pathMap, explorer);
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
    const explorer = this,  //
          dragEntryItem = dragElement,  ///
          dragEntryItemIgnored = dragEntryItem.isIgnored(explorer);

    if (dragEntryItemIgnored) {
      return;
    }

    const dragEntryItemType = dragEntryItem.getType(),
          markerEntryItemPath = this.getMarkerEntryItemPath(),
          markerEntryItemExplorer = this.getMarkerEntryItemExplorer();

    this.closeRubbishBin();

    markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
  }

  dragOverHandler(dragElement, element) {
    const explorer = this,  //
          dragEntryItem = dragElement,  ///
          dragEntryItemIgnored = dragEntryItem.isIgnored(explorer);

    if (dragEntryItemIgnored) {
      return;
    }

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

    removeHandler && this.onRemove(removeHandler);

    this.closeRubbishBin();
  }

  willUnmount() {
    const { onRemove } = this.properties,
          removeHandler = onRemove; ///

    this.disableDrop();

    this.offDrop(this.dropHandler, this);

    this.offDragOut(this.dragOutHandler, this);

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
