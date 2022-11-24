"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { dropMixins } from "easy-drag-and-drop";
import { asynchronousUtilities } from "necessary";

import EntriesList from "./list/entries";
import DragEntryItem from "./item/entry/drag";
import FileNameDragEntryItem from "./item/entry/drag/fileName";
import FileNameMarkerEntryItem from "./item/entry/marker/fileName";
import DirectoryNameDragEntryItem from "./item/entry/drag/directoryName";
import DirectoryNameMarkerEntryItem from "./item/entry/marker/directoryName";

import { explorerPadding } from "./styles";
import { OPEN_EVENT_TYPE, MOVE_EVENT_TYPE, SELECT_EVENT_TYPE } from "./eventTypes";
import { FILE_NAME_DRAG_ENTRY_TYPE, DIRECTORY_NAME_DRAG_ENTRY_TYPE } from "./entryTypes";
import { sourceEntryPathFromDragEntryItemPath, targetEntryPathFromMarkerEntryItemPath } from "./utilities/pathMap";

const { forEach } = asynchronousUtilities;

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

  onOpen(openHandler, element) {
    const eventType = OPEN_EVENT_TYPE,
          handler = openHandler;  ///

    this.addEventListener(eventType, handler, element);
  }

  offOpen(openHandler, element) {
    const eventType = OPEN_EVENT_TYPE,
          handler = openHandler;  ///

    this.removeEventListener(eventType, handler, element);
  }

  onMove(moveHandler, element) {
    const eventType = MOVE_EVENT_TYPE,
          handler = moveHandler;  ///

    this.addEventListener(eventType, handler, element);
  }

  offMove(moveHandler, element) {
    const eventType = MOVE_EVENT_TYPE,
          handler = moveHandler;  ///

    this.removeEventListener(eventType, handler, element);
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

  selectNameDragEntryItem(nameDragEntryItem) {
    const path = nameDragEntryItem.getPath();

    this.callSelectHandlers(path);
  }

  openFileNameDragEntryItem(fileNameDragEntryItem) {
    const fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(),
          filePath = fileNameDragEntryItemPath; ///

    this.callOpenHandlers(filePath);
  }

  dropDragEntryItem(dragEntryItem, done) {
    const markerEntryItem = this.retrieveMarkerEntryItem(),
          dragEntryItemPath = dragEntryItem.getPath(),
          markerEntryItemPath = markerEntryItem.getPath(),
          dragEntryItemExplorer = dragEntryItem.getExplorer(),
          sourceEntryPath = sourceEntryPathFromDragEntryItemPath(dragEntryItemPath),
          targetEntryPath = targetEntryPathFromMarkerEntryItemPath(markerEntryItemPath),
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
    const { sourceEntryPath, targetEntryPath } = pathMap;

    if (sourceEntryPath === null) {
      return;
    }

    if (targetEntryPath === null) {
      return;
    }

    const filePath = targetEntryPath; ///

    this.addFilePath(filePath);
  }

  addDirectoryNameDragEntryItem(pathMap, explorer) {
    const { sourceEntryPath, targetEntryPath } = pathMap;

    if (sourceEntryPath === null) {
      return;
    }

    if (targetEntryPath === null) {
      return;
    }

    const { collapsed } = pathMap;

    const directoryPath = targetEntryPath;  ///

    this.addDirectoryPath(directoryPath, collapsed);
  }

  callMoveHandlersAsync(pathMaps, done) {
    const eventType = MOVE_EVENT_TYPE,
          eventListeners = this.findEventListeners(eventType);

    forEach(eventListeners, (eventListener, next) => {
      const { handler, element } = eventListener,
            moveHandler = handler,  ///
            done = next;  ///

      moveHandler.call(element, pathMaps, done);
    }, done);
  }

  callSelectHandlers(path) {
    const eventType = OPEN_EVENT_TYPE,
        eventListeners = this.findEventListeners(eventType);

    eventListeners.forEach((eventListener) => {
      const { handler, element } = eventListener,
          openHandler = handler;  ///

      openHandler.call(element, path, this);  ///
    });
  }

  callOpenHandlers(filePath) {
    const eventType = OPEN_EVENT_TYPE,
          eventListeners = this.findEventListeners(eventType);

    eventListeners.forEach((eventListener) => {
      const { handler, element } = eventListener,
          openHandler = handler;  ///

      openHandler.call(element, filePath, this);  ///
    });
  }

  didMount() {
    const { onMove, onOpen } = this.properties,
          moveHandler = onMove, ///
          openHandler = onOpen; ///

    this.mounted = true;

    this.enableDrop();

    this.onDrop(this.dropHandler);

    this.onDragOver(this.dragOverHandler);

    moveHandler && this.onMove(moveHandler);
    openHandler && this.onOpen(openHandler);
  }

  willUnmount() {
    const { onMove, onOpen } = this.properties,
          moveHandler = onMove, ///
          openHandler = onOpen; ///

    this.mounted = false;

    this.disableDrop();

    this.offDrop(this.dropHandler);

    this.offDragOver(this.dragOverHandler);

    moveHandler && this.offMove(moveHandler);
    openHandler && this.offOpen(openHandler);
  }

  childElements() {
  	const explorer = this;

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

export default withStyle(Explorer)`
  
  padding: ${explorerPadding}; 
  
`;
