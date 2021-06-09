"use strict";

import withStyle from "easy-with-style";  ///

import { pathUtilities } from "necessary";

import dropMixins from "../../../mixins/drop";
import DragEntryItem from "../../../item/entry/drag";

import { FILE_NAME_TYPE, DIRECTORY_NAME_TYPE, FILE_NAME_MARKER_TYPE, DIRECTORY_NAME_MARKER_TYPE } from "../../../types";

const { pathWithoutTopmostDirectoryNameFromPath } = pathUtilities;

class DirectoryNameDragEntryItem extends DragEntryItem {
  isTopmost() {
		const path = this.getPath(),
					pathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(path),
					topmost = (pathWithoutTopmostDirectoryName === null);

		return topmost;
	}

	isBefore(entryItem) {
		let before;

		const entryItemType = entryItem.getType();

		switch (entryItemType) {
			case FILE_NAME_TYPE:
			case FILE_NAME_MARKER_TYPE:
			case DIRECTORY_NAME_MARKER_TYPE:
				before = true;

				break;

			case DIRECTORY_NAME_TYPE:
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

  dropHandler(dragElement) {
    const name = this.getName(),
          dragEntryItem = dragElement, ///
          dragEntryItemName = dragEntryItem.getName();

    console.log(`Drop '${dragEntryItemName}' onto ${name}'`)
  }

  dragOutHandler(dragElement) {
    const name = this.getName(),
          dragEntryItem = dragElement, ///
          dragEntryItemName = dragEntryItem.getName();

    console.log(`Drag '${dragEntryItemName}' out of ${name}'`)
  }

  dragOverHandler(dragElement) {
    const name = this.getName(),
          dragEntryItem = dragElement, ///
          dragEntryItemName = dragEntryItem.getName();

    console.log(`Drag '${dragEntryItemName}' over ${name}'`)
  }

  didMount() {
	  const topmost = this.isTopmost();

	  if (topmost) {
	    this.addClass("topmost");
    }

    this.onDrop(this.dropHandler, this);

    this.onDragOut(this.dragOutHandler, this);

    this.onDragOver(this.dragOverHandler, this);

    this.enableDrop();

    super.didMount();
  }

  willUnmount() {
    const topmost = this.isTopmost();

    if (topmost) {
      this.removeClass("topmost");
    }

    this.offDrop(this.dropHandler, this);

    this.offDragOut(this.dragOutHandler, this);

    this.offDragOver(this.dragOverHandler, this);

    this.disableDrop();

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

	static type = DIRECTORY_NAME_TYPE;

	static defaultProperties = {
    className: "directory-name"
  };
}

Object.assign(DirectoryNameDragEntryItem.prototype, dropMixins);

export default withStyle(DirectoryNameDragEntryItem)`

  font-size: 2rem;
  margin-left: 2rem;
  background-color: lightblue;
  
  .topmost {
    margin-left: 0;
  }
      
`;
