"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { dropMixins } from "easy-drag-and-drop";
import { pathUtilities } from "necessary";

import EntriesList from "./list/entries";
import DragEntryItem from "./item/entry/drag";
import explorerMixins from "./mixins/explorer";
import FileNameDragEntryItem from "./item/entry/drag/fileName";
import FileNameMarkerEntryItem from "./item/entry/marker/fileName";
import DirectoryNameDragEntryItem from "./item/entry/drag/directoryName";
import DirectoryNameMarkerEntryItem from "./item/entry/marker/directoryName";

import { PERIOD } from "./constants";
import { explorerPadding } from "./styles";
import { DELETE_KEY_CODE, BACKSPACE_KEY_CODE } from "./keyCodes";
import { nonNullPathWithoutBottommostNameFromPath } from "./utilities/path";
import { FILE_NAME_DRAG_ENTRY_TYPE, DIRECTORY_NAME_DRAG_ENTRY_TYPE } from "./entryTypes";
import { sourceEntryPathFromEntryItem, targetEntryPathFromEntryItem } from "./utilities/pathMap";

const { concatenatePaths } = pathUtilities;

class Explorer extends Element {
  constructor(selector, mounted) {
    super(selector);

    this.mounted = mounted;
  }

  isMounted() {
    return this.mounted;
  }

  dropHandler = (dragElement, aborted, element, done) => {
    const dragElementDragEntryItem = (dragElement instanceof DragEntryItem);

    if (!dragElementDragEntryItem) {
      done();

      return;
    }

    const markerEntryItem = this.retrieveMarkerEntryItem(),
          markerEntryItemExplorer = markerEntryItem.getExplorer();

    if (aborted) {
      markerEntryItemExplorer.removeMarker();

      done();

      return;
    }

    const dragEntryItem = dragElement;  ///

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

    const markerEntryItem = this.retrieveMarkerEntryItem(),
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

  keyDownHandler = (event, element) => {
    const { keyCode } = event;

    if ((keyCode === DELETE_KEY_CODE) || (keyCode === BACKSPACE_KEY_CODE)) {
      const selectedDragEntryItem = this.retrieveSelectedDragEntryItem();

      if (selectedDragEntryItem !== null) {
        const dragEntryItem = selectedDragEntryItem,  ///
              dragEntryItemEdited = dragEntryItem.isEdited();

        if (dragEntryItemEdited) {
          return;
        }

        const sourceEntryPath = sourceEntryPathFromEntryItem(dragEntryItem),
              targetEntryPath = null,
              pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath),
              explorer = this;  ///

        this.removeDragEntryItems(pathMaps, explorer, () => {
          ///
        });

        event.preventDefault();
      }
    }
  }

  getExplorer() {
    const explorer = this;  ///

    return explorer;
  }

  getReference() {
    const { reference = null } = this.properties;

    return reference;
  }

  getEntriesList() {
  	const { EntriesList } = this.constructor;

  	return EntriesList;
	}

