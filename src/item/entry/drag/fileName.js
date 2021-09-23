"use strict";

import NameButton from "../../../button/name";
import FileNameSVG from "../../../svg/fileName";
import DragEntryItem from "../../../item/entry/drag";
import FileNameEntryItemDiv from "../../../div/entryItem/fileName";

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

	retrievePathMaps(sourcePath, targetPath, pathMaps) {
		const pathMap = this.getPathMap(sourcePath, targetPath);

		pathMaps.push(pathMap);
	}

	childElements() {
    const { name } = this.properties,
					{ FileNameSVG } = this.constructor,
					NameButton = this.getNameButton();

		return (

			<FileNameEntryItemDiv name={name} NameButton={NameButton} FileNameSVG={FileNameSVG} />

		);
  }

  static NameButton = NameButton;

	static FileNameSVG = FileNameSVG;

  static type = FILE_NAME_DRAG_TYPE;

  static defaultProperties = {
    className: "file-name"
  };
}
