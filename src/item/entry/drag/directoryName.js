"use strict";

import { dropMixins } from "@djalbat/easy-drag-and-drop";

import NameButton from "../../../button/name";
import ToggleButton from "../../../button/toggle";
import markerMixins from "../../../mixins/marker";
import DragEntryItem from "../../../item/entry/drag";
import DirectoryNameSVG from "../../../svg/entryItem/directoryName";

import { adjustSourcePath, adjustTargetPath } from "../../../utilities/pathMap";
import { FILE_NAME_DRAG_TYPE, FILE_NAME_MARKER_TYPE, DIRECTORY_NAME_DRAG_TYPE, DIRECTORY_NAME_MARKER_TYPE } from "../../../types";

export default class DirectoryNameDragEntryItem extends DragEntryItem {
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

	getPathMap(sourcePath, targetPath) {
		const pathMap = super.getPathMap(sourcePath, targetPath),
					collapsed = this.isCollapsed(),
					directory = true;

		Object.assign(pathMap, {
			collapsed,
			directory
		});

		return pathMap;
	}

	getPathMaps(sourcePath, targetPath, pathMaps = []) {
		const name = this.getName(),
					pathMap = this.getPathMap(sourcePath, targetPath);

		pathMaps.push(pathMap);

		sourcePath = adjustSourcePath(sourcePath, name);
		targetPath = adjustTargetPath(targetPath, name);

		this.forEachDragEntryItem((dragEntryItem) => {
			dragEntryItem.getPathMaps(sourcePath, targetPath, pathMaps);
		});

		return pathMaps;
	}

	setCollapsed(collapsed) {
		collapsed ?
			this.collapse() :
				this.expand();
	}

	isCollapsed() {
		const entriesListCollapsed = this.isEntriesListCollapsed(),
					collapsed = entriesListCollapsed;	///

		return collapsed;
	}

  collapse() {
    this.collapseEntriesList();
		this.collapseToggleButton();
  }

  expand() {
    this.expandEntriesList();
		this.expandToggleButton();
  }

  toggle() {
		let collapsed = this.isCollapsed();

		collapsed = !collapsed;

		this.setCollapsed(collapsed);
	}

	dropHandler(dragElement, element) {
		const explorer = this.getExplorer(),
					dragEntryItem = dragElement;	///

		explorer.dropDragEntryItem(dragEntryItem);
	}

	doubleClickHandler(event, element) {
		this.toggle();

		event.stopPropagation();
	}

	toggleButtonClickHandler(event, element) {
		this.toggle();

		event.stopPropagation();
	}

	didMount() {
		const { collapsed } = this.properties;

		this.setCollapsed(collapsed);

		this.enableDrop();

		this.enableMarker();

		this.onDrop(this.dropHandler, this);

		super.didMount();
	}

	willUnmount() {
		this.disableDrop();

		this.disableMarker();

		this.offDrop(this.dropHandler, this);

		super.willUnmount();
	}

  childElements() {
		const { name, explorer } = this.properties,
					EntriesList = explorer.getEntriesList(),
					doubleClickHandler = this.doubleClickHandler.bind(this),
					toggleButtonClickHandler = this.toggleButtonClickHandler.bind(this);

		return ([

			<ToggleButton onMouseDown={toggleButtonClickHandler} />,
			<DirectoryNameSVG/>,
			<NameButton onDoubleClick={doubleClickHandler} >
				{name}
			</NameButton>,
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
