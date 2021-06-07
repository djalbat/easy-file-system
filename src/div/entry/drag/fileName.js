"use strict";

import withStyle from "easy-with-style";  ///

import DragEntryDiv from "../../../div/entry/drag";

import { nameIsBeforeEntryDivName } from "../../../utilities/name";
import { FILE_NAME_TYPE, DIRECTORY_NAME_TYPE, FILE_NAME_MARKER_TYPE, DIRECTORY_NAME_MARKER_TYPE } from "../../../types";

class FileNameDragEntryDiv extends DragEntryDiv {
	isBefore(entryDiv) {
		let before;

		const entryDivType = entryDiv.getType();

		switch (entryDivType) {
			case FILE_NAME_TYPE:
			case FILE_NAME_MARKER_TYPE:
			case DIRECTORY_NAME_MARKER_TYPE:
				const name = this.getName(),
							entryDivName = entryDiv.getName();

				before = nameIsBeforeEntryDivName(name, entryDivName);
				break;

			case DIRECTORY_NAME_TYPE:
				before = false;
				break;
		}

		return before;
	}

	childElements() {
    const { name } = this.properties;

    return name;
  }

  static type = FILE_NAME_TYPE;

  static defaultProperties = {
    className: "file-name"
  };
}

export default withStyle(FileNameDragEntryDiv)`

  font-size: 2rem;
  background-color: lightgreen;
      
`;
