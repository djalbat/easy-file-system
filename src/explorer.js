"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { dropMixins } from "easy-drag-and-drop";
import { pathUtilities, arrayUtilities } from "necessary";

import EntriesList from "./list/entries";
import explorerMixins from "./mixins/explorer";
import dragEntryItemMixins from "./mixins/dragEntryItem";
import FileNameDragEntryItem from "./item/entry/drag/fileName";
import FileNameMarkerEntryItem from "./item/entry/marker/fileName";
import DirectoryNameDragEntryItem from "./item/entry/drag/directoryName";
import DirectoryNameMarkerEntryItem from "./item/entry/marker/directoryName";

import { explorerPadding } from "./styles";
import { PERIOD, DOUBLE_CLICK_DELAY } from "./constants";
import { FILE_NAME_DRAG_ENTRY_TYPE, DIRECTORY_NAME_DRAG_ENTRY_TYPE } from "./entryTypes";
import { sourceEntryPathFromEntryItem, targetEntryPathFromEntryItem } from "./utilities/pathMap";
import { MOVE_CUSTOM_EVENT_TYPE,
         OPEN_CUSTOM_EVENT_TYPE,
         REMOVE_CUSTOM_EVENT_TYPE,
         RENAME_CUSTOM_EVENT_TYPE,
         SELECT_CUSTOM_EVENT_TYPE,
         CREATE_CUSTOM_EVENT_TYPE } from "./customEventTypes";

const { first } = arrayUtilities,
      { concatenatePaths, pathWithoutBottommostNameFromPath } = pathUtilities;

class Explorer extends Element {
  dragOverCustomHandler = (event, element, dragElement) => {
    const dragEntryItem = dragElement,  ///
          markerEntryItem = this.retrieveMarkerEntryItem(),
          dragEntryItemName = dragEntryItem.getName();

    let markerEntryItemPath = markerEntryItem.getPath(),
        markerEntryItemExplorer = markerEntryItem.getExplorer(),
        previousMarkerEntryItemPath = markerEntryItemPath, ///
        previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///

    markerEntryItemPath = dragEntryItemName;///

    markerEntryItemExplorer = this;  ///

    if ((markerEntryItemExplorer !== previousMarkerEntryItemExplorer) || (markerEntryItemPath !== previousMarkerEntryItemPath)) {
      const dragEntryItemType = dragEntryItem.getType();

      previousMarkerEntryItemExplorer.removeMarker();

      markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
    }
  }

  dropCustomHandler = (event, element, dragElement, aborted, done) => {
    const markerEntryItem = this.retrieveMarkerEntryItem(),
          markerEntryItemExplorer = markerEntryItem.getExplorer();

    if (aborted) {
      markerEntryItemExplorer.removeMarker();

      done();

      return;
    }

    const dragEntryItem = dragElement;  ///

    markerEntryItemExplorer.dropDragEntryItem(event, element, dragEntryItem, done);
  }

  getExplorer() {
    const explorer = this;  ///

    return explorer;
  }

  getReference() {
    const { reference = null } = this.properties;

    return reference;
  }

  getReferences() {
    const { references = [] } = this.properties;

    return references;
  }

  getEntriesList() {
  	const { EntriesList } = this.constructor;

  	return EntriesList;
	}

  getFileNameDragEntryItem(readOnly) {
		const { FileNameDragEntryItem } = this.constructor;

		return FileNameDragEntryItem;
	}

  getFileNameMarkerEntryItem() {
    const { FileNameMarkerEntryItem } = this.constructor;

    return FileNameMarkerEntryItem;
  }

  getDirectoryNameDragEntryItem(readOnly, topmost) {
		const { DirectoryNameDragEntryItem } = this.constructor;

		return DirectoryNameDragEntryItem;
	}

  getDirectoryNameMarkerEntryItem() {
    const { DirectoryNameMarkerEntryItem } = this.constructor;

    return DirectoryNameMarkerEntryItem;
  }

  retrievePaths(type) {
    const dragEntryItems = this.retrieveDragEntryItems(),
          paths = dragEntryItems.reduce((paths, dragEntryItem) => {
            const dragEntryItemType = dragEntryItem.getType();

            if (dragEntryItemType === type) {
              const dragEntryItemPath = dragEntryItem.getPath(),
                    path = dragEntryItemPath; ///

              paths.push(path);
            }

            return paths;
          }, []);

    return paths;
  }

