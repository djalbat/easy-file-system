"use strict";

import withStyle from "easy-with-style";  ///

import { pathUtilities } from "necessary";

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

export default withStyle(DirectoryNameDragEntryDiv)`

  font-size: 2rem;
  background-color: lightblue;
      
`;
