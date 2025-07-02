"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { dropMixins } from "easy-drag-and-drop";

import rubbishBinMixins from "./mixins/rubbishBin";
import OpenRubbishBinSVG from "./svg/rubbishBin/open";
import ClosedRubbishBinSVG from "./svg/rubbishBin/closed";
import dragEntryItemMixins from "./mixins/dragEntryItem";
import FileNameMarkerEntryItem from "./item/entry/marker/fileName";
import DirectoryNameMarkerEntryItem from "./item/entry/marker/directoryName";

import { REMOVE_CUSTOM_EVENT_TYPE } from "./customEventTypes";
import { sourceEntryPathFromEntryItem } from "./utilities/pathMap";
import { DIRECTORY_NAME_DRAG_ENTRY_TYPE, FILE_NAME_DRAG_ENTRY_TYPE } from "./entryTypes";

class RubbishBin extends Element {
  dragOverCustomHandler = (event, element, dragElement) => {
    const dragEntryItem = dragElement,  ///
          markerEntryItem = this.retrieveMarkerEntryItem();

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

  dropCustomHandler = (event, element, dragElement, aborted, done) => {
    const dragEntryItem = dragElement,  ///
          markerEntryItem = this.retrieveMarkerEntryItem(),
          markerEntryItemExplorer = markerEntryItem.getExplorer();

    if (aborted) {
      markerEntryItemExplorer.removeMarker();

      done();

      return;
    }

    markerEntryItemExplorer.dropDragEntryItem(event, element, dragEntryItem, done);
  }

  getReference() {
    const { reference = null } = this.properties;

    return reference;
  }

  getReferences() {
    const { references = [] } = this.properties;

    return references;
  }

  retrieveMarkerEntryItem() {
    const markerEntryItem = getMarkerEntryItem();

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

    setMarkerEntryItem(markerEntryItem);
  }

  removeMarkerEntryItem() {
    resetMarkerEntryItem();

    resetDropElement();
  }

  dropDragEntryItem(event, element, dragEntryItem, done) {
    const dragEntryItemExplorer = dragEntryItem.getExplorer(),
          sourceEntryPath = sourceEntryPathFromEntryItem(dragEntryItem),
          targetEntryPath = null,
          pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath),
          explorer = dragEntryItemExplorer;  ///

    this.removeDragEntryItems(event, element, pathMaps, explorer, done);
  }

  removeDragEntryItems(event, element, pathMaps, explorer, done) {
    const customEventType = REMOVE_CUSTOM_EVENT_TYPE;

    this.callCustomHandlersAsync(customEventType, event, element, pathMaps, () => {
      pathMaps.forEach((pathMap) => {
        this.removeDragEntryItem(pathMap, explorer)
      });

      pathMaps.forEach((pathMap) => {
        this.addDragEntryItem(pathMap, explorer);
      });

      this.removeMarker();

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
    this.enableDrop();

    this.onCustomDrop(this.dropCustomHandler);

    this.onCustomDragOver(this.dragOverCustomHandler);

    this.close();
  }

  willUnmount() {
    this.disableDrop();

    this.offCustomDrop(this.dropCustomHandler);

    this.offCustomDragOver(this.dragOverCustomHandler);
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
    "reference",
    "references"
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
