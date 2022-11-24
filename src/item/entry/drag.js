"use strict";

import withStyle from "easy-with-style";  ///

import { dragMixins } from "easy-drag-and-drop";

import EntryItem from "../../item/entry";

import { dragEntryItemFontSize } from "../../styles";
import { adjustSourceEntryPath, adjustTargetEntryPath } from "../../utilities/pathMap";

class DragEntryItem extends EntryItem {
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

  retrieveMarkerEntryItem() {
    const { markerEntryItem } = globalThis;

    return markerEntryItem;
  }

  isSelected() {
    const selected = this.hasClass("selected"); ///

    return selected;
  }

  getPathMap(sourceEntryPath, targetEntryPath) {
		const name = this.getName();

		sourceEntryPath = adjustSourceEntryPath(sourceEntryPath, name);	///
		targetEntryPath = adjustTargetEntryPath(targetEntryPath, name);	///

		const pathMap = {
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

  deselect() {
    this.removeClass("selected");
  }

  select() {
    this.addClass("selected");
  }

  didMount() {
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

	static defaultProperties = {
		className: "drag"
	};
}

Object.assign(EntryItem.prototype, dragMixins);

export default withStyle(DragEntryItem)`

	font-size: ${dragEntryItemFontSize};
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
