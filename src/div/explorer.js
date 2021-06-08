"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import EntriesDiv from "../div/entries";
import FileNameDragEntryDiv from "../div/entry/drag/fileName";
import DirectoryNameDragEntryDiv from "../div/entry/drag/directoryName";

class ExplorerDiv extends Element {
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

export default withStyle(ExplorerDiv)`
  
  width: fit-content;
      
`;
