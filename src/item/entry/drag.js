"use strict";

import withStyle from "easy-with-style";  ///

import EntryItem from "../../item/entry";
import dragMixins from "../../mixins/drag";

class DragEntryItem extends EntryItem {
	getPath() {
		const explorer = this.getExplorer(),
					dragEntryItem = this,  ///
					dragEntryItemPath = explorer.retrieveDragEntryItemPath(dragEntryItem),
					path = dragEntryItemPath;	///

		return path;
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
		const explorer = this.getExplorer(),
					markerEntryItem = explorer.retrieveMarkerEntryItem(),
					markerEntryItemPath = markerEntryItem.getPath();

		explorer.removeMarker();

		const path = this.getPath();

		if (path !== markerEntryItemPath) {
			const sourceFilePath = path,	///
						targetFilePath = markerEntryItemPath,	///
						pathMap = {
							sourceFilePath,
							targetFilePath
						},
						pathMaps = [
							pathMap
						];

			explorer.moveEntry(pathMaps);
		}
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

	static defaultProperties = {
		className: "drag"
	};
}

Object.assign(EntryItem.prototype, dragMixins);

export default withStyle(DragEntryItem)`

  min-height: 2.4rem;
  user-select: none;

  .dragging {
    z-index: 1;
    position: fixed;
    pointer-events: none;
  }
  
`;
