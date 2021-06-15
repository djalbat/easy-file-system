"use strict";

import withStyle from "easy-with-style";  ///

import dropMixins from "../../../mixins/drop";
import markerMixins from "../../../mixins/marker";
import DragEntryItem from "../../../item/entry/drag";

import { FILE_NAME_DRAG_TYPE, DIRECTORY_NAME_DRAG_TYPE, FILE_NAME_MARKER_TYPE, DIRECTORY_NAME_MARKER_TYPE } from "../../../types";

class DirectoryNameDragEntryItem extends DragEntryItem {
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

	stopDragHandler(event, element) {
		const explorer = this.getExplorer(),
					markerEntryItem = explorer.retrieveMarkerEntryItem(),
					markerEntryItemPath = markerEntryItem.getPath();

		explorer.removeMarker();

		const path = this.getPath();

		if (path !== markerEntryItemPath) {
			let directoryPath;

			directoryPath = path;	///

			explorer.removeDirectoryPath(directoryPath);

			directoryPath = markerEntryItemPath;	///

			explorer.addDirectoryPath(directoryPath);
		}
	}
  didMount() {
		this.enableDrop();

		this.enableMarker();

		super.didMount();
	}

	willUnmount() {
		this.disableDrop();

		this.disableMarker();

		super.willUnmount();
	}

  childElements() {
		const { name, explorer } = this.properties,
					EntriesList = explorer.getEntriesList();

		return ([

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

export default withStyle(DirectoryNameDragEntryItem)`

  font-size: 2rem;
  background-color: lightblue;
      
`;
