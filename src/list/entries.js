"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { pathUtilities } from "necessary";

import { entriesListPaddingLeft } from "../styles";
import { FILE_NAME_DRAG_ENTRY_TYPE, DIRECTORY_NAME_DRAG_ENTRY_TYPE } from "../entryTypes";

const { topmostDirectoryNameFromPath, pathWithoutTopmostDirectoryNameFromPath } = pathUtilities;

const markerEntryItem = null;

Object.assign(globalThis, {
  markerEntryItem
});

class EntriesList extends Element {
  isTopmost() {
    const { topmost } = this.properties;

    return topmost;
  }

  getExplorer() {
		const { explorer } = this.properties;

		return explorer;
	}

	getEntryItems() {
		const childEntryItemElements = this.getChildElements("li.entry"),
					entryItems = childEntryItemElements;  ///

		return entryItems;
	}

	getEntryItemsLength() {
    const entryItems = this.getEntryItems(),
          entryItemsLength = entryItems.length;

    return entryItemsLength;
  }

  isCollapsed() {
    const collapsed = this.hasClass("collapsed");

    return collapsed;
  }

  isEmpty() {
    const entryItems = this.getEntryItems(),
          entryItemsLength = entryItems.length,
          empty = (entryItemsLength === 0);

    return empty;
  }

  getFilePaths() {
    const filePaths = [];

    this.forEachFileNameDragEntryItem((fileNameDragEntryItem) => {
      const fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(),
            filePath = fileNameDragEntryItemPath; ///

      filePaths.push(filePath);
    });

    return filePaths;
  }

  getDirectoryPaths() {
    const directoryPaths = [];

    this.forEachDirectoryNameDragEntryItem((directoryNameDragEntryItem) => {
      const directoryNameDragEntryItemPath = directoryNameDragEntryItem.getPath(),
            directoryPath = directoryNameDragEntryItemPath; ///

      directoryPaths.push(directoryPath);
    });

    return directoryPaths;
  }

