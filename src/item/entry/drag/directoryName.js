"use strict";

import { dropMixins } from "easy-drag-and-drop";
import { pathUtilities } from "necessary";

import ToggleButton from "../../../button/toggle";
import DragEntryItem from "../../../item/entry/drag";
import DirectoryNameSVG from "../../../svg/directoryName";
import DirectoryNameDragEntryItemDiv from "../../../div/item/entry/drag/directoryName";

import { adjustSourceEntryPath, adjustTargetEntryPath } from "../../../utilities/pathMap";
import { FILE_NAME_DRAG_ENTRY_TYPE, FILE_NAME_MARKER_ENTRY_TYPE, DIRECTORY_NAME_DRAG_ENTRY_TYPE, DIRECTORY_NAME_MARKER_ENTRY_TYPE } from "../../../entryTypes";

const { concatenatePaths } = pathUtilities;

export default class DirectoryNameDragEntryItem extends DragEntryItem {
	dragOverCustomHandler = (dragElement, element) => {
		const collapsed = this.isCollapsed();

		if (collapsed) {
			return;
		}

		const path = this.getPath(),
					explorer = this.getExplorer(),
					dragEntryItem = dragElement,  ///
					markerEntryItem = this.retrieveMarkerEntryItem(),
					dragEntryItemName = dragEntryItem.getName();

		let markerEntryItemPath = markerEntryItem.getPath(),
				markerEntryItemExplorer = markerEntryItem.getExplorer(),
				previousMarkerEntryItemPath = markerEntryItemPath, ///
				previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///

		markerEntryItemPath = concatenatePaths(path, dragEntryItemName);

		markerEntryItemExplorer = explorer;  ///

		if ((markerEntryItemExplorer !== previousMarkerEntryItemExplorer) || (markerEntryItemPath !== previousMarkerEntryItemPath)) {
			const dragEntryItemType = dragEntryItem.getType();

			previousMarkerEntryItemExplorer.removeMarker();

			markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
		}
	}

	dropCustomHandler = (dragElement, aborted, element, done) => {
    const dragEntryItem = dragElement,  ///
          markerEntryItem = this.retrieveMarkerEntryItem(),
          markerEntryItemExplorer = markerEntryItem.getExplorer();

    if (aborted) {
      markerEntryItemExplorer.removeMarker();

      done();

      return;
    }

    markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, done);
  }

	doubleClick() {
		let collapsed = this.isCollapsed();

		collapsed = !collapsed;

		collapsed ?
			this.collapse() :
				this.expand();
	}

	singleClick() {
		this.expand();
	}

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

	isTopmost() {
		const { topmost } = this.properties;

		return topmost;
	}

	isCollapsed() {
		const entriesListCollapsed = this.isEntriesListCollapsed(),
					collapsed = entriesListCollapsed;	///

		return collapsed;
	}

	getReference() {
		const explorer = this.getExplorer(),
					reference = explorer.getReference();

		return reference;
	}

	getReferences() {
		const explorer = this.getExplorer(),
					references = explorer.getReferences();

		return references;
	}

	retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps) {
		const name = this.getName(),
					pathMap = this.getPathMap(sourceEntryPath, targetEntryPath),
          nameSpanName = this.getNameSpanName();

		pathMaps.push(pathMap);

		sourceEntryPath = adjustSourceEntryPath(sourceEntryPath, name);

		targetEntryPath = adjustTargetEntryPath(targetEntryPath, nameSpanName);

		this.forEachDragEntryItem((dragEntryItem) => {
			dragEntryItem.retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps);
		});
	}

  collapse() {
    this.collapseEntriesList();
		this.collapseToggleButton();
  }

  expand() {
    this.expandEntriesList();
		this.expandToggleButton();
  }

	remove() {
		const path = this.getPath(),
					explorer = this.getExplorer(),
					directoryPath = path;	///

		explorer.removeDirectoryPath(directoryPath);
	}

	didMount() {
		const { collapsed } = this.properties;

		collapsed ?
			this.collapse() :
				this.expand();

		this.enableDrop();

		this.onCustomDrop(this.dropCustomHandler);

		this.onCustomDragOver(this.dragOverCustomHandler);

		super.didMount();
	}

	willUnmount() {
		this.disableDrop();

		this.offCustomDrop(this.dropCustomHandler);

		this.offCustomDragOver(this.dragOverCustomHandler);

		super.willUnmount();
	}

  childElements() {
		const { name } = this.properties,
          { NameSpan, ToggleButton, DirectoryNameSVG } = this.constructor,
          explorer = this.getExplorer(),
          EntriesList = explorer.getEntriesList();

		return ([

			<DirectoryNameDragEntryItemDiv name={name}
																		 explorer={explorer}
																		 NameSpan={NameSpan}
																		 ToggleButton={ToggleButton}
																		 DirectoryNameSVG={DirectoryNameSVG}
			/>,
			<EntriesList explorer={explorer} />

		]);
	}

  static type = DIRECTORY_NAME_DRAG_ENTRY_TYPE;

  static ToggleButton = ToggleButton;

	static DirectoryNameSVG = DirectoryNameSVG;

	static ignoredProperties = [
		"topmost"
	];

	static defaultProperties = {
    className: "directory-name"
  };
}

Object.assign(DirectoryNameDragEntryItem.prototype, dropMixins);
