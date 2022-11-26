"use strict";

import withStyle from "easy-with-style";  ///

import { dragMixins } from "easy-drag-and-drop";
import { pathUtilities } from "necessary";

import EntryItem from "../../item/entry";
import NameInput from "../../input/name";
import NameButton from "../../button/name";

import { adjustSourceEntryPath, adjustTargetEntryPath } from "../../utilities/pathMap";

const { concatenatePaths, pathWithoutBottommostNameFromPath } = pathUtilities;

class DragEntryItem extends EntryItem {
  svgButtonClickHandler = (event, element) => {
    const explorer = this.getExplorer(),
          dragEntryItem = this; ///

    explorer.selectDragEntryItem(dragEntryItem);

    event.stopPropagation();
  }

  nameChangeHandler = () => {
    const nameChanged = this.hasNameChanged();

    if (!nameChanged) {
      this.cancel();

      return;
    }

    const oldPath = this.getOldPath(),
          newPath = this.getNewPath(),
          sourceEntryPath = oldPath,  ///
          targetEntryPath = newPath,  ///
          pathMap = this.getPathMap(sourceEntryPath, targetEntryPath),
          explorer = this.getExplorer();

    explorer.callPathChangeHandlersAsync(pathMap, (success) => {
      success ?
        this.update() :
          this.cancel();
    });
  }

  nameCancelHandler = () => {
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

  getName() {
    const nameButtonName = this.getNameButtonName(),
          name = nameButtonName;  ///

    return name;
  }

  getOldName() {
    const nameButtonName = this.getNameButtonName(),
          oldName = nameButtonName;  ///

    return oldName;
  }

  getNewName() {
    const nameInputName = this.getNameInputName(),
          oldName = nameInputName;  ///

    return oldName;
  }

  getOldPath() {
    const path = this.getPath(),
          oldName = this.getOldName(),
          pathWithoutBottommostName = pathWithoutBottommostNameFromPath(path),
          oldPath = (pathWithoutBottommostName === null) ?
                      oldName :
                        concatenatePaths(pathWithoutBottommostName, oldName);

    return oldPath;
  }

  getNewPath() {
    const path = this.getPath(),
          newName = this.getNewName(),
          pathWithoutBottommostName = pathWithoutBottommostNameFromPath(path),
          newPath = (pathWithoutBottommostName === null) ?
                      newName :
                        concatenatePaths(pathWithoutBottommostName, newName);

    return newPath;
  }

  getPathMap(sourceEntryPath, targetEntryPath) {
    const name = this.getName(),
          collapsed = this.isCollapsed(),
          entryDirectory = this.isEntryDirectory();

    sourceEntryPath = adjustSourceEntryPath(sourceEntryPath, name);	///
    targetEntryPath = adjustTargetEntryPath(targetEntryPath, name);	///

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
    const newName = this.getOldName(),
          oldName = this.getNewName(),
          nameChanged = (newName !== oldName);

    return nameChanged;
  }

  retrieveMarkerEntryItem() {
    const { markerEntryItem } = globalThis;

    return markerEntryItem;
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

  edit() {
    this.hideNameButton();
    this.showNameInput();
  }

  cancel() {
    const nameButtonName = this.getNameButtonName(),
          nameInputName = nameButtonName; ///

    this.setNameInputName(nameInputName);

    this.showNameButton();
    this.hideNameInput();
  }

  update() {
    const nameInputName = this.getNameInputName(),
          nameButtonName = nameInputName; ///

    this.setNameButtonName(nameButtonName);

    this.showNameButton();
    this.hideNameInput();

    const parentElement = this.getParentElement(),
          entriesList = parentElement,  ///
          entryItem = this; ///

    entriesList.removeEntryItem(entryItem);

    entriesList.addEntryItem(entryItem);
  }

  didMount() {
    this.hideNameInput();

	  this.onStartDrag(this.startDragHandler);

    this.onStopDrag(this.stopDragHandler);

    this.enableDrag();
	}

	willUnmount() {
    this.offStartDrag(this.startDragHandler);

    this.offStopDrag(this.stopDragHandler);

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
