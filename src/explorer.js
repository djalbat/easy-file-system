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

  moveEntry(pathMaps) {
    this.callMoveHandlers(pathMaps, () => {
      pathMaps.forEach((pathMap) => {
        const { sourceFilePath, targetFilePath } = pathMap;

        this.removeFilePath(sourceFilePath);

        if (targetFilePath !== null) {
          this.addFilePath(targetFilePath);
        }
      })
    });
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
