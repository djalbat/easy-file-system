"use strict";

import withStyle from "easy-with-style";  ///

import { dragMixins } from "../../easy-drag-and-drop";	///

import EntryItem from "../../item/entry";

import { dragEntryItemFontSize } from "../../styles";
import { adjustSourcePath, adjustTargetPath } from "../../utilities/pathMap";

class DragEntryItem extends EntryItem {
	getPathMap(sourcePath, targetPath) {
		const type = this.getType(),
					name = this.getName();

		sourcePath = adjustSourcePath(sourcePath, name);
		targetPath = adjustTargetPath(targetPath, name);

		const pathMap = {
			type,
			sourcePath,
			targetPath
		};

		return pathMap;
	}

	startDragHandler(element) {
    const path = this.getPath(),
          type = this.getType(),
          explorer = this.getExplorer(),
          dragEntryItemType = type,  ///
          markerEntryItemPath = path;  ///

    explorer.addMarker(markerEntryItemPath, dragEntryItemType);
  }

	stopDragHandler(element) {
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

	font-size: ${dragEntryItemFontSize};
  user-select: none;

  .dragging {
    z-index: 1;
    position: fixed;
    pointer-events: none;
  }
  
`;
