"use strict";

import NameButton from "../../../button/name";
import FileNameSVG from "../../../svg/entryItem/fileName";
import DragEntryItem from "../../../item/entry/drag";

import { nameIsBeforeEntryItemName } from "../../../utilities/name";
import { FILE_NAME_DRAG_TYPE, DIRECTORY_NAME_DRAG_TYPE, FILE_NAME_MARKER_TYPE, DIRECTORY_NAME_MARKER_TYPE } from "../../../types";

export default class FileNameDragEntryItem extends DragEntryItem {
	isBefore(entryItem) {
		let before;

		const entryItemType = entryItem.getType();

		switch (entryItemType) {
			case FILE_NAME_DRAG_TYPE:
			case FILE_NAME_MARKER_TYPE:
			case DIRECTORY_NAME_MARKER_TYPE:
				const name = this.getName(),
							entryItemName = entryItem.getName();

				before = nameIsBeforeEntryItemName(name, entryItemName);
				break;

			case DIRECTORY_NAME_DRAG_TYPE:
				before = false;
				break;
		}

		return before;
	}

	getFileName() {
		const { name } = this.properties,
					fileName = name;	///

		return fileName;
	}

	getNameButton() {
		const { NameButton } = this.constructor;

		return NameButton;
	}

	getPathMap(sourcePath, targetPath) {
		const pathMap = super.getPathMap(sourcePath, targetPath),
					directory = false;

		Object.assign(pathMap, {
			directory
		});

		return pathMap;
	}

	getPathMaps(sourcePath, targetPath, pathMaps = []) {
		const pathMap = this.getPathMap(sourcePath, targetPath);

		pathMaps.push(pathMap);

		return pathMaps;
	}

	doubleClickHandler(event, element) {
		const explorer = this.getExplorer(),
					fileNameDragEntryItem = this;	///

		explorer.openFileNameDragEntryItem(fileNameDragEntryItem);

		event.stopPropagation();
	}

	childElements() {
    const { name } = this.properties,
					NameButton = this.getNameButton(),
					doubleClickHandler = this.doubleClickHandler.bind(this);

    return ([

			<FileNameSVG/>,
			<NameButton onDoubleClick={doubleClickHandler} >
				{name}
			</NameButton>

		]);
  }

  static NameButton = NameButton;

  static type = FILE_NAME_DRAG_TYPE;

  static defaultProperties = {
    className: "file-name"
  };
}
