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

    const explorer = this.getExplorer(),
          dragEntryItem = this; ///

    explorer.renameDragEntryItem(dragEntryItem, () => {
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

  getInputName() {
    const nameInputName = this.getNameInputName(),
          inputName = nameInputName;  ///

    return inputName;
  }

  getInputPath() {
    const path = this.getPath(),
          inputName = this.getInputName(),
          pathWithoutBottommostName = pathWithoutBottommostNameFromPath(path),
          inputPath = (pathWithoutBottommostName === null) ?
                        inputName :
                          concatenatePaths(pathWithoutBottommostName, inputName);

    return inputPath;
  }

  getPathMap(sourceEntryPath, targetEntryPath) {
    const name = this.getName(),
          collapsed = this.isCollapsed(),
          nameInputName = this.getNameInputName(),
          entryDirectory = this.isEntryDirectory();

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
    const name = this.getName(),
          inputName = this.getInputName(),
          nameChanged = (inputName !== name);

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
    const name = this.getName(),
          nameInputName = name; ///

    this.setNameInputName(nameInputName);

    this.showNameButton();
    this.hideNameInput();
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
