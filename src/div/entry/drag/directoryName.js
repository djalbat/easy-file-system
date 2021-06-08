"use strict";

import withStyle from "easy-with-style";  ///

import { pathUtilities } from "necessary";

import dropMixins from "../../../mixins/drop";
import DragEntryDiv from "../../../div/entry/drag";

import { FILE_NAME_TYPE, DIRECTORY_NAME_TYPE, FILE_NAME_MARKER_TYPE, DIRECTORY_NAME_MARKER_TYPE } from "../../../types";

const { pathWithoutTopmostDirectoryNameFromPath } = pathUtilities;

class DirectoryNameDragEntryDiv extends DragEntryDiv {
  isTopmost() {
		const path = this.getPath(),
					pathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(path),
					topmost = (pathWithoutTopmostDirectoryName === null);

		return topmost;
	}

	isBefore(entryDiv) {
		let before;

		const entryDivType = entryDiv.getType();

		switch (entryDivType) {
			case FILE_NAME_TYPE:
			case FILE_NAME_MARKER_TYPE:
			case DIRECTORY_NAME_MARKER_TYPE:
				before = true;

				break;

			case DIRECTORY_NAME_TYPE:
				const name = this.getName(),
							entryDivName = entryDiv.getName();

				before = (name.localeCompare(entryDivName) < 0);

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
    this.collapseEntriesDiv();
  }

  expand() {
    this.expandEntriesDiv();
  }

  dropHandler(dragElement) {
    const name = this.getName(),
          dragEntryDiv = dragElement, ///
          dragEntryDivName = dragEntryDiv.getName();

    console.log(`Drop '${dragEntryDivName}' onto ${name}'`)
  }

  dragOutHandler(dragElement) {
    const name = this.getName(),
          dragEntryDiv = dragElement, ///
          dragEntryDivName = dragEntryDiv.getName();

    console.log(`Drag '${dragEntryDivName}' out of ${name}'`)
  }

  dragOverHandler(dragElement) {
    const name = this.getName(),
          dragEntryDiv = dragElement, ///
          dragEntryDivName = dragEntryDiv.getName();

    console.log(`Drag '${dragEntryDivName}' over ${name}'`)
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
		const { name, explorerDiv } = this.properties,
					EntriesDiv = explorerDiv.getEntriesDiv();

		return ([

			name,
			<EntriesDiv explorerDiv={explorerDiv} />

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

Object.assign(DirectoryNameDragEntryDiv.prototype, dropMixins);

export default withStyle(DirectoryNameDragEntryDiv)`

  font-size: 2rem;
  margin-left: 2rem;
  background-color: lightblue;
  
  .topmost {
    margin-left: 0;
  }
      
`;
