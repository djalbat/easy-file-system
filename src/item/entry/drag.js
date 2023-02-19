"use strict";

import withStyle from "easy-with-style";  ///

import { dragMixins } from "easy-drag-and-drop";

import EntryItem from "../../item/entry";
import NameInput from "../../input/name";
import NameButton from "../../button/name";

import { EMPTY_STRING } from "../../constants";
import { DIRECTORY_NAME_DRAG_ENTRY_TYPE } from "../../entryTypes";
import { adjustSourceEntryPath, adjustTargetEntryPath } from "../../utilities/pathMap";

class DragEntryItem extends EntryItem {
  nameInputChangeHandler = () => {
    const created = this.isCreated(),
          explorer = this.getExplorer(),
          nameChanged = this.hasNameChanged(),
          dragEntryItem = this; ///

    if (!nameChanged) {
      return;
    }

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

  nameInputCancelHandler = () => {
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
          nameInputName = this.getNameInputName(),
          entryDirectory = this.getEntryDirectory();

    sourceEntryPath = adjustSourceEntryPath(sourceEntryPath, name);	///

    targetEntryPath = adjustTargetEntryPath(targetEntryPath, nameInputName);	///

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

  hasNameChanged() {
    const nameInputName = this.getNameInputName(),
          nameButtonName = this.getNameButtonName(),
          nameChanged = (nameInputName !== nameButtonName);

    return nameChanged;
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

  isEdited() {
    const nameInputDisplayed = this.isNameInputDisplayed(),
          edited = nameInputDisplayed;  ///

    return edited;
  }

  deselect() {
    this.removeClass("selected");
  }

  select() {
    this.addClass("selected");
  }

  edit() {
    const created = this.isCreated();

    if (created) {
      const name = EMPTY_STRING,
            nameInputName = name, ///
            nameButtonName = name;  ///

      this.setNameInputName(nameInputName);

      this.setNameButtonName(nameButtonName);
    }

    this.hideNameButton();

    this.showNameInput();
  }

  cancel() {
    const name = this.getName(),
          nameInputName = name; ///

    this.setNameInputName(nameInputName);

    this.showNameButton();

    this.hideNameInput();
  }

  didMount() {
    this.hideNameInput();

    this.onStopDrag(this.stopDragHandler);

    this.onStartDrag(this.startDragHandler);

    this.onNameInputChange(this.nameInputChangeHandler);

    this.onNameInputCancel(this.nameInputCancelHandler);

    this.enableDrag();
	}

	willUnmount() {
    this.offStopDrag(this.stopDragHandler);

    this.offStartDrag(this.startDragHandler);

    this.offNameInputChange(this.nameInputChangeHandler);

    this.offNameInputCancel(this.nameInputCancelHandler);

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

  static NameInput = NameInput;

  static NameButton = NameButton;

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
