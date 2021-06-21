"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { asynchronousUtilities } from "necessary";

import dropMixins from "./mixins/drop";
import EntriesList from "./list/entries";
import markerMixins from "./mixins/marker";
import FileNameDragEntryItem from "./item/entry/drag/fileName";
import FileNameMarkerEntryItem from "./item/entry/marker/fileName";
import DirectoryNameDragEntryItem from "./item/entry/drag/directoryName";
import DirectoryNameMarkerEntryItem from "./item/entry/marker/directoryName";

import { MOVE } from "./constants";
import { FILE_NAME_DRAG_TYPE, DIRECTORY_NAME_DRAG_TYPE } from "./types";

const { forEach } = asynchronousUtilities;

class Explorer extends Element {
  constructor(selector, mounted) {
    super(selector);

    this.mounted = mounted;
  }

  getExplorer() {
    const explorer = this;  ///

    return explorer;
  }

  getPath() {
    const path = null;  ///

    return path;
  }

  isMounted() {
    return this.mounted;
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

  moveDragEntryItem(pathMap) {
    const { type } = pathMap;

    switch(type) {
      case FILE_NAME_DRAG_TYPE :
        this.moveFileNameDragEntryItem(pathMap);

        break;
    }

    switch(type) {
      case DIRECTORY_NAME_DRAG_TYPE :
        this.moveDirectoryNameDragEntryItem(pathMap);

        break;
    }
  }

  moveDragEntryItems(pathMaps) {
    this.callMoveHandlers(pathMaps, () => {
      pathMaps.forEach((pathMap) => this.moveDragEntryItem(pathMap));
    });
  }

  moveFileNameDragEntryItem(pathMap) {
    const { sourcePath } = pathMap;

    if (sourcePath !== null) {
      const { targetPath } = pathMap;

      this.removeFilePath(sourcePath);

      if (targetPath !== null) {
        this.addFilePath(targetPath);
      }
    }
  }

  moveDirectoryNameDragEntryItem(pathMap) {
    const { sourcePath } = pathMap;

    if (sourcePath !== null) {
      const { targetPath } = pathMap;

      this.removeDirectoryPath(sourcePath);

      if (targetPath !== null) {
        const { collapsed } = pathMap;

        this.addDirectoryPath(targetPath, collapsed);
      }
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

  didMount() {
    this.mounted = true;

    this.enableDrop();

    this.enableMarker();
  }

  willUnmount() {
    this.mounted = false;

    this.disableDrop();

    this.disableMarker();
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
      
`;
