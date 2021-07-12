"use strict";

import { dropMixins } from "@djalbat/easy-drag-and-drop";

import markerMixins from "../../../mixins/marker";
import ToggleButton from "../../../button/toggle";
import DragEntryItem from "../../../item/entry/drag";
import DirectoryNameSVG from "../../../svg/entryItem/directoryName";

import { adjustSourcePath, adjustTargetPath } from "../../../utilities/pathMap";
import { FILE_NAME_DRAG_TYPE, FILE_NAME_MARKER_TYPE, DIRECTORY_NAME_DRAG_TYPE, DIRECTORY_NAME_MARKER_TYPE } from "../../../types";

export default class DirectoryNameDragEntryItem extends DragEntryItem {
	isBefore(entryItem) {
		let before;

		const entryItemType = entryItem.getType();

		switch (entryItemType) {
			case FILE_NAME_DRAG_TYPE:
			case FILE_NAME_MARKER_TYPE:
			case DIRECTORY_NAME_MARKER_TYPE:
				before = true;

				break;

			case DIRECTORY_NAME_DRAG_TYPE:
				const name = this.getName(),
							entryItemName = entryItem.getName();

				before = (name.localeCompare(entryItemName) < 0);

				break;
		}

		return before;
	}

	getPathMap(sourcePath, targetPath) {
		const pathMap = super.getPathMap(sourcePath, targetPath),
					collapsed = this.isCollapsed();

		Object.assign(pathMap, {
			collapsed
		});

		return pathMap;
	}

	getPathMaps(sourcePath, targetPath, pathMaps = []) {
		const name = this.getName(),
					pathMap = this.getPathMap(sourcePath, targetPath);

		pathMaps.push(pathMap);

		sourcePath = adjustSourcePath(sourcePath, name);
		targetPath = adjustTargetPath(targetPath, name);

		this.forEachDragEntryItem((dragEntryItem) => {
			dragEntryItem.getPathMaps(sourcePath, targetPath, pathMaps);
		});

		return pathMaps;
	}

	isCollapsed() {
		const entriesListCollapsed = this.isEntriesListCollapsed(),
					collapsed = entriesListCollapsed;	///

		return collapsed;
	}

  setCollapsed(collapsed) {
    collapsed ?
      this.collapse() :
        this.expand();
  }

  collapse() {
    this.collapseEntriesList();
  }

  expand() {
    this.expandEntriesList();
  }

	dropHandler(dragElement, element) {
		const explorer = this.getExplorer(),
					dragEntryItem = dragElement;	///

		explorer.dropDragEntryItem(dragEntryItem);
	}

	didMount() {
		this.enableDrop();

		this.enableMarker();

		this.onDrop(this.dropHandler, this);

		super.didMount();
	}

	willUnmount() {
		this.disableDrop();

		this.disableMarker();

		this.offDrop(this.dropHandler, this);

		super.willUnmount();
	}

  childElements() {
		const { name, explorer } = this.properties,
					EntriesList = explorer.getEntriesList();

		return ([

			<ToggleButton/>,
			<DirectoryNameSVG/>,
			name,
			<EntriesList explorer={explorer} />

		]);
	}

	initialise() {
		this.assignContext();
	}

	static type = DIRECTORY_NAME_DRAG_TYPE;

	static defaultProperties = {
    className: "directory-name"
  };
}

Object.assign(DirectoryNameDragEntryItem.prototype, dropMixins);
Object.assign(DirectoryNameDragEntryItem.prototype, markerMixins);
