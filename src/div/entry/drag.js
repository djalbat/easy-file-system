"use strict";

import withStyle from "easy-with-style";  ///

import EntryDiv from "../../div/entry";
import dragMixins from "../../mixins/drag";

class DragEntryDiv extends EntryDiv {
	getName() {
		const { name } = this.properties;

		return name;
	}

	getPath() {
		const explorerDiv = this.getExplorerDiv(),
					dragEntryDiv = this,  ///
					path = explorerDiv.retrieveDragEntryDivPath(dragEntryDiv);

		return path;
	}

	getExplorerDiv() {
		const { explorerDiv } = this.properties;

		return explorerDiv;
	}

  startDragHandler(event, element) {
    const path = this.getPath(),
          type = this.getType(),
          explorerDiv = this.getExplorerDiv(),
          dragEntryDivType = type,  ///
          markerEntryDivPath = path;  ///

    explorerDiv.addMarker(markerEntryDivPath, dragEntryDivType);
  }

  stopDragHandler(event, element) {
    const explorerDiv = this.getExplorerDiv();

    explorerDiv.removeMarker();
  }

  didMount() {
	  this.onStartDrag(this.startDragHandler, this);

    this.onStopDrag(this.stopDragHandler, this);

		this.enableDrag();
	}

	willUnmount() {
    this.offStartDrag(this.startDragHandler, this);

    this.offStopDrag(this.stopDragHandler, this);

    this.disableDrag();
	}

	static ignoredProperties = [
	  "name"
  ];

	static defaultProperties = {
		className: "drag"
	};
}

Object.assign(EntryDiv.prototype, dragMixins);

export default withStyle(DragEntryDiv)`

  min-height: 2.4rem;

  .dragging {
    z-index: 1;
    position: fixed;
    pointer-events: none;
  }
  
`;
