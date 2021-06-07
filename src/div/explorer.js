"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import dropMixins from "../mixins/drop";
import EntriesDiv from "../div/entries";
import FileNameDragEntryDiv from "../div/entry/drag/fileName";
import DirectoryNameDragEntryDiv from "../div/entry/drag/directoryName";

class ExplorerDiv extends Element {
  dropHandler(dragElement) {
    console.log("drop!")
  }

  dragOutHandler(dragElement) {
    console.log("drag out")
  }

  dragOverHandler(dragElement) {
    console.log("drag over")
  }

  getEntriesDiv() {
  	const { EntriesDiv } = this.constructor;

  	return EntriesDiv;
	}

	getFileNameDragEntryDiv() {
		const { FileNameDragEntryDiv } = this.constructor;

		return FileNameDragEntryDiv;
	}

	getDirectoryNameDragEntryDiv() {
		const { DirectoryNameDragEntryDiv } = this.constructor;

		return DirectoryNameDragEntryDiv;
	}

	didMount() {
    this.onDrop(this.dropHandler, this);

    this.onDragOut(this.dragOutHandler, this);

    this.onDragOver(this.dragOverHandler, this);

    this.enableDrop();
  }

  willUnmount() {
    this.offDrop(this.dropHandler, this);

    this.offDragOut(this.dragOutHandler, this);

    this.offDragOver(this.dragOverHandler, this);

    this.disableDrop();
  }

  childElements() {
  	const explorerDiv = this;	///

  	return (

  		<EntriesDiv explorerDiv={explorerDiv} />

		);
	}

  initialise() {
  	this.assignContext();
	}

	static EntriesDiv = EntriesDiv;

	static FileNameDragEntryDiv = FileNameDragEntryDiv;

	static DirectoryNameDragEntryDiv = DirectoryNameDragEntryDiv;

  static tagName = "div";

  static defaultProperties = {
    className: "explorer"
  };
}

Object.assign(ExplorerDiv.prototype, dropMixins);

export default withStyle(ExplorerDiv)`

  grid-area: explorer-div;
  background-color: red;
      
`;
