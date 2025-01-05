"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { pathUtilities, arrayUtilities } from "necessary";

import { entriesListPaddingLeft } from "../styles";
import { FILE_NAME_DRAG_ENTRY_TYPE, DIRECTORY_NAME_DRAG_ENTRY_TYPE } from "../entryTypes";

const { filter } = arrayUtilities,
      { topmostDirectoryNameFromPath, pathWithoutTopmostDirectoryNameFromPath } = pathUtilities;

function getMarkerEntryItem() {
  const { markerEntryItem } = globalThis;

  return markerEntryItem;
}

function setMarkerEntryItem(markerEntryItem) {
  Object.assign(globalThis, {
    markerEntryItem
  });
}

function resetMarkerEntryItem() {
  const markerEntryItem = null;

  setMarkerEntryItem(markerEntryItem);
}

Object.assign(globalThis, {
  getMarkerEntryItem,
  setMarkerEntryItem,
  resetMarkerEntryItem
});

resetMarkerEntryItem();

class EntriesList extends Element {
  isTopmost() {
    const { topmost = false } = this.properties;

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

  selectPath(path) {
    let dragEntryItem = null;

    const topmostDirectoryName = topmostDirectoryNameFromPath(path);

    if (topmostDirectoryName === null) {
      const name = path;  ///

      dragEntryItem = this.findDragEntryItem(name);

      if (dragEntryItem !== null) {
        dragEntryItem.select();
      }
    } else {
      let topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);

      if (topmostDirectoryNameDragEntryItem !== null) {
        const filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(path);

        path = filePathWithoutTopmostDirectoryName; ///

        topmostDirectoryNameDragEntryItem.expand();

        dragEntryItem = topmostDirectoryNameDragEntryItem.selectPath(path);
      }
    }

    return dragEntryItem;
  }

  deselectPath(path) {
    let dragEntryItem = null;

    const topmostDirectoryName = topmostDirectoryNameFromPath(path);

    if (topmostDirectoryName === null) {
      const name = path;  ///

      dragEntryItem = this.findDragEntryItem(name);

      if (dragEntryItem !== null) {
        dragEntryItem.deselect();
      }
    } else {
      let topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);

      if (topmostDirectoryNameDragEntryItem !== null) {
        const filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(path);

        path = filePathWithoutTopmostDirectoryName; ///

        dragEntryItem = topmostDirectoryNameDragEntryItem.deselectPath(path);
      }
    }

