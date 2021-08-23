"use strict";

import withStyle from "easy-with-style";  ///

import { dragMixins } from "easy-drag-and-drop";
import { pathUtilities } from "necessary";

import EntryItem from "../../item/entry";

import { dragEntryItemFontSize } from "../../styles";
import { adjustSourcePath, adjustTargetPath } from "../../utilities/pathMap";
import { REMOVE_EMPTY_PARENT_DIRECTORIES_OPTION } from "../../options";

const { pathWithoutBottommostNameFromPath } = pathUtilities;

class DragEntryItem extends EntryItem {
	isIgnored(explorer) {
		const reference = this.getReference(),
					ignoredReferences = explorer.getIgnoredReferences(),
					ignoredReferencesIncludesReference = ignoredReferences.includes(reference),
					ignored = ignoredReferencesIncludesReference;	///

		return ignored;
	}

	getPathMap(sourcePath, targetPath) {
		const name = this.getName();

		sourcePath = adjustSourcePath(sourcePath, name);	///
		targetPath = adjustTargetPath(targetPath, name);	///

		const pathMap = {
			sourcePath,
			targetPath
		};

		return pathMap;
	}

	getPathMaps(sourcePath, targetPath) {
		let pathMaps = [];

		this.retrievePathMaps(sourcePath, targetPath, pathMaps);

		pathMaps.reverse();

		const explorer = this.getExplorer(),
					removeEmptyParentDirectoriesOptionPresent = explorer.isOptionPresent(REMOVE_EMPTY_PARENT_DIRECTORIES_OPTION);

		if (removeEmptyParentDirectoriesOptionPresent) {
			const ascendantPathMaps = this.getAscendantPathMaps(sourcePath);

			pathMaps = [ ...pathMaps, ...ascendantPathMaps ];
		}

		return pathMaps;
	}

	getReference() {
		const explorer = this.getExplorer(),
					reference = explorer.getReference();

		return reference;
	}

	getAscendantPathMaps(sourcePath) {
		const name = this.getName(),
					directory = true,
					targetPath = null,
					ascendantPathMaps = [],
					ascendantEntriesLists = this.getAscendantEntriesLists();

		sourcePath = adjustSourcePath(sourcePath, name);	///

		ascendantEntriesLists.every((ascendantEntriesList) => {
			const ascendantEntriesListEntryItemsLength = ascendantEntriesList.getEntryItemsLength();

			if (ascendantEntriesListEntryItemsLength === 1) {
				const sourcePathWithoutBottommostName = pathWithoutBottommostNameFromPath(sourcePath);

				if (sourcePathWithoutBottommostName !== null) {
					sourcePath = sourcePathWithoutBottommostName;	///

					const ascendantPathMap = {
						directory,
						sourcePath,
						targetPath
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
    margin-top: 0;
    pointer-events: none;
  }
  
`;
