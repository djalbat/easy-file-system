"use strict";

import { dropMixins } from "easy-drag-and-drop";

import NameButton from "../../../button/name";
import ToggleButton from "../../../button/toggle";
import DragEntryItem from "../../../item/entry/drag";
import DirectoryNameSVG from "../../../svg/entryItem/directoryName";

import { isPathTopmostPath } from "../../../utilities/path";
import { adjustSourcePath, adjustTargetPath } from "../../../utilities/pathMap";
import { DRAG_INTO_TOPMOST_DIRECTORIES_ONLY_OPTION } from "../../../options";
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

	retrievePathMaps(sourcePath, targetPath, pathMaps) {
		const name = this.getName(),
					pathMap = this.getPathMap(sourcePath, targetPath);

		pathMaps.push(pathMap);

		sourcePath = adjustSourcePath(sourcePath, name);
		targetPath = adjustTargetPath(targetPath, name);

		this.forEachDragEntryItem((dragEntryItem) => {
			dragEntryItem.retrievePathMaps(sourcePath, targetPath, pathMaps);
		});
	}

	getNameButton() {
		const { NameButton } = this.constructor;

		return NameButton;
	}

	getToggleButton() {
		const { ToggleButton } = this.constructor;

		return ToggleButton;
	}

	getDirectoryNameSVG() {
		const { DirectoryNameSVG } = this.constructor;

		return DirectoryNameSVG;
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

	dropHandler(dragElement, element, done) {
		const explorer = this.getExplorer(),
					dragEntryItem = dragElement;	///

		explorer.dropDragEntryItem(dragEntryItem, done);
	}

	dragOutHandler(dragElement, element) {
		console.log("directory drag out...")
	}

	dragOverHandler(dragElement, element) {
		const collapsed = this.isCollapsed();

		if (collapsed) {
			return;
		}

		const path = this.getPath(),
					explorer = this.getExplorer(),
					dragEntryItem = dragElement,  ///
					dragEntryItemIgnored = dragEntryItem.isIgnored(explorer);

		if (dragEntryItemIgnored) {
			return;
		}

		const dragIntoTopmostDirectoriesOnlyOptionPresent = explorer.isOptionPresent(DRAG_INTO_TOPMOST_DIRECTORIES_ONLY_OPTION);

		if (dragIntoTopmostDirectoriesOnlyOptionPresent) {
			const pathTopmostPath = isPathTopmostPath(path);

			if (!pathTopmostPath) {
				return;
			}
		}

		const markerEntryItem = this.retrieveMarkerEntryItem(),
					dragEntryItemName = dragEntryItem.getName();

		let markerEntryItemPath = markerEntryItem.getPath(),
				markerEntryItemExplorer = markerEntryItem.getExplorer(),
				previousMarkerEntryItemPath = markerEntryItemPath, ///
				previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///

		markerEntryItemPath = `${path}/${dragEntryItemName}`;

		markerEntryItemExplorer = explorer;  ///

		if ((markerEntryItemExplorer !== previousMarkerEntryItemExplorer) || (markerEntryItemPath !== previousMarkerEntryItemPath)) {
			const dragEntryItemType = dragEntryItem.getType();

			explorer.removeMarker();

			explorer.addMarker(markerEntryItemPath, dragEntryItemType);
		}
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

		this.onDrop(this.dropHandler, this);

		this.onDragOut(this.dragOutHandler, this);

		this.onDragOver(this.dragOverHandler, this);

		super.didMount();
	}

	willUnmount() {
		this.disableDrop();

		this.offDrop(this.dropHandler, this);

		this.offDragOut(this.dragOutHandler, this);

		this.offDragOver(this.dragOverHandler, this);

		super.willUnmount();
	}

  childElements() {
		const { name, explorer } = this.properties,
					NameButton = this.getNameButton(),
					EntriesList = explorer.getEntriesList(),
					ToggleButton = this.getToggleButton(),
					DirectoryNameSVG = this.getDirectoryNameSVG(),
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

	static NameButton = NameButton;

	static ToggleButton = ToggleButton;

	static DirectoryNameSVG = DirectoryNameSVG;

	static type = DIRECTORY_NAME_DRAG_TYPE;

	static defaultProperties = {
    className: "directory-name"
  };
}

Object.assign(DirectoryNameDragEntryItem.prototype, dropMixins);