  retrieveFilePaths() {
    const type = FILE_NAME_DRAG_ENTRY_TYPE,
          paths = this.retrievePaths(type),
          filePaths = paths; ///

    return filePaths;
  }

  retrieveDirectoryPaths() {
    const type = DIRECTORY_NAME_DRAG_ENTRY_TYPE,
          paths = this.retrievePaths(type),
          directoryPaths = paths; ///

    return directoryPaths;
  }

  collapse() {
    const directoryNameDragEntryItems = this.retrieveDirectoryNameDragEntryItems();

    directoryNameDragEntryItems.forEach((directoryNameDragEntryItem) => {
      directoryNameDragEntryItem.collapse();
    });
  }

  createPath() {
    let path;

    const name = PERIOD,  ///
          selectedDragEntryItem = this.retrieveSelectedDragEntryItem();

    if (selectedDragEntryItem === null) {
      path = name;  ///
    } else {
      const selectedDragEntryItemDirectoryNameDragEntryItem = selectedDragEntryItem.isDirectoryNameDragEntryItem();

      if (selectedDragEntryItemDirectoryNameDragEntryItem) {
        const directoryNameDragEntryItem = selectedDragEntryItem, ///
              directoryNameDragEntryItemPath = directoryNameDragEntryItem.getPath();

        path = concatenatePaths(directoryNameDragEntryItemPath, name);

        selectedDragEntryItem.expand();
      } else {
        const fileNameDragEntryItem = selectedDragEntryItem,  ///
              fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(),
              fileNameDragEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(fileNameDragEntryItemPath);

        path = concatenatePaths(fileNameDragEntryItemPathWithoutBottommostName, name);
      }
    }

    return path;
  }

  createFilePath() {
    const path = this.createPath(),
          filePath = path,  ///
          fileNameDragEntryItem = this.addFilePath(filePath);

    fileNameDragEntryItem.create();
  }

  createDirectoryPath() {
    const path = this.createPath(),
          readOnly = false,
          collapsed = false,
          directoryPath = path,  ///
          directoryNameDragEntryItem = this.addDirectoryPath(directoryPath, readOnly, collapsed);

    directoryNameDragEntryItem.create();
  }

  renameSelectedPath() {
    const selectedDragEntryItem = this.retrieveSelectedDragEntryItem();

    if (selectedDragEntryItem !== null) {
      selectedDragEntryItem.rename();
    }
  }

  getSelectedPath() {
    let selectedPath = null;

    const selectedDragEntryItem = this.retrieveSelectedDragEntryItem();

    if (selectedDragEntryItem !== null) {
      const selectedDragEntryItemPath = selectedDragEntryItem.getPath();

      selectedPath = selectedDragEntryItemPath; ///
    }

    return selectedPath;
  }

  clickDragEntryItem(event, element, dragEntryItem) {
    const singleClick = this.isSingleClick();

    if (singleClick) {
      const selected = dragEntryItem.click(event, element);

      if (selected) {
        dragEntryItem.singleClick(event, element);
      }

      return;
    }

    const clickedDragEntryItem = this.getClickedDragEntryItem();

    if (dragEntryItem !== clickedDragEntryItem) {
      const interval = this.getInterval();

      clearInterval(interval);

      this.clearInterval();

      this.clearClickedDragEntryItem();
    }

    const interval = this.getInterval();

    if (interval === null) {
      const delay = DOUBLE_CLICK_DELAY,
            interval = setTimeout(() => {
              this.clearInterval();

              this.clearClickedDragEntryItem();

              dragEntryItem.click(event, element);
            }, delay),
            clickedDragEntryItem = dragEntryItem; ///

      this.setInterval(interval);

      this.setClickedDragEntryItem(clickedDragEntryItem);

      return;
    }

    clearInterval(interval);

    this.clearInterval();

    this.clearClickedDragEntryItem();

    dragEntryItem.doubleClick(event, element);
  }

  openFileNameDragEntryItem(event, element, fileNameDragEntryItem) {
    const disabled = this.isDisabled();

    if (disabled) {
      return;
    }

    const fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(),
          filePath = fileNameDragEntryItemPath, ///
          explorer = fileNameDragEntryItem.getExplorer(),
          customEventType = OPEN_CUSTOM_EVENT_TYPE;

    this.callCustomHandlers(customEventType, event, element, filePath, explorer);
  }

