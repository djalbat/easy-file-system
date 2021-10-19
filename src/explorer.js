"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { dropMixins } from "easy-drag-and-drop";
import { asynchronousUtilities } from "necessary";

import EntriesList from "./list/entries";
import FileNameDragEntryItem from "./item/entry/drag/fileName";
import FileNameMarkerEntryItem from "./item/entry/marker/fileName";
import DirectoryNameDragEntryItem from "./item/entry/drag/directoryName";
import DirectoryNameMarkerEntryItem from "./item/entry/marker/directoryName";

import { explorerPadding } from "./styles";
import { DEFAULT_OPTIONS } from "./defaults";
import { OPEN_EVENT_TYPE, MOVE_EVENT_TYPE } from "./eventTypes";
import { DRAG_INTO_TOPMOST_DIRECTORIES_ONLY_OPTION } from "./options";
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

  isOptionPresent(option) {
    const { options = DEFAULT_OPTIONS } = this.properties,
          optionPresent = !!options[option];  ///

    return optionPresent;
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

  moveDragEntryItem(pathMap, explorer) {
    const { entryDirectory } = pathMap;

    entryDirectory ?
      this.moveDirectoryNameDragEntryItem(pathMap, explorer) :
        this.moveFileNameDragEntryItem(pathMap, explorer);
  }

  moveDragEntryItems(pathMaps, explorer, done) {
    this.callMoveHandlersAsync(pathMaps, () => {
      pathMaps.forEach((pathMap) => this.moveDragEntryItem(pathMap, explorer));

      done();
    });
  }

  openFileNameDragEntryItem(fileNameDragEntryItem) {
    const fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(),
          filePath = fileNameDragEntryItemPath; ///

    this.callOpenHandlers(filePath);
  }

  moveFileNameDragEntryItem(pathMap, explorer) {
    let filePath;

    const { sourceEntryPath, targetEntryPath } = pathMap;

    if (sourceEntryPath === targetEntryPath) {
      return;
    }

    filePath = sourceEntryPath; ///

    explorer.removeFilePath(filePath);

    if (targetEntryPath === null) {
      return;
    }

    filePath = targetEntryPath; ///

    this.addFilePath(filePath);
  }

  moveDirectoryNameDragEntryItem(pathMap, explorer) {
    let directoryPath;

    const { sourceEntryPath, targetEntryPath } = pathMap;

    if (sourceEntryPath === targetEntryPath) {
      return;
    }

    directoryPath = sourceEntryPath;  ///

    explorer.removeDirectoryPath(directoryPath);

    if (targetEntryPath === null) {
      return;
    }

    const { collapsed } = pathMap;

    directoryPath = targetEntryPath;  ///

    this.addDirectoryPath(directoryPath, collapsed);
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

  dropHandler(dragElement, aborted, element, done) {
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

  dragOverHandler(dragElement, element) {
    const dragEntryItem = dragElement,  ///
          dragEntryItemExplorer = dragEntryItem.getExplorer(),
          dragEntryItemExplorerIgnored = this.isExplorerIgnored(dragEntryItemExplorer);

    if (dragEntryItemExplorerIgnored) {
      return;
    }

    const dragIntoTopmostDirectoriesOnlyOptionPresent = this.isOptionPresent(DRAG_INTO_TOPMOST_DIRECTORIES_ONLY_OPTION);

    if (dragIntoTopmostDirectoriesOnlyOptionPresent) {
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

  didMount() {
    const { onMove, onOpen } = this.properties,
          moveHandler = onMove, ///
          openHandler = onOpen; ///

    this.mounted = true;

    this.enableDrop();

    this.onDrop(this.dropHandler, this);

    this.onDragOver(this.dragOverHandler, this);

    moveHandler && this.onMove(moveHandler);
    openHandler && this.onOpen(openHandler);
  }

  willUnmount() {
    const { onMove, onOpen } = this.properties,
          moveHandler = onMove, ///
          openHandler = onOpen; ///

    this.mounted = false;

    this.disableDrop();

    this.offDrop(this.dropHandler, this);

    this.offDragOver(this.dragOverHandler, this);

    moveHandler && this.offMove(moveHandler);
    openHandler && this.offOpen(openHandler);
  }

  childElements() {
  	const explorer = this;

  	return (

  		<EntriesList explorer={explorer} topmost />

		);
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
    "options",
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
