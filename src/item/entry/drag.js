"use strict";

import withStyle from "easy-with-style";  ///

import { dragMixins } from "easy-drag-and-drop";

import NameSpan from "../../span/name";
import EntryItem from "../../item/entry";

import { EMPTY_STRING } from "../../constants";
import { DIRECTORY_NAME_DRAG_ENTRY_TYPE } from "../../entryTypes";
import { adjustSourceEntryPath, adjustTargetEntryPath } from "../../utilities/pathMap";

class DragEntryItem extends EntryItem {
  nameSpanChangeHandler = (event, element) => {
    const { name } = this.getState(),
          nameSpanName = this.getNameSpanName(),
          nameChanged = (name !== nameSpanName);

    if (!nameChanged) {
      return;
    }

    const created = this.isCreated(),
          explorer = this.getExplorer(),
          dragEntryItem = this; ///

    if (created) {
      explorer.createDragEntryItem(dragEntryItem, () => {
        this.cancel();
      });

      return;
    }

    explorer.renameDragEntryItem(dragEntryItem, () => {
      this.cancel();
    });
  }

  nameSpanCancelHandler = (event, element) => {
    const created = this.isCreated();

    created ?
      this.remove() :
        this.cancel();

    this.cancel();
  }

  startDragHandler = (element) => {
    const path = this.getPath(),
          type = this.getType(),
          explorer = this.getExplorer(),
          dragEntryItemType = type,  ///
          markerEntryItemPath = path;  ///

    explorer.addMarker(markerEntryItemPath, dragEntryItemType);
  }

  stopDragHandler = (dropElement, aborted, element, done) => {
    if (dropElement !== null) {
      done();

      return;
    }

    const markerEntryItem = this.retrieveMarkerEntryItem(),
          markerEntryItemExplorer = markerEntryItem.getExplorer();

    if (aborted) {
      markerEntryItemExplorer.removeMarker();

      done();

      return;
    }

    const dragEntryItem = element;  ///

    markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, done);
  }

  isCreated() {
    const { created } = this.properties;

    return created;
  }

  getPathMap(sourceEntryPath, targetEntryPath) {
    const name = this.getName(),
          collapsed = this.isCollapsed(),
          nameSpanName = this.getNameSpanName(),
          entryDirectory = this.getEntryDirectory();

    sourceEntryPath = adjustSourceEntryPath(sourceEntryPath, name);	///

    targetEntryPath = adjustTargetEntryPath(targetEntryPath, nameSpanName);	///

    const pathMap = {
      collapsed,
      entryDirectory,
      sourceEntryPath,
      targetEntryPath
    };

    return pathMap;
  }

  getPathMaps(sourceEntryPath, targetEntryPath) {
    let pathMaps = [];

    this.retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps);

    pathMaps.reverse();

    return pathMaps;
  }

  getEntryDirectory() {
    const directoryNameDragEntryItem = this.isDirectoryNameDragEntryItem(),
          entryDirectory = directoryNameDragEntryItem;  ///

    return entryDirectory;
  }

  retrieveMarkerEntryItem() {
    const { markerEntryItem } = globalThis;

    return markerEntryItem;
  }

  isDirectoryNameDragEntryItem() {
    const type = this.getType(),
          typeDirectoryNameDragEntryItemType = (type === DIRECTORY_NAME_DRAG_ENTRY_TYPE),
          directoryNameDragEntryItem = typeDirectoryNameDragEntryItemType;  ///

    return directoryNameDragEntryItem;
  }

  isSelected() {
    const selected = this.hasClass("selected"); ///

    return selected;
  }

  isEditable() {
    const nameSpanEdited = this.isNameSpanEditable(),
          editable = nameSpanEdited; ///

    return editable;
  }

  deselect() {
    this.removeClass("selected");
  }

  select() {
    this.addClass("selected");
  }

  edit() {
    const created = this.isCreated(),
          name = created ?
                   EMPTY_STRING :
                     this.getName(),
          nameSpanName = name; ///

    this.setNameSpanName(nameSpanName);

    this.updateState({
      name
    });

    this.editNameSpan();
  }

  cancel() {
    const { name } = this.getState(),
          nameSpanName = name; ///

    this.setNameSpanName(nameSpanName);

    this.cancelNameSpan();
  }

  didMount() {
    this.onStopDrag(this.stopDragHandler);

    this.onStartDrag(this.startDragHandler);

    this.onNameSpanChange(this.nameSpanChangeHandler);

    this.onNameSpanCancel(this.nameSpanCancelHandler);

    this.enableDrag();
	}

	willUnmount() {
    this.offStopDrag(this.stopDragHandler);

    this.offStartDrag(this.startDragHandler);

    this.offNameSpanChange(this.nameSpanChangeHandler);

    this.offNameSpanCancel(this.nameSpanCancelHandler);

    this.disableDrag();
	}

  parentContext() {
    const context = this.getContext(),
          select = this.select.bind(this),
          deselect = this.deselect.bind(this);

    return ({
      ...context,
      select,
      deselect
    });
  }

  initialise() {
		this.assignContext();
	}

  static NameSpan = NameSpan;

  static ignoredProperties = [
    "created"
  ];

  static defaultProperties = {
		className: "drag"
	};
}

Object.assign(EntryItem.prototype, dragMixins);

export default withStyle(DragEntryItem)`

  user-select: none;
  
  font-weight: normal;
  
  .selected {
    font-weight: bold;
  }

  .dragging {
    z-index: 1;
    position: fixed;
    pointer-events: none;
  }
  
`;
