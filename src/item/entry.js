"use strict";

import withStyle from "easy-with-style";  ///

import { pathUtilities, arrayUtilities } from "necessary";

import { Element } from "easy";

const { first } = arrayUtilities,
      { concatenatePaths } = pathUtilities;

class EntryItem extends Element {
  getParentDirectoryNameDragEntryItem() {
    let parentDirectoryNameDragEntryItem = null;

    const height = 2,
          ascendantDirectoryNameDragEntryItemElements = this.getAscendantElements("li.entry.drag.directory-name", height),
          ascendantDirectoryNameDragEntryItemElementsLength = ascendantDirectoryNameDragEntryItemElements.length;

    if (ascendantDirectoryNameDragEntryItemElementsLength > 0) {
      const firstAscendantDirectoryNameDragEntryItemElement = first(ascendantDirectoryNameDragEntryItemElements);

      parentDirectoryNameDragEntryItem = firstAscendantDirectoryNameDragEntryItemElement;  ///
    }

    return parentDirectoryNameDragEntryItem;
  }

  getPath() {
  	let path;

  	const name = this.getName(),
    			parentDirectoryNameDragEntryItem = this.getParentDirectoryNameDragEntryItem();

  	if (parentDirectoryNameDragEntryItem === null) {
  		path = name;  ///
  	} else {
  		const parentDirectoryNameDragEntryItemPath = parentDirectoryNameDragEntryItem.getPath();

  		path = concatenatePaths(parentDirectoryNameDragEntryItemPath, name);
  	}

  	return path;
  }

  getType() {
    const { type } = this.constructor;

    return type;
  }

  getName() {
    const { name } = this.properties;

    return name;
  }

  getExplorer() {
    const { explorer } = this.properties;

    return explorer;
  }

  remove() {
    super.remove();

    this.destroy();
  }

  static tagName = "li";

  static ignoredProperties = [
    "name",
    "explorer"
  ];

  static defaultProperties = {
    className: "entry"
  };
}

export default withStyle(EntryItem)`

  width: fit-content;
  display: block;
  list-style: none;
  
`;