  isDirectoryEmpty(directoryPath) {
    const directoryNameDragEntryItem = this.retrieveDirectoryNameDragEntryItem(directoryPath),
          directoryNameDragEntryItemEmpty = directoryNameDragEntryItem.isEmpty(),
          directoryEmpty = directoryNameDragEntryItemEmpty; ///

    return directoryEmpty;
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

  getFileNameDragEntryItem() {
		const { FileNameDragEntryItem } = this.constructor;

		return FileNameDragEntryItem;
	}

  getFileNameMarkerEntryItem() {
    const { FileNameMarkerEntryItem } = this.constructor;

    return FileNameMarkerEntryItem;
  }

  getDirectoryNameDragEntryItem() {
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

  openFileNameDragEntryItem(fileNameDragEntryItem) {
    const fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(),
          filePath = fileNameDragEntryItemPath; ///

    this.callOpenHandlers(filePath);
  }

  createPath() {
    let path;

    const name = PERIOD,  ///
          selectedDragEntryItem = this.retrieveSelectedDragEntryItem();

    if (selectedDragEntryItem === null) {
      path = name;  ///
    } else {
      const selectedDragEntryItemDirectoryDragEntryItem = selectedDragEntryItem.isDirectoryNameDragEntryItem();

      if (selectedDragEntryItemDirectoryDragEntryItem) {
        const directoryNameDragEntryItem = selectedDragEntryItem, ///
              directoryNameDragEntryItemPath = directoryNameDragEntryItem.getPath();

        path = concatenatePaths(directoryNameDragEntryItemPath, name);
      } else {
        const fileDragEntryItem = selectedDragEntryItem,  ///
              fileDragEntryItemPath = fileDragEntryItem.getPath(),  ///
              fileDragEntryItemPathWithoutBottommostName = nonNullPathWithoutBottommostNameFromPath(fileDragEntryItemPath);

        path = concatenatePaths(fileDragEntryItemPathWithoutBottommostName, name);
      }
    }

    return path;
  }

  createFilePath() {
    const path = this.createPath(),
          created = true,
          filePath = path,  ///
          callHandlers = false,
          fileNameDragEntryItem = this.addFilePath(filePath, created);

    this.deselectDragEntryItem(fileNameDragEntryItem);

    this.selectDragEntryItem(fileNameDragEntryItem, callHandlers);

    this.editSelectedPath();
  }

  createDirectoryPath() {
    const path = this.createPath(),
          created = true,
          collapsed = false,
          callHandlers = false,
          directoryPath = path,  ///
          directoryNameDragEntryItem = this.addDirectoryPath(directoryPath, collapsed, created);

    this.deselectDragEntryItem(directoryNameDragEntryItem);

    this.selectDragEntryItem(directoryNameDragEntryItem, callHandlers);

    this.editSelectedPath();
  }

  editSelectedPath() {
    const selectedDragEntryItem = this.retrieveSelectedDragEntryItem();

    if (selectedDragEntryItem !== null) {
      selectedDragEntryItem.edit();
    }
  }

  selectDragEntryItem(dragEntryItem, callHandlers = true) {
    const path = dragEntryItem.getPath();

    this.deselectAllPaths();

    this.selectPath(path);

    if (callHandlers) {
      const selected = true;

      this.callSelectHandlers(path, selected);
    }
  }

  deselectDragEntryItem(dragEntryItem, callHandlers = true) {
    const path = null;

    this.deselectAllPaths();  ///

    if (callHandlers) {
      const selected = false;

      this.callSelectHandlers(path, selected);
    }
  }

  renameDragEntryItem(dragEntryItem, done) {
    const sourceEntryPath = sourceEntryPathFromEntryItem(dragEntryItem),
          targetEntryPath = targetEntryPathFromEntryItem(dragEntryItem),
          pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath),
          explorer = this;  ///

    this.renameDragEntryItems(pathMaps, explorer, () => {
      done();
    });
  }

  createDragEntryItem(dragEntryItem, done) {
    const sourceEntryPath = sourceEntryPathFromEntryItem(dragEntryItem),
          targetEntryPath = targetEntryPathFromEntryItem(dragEntryItem),
          pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath),
          explorer = this;  ///

    this.createDragEntryItems(pathMaps, explorer, () => {
      done();
    });
  }

  dropDragEntryItem(dragEntryItem, done) {
    const markerEntryItem = this.retrieveMarkerEntryItem(),
          dragEntryItemExplorer = dragEntryItem.getExplorer(),
          sourceEntryPath = sourceEntryPathFromEntryItem(dragEntryItem),
          targetEntryPath = targetEntryPathFromEntryItem(markerEntryItem),
          pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath),
          explorer = dragEntryItemExplorer;  ///

