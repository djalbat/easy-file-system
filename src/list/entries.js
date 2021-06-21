"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { pathUtilities } from "necessary";

import { FILE_NAME_DRAG_TYPE,
         FILE_NAME_MARKER_TYPE,
         DIRECTORY_NAME_DRAG_TYPE,
         DIRECTORY_NAME_MARKER_TYPE } from "../types";

const { topmostDirectoryNameFromPath, pathWithoutTopmostDirectoryNameFromPath } = pathUtilities;

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
        topmostDirectoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(topmostDirectoryName);

        this.addEntryItem(topmostDirectoryNameDragEntryItem);
      }

      const filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(filePath);

      filePath = filePathWithoutTopmostDirectoryName; ///

      fileNameDragEntryItem = topmostDirectoryNameDragEntryItem.addFilePath(filePath);
    }

		return fileNameDragEntryItem;
	}

  removeFilePath(filePath) {
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

        topmostDirectoryNameDragEntryItem.removeFilePath(filePath);

        const explorer = this.getExplorer(),
              removeEmptyParentDirectoriesOptionPresent = false; ///explorer.isOptionPresent(REMOVE_EMPTY_PARENT_DIRECTORIES);

        if (removeEmptyParentDirectoriesOptionPresent) {
          const topmostDirectoryNameDragEntryItemEmpty = topmostDirectoryNameDragEntryItem.isEmpty();

          if (topmostDirectoryNameDragEntryItemEmpty) {
            this.removeEntryItem(topmostDirectoryNameDragEntryItem);
          }
        }
      }
    }
  }

  addDirectoryPath(directoryPath, collapsed = false) {
    let directoryNameDragEntryItem;

    const topmostDirectoryName = topmostDirectoryNameFromPath(directoryPath);

    if (topmostDirectoryName === null) {
      const directoryName = directoryPath;  ///

      directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName);

      if (directoryNameDragEntryItem === null) {
        directoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(directoryName, collapsed);

        this.addEntryItem(directoryNameDragEntryItem);
      }
    } else {
      let topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);

      if (topmostDirectoryNameDragEntryItem === null) {
        topmostDirectoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(topmostDirectoryName);

        this.addEntryItem(topmostDirectoryNameDragEntryItem);
      }

      const directoryPathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(directoryPath);

      directoryPath = directoryPathWithoutTopmostDirectoryName; ///

      directoryNameDragEntryItem = topmostDirectoryNameDragEntryItem.addDirectoryPath(directoryPath, collapsed);
    }

    return directoryNameDragEntryItem;
  }

  removeDirectoryPath(directoryPath) {
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

        topmostDirectoryNameDragEntryItem.removeDirectoryPath(directoryPath);

        const explorer = this.getExplorer(),
              removeEmptyParentDirectoriesOptionPresent = false; ///explorer.isOptionPresent(REMOVE_EMPTY_PARENT_DIRECTORIES);

        if (removeEmptyParentDirectoriesOptionPresent) {
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
      entryItem.didMount && entryItem.didMount(); ///
    }
  }

  removeEntryItem(entryItem) {
    const explorer = this.getExplorer(),
          explorerMounted = explorer.isMounted();

    if (explorerMounted) {
      entryItem.willUnmount && entryItem.willUnmount();  ///
    }

    entryItem.remove();
  }

  addMarkerEntryItem(markerEntryItemName, dragEntryItemType) {
    let markerEntryItem;

    const name = markerEntryItemName, ///
          type = dragEntryItemType;  ///

    switch (type) {
      case FILE_NAME_DRAG_TYPE : {
        const explorer = this.getExplorer(),
              FileNameMarkerEntryItem = explorer.getFileNameMarkerEntryItem(),
              fileNameMarkerEntryItem =

                <FileNameMarkerEntryItem name={name} explorer={explorer} />

              ;

        markerEntryItem = fileNameMarkerEntryItem;  ///

        break;
      }

      case DIRECTORY_NAME_DRAG_TYPE : {
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
  }

  removeMarkerEntryItem() {
    const markerEntryItem = this.retrieveMarkerEntryItem();

    markerEntryItem.remove();

    return markerEntryItem;
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

	createDirectoryNameDragEntryItem(directoryName, collapsed = true) {
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

  forEachEntryItem(callback) {
    const entryItems = this.getEntryItems();

    entryItems.forEach((entryItem) => {
      callback(entryItem);
    });
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

  forEachFileNameDragEntryItem(callback) { this.forEachEntryItemByTypes(callback, FILE_NAME_DRAG_TYPE); }

	forEachDirectoryNameDragEntryItem(callback) { this.forEachEntryItemByTypes(callback, DIRECTORY_NAME_DRAG_TYPE); }

  someEntryItem(callback) {
    const entryItems = this.getEntryItems();

    return entryItems.some((entryItem) => {
      return callback(entryItem);
    });
  }

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

  someFileNameDragEntryItem(callback) { return this.someEntryItemByTypes(callback, FILE_NAME_DRAG_TYPE); }

  someDirectoryNameDragEntryItem(callback) { return this.someEntryItemByTypes(callback, DIRECTORY_NAME_DRAG_TYPE); }

  someDirectoryNameMarkerEntryItem(callback) { return this.someEntryItemByTypes(callback, DIRECTORY_NAME_MARKER_TYPE); }

  findEntryItem(callback) {
    const entryItems = this.getEntryItems(),
          entryItem = entryItems.find(callback) || null; ///

    return entryItem;
  }

  findDragEntryItem(name) { return this.findEntryItemByNameAndTypes(name, FILE_NAME_DRAG_TYPE, DIRECTORY_NAME_DRAG_TYPE); }

  findEntryItemByName(name) {
    const entryItem = this.findEntryItem((entryItem) => {
      const entryItemName = entryItem.getName();

      if (entryItemName === name) {
        return true;
      }
    });

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
    }, ...types);

    return entryItem;
  }

  findMarkerEntryItem() {
    const markerEntryItem = this.findEntryItemByTypes((entryItem) => {
      return true;  ///
    }, FILE_NAME_MARKER_TYPE, DIRECTORY_NAME_MARKER_TYPE);

    return markerEntryItem;
  }

  findDragEntryItemPath(dragEntryItem) {
    let dragEntryItemPath = null;

    this.someEntryItem((entryItem) => {
      if (entryItem === dragEntryItem) {  ///
        const entryItemName = entryItem.getName();

        dragEntryItemPath = entryItemName;  ///

        return true;
      }
    });

    return dragEntryItemPath;
  }

  findMarkerEntryItemPath(markerEntryItem) {
    let markerEntryItemPath = null;

    this.someEntryItem((entryItem) => {
      if (entryItem === markerEntryItem) {  ///
        const entryItemName = entryItem.getName();

        markerEntryItemPath = entryItemName;  ///

        return true;
      }
    });

    return markerEntryItemPath;
  }

  findFileNameDragEntryItem(fileName) { return this.findEntryItemByNameAndTypes(fileName, FILE_NAME_DRAG_TYPE); }

	findDirectoryNameDragEntryItem(directoryName) { return this.findEntryItemByNameAndTypes(directoryName, DIRECTORY_NAME_DRAG_TYPE); }

  retrieveMarkerEntryItem() {
    let markerEntryItem = this.findMarkerEntryItem();

    if (markerEntryItem === null) {
      this.someDirectoryNameDragEntryItem((directoryNameDragEntryItem) => {
        markerEntryItem = directoryNameDragEntryItem.retrieveMarkerEntryItem();

        if (markerEntryItem !== null) {
          return true;
        }
      });
    }

    return markerEntryItem;
  }

  retrieveDragEntryItemPath(dragEntryItem) {
    let dragEntryItemPath = this.findDragEntryItemPath(dragEntryItem);

    if (dragEntryItemPath === null) {
      this.someDirectoryNameDragEntryItem((directoryNameDragEntryItem) => {
        dragEntryItemPath = directoryNameDragEntryItem.retrieveDragEntryItemPath(dragEntryItem);

        if (dragEntryItemPath !== null) {
          const directoryNameDragEntryItemName = directoryNameDragEntryItem.getName();

          dragEntryItemPath = `${directoryNameDragEntryItemName}/${dragEntryItemPath}`;

          return true;
        }
      });
    }

    return dragEntryItemPath;
  }

  retrieveMarkerEntryItemPath(markerEntryItem) {
    let markerEntryItemPath = this.findMarkerEntryItemPath(markerEntryItem);

    if (markerEntryItemPath === null) {
      this.someDirectoryNameDragEntryItem((directoryNameDragEntryItem) => {
        markerEntryItemPath = directoryNameDragEntryItem.retrieveMarkerEntryItemPath(markerEntryItem);

        if (markerEntryItemPath !== null) {
          const directoryNameDragEntryItemName = directoryNameDragEntryItem.getName();

          markerEntryItemPath = `${directoryNameDragEntryItemName}/${markerEntryItemPath}`;

          return true;
        }
      });
    }

    return markerEntryItemPath;
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
          isEmpty = this.isEmpty.bind(this),
          addMarker = this.addMarker.bind(this),
          addFilePath = this.addFilePath.bind(this),
          removeMarker = this.removeMarker.bind(this),
          removeFilePath = this.removeFilePath.bind(this),
          addDirectoryPath = this.addDirectoryPath.bind(this),
          removeDirectoryPath = this.removeDirectoryPath.bind(this),
          retrieveMarkerEntryItem = this.retrieveMarkerEntryItem.bind(this),
          retrieveDragEntryItemPath = this.retrieveDragEntryItemPath.bind(this),
          retrieveMarkerEntryItemPath = this.retrieveMarkerEntryItemPath.bind(this);

		return ({
      expandEntriesList,
      collapseEntriesList,
      isEmpty,
      addMarker,
			addFilePath,
      removeMarker,
      removeFilePath,
      addDirectoryPath,
      removeDirectoryPath,
      retrieveMarkerEntryItem,
			retrieveDragEntryItemPath,
      retrieveMarkerEntryItemPath
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
  margin-left: 2rem;
  background-color: red;
  
  .topmost {
    margin-left: 0;
    padding-bottom: 2.4rem;
  }
  
  .collapsed {
    display: none;
  }
      
`;