    return dragEntryItem;
  }

  addFilePath(filePath, readOnly = false) {
		let fileNameDragEntryItem;

    const topmostDirectoryName = topmostDirectoryNameFromPath(filePath);

    if (topmostDirectoryName === null) {
      const fileName = filePath;  ///

      fileNameDragEntryItem = this.findFileNameDragEntryItem(fileName);

      if (fileNameDragEntryItem === null) {
        fileNameDragEntryItem = this.createFileNameDragEntryItem(fileName, readOnly);

        this.addEntryItem(fileNameDragEntryItem);
      }
    } else {
      let topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);

      if (topmostDirectoryNameDragEntryItem === null) {
        const collapsed = true;

        topmostDirectoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(topmostDirectoryName, readOnly, collapsed);

        this.addEntryItem(topmostDirectoryNameDragEntryItem);
      }

      const filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(filePath);

      filePath = filePathWithoutTopmostDirectoryName; ///

      fileNameDragEntryItem = topmostDirectoryNameDragEntryItem.addFilePath(filePath, readOnly);
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

  deselectAllPaths() {
    const dragEntryItems = this.retrieveDragEntryItems();

    dragEntryItems.forEach((dragEntryItem) => {
      dragEntryItem.deselect();
    });
  }

  addDirectoryPath(directoryPath, readOnly = false, collapsed = true) {
    let directoryNameDragEntryItem;

    const topmostDirectoryName = topmostDirectoryNameFromPath(directoryPath);

    if (topmostDirectoryName === null) {
      const directoryName = directoryPath;  ///

      directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName);

      if (directoryNameDragEntryItem === null) {
        directoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(directoryName, readOnly, collapsed);

        this.addEntryItem(directoryNameDragEntryItem);
      } else {
        collapsed ?
          directoryNameDragEntryItem.collapse() :
            directoryNameDragEntryItem.expand();
      }
    } else {
      let topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);

      if (topmostDirectoryNameDragEntryItem === null) {
        topmostDirectoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(topmostDirectoryName, readOnly, collapsed);

        this.addEntryItem(topmostDirectoryNameDragEntryItem);
      }

      const directoryPathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(directoryPath);

      directoryPath = directoryPathWithoutTopmostDirectoryName; ///

      directoryNameDragEntryItem = topmostDirectoryNameDragEntryItem.addDirectoryPath(directoryPath, readOnly, collapsed);
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
          mounted = explorer.isMounted(),
          nextEntryItem = entryItem,  ///
          previousEntryItem = this.findEntryItem((entryItem) => {
            const nextEntryBeforeEntryItem = nextEntryItem.isBefore(entryItem);

            if (nextEntryBeforeEntryItem) {
              return true;
            }
          });

    if (previousEntryItem === null) {
      mounted ?
        this.mount(entryItem) :
          this.add(entryItem);
    } else {
      mounted ?
        entryItem.mountBefore(previousEntryItem) :
          entryItem.insertBefore(previousEntryItem);
    }
  }

  removeEntryItem(entryItem) {
    const explorer = this.getExplorer(),
          mounted = explorer.isMounted();

    mounted ?
      this.unmount(entryItem) :
        this.remove(entryItem);
  }

  removeEntryItems() {
    const entryItems = this.getEntryItems();

    entryItems.forEach((entryItem) => {
      this.removeEntryItem(entryItem);
    });
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

    setMarkerEntryItem(markerEntryItem);
  }

  removeMarkerEntryItem() {
    const markerEntryItem = this.retrieveMarkerEntryItem();

    markerEntryItem.remove();

    resetMarkerEntryItem();

    resetDropElement();
  }

  createFileNameDragEntryItem(fileName, readOnly) {
		const name = fileName,	///
					explorer = this.getExplorer(),
					FileNameDragEntryItem = explorer.getFileNameDragEntryItem(readOnly),
					fileNameDragEntryItem =

						<FileNameDragEntryItem name={name} readOnly={readOnly} explorer={explorer} />

					;

		return fileNameDragEntryItem;
	}

	createDirectoryNameDragEntryItem(directoryName, readOnly, collapsed) {
		const name = directoryName,	///
          topmost = this.isTopmost(),
					explorer = this.getExplorer(),
					DirectoryNameDragEntryItem = explorer.getDirectoryNameDragEntryItem(readOnly, topmost),
					directoryNameDragEntryItem =

						<DirectoryNameDragEntryItem name={name} explorer={explorer} readOnly={readOnly} topmost={topmost} collapsed={collapsed} />

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

  findEntryItemsByTypes(...types) {
    const entryItems = this.getEntryItems();

    filter(entryItems, (entryItem) => {
      const entryItemType = entryItem.getType(),
            typesIncludesEntryItemType = types.includes(entryItemType);

      if (typesIncludesEntryItemType) {
        return true;
      }
    });

    return entryItems;
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

  findDragEntryItem(name) {
    const entryItem = this.findEntryItemByNameAndTypes(name, FILE_NAME_DRAG_ENTRY_TYPE, DIRECTORY_NAME_DRAG_ENTRY_TYPE),
          dragEntryItem = entryItem;  ///

    return dragEntryItem;
  }

  findDragEntryItems() {
    const entryItems = this.findEntryItemsByTypes(FILE_NAME_DRAG_ENTRY_TYPE, DIRECTORY_NAME_DRAG_ENTRY_TYPE),
          dragEntryItems = entryItems;  ///

    return dragEntryItems;
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

  retrieveDragEntryItems(dragEntryItems = []) {
    this.forEachDirectoryNameDragEntryItem((directoryNameDragEntryItem) => {
      const dragEntryItem = directoryNameDragEntryItem; ///

      directoryNameDragEntryItem.retrieveDragEntryItems(dragEntryItems);

      dragEntryItems.push(dragEntryItem);
    });

    this.forEachFileNameDragEntryItem((fileNameDragEntryItem) => {
      const dragEntryItem = fileNameDragEntryItem;  ///

      dragEntryItems.push(dragEntryItem);
    });

    return dragEntryItems;
  }

  retrieveFileNameDragEntryItems(fileNameDragEntryItems = []) {
    this.forEachDragEntryItem((dragEntryItem) => {
      const dragEntryItemDirectoryNameDragEntryItem = dragEntryItem.isDirectoryNameDragEntryItem();

      if (dragEntryItemDirectoryNameDragEntryItem) {
        const directoryNameDragEntryItem = dragEntryItem; ///

        directoryNameDragEntryItem.retrieveFileNameDragEntryItems(fileNameDragEntryItems);
      } else {
        const fileNameDragEntryItem = dragEntryItem;  ///

        fileNameDragEntryItems.push(fileNameDragEntryItem);
      }
    });

    return fileNameDragEntryItems;
  }

  retrieveDirectoryNameDragEntryItems(directoryNameDragEntryItems = []) {
    this.forEachDirectoryNameDragEntryItem((directoryNameDragEntryItem) => {
      directoryNameDragEntryItem.retrieveDirectoryNameDragEntryItems(directoryNameDragEntryItems);

      directoryNameDragEntryItems.push(directoryNameDragEntryItem);
    });

    return directoryNameDragEntryItems;
  }

  retrieveMarkerEntryItem() {
    const markerEntryItem = getMarkerEntryItem();

    return markerEntryItem;
  }

  retrieveEditableDragEntryItem() {
    const dragEntryItems = this.retrieveDragEntryItems(),
          editableDragEntryItem = dragEntryItems.find((dragEntryItem) => {
            const dragEntryItemEditable = dragEntryItem.isEditable();

            if (dragEntryItemEditable) {
              return true;
            }
          }) || null;

    return editableDragEntryItem;
  }

  retrieveSelectedDragEntryItem() {
    const dragEntryItems = this.retrieveDragEntryItems(),
          selectedDragEntryItem = dragEntryItems.find((dragEntryItem) => {
            const selected = dragEntryItem.isSelected();

            if (selected) {
              return true;
            }
          }) || null;

    return selectedDragEntryItem;
  }

  retrieveFileNameDragEntryItem(filePath) {
    const fileNameDragEntryItems = this.retrieveFileNameDragEntryItems(),
          fileNameDragEntryItem = fileNameDragEntryItems.find((fileNameDragEntryItem) => {
            const fileNameDragEntryItemPath = fileNameDragEntryItem.getPath();

            if (fileNameDragEntryItemPath === filePath) {
              return true;
            }
          }) || null; ///

    return fileNameDragEntryItem;
  }

  retrieveDirectoryNameDragEntryItem(directoryPath) {
    const directoryNameDragEntryItems = this.retrieveDirectoryNameDragEntryItems(),
          directoryNameDragEntryItem = directoryNameDragEntryItems.find((directoryNameDragEntryItem) => {
            const directoryNameDragEntryItemPath = directoryNameDragEntryItem.getPath();

            if (directoryNameDragEntryItemPath === directoryPath) {
              return true;
            }
          }) || null; ///

    return directoryNameDragEntryItem;
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
          addMarker = this.addMarker.bind(this),
          selectPath = this.selectPath.bind(this),
          addFilePath = this.addFilePath.bind(this),
          deselectPath = this.deselectPath.bind(this),
          removeMarker = this.removeMarker.bind(this),
          addEntryItem = this.addEntryItem.bind(this),
          removeFilePath = this.removeFilePath.bind(this),
          removeAllPaths = this.removeAllPaths.bind(this),
          removeEntryItem = this.removeEntryItem.bind(this),
          deselectAllPaths = this.deselectAllPaths.bind(this),
          addDirectoryPath = this.addDirectoryPath.bind(this),
          removeDirectoryPath = this.removeDirectoryPath.bind(this),
          forEachDragEntryItem = this.forEachDragEntryItem.bind(this),
          retrieveDragEntryItems = this.retrieveDragEntryItems.bind(this),
          retrieveMarkerEntryItem = this.retrieveMarkerEntryItem.bind(this),
          retrieveSelectedDragEntryItem = this.retrieveSelectedDragEntryItem.bind(this),
          retrieveEditableDragEntryItem = this.retrieveEditableDragEntryItem.bind(this),
          retrieveFileNameDragEntryItem = this.retrieveFileNameDragEntryItem.bind(this),
          retrieveFileNameDragEntryItems = this.retrieveFileNameDragEntryItems.bind(this),
          retrieveDirectoryNameDragEntryItem = this.retrieveDirectoryNameDragEntryItem.bind(this),
          retrieveDirectoryNameDragEntryItems = this.retrieveDirectoryNameDragEntryItems.bind(this);

		return ({
      expandEntriesList,
      collapseEntriesList,
      isEntriesListCollapsed,
      isEmpty,
      addMarker,
      selectPath,
			addFilePath,
      deselectPath,
      removeMarker,
      addEntryItem,
      removeFilePath,
      removeAllPaths,
      removeEntryItem,
      deselectAllPaths,
      addDirectoryPath,
      removeDirectoryPath,
      forEachDragEntryItem,
      retrieveDragEntryItems,
      retrieveMarkerEntryItem,
      retrieveSelectedDragEntryItem,
      retrieveEditableDragEntryItem,
      retrieveFileNameDragEntryItem,
      retrieveFileNameDragEntryItems,
      retrieveDirectoryNameDragEntryItem,
      retrieveDirectoryNameDragEntryItems
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
