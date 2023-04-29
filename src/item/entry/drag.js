"use strict";

import withStyle from "easy-with-style";  ///

import { dragMixins } from "easy-drag-and-drop";

import NameSpan from "../../span/name";
import EntryItem from "../../item/entry";

import { PERIOD, EMPTY_STRING } from "../../constants";
import { DIRECTORY_NAME_DRAG_ENTRY_TYPE } from "../../entryTypes";
import { adjustSourceEntryPath, adjustTargetEntryPath } from "../../utilities/pathMap";

class DragEntryItem extends EntryItem {
  nameSpanChangeHandler = (event, element) => {
    const nameChanged = this.hasNameChanged();

    if (!nameChanged) {
      this.cancel();

      return;
    }

    this.reset();

    const created = this.isCreated(),
          explorer = this.getExplorer(),
          dragEntryItem = this; ///

    if (created) {
      explorer.createDragEntryItem(dragEntryItem, () => {
        ///
      });

      return;
    }

    explorer.editDragEntryItem(dragEntryItem, () => {
      ///
    });
  }

  nameSpanCancelHandler = (event, element) => {
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

  hasNameChanged() {
    const name = this.getName(),
          nameSpanName = this.getNameSpanName(),
          nameChanged = (name !== PERIOD) ?
                          (nameSpanName !== name) :
                            (nameSpanName !== EMPTY_STRING);  ///

    return nameChanged;
  }

  isReadOnly() {
    const { readOnly } = this.properties;

    return readOnly;
  }

  getPathMap(sourceEntryPath, targetEntryPath) {
    const name = this.getName(),
          readOnly = this.isReadOnly(),
          collapsed = this.isCollapsed(),
          nameSpanName = this.getNameSpanName(),
          entryDirectory = this.getEntryDirectory();

    sourceEntryPath = adjustSourceEntryPath(sourceEntryPath, name);	///

    targetEntryPath = adjustTargetEntryPath(targetEntryPath, nameSpanName);	///

    const pathMap = {
      readOnly,
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

  setCreated(created) {
    this.updateState({
      created
    });
  }

  isCreated() {
    const { created } = this.getState();

    return created;
  }

  isEditable() {
    const nameSpanEdited = this.isNameSpanEditable(),
          editable = nameSpanEdited; ///

    return editable;
  }

  isSelected() {
    const selected = this.hasClass("selected"); ///

    return selected;
  }

  deselect() {
    this.removeClass("selected");
  }

  select() {
    this.addClass("selected");
  }

  create() {
    const created = true,
          nameSpanName = EMPTY_STRING; ///

    this.setCreated(created);

    this.setNameSpanName(nameSpanName);

    this.editNameSpan();

    this.disableDrag();
  }

  edit() {
    const name = this.getName(),
          created = false,
          nameSpanName = name; ///

    this.setCreated(created);

    this.setNameSpanName(nameSpanName);

    this.editNameSpan();

    this.disableDrag();
  }

  reset() {
    const created = this.isCreated();

    this.cancelNameSpan();

    this.enableDrag();

    this.setCreated(created);
  }

  cancel() {
    const created = this.isCreated();

    this.reset();

    if (created) {
      const explorer = this.getExplorer(),
            entryItem = this; ///

      explorer.removeEntryItem(entryItem);
    }
  }

  didMount() {
    const readOnly = this.isReadOnly();

    if (readOnly) {
      return;
    }

    this.onStopDrag(this.stopDragHandler);

    this.onStartDrag(this.startDragHandler);

    this.onNameSpanChange(this.nameSpanChangeHandler);

    this.onNameSpanCancel(this.nameSpanCancelHandler);

    this.enableDrag();
	}

	willUnmount() {
    const readOnly = this.isReadOnly();

    if (readOnly) {
      return;
    }

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
    "readOnly"
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
