"use strict";

import NameButton from "../../../button/name";
import FileNameSVG from "../../../svg/fileName";
import DragEntryItem from "../../../item/entry/drag";
import FileNameEntryItemDiv from "../../../div/item/entry/fileName";

import { nameIsBeforeEntryItemName } from "../../../utilities/name";
import { FILE_NAME_DRAG_ENTRY_TYPE, DIRECTORY_NAME_DRAG_ENTRY_TYPE, FILE_NAME_MARKER_ENTRY_TYPE, DIRECTORY_NAME_MARKER_ENTRY_TYPE } from "../../../entryTypes";

export default class FileNameDragEntryItem extends DragEntryItem {
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
		const { name } = this.properties,
					fileName = name;	///

		return fileName;
	}

	getNameButton() {
		const { NameButton } = this.constructor;

		return NameButton;
	}

	getFileNameSVG() {
		const { FileNameSVG } = this.constructor;

		return FileNameSVG;
	}

	getPathMap(sourceEntryPath, targetEntryPath) {
		const pathMap = super.getPathMap(sourceEntryPath, targetEntryPath),
					entryDirectory = false;

		Object.assign(pathMap, {
			entryDirectory
		});

		return pathMap;
	}

	retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps) {
		const pathMap = this.getPathMap(sourceEntryPath, targetEntryPath);

		pathMaps.push(pathMap);
	}

	childElements() {
    const { name } = this.properties,
					explorer = this.getExplorer(),
					NameButton = this.getNameButton(),
					FileNameSVG = this.getFileNameSVG();

		return (

			<FileNameEntryItemDiv name={name} explorer={explorer} NameButton={NameButton} FileNameSVG={FileNameSVG} />

		);
  }

  static NameButton = NameButton;

	static FileNameSVG = FileNameSVG;

  static type = FILE_NAME_DRAG_ENTRY_TYPE;

  static defaultProperties = {
    className: "file-name"
  };
}
