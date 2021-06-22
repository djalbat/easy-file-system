"use strict";

import withStyle from "easy-with-style";  ///

import { pathUtilities } from "necessary";

import EntryItem from "../../item/entry";
import dragMixins from "../../mixins/drag";

import { adjustPath } from "../../utilities/pathMap";

const { pathWithoutBottommostNameFromPath } = pathUtilities;

class DragEntryItem extends EntryItem {
	getPathMap(sourcePath, targetPath) {
		const type = this.getType(),
					name = this.getName();

		sourcePath = adjustPath(sourcePath, name);
		targetPath = adjustPath(targetPath, name);

		const pathMap = {
			type,
			sourcePath,
			targetPath
		};

		return pathMap;
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
			const pathWithoutBottommostName = pathWithoutBottommostNameFromPath(path),
						markerEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(markerEntryItemPath),
						sourcePath = pathWithoutBottommostName,	///
						targetPath = markerEntryItemPathWithoutBottommostName,	///
						pathMaps = this.getPathMaps(sourcePath, targetPath);

			explorer.moveDragEntryItems(pathMaps);
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
