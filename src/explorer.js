"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import dropMixins from "./mixins/drop";
import EntriesList from "./list/entries";
import FileNameDragEntryItem from "./item/entry/drag/fileName";
import FileNameMarkerEntryItem from "./item/entry/marker/fileName";
import DirectoryNameDragEntryItem from "./item/entry/drag/directoryName";
import DirectoryNameMarkerEntryItem from "./item/entry/marker/directoryName";

class Explorer extends Element {
  constructor(selector, mounted) {
    super(selector);

    this.mounted = mounted;
  }

  isMounted() {
    return this.mounted;
  }

  getEntriesList() {
  	const { EntriesList } = this.constructor;

  	return EntriesList;
	}

	getFileNameDragEntryItem() {
		const { FileNameDragEntryItem } = this.constructor;

		return FileNameDragEntryItem;
	}

  getFileNameMarkerEntryItem() {
    const { FileNameMarkerEntryItem } = this.constructor;

    return FileNameMarkerEntryItem;
  }

  getDirectoryNameDragEntryItem() {
		const { DirectoryNameDragEntryItem } = this.constructor;

		return DirectoryNameDragEntryItem;
	}

  getDirectoryNameMarkerEntryItem() {
    const { DirectoryNameMarkerEntryItem } = this.constructor;

    return DirectoryNameMarkerEntryItem;
  }

  dragOutHandler(dragElement) {
    console.log("drag out");
  }

  didMount() {
    this.mounted = true;

    this.onDragOut(this.dragOutHandler, this);

    this.enableDrop();
  }

  willUnmount() {
    this.mounted = false;

    this.offDragOut(this.dragOutHandler, this);

    this.disableDrop();
  }

  childElements() {
  	const explorer = this;	///

  	return (

  		<EntriesList explorer={explorer} />

		);
	}

  initialise() {
  	this.assignContext();
	}

	static EntriesList = EntriesList;

	static FileNameDragEntryItem = FileNameDragEntryItem;

  static FileNameMarkerEntryItem = FileNameMarkerEntryItem;

  static DirectoryNameDragEntryItem = DirectoryNameDragEntryItem;

  static DirectoryNameMarkerEntryItem = DirectoryNameMarkerEntryItem;

  static tagName = "div";

  static defaultProperties = {
    className: "explorer"
  };

  static fromClass(Class, properties) {
    const mounted = false,
          explorer = Element.fromClass(Class, properties, mounted);

    return explorer;
  }
}

Object.assign(Explorer.prototype, dropMixins);

export default withStyle(Explorer)`
  
  width: fit-content;
      
`;