  addMarker(markerEntryItemPath, dragEntryItemType) {
    const topmostDirectoryName = topmostDirectoryNameFromPath(markerEntryItemPath);

    if (topmostDirectoryName === null) {
      const markerEntryItemName = markerEntryItemPath;  ///

      this.addMarkerEntryItem(markerEntryItemName, dragEntryItemType);
    } else {
      const topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName),
            markerEntryItemPathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(markerEntryItemPath);

      markerEntryItemPath = markerEntryItemPathWithoutTopmostDirectoryName; ///

      topmostDirectoryNameDragEntryItem.addMarker(markerEntryItemPath, dragEntryItemType);
    }
  }

  removeMarker() {
    this.removeMarkerEntryItem();
  }

  addFilePath(filePath) {
		let fileNameDragEntryItem;

    const topmostDirectoryName = topmostDirectoryNameFromPath(filePath);

    if (topmostDirectoryName === null) {
      const fileName = filePath;  ///

      fileNameDragEntryItem = this.findFileNameDragEntryItem(fileName);

      if (fileNameDragEntryItem === null) {
        fileNameDragEntryItem = this.createFileNameDragEntryItem(fileName);

        this.addEntryItem(fileNameDragEntryItem);
      }
    } else {
      let topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);

      if (topmostDirectoryNameDragEntryItem === null) {
        const collapsed = true;

        topmostDirectoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(topmostDirectoryName, collapsed);

        this.addEntryItem(topmostDirectoryNameDragEntryItem);
      }

      const filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(filePath);

      filePath = filePathWithoutTopmostDirectoryName; ///

      fileNameDragEntryItem = topmostDirectoryNameDragEntryItem.addFilePath(filePath);
    }

		return fileNameDragEntryItem;
	}

  removeFilePath(filePath, removeEmptyParentDirectories = false) {
    const topmostDirectoryName = topmostDirectoryNameFromPath(filePath);

    if (topmostDirectoryName === null) {
      const fileName = filePath,  ///
            fileNameDragEntryItem = this.findFileNameDragEntryItem(fileName);

      if (fileNameDragEntryItem !== null) {
        this.removeEntryItem(fileNameDragEntryItem);
      }
    } else {
      const topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);

      if (topmostDirectoryNameDragEntryItem !== null) {
        const filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(filePath);

        filePath = filePathWithoutTopmostDirectoryName; ///

        topmostDirectoryNameDragEntryItem.removeFilePath(filePath, removeEmptyParentDirectories);

        if (removeEmptyParentDirectories) {
          const topmostDirectoryNameDragEntryItemEmpty = topmostDirectoryNameDragEntryItem.isEmpty();

          if (topmostDirectoryNameDragEntryItemEmpty) {
            this.removeEntryItem(topmostDirectoryNameDragEntryItem);
          }
        }
      }
    }
  }

  removeAllPaths() {
    this.removeEntryItems();
  }

  addDirectoryPath(directoryPath, collapsed = true) {
    let directoryNameDragEntryItem;

    const topmostDirectoryName = topmostDirectoryNameFromPath(directoryPath);

    if (topmostDirectoryName === null) {
      const directoryName = directoryPath;  ///

      directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName);

      if (directoryNameDragEntryItem === null) {
        directoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(directoryName, collapsed);

        this.addEntryItem(directoryNameDragEntryItem);
      } else {
        collapsed ?
          directoryNameDragEntryItem.collapse() :
            directoryNameDragEntryItem.expand();
      }
    } else {
      let topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);

      if (topmostDirectoryNameDragEntryItem === null) {
        topmostDirectoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(topmostDirectoryName, collapsed);

        this.addEntryItem(topmostDirectoryNameDragEntryItem);
      }

      const directoryPathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(directoryPath);

      directoryPath = directoryPathWithoutTopmostDirectoryName; ///

      directoryNameDragEntryItem = topmostDirectoryNameDragEntryItem.addDirectoryPath(directoryPath, collapsed);
    }

    return directoryNameDragEntryItem;
  }

  removeDirectoryPath(directoryPath, removeEmptyParentDirectories = false) {
    const topmostDirectoryName = topmostDirectoryNameFromPath(directoryPath);

    if (topmostDirectoryName === null) {
      const directoryName = directoryPath,  ///
            directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName);

      if (directoryNameDragEntryItem !== null) {
        this.removeEntryItem(directoryNameDragEntryItem);
      }
    } else {
      const topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);

      if (topmostDirectoryNameDragEntryItem !== null) {
        const directoryPathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(directoryPath);

        directoryPath = directoryPathWithoutTopmostDirectoryName; ///

        topmostDirectoryNameDragEntryItem.removeDirectoryPath(directoryPath, removeEmptyParentDirectories);

        if (removeEmptyParentDirectories) {
          const topmostDirectoryNameDragEntryItemEmpty = topmostDirectoryNameDragEntryItem.isEmpty();

          if (topmostDirectoryNameDragEntryItemEmpty) {
            this.removeEntryItem(topmostDirectoryNameDragEntryItem);
          }
        }
      }
    }
  }

  addEntryItem(entryItem) {
    const explorer = this.getExplorer(),
          nextEntryItem = entryItem,  ///
          previousEntryItem = this.findEntryItem((entryItem) => {
            const nextEntryBeforeEntryItem = nextEntryItem.isBefore(entryItem);

            if (nextEntryBeforeEntryItem) {
              return true;
            }
          });

    if (previousEntryItem === null) {
      this.append(entryItem);
    } else {
      entryItem.insertBefore(previousEntryItem);
    }

    const explorerMounted = explorer.isMounted();

    if (explorerMounted) {
      const entryItemDescendantElements = entryItem.getDescendantElements(),
            entryItemElements = [
              entryItem,
              ...entryItemDescendantElements
            ];

      entryItemElements.reverse();

      entryItemElements.forEach((entryItemElement) => (entryItemElement.didMount && entryItemElement.didMount()));  ///
    }
  }

  removeEntryItem(entryItem) {
    const explorer = this.getExplorer(),
          explorerMounted = explorer.isMounted();

    if (explorerMounted) {
      const entryItemDescendantElements = entryItem.getDescendantElements(),
            entryItemElements = [
              entryItem,
              ...entryItemDescendantElements
            ];

      entryItemElements.forEach((entryItemElement) => (entryItemElement.willUnmount && entryItemElement.willUnmount()));  ///
    }

    entryItem.remove();
  }

  removeEntryItems() {
    const entryItems = this.getEntryItems();

    entryItems.forEach((entryItem) => this.removeEntryItem(entryItem));
  }

  addMarkerEntryItem(markerEntryItemName, dragEntryItemType) {
    let markerEntryItem;

    const name = markerEntryItemName, ///
          type = dragEntryItemType;  ///

    switch (type) {
      case FILE_NAME_DRAG_ENTRY_TYPE : {
        const explorer = this.getExplorer(),
              FileNameMarkerEntryItem = explorer.getFileNameMarkerEntryItem(),
              fileNameMarkerEntryItem =

                <FileNameMarkerEntryItem name={name} explorer={explorer} />

              ;

        markerEntryItem = fileNameMarkerEntryItem;  ///

        break;
      }

      case DIRECTORY_NAME_DRAG_ENTRY_TYPE : {
        const explorer = this.getExplorer(),
              DirectoryNameMarkerEntryItem = explorer.getDirectoryNameMarkerEntryItem(),
              directoryNameMarkerEntryItem =

                <DirectoryNameMarkerEntryItem name={name} explorer={explorer} />

              ;

        markerEntryItem = directoryNameMarkerEntryItem; ///

        break;
      }
    }

    const entryItem = markerEntryItem; ///

    this.addEntryItem(entryItem);

    Object.assign(globalThis, {
      markerEntryItem
    });
  }

  removeMarkerEntryItem() {
    let markerEntryItem = this.retrieveMarkerEntryItem();

    markerEntryItem.remove();

    markerEntryItem = null;

    Object.assign(globalThis, {
      markerEntryItem
    });
  }

  createFileNameDragEntryItem(fileName) {
		const name = fileName,	///
					explorer = this.getExplorer(),
					FileNameDragEntryItem = explorer.getFileNameDragEntryItem(),
					fileNameDragEntryItem =

						<FileNameDragEntryItem name={name} explorer={explorer} />

					;

		return fileNameDragEntryItem;
	}

	createDirectoryNameDragEntryItem(directoryName, collapsed) {
		const name = directoryName,	///
					explorer = this.getExplorer(),
					DirectoryNameDragEntryItem = explorer.getDirectoryNameDragEntryItem(),
					directoryNameDragEntryItem =

						<DirectoryNameDragEntryItem name={name} collapsed={collapsed} explorer={explorer} />

					;

		return directoryNameDragEntryItem;
	}

	isFileNameDragEntryItemPresent(fileName) {
		const fileNameDragEntryItem = this.findFileNameDragEntryItem(fileName),
					fileNameDragEntryItemPresent = (fileNameDragEntryItem !== null);

		return fileNameDragEntryItemPresent;
	}

	isDirectoryNameDragEntryItemPresent(directoryName) {
		const directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName),
					directoryNameDragEntryItemPresent = (directoryNameDragEntryItem !== null);

		return directoryNameDragEntryItemPresent;
	}

  forEachEntryItemByTypes(callback, ...types) {
    const entryItems = this.getEntryItems();

    entryItems.forEach((entryItem) => {
      const entryItemType = entryItem.getType(),
          typesIncludesEntryItemType = types.includes(entryItemType);

      if (typesIncludesEntryItemType) {
        callback(entryItem);
      }
    });
  }

  forEachDragEntryItem(callback) { this.forEachEntryItemByTypes(callback, FILE_NAME_DRAG_ENTRY_TYPE, DIRECTORY_NAME_DRAG_ENTRY_TYPE); }

  forEachFileNameDragEntryItem(callback) { this.forEachEntryItemByTypes(callback, FILE_NAME_DRAG_ENTRY_TYPE); }

  forEachDirectoryNameDragEntryItem(callback) { this.forEachEntryItemByTypes(callback, DIRECTORY_NAME_DRAG_ENTRY_TYPE); }

  someEntryItemByTypes(callback, ...types) {
    const entryItems = this.getEntryItems();

    return entryItems.some((entryItem) => {
      const entryItemType = entryItem.getType(),
          typesIncludesEntryItemType = types.includes(entryItemType);

      if (typesIncludesEntryItemType) {
        const result = callback(entryItem);

        return result;
      }
    });
  }

  findEntryItem(callback) {
    const entryItems = this.getEntryItems(),
          entryItem = entryItems.find(callback) || null; ///

    return entryItem;
  }

  findEntryItemByTypes(callback, ...types) {
    const entryItems = this.getEntryItems(),
        entryItem = entryItems.find((entryItem) => {
          const entryItemType = entryItem.getType(),
              typesIncludesEntryItemType = types.includes(entryItemType);

          if (typesIncludesEntryItemType) {
            const result = callback(entryItem);

            if (result) {
              return true;
            }
          }
        }) || null; ///;

    return entryItem;
  }

  findEntryItemByNameAndTypes(name, ...types) {
    const entryItem = this.findEntryItemByTypes((entryItem) => {
      const entryItemName = entryItem.getName();

      if (entryItemName === name) {
        return true;
      }
    }, ...types) || null;

    return entryItem;
  }

  findFileNameDragEntryItem(fileName) {
    const name = fileName,  ///
          entryItem = this.findEntryItemByNameAndTypes(name, FILE_NAME_DRAG_ENTRY_TYPE),
          fileNameDragEntryItem = entryItem;  ///

    return fileNameDragEntryItem;
  }

  findDirectoryNameDragEntryItem(directoryName) {
    const entryItem = this.findEntryItemByNameAndTypes(directoryName, DIRECTORY_NAME_DRAG_ENTRY_TYPE),
          directoryNameDragEntryItem = entryItem; ///

    return directoryNameDragEntryItem;
  }

  retrieveMarkerEntryItem() {
    const { markerEntryItem } = globalThis;

    return markerEntryItem;
  }

  collapse() {
	  this.addClass("collapsed");
  }

	expand() {
	  this.removeClass("collapsed");
  }

  didMount() {
    const topmost = this.isTopmost();

    if (topmost) {
      this.addClass("topmost");
    }
  }

  willUnmount() {
    ///
  }

  parentContext() {
		const expandEntriesList = this.expand.bind(this),  ///
          collapseEntriesList = this.collapse.bind(this),  ///
          isEntriesListCollapsed = this.isCollapsed.bind(this), ///
          isEmpty = this.isEmpty.bind(this),
          getFilePaths = this.getFilePaths.bind(this),
          getDirectoryPaths = this.getDirectoryPaths.bind(this),
          addMarker = this.addMarker.bind(this),
          addFilePath = this.addFilePath.bind(this),
          removeMarker = this.removeMarker.bind(this),
          removeFilePath = this.removeFilePath.bind(this),
          removeAllPaths = this.removeAllPaths.bind(this),
          addDirectoryPath = this.addDirectoryPath.bind(this),
          removeDirectoryPath = this.removeDirectoryPath.bind(this),
          forEachDragEntryItem = this.forEachDragEntryItem.bind(this),
          retrieveMarkerEntryItem = this.retrieveMarkerEntryItem.bind(this);

		return ({
      expandEntriesList,
      collapseEntriesList,
      isEntriesListCollapsed,
      isEmpty,
      getFilePaths,
      getDirectoryPaths,
      addMarker,
			addFilePath,
      removeMarker,
      removeFilePath,
      removeAllPaths,
      addDirectoryPath,
      removeDirectoryPath,
      forEachDragEntryItem,
      retrieveMarkerEntryItem
		});
	}

	static tagName = "ul";

  static ignoredProperties = [
    "topmost",
    "explorer"
  ];

  static defaultProperties = {
    className: "entries"
  };
}

export default withStyle(EntriesList)`

  list-style: none;
  padding-left: ${entriesListPaddingLeft};
  
  .topmost {
    padding-left: 0;
  }
  
  .collapsed {
    display: none;
  }
      
`;
