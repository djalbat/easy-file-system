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
  dropHandler = (dragElement, aborted, element, done) => {
    const dragElementDragEntryItem = (dragElement instanceof DragEntryItem);

    if (!dragElementDragEntryItem) {
      done();

      return;
    }

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

  dragOverHandler = (dragElement, element) => {
    const dragElementDragEntryItem = (dragElement instanceof DragEntryItem);

    if (!dragElementDragEntryItem) {
      return;
    }

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

    markerEntryItemPath = concatenatePaths(path, dragEntryItemName);

    markerEntryItemExplorer = explorer;  ///

    if ((markerEntryItemExplorer !== previousMarkerEntryItemExplorer) || (markerEntryItemPath !== previousMarkerEntryItemPath)) {
      const dragEntryItemType = dragEntryItem.getType();

      previousMarkerEntryItemExplorer.removeMarker();

      markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
    }
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

	isCollapsed() {
		const entriesListCollapsed = this.isEntriesListCollapsed(),
					collapsed = entriesListCollapsed;	///

		return collapsed;
	}

	retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps) {
		const name = this.getName(),
					pathMap = this.getPathMap(sourceEntryPath, targetEntryPath),
          nameInputName = this.getNameInputName();

		pathMaps.push(pathMap);

		sourceEntryPath = adjustSourceEntryPath(sourceEntryPath, name);

		targetEntryPath = adjustTargetEntryPath(targetEntryPath, nameInputName);

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

	didMount() {
		const { collapsed } = this.properties;

		this.setCollapsed(collapsed);

		this.enableDrop();

		this.onDrop(this.dropHandler);

		this.onDragOver(this.dragOverHandler);

		super.didMount();
	}

	willUnmount() {
		this.disableDrop();

		this.offDrop(this.dropHandler);

		this.offDragOver(this.dragOverHandler);

		super.willUnmount();
	}

  childElements() {
		const { name } = this.properties,
          { NameInput, NameButton, ToggleButton, DirectoryNameSVG } = this.constructor,
          explorer = this.getExplorer(),
          EntriesList = explorer.getEntriesList();

		return ([

			<DirectoryNameDragEntryItemDiv name={name}
																		 explorer={explorer}
																		 NameInput={NameInput}
																		 NameButton={NameButton}
																		 ToggleButton={ToggleButton}
																		 DirectoryNameSVG={DirectoryNameSVG}
			/>,
			<EntriesList explorer={explorer} />

		]);
	}

  static type = DIRECTORY_NAME_DRAG_ENTRY_TYPE;

  static ToggleButton = ToggleButton;

	static DirectoryNameSVG = DirectoryNameSVG;

	static defaultProperties = {
    className: "directory-name"
  };
}

Object.assign(DirectoryNameDragEntryItem.prototype, dropMixins);