    this.moveDragEntryItems(pathMaps, explorer, () => {
      this.removeMarker();

      done();
    });
  }

  moveDragEntryItems(pathMaps, explorer, done) {
    this.callMoveHandlersAsync(pathMaps, () => {
      pathMaps.forEach((pathMap) => this.removeDragEntryItem(pathMap, explorer));

      pathMaps.forEach((pathMap) => this.addDragEntryItem(pathMap, explorer));

      done();
    });
  }

  removeDragEntryItems(pathMaps, explorer, done) {
    this.callRemoveHandlersAsync(pathMaps, () => {
      pathMaps.forEach((pathMap) => this.removeDragEntryItem(pathMap, explorer));

      done();
    });
  }

  renameDragEntryItems(pathMaps, explorer, done) {
    this.callRenameHandlersAsync(pathMaps, () => {
      pathMaps.forEach((pathMap) => this.removeDragEntryItem(pathMap, explorer));

      pathMaps.forEach((pathMap) => this.addDragEntryItem(pathMap, explorer));

      done();
    });
  }

  createDragEntryItems(pathMaps, explorer, done) {
    this.callCreateHandlersAsync(pathMaps, () => {
      pathMaps.forEach((pathMap) => this.removeDragEntryItem(pathMap, explorer));

      pathMaps.forEach((pathMap) => this.addDragEntryItem(pathMap, explorer));

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

  addDragEntryItem(pathMap, explorer) {
    const { entryDirectory } = pathMap;

    entryDirectory ?
      this.addDirectoryNameDragEntryItem(pathMap, explorer) :
        this.addFileNameDragEntryItem(pathMap, explorer);
  }

  addFileNameDragEntryItem(pathMap, explorer) {
    const { targetEntryPath } = pathMap;

    if (targetEntryPath === null) {
      return;
    }

    const filePath = targetEntryPath; ///

    this.addFilePath(filePath);
  }

  addDirectoryNameDragEntryItem(pathMap, explorer) {
    const { targetEntryPath } = pathMap;

    if (targetEntryPath === null) {
      return;
    }

    const { collapsed } = pathMap;

    const directoryPath = targetEntryPath;  ///

    this.addDirectoryPath(directoryPath, collapsed);
  }

  didMount() {
    const { onMove, onOpen, onSelect } = this.properties,
          moveHandler = onMove, ///
          openHandler = onOpen, ///
          selectHandler = onSelect; ///

    this.mounted = true;

    this.enableDrop();

    this.onDrop(this.dropHandler);

    this.onDragOver(this.dragOverHandler);

    this.onKeyDown(this.keyDownHandler);

    moveHandler && this.onMove(moveHandler);

    openHandler && this.onOpen(openHandler);

    selectHandler && this.onSelect(selectHandler);
  }

  willUnmount() {
    const { onMove, onOpen, onSelect } = this.properties,
          moveHandler = onMove, ///
          openHandler = onOpen, ///
          selectHandler = onSelect; ///

    this.mounted = false;

    this.disableDrop();

    this.offDrop(this.dropHandler);

    this.offDragOver(this.dragOverHandler);

    this.onKeyDown(this.keyDownHandler);

    moveHandler && this.offMove(moveHandler);

    openHandler && this.offOpen(openHandler);

    selectHandler && this.offSelect(selectHandler);
  }

  childElements() {
  	const explorer = this;  ///

  	return (

  		<EntriesList explorer={explorer} topmost />

		);
	}

  parentContext() {
    const context = this.getContext(),
          retrieveFilePaths = this.retrieveFilePaths.bind(this),
          retrieveDirectoryPaths = this.retrieveDirectoryPaths.bind(this);

    return ({
      ...context,
      retrieveFilePaths,
      retrieveDirectoryPaths
    });
  }

  initialise() {
  	this.assignContext();
	}

	static EntriesList = EntriesList;

  static FileNameDragEntryItem = FileNameDragEntryItem;

  static FileNameMarkerEntryItem = FileNameMarkerEntryItem;

  static DirectoryNameDragEntryItem = DirectoryNameDragEntryItem;

  static DirectoryNameMarkerEntryItem = DirectoryNameMarkerEntryItem;

  static tagName = "div";

  static ignoredProperties = [
    "onMove",
    "onOpen",
    "onSelect",
    "reference",
    "ignoredReferences"
  ];

  static defaultProperties = {
    className: "explorer"
  };

  static fromClass(Class, properties) {
    const mounted = false,
          explorer = Element.fromClass(Class, properties, mounted);

    return explorer;
  }
}

Object.assign(Explorer.prototype, dropMixins);
Object.assign(Explorer.prototype, explorerMixins);

export default withStyle(Explorer)`
  
  padding: ${explorerPadding}; 
  
`;
