"use strict";

import withStyle from "easy-with-style";  ///

import DragEntryItem from "../../../item/entry/drag";

import { nameIsBeforeEntryItemName } from "../../../utilities/name";
import { FILE_NAME_TYPE, DIRECTORY_NAME_TYPE, FILE_NAME_MARKER_TYPE, DIRECTORY_NAME_MARKER_TYPE } from "../../../types";

class FileNameDragEntryItem extends DragEntryItem {
	isBefore(entryItem) {
		let before;

		const entryItemType = entryItem.getType();

		switch (entryItemType) {
			case FILE_NAME_TYPE:
			case FILE_NAME_MARKER_TYPE:
			case DIRECTORY_NAME_MARKER_TYPE:
				const name = this.getName(),
							entryItemName = entryItem.getName();

				before = nameIsBeforeEntryItemName(name, entryItemName);
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

export default withStyle(FileNameDragEntryItem)`

  font-size: 2rem;
  margin-left: 2rem;
  background-color: lightgreen;
      
`;
