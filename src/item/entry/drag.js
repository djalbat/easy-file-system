"use strict";

import withStyle from "easy-with-style";  ///

import { dragMixins } from "easy-drag-and-drop";
import { pathUtilities } from "necessary";

import EntryItem from "../../item/entry";

import { dragEntryItemFontSize } from "../../styles";
import { REMOVE_EMPTY_PARENT_DIRECTORIES_OPTION } from "../../options";
import { adjustSourceEntryPath, adjustTargetEntryPath } from "../../utilities/pathMap";

const { pathWithoutBottommostNameFromPath } = pathUtilities;

class DragEntryItem extends EntryItem {
	getPathMap(sourceEntryPath, targetEntryPath) {
		const name = this.getName();

		sourceEntryPath = adjustSourceEntryPath(sourceEntryPath, name);	///
		targetEntryPath = adjustTargetEntryPath(targetEntryPath, name);	///

		const pathMap = {
			sourceEntryPath,
			targetEntryPath
		};

		return pathMap;
	}

	getPathMaps(sourceEntryPath, targetEntryPath) {
		let pathMaps = [];

		this.retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps);

		pathMaps.reverse();

		const explorer = this.getExplorer(),
					removeEmptyParentDirectoriesOptionPresent = explorer.isOptionPresent(REMOVE_EMPTY_PARENT_DIRECTORIES_OPTION);

		if (removeEmptyParentDirectoriesOptionPresent) {
			const ascendantPathMaps = this.getAscendantPathMaps(sourceEntryPath);

			pathMaps = [ ...pathMaps, ...ascendantPathMaps ];
		}

		return pathMaps;
	}

	getAscendantPathMaps(sourceEntryPath) {
		const name = this.getName(),
					entryDirectory = true,
					targetEntryPath = null,
					ascendantPathMaps = [],
					ascendantEntriesLists = this.getAscendantEntriesLists();

		sourceEntryPath = adjustSourceEntryPath(sourceEntryPath, name);	///

		ascendantEntriesLists.every((ascendantEntriesList) => {
			const ascendantEntriesListEntryItemsLength = ascendantEntriesList.getEntryItemsLength();

			if (ascendantEntriesListEntryItemsLength === 1) {
				const sourceEntryPathWithoutBottommostName = pathWithoutBottommostNameFromPath(sourceEntryPath);

				if (sourceEntryPathWithoutBottommostName !== null) {
					sourceEntryPath = sourceEntryPathWithoutBottommostName;	///

					const ascendantPathMap = {
						entryDirectory,
						sourceEntryPath,
						targetEntryPath
					};

					ascendantPathMaps.push(ascendantPathMap);

					return true;
				}
			}
		});

		return ascendantPathMaps;
	}

	getAscendantEntriesLists() {
		const ascendantEntriesListElements = this.getAscendantElements("ul.entries"),
					ascendantEntriesLists = ascendantEntriesListElements;	///

		return ascendantEntriesLists;
	}

	startDragHandler(element) {
    const path = this.getPath(),
          type = this.getType(),
          explorer = this.getExplorer(),
          dragEntryItemType = type,  ///
          markerEntryItemPath = path;  ///

    explorer.addMarker(markerEntryItemPath, dragEntryItemType);
  }

	stopDragHandler(dropElement, aborted, element) {
		if (dropElement === null) {
			const explorer = this.getExplorer(),
						dragEntryItem = this,	///
						markerEntryItem = explorer.retrieveMarkerEntryItem(),
						markerEntryItemExplorer = markerEntryItem.getExplorer();

			aborted ?
				markerEntryItemExplorer.removeMarker() :
					markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, () => {
					///
				});
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

	initialise() {
		this.assignContext();
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
