"use strict";

import FileNameSVG from "../../../svg/fileName";
import DragEntryItem from "../../../item/entry/drag";
import FileNameDragEntryItemDiv from "../../../div/item/entry/drag/fileName";

import { nameIsBeforeEntryItemName } from "../../../utilities/name";
import { FILE_NAME_DRAG_ENTRY_TYPE, DIRECTORY_NAME_DRAG_ENTRY_TYPE, FILE_NAME_MARKER_ENTRY_TYPE, DIRECTORY_NAME_MARKER_ENTRY_TYPE } from "../../../entryTypes";

export default class FileNameDragEntryItem extends DragEntryItem {
	doubleClick() {
		const explorer = this.getExplorer(),
					fileNameDragEntryItem = this;	///

		explorer.openFileNameDragEntryItem(fileNameDragEntryItem);
	}

	isBefore(entryItem) {
		let before;

		const entryItemType = entryItem.getType();

		switch (entryItemType) {
			case FILE_NAME_DRAG_ENTRY_TYPE:
			case FILE_NAME_MARKER_ENTRY_TYPE:
			case DIRECTORY_NAME_MARKER_ENTRY_TYPE:
				const name = this.getName(),
							entryItemName = entryItem.getName();

				before = nameIsBeforeEntryItemName(name, entryItemName);

				break;

			case DIRECTORY_NAME_DRAG_ENTRY_TYPE:
				before = false;

				break;
		}

		return before;
	}

	getFileName() {
		const name = this.getName(),
					fileName = name;	///

		return fileName;
	}

  isCollapsed() {
    const collapsed = null; ///

    return collapsed;
  }

	retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps) {
		const pathMap = this.getPathMap(sourceEntryPath, targetEntryPath);

		pathMaps.push(pathMap);
	}

	remove() {
		const path = this.getPath(),
					explorer = this.getExplorer(),
					filePath = path;	///

		explorer.removeFilePath(filePath);
	}

	childElements() {
    const { name } = this.properties,
          { NameSpan, FileNameSVG } = this.constructor,
					explorer = this.getExplorer();

		return (

			<FileNameDragEntryItemDiv name={name}
																explorer={explorer}
																NameSpan={NameSpan}
																FileNameSVG={FileNameSVG}
			/>

		);
  }

  static type = FILE_NAME_DRAG_ENTRY_TYPE;

  static FileNameSVG = FileNameSVG;

  static defaultProperties = {
    className: "file-name"
  };
}
