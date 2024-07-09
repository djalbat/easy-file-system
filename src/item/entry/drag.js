"use strict";

import withStyle from "easy-with-style";  ///

import { dragMixins } from "easy-drag-and-drop";

import NameSpan from "../../span/name";
import EntryItem from "../../item/entry";

import { PERIOD, EMPTY_STRING } from "../../constants";
import { DIRECTORY_NAME_DRAG_ENTRY_TYPE } from "../../entryTypes";
import { adjustSourceEntryPath, adjustTargetEntryPath } from "../../utilities/pathMap";

class DragEntryItem extends EntryItem {
  nameSpanChangeCustomHandler = (event, element) => {
    const created = this.isCreated(),
          explorer = this.getExplorer(),
          nameSpanName = this.getNameSpanName();

    explorer.enable();

    if ((nameSpanName === PERIOD) || (nameSpanName === EMPTY_STRING)) {
      this.cancel(created);

      return;
    }

    const dragEntryItem = this; ///

    if (created) {
      explorer.createDragEntryItem(event, element, dragEntryItem, () => {
        this.reset();
      });

      return;
    }

    explorer.renameDragEntryItem(event, element, dragEntryItem, () => {
      this.reset();
    });
  }

  nameSpanCancelCustomHandler = (event, element) => {
    const created = this.isCreated(),
          explorer = this.getExplorer();

    explorer.enable();

    this.cancel(created);
  }

  startDragCustomHandler = (event, element) => {
    const path = this.getPath(),
          type = this.getType(),
          explorer = this.getExplorer(),
          dragEntryItemType = type,  ///
          markerEntryItemPath = path;  ///

    explorer.addMarker(markerEntryItemPath, dragEntryItemType);
  }

  stopDragCustomHandler = (event, element, dropElement, aborted, done) => {
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

    const dragEntryItem = this;  ///

    markerEntryItemExplorer.dropDragEntryItem(event, element, dragEntryItem, done);
  }

  click(event, element) {
    const explorer = this.getExplorer(),
          dragEntryItem = this, ///
          selected = explorer.selectOrDeselectDragEntryItem(event, element, dragEntryItem);

    return selected;
  }

  isReadOnly() {
    const { readOnly } = this.properties;

    return readOnly;
  }

  getReferences() {
    const explorer = this.getExplorer(),
          references = explorer.getReferences();

    return references;
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
    const markerEntryItem = getMarkerEntryItem();

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
          explorer = this.getExplorer(),
          nameSpanName = EMPTY_STRING; ///

    explorer.disable();

    this.setCreated(created);

    this.setNameSpanName(nameSpanName);

    this.editNameSpan();
  }

  rename() {
    const name = this.getName(),
          created = false,
          explorer = this.getExplorer(),
          nameSpanName = name; ///

    explorer.disable();

    this.setCreated(created);

    this.setNameSpanName(nameSpanName);

    this.editNameSpan();
  }

  reset() {
    const name = this.getName(),
          nameSpanName = name; ///

    this.setNameSpanName(nameSpanName);

    this.resetNameSpan();
  }

  cancel(created) {
    created ?
      this.remove() :
        this.reset();
  }

  didMount() {
    this.onCustomStopDrag(this.stopDragCustomHandler);

    this.onCustomStartDrag(this.startDragCustomHandler);

    this.onCustomNameSpanChange(this.nameSpanChangeCustomHandler);

    this.onCustomNameSpanCancel(this.nameSpanCancelCustomHandler);

    this.enableDrag();
	}

	willUnmount() {
    this.offCustomStopDrag(this.stopDragCustomHandler);

    this.offCustomStartDrag(this.startDragCustomHandler);

    this.offCustomNameSpanChange(this.nameSpanChangeCustomHandler);

    this.offCustomNameSpanCancel(this.nameSpanCancelCustomHandler);

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
