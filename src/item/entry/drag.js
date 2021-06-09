"use strict";

import withStyle from "easy-with-style";  ///

import EntryItem from "../../item/entry";
import dragMixins from "../../mixins/drag";

class DragEntryItem extends EntryItem {
	getName() {
		const { name } = this.properties;

		return name;
	}

	getPath() {
		const explorer = this.getExplorer(),
					dragEntryItem = this,  ///
					path = explorer.retrieveDragEntryItemPath(dragEntryItem);

		return path;
	}

	getExplorer() {
		const { explorer } = this.properties;

		return explorer;
	}

  startDragHandler(event, element) {
    const path = this.getPath(),
          type = this.getType(),
          explorer = this.getExplorer(),
          dragEntryItemType = type,  ///
          markerEntryItemPath = path;  ///

    explorer.addMarker(markerEntryItemPath, dragEntryItemType);
  }

  stopDragHandler(event, element) {
    const explorer = this.getExplorer();

    explorer.removeMarker();
  }

  didMount() {
	  this.onStartDrag(this.startDragHandler, this);

    this.onStopDrag(this.stopDragHandler, this);

		this.enableDrag();
	}

	willUnmount() {
    this.offStartDrag(this.startDragHandler, this);

    this.offStopDrag(this.stopDragHandler, this);

    this.disableDrag();
	}

	static ignoredProperties = [
	  "name"
  ];

	static defaultProperties = {
		className: "drag"
	};
}

Object.assign(EntryItem.prototype, dragMixins);

export default withStyle(DragEntryItem)`

  min-height: 2.4rem;

  .dragging {
    z-index: 1;
    position: fixed;
    pointer-events: none;
  }
  
`;