  selectOrDeselectDragEntryItem(event, element, dragEntryItem) {
    const disabled = this.isDisabled();

    if (disabled) {
      return;
    }

    let selected = dragEntryItem.isSelected();

    const path = dragEntryItem.getPath();

    if (selected) {
      dragEntryItem.deselect();
    } else {
      this.deselectAllPaths();

      this.selectPath(path);
    }

    selected = !selected; ///

    const readOnly = dragEntryItem.isReadOnly(),
          explorer = dragEntryItem.getExplorer(),
          customEventType = SELECT_CUSTOM_EVENT_TYPE;

    this.callCustomHandlers(customEventType, event, element, path, selected, readOnly, explorer);

    return selected;
  }

  createDragEntryItem(event, element, dragEntryItem, done) {
    const sourceEntryPath = sourceEntryPathFromEntryItem(dragEntryItem),
          targetEntryPath = targetEntryPathFromEntryItem(dragEntryItem),
          pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath),
          explorer = this;  ///

    this.createDragEntryItems(event, element, pathMaps, explorer, () => {
      done();
    });
  }

  renameDragEntryItem(event, element, dragEntryItem, done) {
    let sourceEntryPath,
        targetEntryPath;

    sourceEntryPath = sourceEntryPathFromEntryItem(dragEntryItem);
    targetEntryPath = targetEntryPathFromEntryItem(dragEntryItem);

    const pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath),
          firstPathMap = first(pathMaps),
          pathMap = firstPathMap; ///

    ({ sourceEntryPath, targetEntryPath } = pathMap);

    if (sourceEntryPath === targetEntryPath) {
      done();

      return;
    }

    const explorer = this;  ///

    this.renameDragEntryItems(event, element, pathMaps, explorer, () => {
      done();
    });
  }

  dropDragEntryItem(event, element, dragEntryItem, done) {
    const dragEntryItemExplorer = dragEntryItem.getExplorer(),
          markerEntryItem = this.retrieveMarkerEntryItem(),
          sourceEntryPath = sourceEntryPathFromEntryItem(dragEntryItem),
          targetEntryPath = targetEntryPathFromEntryItem(markerEntryItem);

    if ((sourceEntryPath === targetEntryPath) && (dragEntryItemExplorer === this)) {
      this.removeMarker();

      done();

      return;
    }

    const pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath),
          explorer = dragEntryItemExplorer; ///

    this.moveDragEntryItems(event, element, pathMaps, explorer, done);
  }

  renameDragEntryItems(event, element, pathMaps, explorer, done) {
    const customEventType = RENAME_CUSTOM_EVENT_TYPE;

    this.callCustomHandlersAsync(customEventType, event, element, pathMaps, explorer, () => {
      pathMaps.forEach((pathMap) => {
        this.removeDragEntryItem(pathMap, explorer);
      });

      pathMaps.forEach((pathMap) => {
        this.addDragEntryItem(pathMap, explorer);
      });

      done();
    });
  }

  moveDragEntryItems(event, element, pathMaps, explorer, done) {
    const customEventType = MOVE_CUSTOM_EVENT_TYPE;

    this.callCustomHandlersAsync(customEventType, event, element, pathMaps, explorer, () => {
      pathMaps.forEach((pathMap) => {
        this.removeDragEntryItem(pathMap, explorer);
      });

      pathMaps.forEach((pathMap) => {
        this.addDragEntryItem(pathMap, explorer);
      });

      this.removeMarker();

      done();
    });
  }

  removeDragEntryItems(event, element, pathMaps, explorer, done) {
    const customEventType = REMOVE_CUSTOM_EVENT_TYPE;

    this.callCustomHandlersAsync(customEventType, event, element, pathMaps, explorer, () => {
      pathMaps.forEach((pathMap) => {
        this.removeDragEntryItem(pathMap, explorer);
      });

      pathMaps.forEach((pathMap) => {
        this.addDragEntryItem(pathMap, explorer);
      });

      done();
    });
  }

  createDragEntryItems(event, element, pathMaps, explorer, done) {
    const customEventType = CREATE_CUSTOM_EVENT_TYPE;

    this.callCustomHandlersAsync(customEventType, event, element, pathMaps, explorer, () => {
      pathMaps.forEach((pathMap) => {
        this.removeDragEntryItem(pathMap, explorer);
      });

      pathMaps.forEach((pathMap) => {
        this.addDragEntryItem(pathMap, explorer);
      });

      done();
    });
  }

  enable() {
    const disabled = false;

    this.setDisabled(disabled);

    this.enableDrag();
  }

  disable() {
    const disabled = true;

    this.setDisabled(disabled);

    this.disableDrag();
  }

  enableDrag() {
    const dragEntryItems = this.retrieveDragEntryItems();

    dragEntryItems.forEach((dragEntryItem) => {
      dragEntryItem.enableDrag();
    });
  }

  disableDrag() {
    const dragEntryItems = this.retrieveDragEntryItems();

    dragEntryItems.forEach((dragEntryItem) => {
      dragEntryItem.disableDrag();
    });
  }

  clearInterval() {
    const interval = null;

    this.setInterval(interval);
  }

  clearClickedDragEntryItem() {
    const clickedDragEntryItem = null;

    this.setClickedDragEntryItem(clickedDragEntryItem);
  }

  isDisabled() {
    const { disabled } = this.getState();

    return disabled;
  }

  isEditable() {
    const editableDragEntryItem = this.retrieveEditableDragEntryItem(),
          editable = (editableDragEntryItem !== null);

    return editable;
  }

  getInterval() {
    const { interval } = this.getState();

    return interval;
  }

  isSingleClick() {
    const { singleClick } = this.getState();

    return singleClick;
  }

  getClickedDragEntryItem() {
    const { clickedDragEntryItem } = this.getState();

    return clickedDragEntryItem;
  }

  setDisabled(disabled) {
    this.updateState({
      disabled
    });
  }

  setInterval(interval) {
    this.updateState({
      interval
    });
  }

  setSingleClick(singleClick) {
    this.updateState({
      singleClick
    });
  }

  setClickedDragEntryItem(clickedDragEntryItem) {
    this.updateState({
      clickedDragEntryItem
    });
  }

  cancelEditableDragEntryItem() {
    const editableDragEntryItem = this.retrieveEditableDragEntryItem(),
          created = editableDragEntryItem.isCreated();

    editableDragEntryItem.cancel(created);
  }

  setInitialState() {
    const disabled = false,
          interval = null,
          singleClick = false,
          clickedDragEntryItem = null;

    this.setState({
      disabled,
      interval,
      singleClick,
      clickedDragEntryItem
    });
  }

  didMount() {
    const { singleClick = false } = this.properties;

    this.setSingleClick(singleClick);

    this.enableDrop();

    this.onCustomDragOver(this.dragOverCustomHandler);

    this.onCustomDrop(this.dropCustomHandler);
  }

  willUnmount() {
    this.disableDrop();

    this.offCustomDragOver(this.dragOverCustomHandler);

    this.offCustomDrop(this.dropCustomHandler);
  }

  childElements() {
  	const explorer = this;  ///

  	return (

  		<EntriesList explorer={explorer} topmost />

		);
	}

  parentContext() {
    const context = this.getContext(),
          collapse = this.collapse.bind(this),
          getSelectedPath = this.getSelectedPath.bind(this),
          retrieveFilePaths = this.retrieveFilePaths.bind(this),
          retrieveDirectoryPaths = this.retrieveDirectoryPaths.bind(this);

    return ({
      ...context,
      collapse,
      getSelectedPath,
      retrieveFilePaths,
      retrieveDirectoryPaths
    });
  }

  initialise() {
  	this.assignContext();

    this.setInitialState();
	}

	static EntriesList = EntriesList;

  static FileNameDragEntryItem = FileNameDragEntryItem;

  static FileNameMarkerEntryItem = FileNameMarkerEntryItem;

  static DirectoryNameDragEntryItem = DirectoryNameDragEntryItem;

  static DirectoryNameMarkerEntryItem = DirectoryNameMarkerEntryItem;

  static tagName = "div";

  static ignoredProperties = [
    "reference",
    "references",
    "singleClick"
  ];

  static defaultProperties = {
    className: "explorer"
  };
}

Object.assign(Explorer.prototype, dropMixins);
Object.assign(Explorer.prototype, explorerMixins);
Object.assign(Explorer.prototype, dragEntryItemMixins);

export default withStyle(Explorer)`
  
  padding: ${explorerPadding}; 
  
`;
