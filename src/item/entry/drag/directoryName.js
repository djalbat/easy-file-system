"use strict";

import { dropMixins } from "easy-drag-and-drop";

import NameButton from "../../../button/name";
import ToggleButton from "../../../button/toggle";
import DragEntryItem from "../../../item/entry/drag";
import DirectoryNameSVG from "../../../svg/directoryName";
import DirectoryNameEntryItemDiv from "../../../div/entryItem/directoryName";

import { adjustSourceEntryPath, adjustTargetEntryPath } from "../../../utilities/pathMap";
import { FILE_NAME_DRAG_ENTRY_TYPE, FILE_NAME_MARKER_ENTRY_TYPE, DIRECTORY_NAME_DRAG_ENTRY_TYPE, DIRECTORY_NAME_MARKER_ENTRY_TYPE } from "../../../entryTypes";

export default class DirectoryNameDragEntryItem extends DragEntryItem {
	isBefore(entryItem) {
		let before;

		const entryItemType = entryItem.getType();

		switch (entryItemType) {
			case FILE_NAME_DRAG_ENTRY_TYPE:
			case FILE_NAME_MARKER_ENTRY_TYPE:
			case DIRECTORY_NAME_MARKER_ENTRY_TYPE:
				before = true;

				break;

			case DIRECTORY_NAME_DRAG_ENTRY_TYPE:
				const name = this.getName(),
							entryItemName = entryItem.getName();

				before = (name.localeCompare(entryItemName) < 0);

				break;
		}

		return before;
	}

	getPathMap(sourceEntryPath, targetEntryPath) {
		const pathMap = super.getPathMap(sourceEntryPath, targetEntryPath),
					collapsed = this.isCollapsed(),
					entryDirectory = true;

		Object.assign(pathMap, {
			collapsed,
			entryDirectory
		});

		return pathMap;
	}

	getExplorer() {
		const { explorer } = this.properties;

		return explorer;
	}

	isCollapsed() {
		const entriesListCollapsed = this.isEntriesListCollapsed(),
					collapsed = entriesListCollapsed;	///

		return collapsed;
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

	retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps) {
		const name = this.getName(),
					pathMap = this.getPathMap(sourceEntryPath, targetEntryPath);

		pathMaps.push(pathMap);

		sourceEntryPath = adjustSourceEntryPath(sourceEntryPath, name);
		targetEntryPath = adjustTargetEntryPath(targetEntryPath, name);

		this.forEachDragEntryItem((dragEntryItem) => {
			dragEntryItem.retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps);
		});
	}

	setCollapsed(collapsed) {
		collapsed ?
			this.collapse() :
				this.expand();
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

	dropHandler(dragElement, aborted, element, done) {
		const markerEntryItem = this.retrieveMarkerEntryItem(),
					markerEntryItemExplorer = markerEntryItem.getExplorer();

		if (aborted) {
			markerEntryItemExplorer.removeMarker();

			done();

			return;
		}

		const dragEntryItem = dragElement;  ///

		markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, done);
	}

	dragOverHandler(dragElement, element) {
		const collapsed = this.isCollapsed();

		if (collapsed) {
			return;
		}

		const path = this.getPath(),
					explorer = this.getExplorer(),
					dragEntryItem = dragElement,  ///
					dragEntryItemExplorer = dragEntryItem.getExplorer(),
					dragEntryItemExplorerIgnored = explorer.isExplorerIgnored(dragEntryItemExplorer);

		if (dragEntryItemExplorerIgnored) {
			return;
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

			previousMarkerEntryItemExplorer.removeMarker();

			markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
		}
	}

	didMount() {
		const { collapsed } = this.properties;

		this.setCollapsed(collapsed);

		this.enableDrop();

		this.onDrop(this.dropHandler, this);

		this.onDragOver(this.dragOverHandler, this);

		super.didMount();
	}

	willUnmount() {
		this.disableDrop();

		this.offDrop(this.dropHandler, this);

		this.offDragOver(this.dragOverHandler, this);

		super.willUnmount();
	}

  childElements() {
		const { name } = this.properties,
					explorer = this.getExplorer(),
					NameButton = this.getNameButton(),
					EntriesList = explorer.getEntriesList(),
					ToggleButton = this.getToggleButton(),
					DirectoryNameSVG = this.getDirectoryNameSVG();

		return ([

			<DirectoryNameEntryItemDiv name={name}
																 NameButton={NameButton}
																 ToggleButton={ToggleButton}
																 DirectoryNameSVG={DirectoryNameSVG}
			/>,
			<EntriesList explorer={explorer} />,

		]);
	}

	static NameButton = NameButton;

	static ToggleButton = ToggleButton;

	static DirectoryNameSVG = DirectoryNameSVG;

	static type = DIRECTORY_NAME_DRAG_ENTRY_TYPE;

	static defaultProperties = {
    className: "directory-name"
  };
}

Object.assign(DirectoryNameDragEntryItem.prototype, dropMixins);
