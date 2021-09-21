"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { dropMixins } from "easy-drag-and-drop";
import { pathUtilities, asynchronousUtilities } from "necessary";

import EntriesList from "./list/entries";
import markerMixins from "./mixins/marker";
import FileNameDragEntryItem from "./item/entry/drag/fileName";
import FileNameMarkerEntryItem from "./item/entry/marker/fileName";
import DirectoryNameDragEntryItem from "./item/entry/drag/directoryName";
import DirectoryNameMarkerEntryItem from "./item/entry/marker/directoryName";

import { DEFAULT_OPTIONS } from "./defaults";
import { nonNullPathFromName } from "./utilities/pathMap";
import { OPEN_EVENT_TYPE, MOVE_EVENT_TYPE } from "./eventTypes";

const { forEach } = asynchronousUtilities,
      { pathWithoutBottommostNameFromPath } = pathUtilities;

class Explorer extends Element {
  constructor(selector, mounted) {
    super(selector);

    this.mounted = mounted;
  }

  getPath() {
    const path = null;  ///

    return path;
  }

  isMounted() {
    return this.mounted;
  }

  isCollapsed() {
    const collapsed = false;

    return collapsed;
  }

  isOptionPresent(option) {
    const { options = DEFAULT_OPTIONS } = this.properties,
          optionPresent = !!options[option];  ///

    return optionPresent;
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
    const { directory } = pathMap;

    directory ?
      this.moveDirectoryNameDragEntryItem(pathMap, explorer) :
        this.moveFileNameDragEntryItem(pathMap, explorer);
  }

  moveDragEntryItems(pathMaps, explorer, done) {
    this.callMoveHandlers(pathMaps, () => {
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
    const { sourcePath, targetPath } = pathMap;

    this.removeFilePath(sourcePath);

    if (targetPath !== null) {
      explorer.addFilePath(targetPath);
    }
  }

  moveDirectoryNameDragEntryItem(pathMap, explorer) {
    const { sourcePath, targetPath } = pathMap;

    this.removeDirectoryPath(sourcePath);

    if (targetPath !== null) {
      const { collapsed } = pathMap;

      explorer.addDirectoryPath(targetPath, collapsed);
    }
  }

  callOpenHandlers(filePath) {
    const eventType = OPEN_EVENT_TYPE,
          eventListeners = this.findEventListeners(eventType);

    debugger

    eventListeners.forEach((eventListener) => {
      const { handler, element } = eventListener,
            openHandler = handler;  ///

      openHandler.call(element, filePath, this);  ///
    });
  }

  callMoveHandlers(pathMaps, done) {
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

  dropHandler(dragElement, element, done) {
    const dragEntryItem = dragElement;	///

    this.dropDragEntryItem(dragEntryItem, done);
  }

  dropDragEntryItem(dragEntryItem, done) {
    const markerEntryItem = this.retrieveMarkerEntryItem(),
          dragEntryItemPath = dragEntryItem.getPath(),
          markerEntryItemPath = markerEntryItem.getPath(),
          dragEntryItemExplorer = dragEntryItem.getExplorer(),
          markerEntryItemExplorer = markerEntryItem.getExplorer();

    if ((dragEntryItemExplorer !== markerEntryItemExplorer) || (dragEntryItemPath !== markerEntryItemPath)) {
      const dragEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(dragEntryItemPath),
            markerEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(markerEntryItemPath),
            sourcePath = nonNullPathFromName(dragEntryItemPathWithoutBottommostName), ///
            targetPath = nonNullPathFromName(markerEntryItemPathWithoutBottommostName), ///
            pathMaps = dragEntryItem.getPathMaps(sourcePath, targetPath),
            explorer = this;  ///

      dragEntryItemExplorer.moveDragEntryItems(pathMaps, explorer, () => {
        dragEntryItemExplorer.removeMarker();

        done();
      });

      return;
    }

    done();
  }

  didMount() {
    const { onMove, onOpen } = this.properties,
          moveHandler = onMove, ///
          openHandler = onOpen; ///

    this.mounted = true;

    this.enableDrop();

    this.enableMarker();

    this.onDrop(this.dropHandler, this);

    moveHandler && this.onMove(moveHandler);
    openHandler && this.onOpen(openHandler);
  }

  willUnmount() {
    const { onMove, onOpen } = this.properties,
          moveHandler = onMove, ///
          openHandler = onOpen; ///

    this.mounted = false;

    this.disableDrop();

    this.disableMarker();

    this.offDrop(this.dropHandler, this);

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
Object.assign(Explorer.prototype, markerMixins);

export default withStyle(Explorer)`
  
  width: fit-content;
  min-width: 10rem;
  min-height: 2rem;
      
`;
