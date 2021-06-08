"use strict";

import withStyle from "easy-with-style";  ///

import EntryDiv from "../../div/entry";
import dragMixins from "../../mixins/drag";

class DragEntryDiv extends EntryDiv {
	getName() {
		const { name } = this.properties;

		return name;
	}

	getType() {
		const { type } = this.constructor;

		return type;
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
	  const name = this.getName();

	  console.log(`Start dragging '${name}'`);
  }

  stopDragHandler(event, element) {
    const name = this.getName();

    console.log(`Stop dragging '${name}'`);
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

  .dragging {
    z-index: 1;
    position: fixed;
    pointer-events: none;
  }
  
`;
