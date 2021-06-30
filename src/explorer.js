"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { pathUtilities, asynchronousUtilities } from "necessary";

import dropMixins from "./mixins/drop";
import EntriesList from "./list/entries";
import markerMixins from "./mixins/marker";
import FileNameDragEntryItem from "./item/entry/drag/fileName";
import FileNameMarkerEntryItem from "./item/entry/marker/fileName";
import DirectoryNameDragEntryItem from "./item/entry/drag/directoryName";
import DirectoryNameMarkerEntryItem from "./item/entry/marker/directoryName";

import { MOVE } from "./constants";
import { nonNullPathFromName } from "./utilities/pathMap";
import { FILE_NAME_DRAG_TYPE, DIRECTORY_NAME_DRAG_TYPE } from "./types";

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

  getExplorer() {
    const explorer = this;  ///

    return explorer;
  }

  getEntriesList() {
  	const { EntriesList } = this.constructor;

  	return EntriesList;
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
    const { type } = pathMap;

    switch(type) {
      case FILE_NAME_DRAG_TYPE :
        this.moveFileNameDragEntryItem(pathMap, explorer);

        break;
    }

    switch(type) {
      case DIRECTORY_NAME_DRAG_TYPE :
        this.moveDirectoryNameDragEntryItem(pathMap, explorer);

        break;
    }
  }

  moveDragEntryItems(pathMaps, explorer) {
    this.callMoveHandlers(pathMaps, () => {
      pathMaps.forEach((pathMap) => this.moveDragEntryItem(pathMap, explorer));
    });
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

  callMoveHandlers(pathMaps, done) {
    const eventType = MOVE,
          eventListeners = this.findEventListeners(eventType);

    forEach(eventListeners, (eventListener, next) => {
      const { handler, element } = eventListener,
            moveHandler = handler,  ///
            done = next;  ///

      moveHandler.call(element, pathMaps, done);
    }, done);
  }

  onMove(moveHandler, element) {
    const eventType = MOVE,
          handler = moveHandler;  ///

    this.addEventListener(eventType, handler, element);
  }

  offMove(moveHandler, element) {
    const eventType = MOVE,
          handler = moveHandler;  ///

    this.removeEventListener(eventType, handler, element);
  }

  dropHandler(dragElement, element) {
    const dragEntryItem = dragElement;	///

    this.dropDragEntryItem(dragEntryItem);
  }

  dropDragEntryItem(dragEntryItem) {
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

      dragEntryItemExplorer.moveDragEntryItems(pathMaps, explorer);

      dragEntryItemExplorer.removeMarker();
    }
  }

  didMount() {
    const { onMove } = this.properties,
          moveHandler = onMove; ///

    this.mounted = true;

    this.enableDrop();

    this.enableMarker();

    this.onDrop(this.dropHandler, this);

    moveHandler && this.onMove(moveHandler, this);
  }

  willUnmount() {
    const { onMove } = this.properties,
          moveHandler = onMove; ///

    this.mounted = false;

    this.disableDrop();

    this.disableMarker();

    this.offDrop(this.dropHandler, this);

    moveHandler && this.offMove(moveHandler, this);
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
    "onMove"
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
