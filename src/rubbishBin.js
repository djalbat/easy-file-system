"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { dropMixins } from "easy-drag-and-drop";

import DragEntryItem from "./item/entry/drag";
import rubbishBinMixins from "./mixins/rubbishBin";
import OpenRubbishBinSVG from "./svg/rubbishBin/open";
import ClosedRubbishBinSVG from "./svg/rubbishBin/closed";
import dragEntryItemMixins from "./mixins/dragEntryItem";
import FileNameMarkerEntryItem from "./item/entry/marker/fileName";
import DirectoryNameMarkerEntryItem from "./item/entry/marker/directoryName";

import { sourceEntryPathFromEntryItem } from "./utilities/pathMap";
import { DIRECTORY_NAME_DRAG_ENTRY_TYPE, FILE_NAME_DRAG_ENTRY_TYPE } from "./entryTypes";

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

  dropDragEntryItem(dragEntryItem, done) {
    const dragEntryItemExplorer = dragEntryItem.getExplorer(),
          sourceEntryPath = sourceEntryPathFromEntryItem(dragEntryItem),
          targetEntryPath = null,
          pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath),
          explorer = dragEntryItemExplorer;  ///

    this.removeDragEntryItems(pathMaps, explorer, () => {
      this.removeMarker();

      done();
    });
  }

  removeDragEntryItems(pathMaps, explorer, done) {
    this.callRemoveHandlersAsync(pathMaps, explorer, () => {
      pathMaps.forEach((pathMap) => {
        this.removeDragEntryItem(pathMap, explorer)
      });

      pathMaps.forEach((pathMap) => {
        this.addDragEntryItem(pathMap, explorer);
      });

      done();
    });
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

  addFilePath(filePath, readOnly = false) {
    ///
  }

  removeFilePath(filePath, removeEmptyParentDirectories = false) {
    ///
  }

  removeAllPaths() {
    ///
  }

  addDirectoryPath(directoryPath, readOnly = false, collapsed = true) {
    ///
  }

  removeDirectoryPath(directoryPath, removeEmptyParentDirectories = false) {
    ///
  }

  getMarkerEntryItemPath() {
    const { markerEntryItemPath } = this.getState();

    return markerEntryItemPath;
  }

  getMarkerEntryItemExplorer() {
    const { markerEntryItemExplorer } = this.getState();

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

  setInitialState() {
    const markerEntryItemPath = null,
          markerEntryItemExplorer = null;

    this.setState({
      markerEntryItemPath,
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
    this.assignContext();

    this.setInitialState();
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
Object.assign(RubbishBin.prototype, rubbishBinMixins);
Object.assign(RubbishBin.prototype, dragEntryItemMixins);

export default withStyle(RubbishBin)`
  
  display: inline-block;
      
`;
