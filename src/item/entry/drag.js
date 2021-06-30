"use strict";

import withStyle from "easy-with-style";  ///

import EntryItem from "../../item/entry";
import dragMixins from "../../mixins/drag";

import { adjustPath } from "../../utilities/pathMap";

class DragEntryItem extends EntryItem {
	getPathMap(sourcePath, targetPath) {
		const type = this.getType(),
					name = this.getName();

		sourcePath = adjustPath(sourcePath, name);

		if (targetPath !== null) {
			targetPath = adjustPath(targetPath, name);
		}

		const pathMap = {
			type,
			sourcePath,
			targetPath
		};

		return pathMap;
	}

	startDragHandler(relativeMouseTop, relativeMouseLeft, element) {
    const path = this.getPath(),
          type = this.getType(),
          explorer = this.getExplorer(),
          dragEntryItemType = type,  ///
          markerEntryItemPath = path;  ///

    explorer.addMarker(markerEntryItemPath, dragEntryItemType);
  }

	stopDragHandler(relativeMouseTop, relativeMouseLeft, element) {
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
