"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _necessary = require("necessary");
const _styles = require("../styles");
const _entryTypes = require("../entryTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { filter } = _necessary.arrayUtilities, { topmostDirectoryNameFromPath, pathWithoutTopmostDirectoryNameFromPath } = _necessary.pathUtilities;
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
class EntriesList extends _easy.Element {
    isTopmost() {
        const { topmost = false } = this.properties;
        return topmost;
    }
    getExplorer() {
        const { explorer } = this.properties;
        return explorer;
    }
    getEntryItems() {
        const childEntryItemElements = this.getChildElements("li.entry"), entryItems = childEntryItemElements; ///
        return entryItems;
    }
    getEntryItemsLength() {
        const entryItems = this.getEntryItems(), entryItemsLength = entryItems.length;
        return entryItemsLength;
    }
    isCollapsed() {
        const collapsed = this.hasClass("collapsed");
        return collapsed;
    }
    isEmpty() {
        const entryItems = this.getEntryItems(), entryItemsLength = entryItems.length, empty = entryItemsLength === 0;
        return empty;
    }
    addMarker(markerEntryItemPath, dragEntryItemType) {
        const topmostDirectoryName = topmostDirectoryNameFromPath(markerEntryItemPath);
        if (topmostDirectoryName === null) {
            const markerEntryItemName = markerEntryItemPath; ///
            this.addMarkerEntryItem(markerEntryItemName, dragEntryItemType);
        } else {
            const topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName), markerEntryItemPathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(markerEntryItemPath);
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
            const name = path; ///
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
            const name = path; ///
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
            const fileName = filePath; ///
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
            const fileName = filePath, fileNameDragEntryItem = this.findFileNameDragEntryItem(fileName);
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
        dragEntryItems.forEach((dragEntryItem)=>{
            dragEntryItem.deselect();
        });
    }
    addDirectoryPath(directoryPath, readOnly = false, collapsed = true) {
        let directoryNameDragEntryItem;
        const topmostDirectoryName = topmostDirectoryNameFromPath(directoryPath);
        if (topmostDirectoryName === null) {
            const directoryName = directoryPath; ///
            directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName);
            if (directoryNameDragEntryItem === null) {
                directoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(directoryName, readOnly, collapsed);
                this.addEntryItem(directoryNameDragEntryItem);
            } else {
                collapsed ? directoryNameDragEntryItem.collapse() : directoryNameDragEntryItem.expand();
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
            const directoryName = directoryPath, directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName);
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
        const nextEntryItem = entryItem, previousEntryItem = this.findEntryItem((entryItem)=>{
            const nextEntryBeforeEntryItem = nextEntryItem.isBefore(entryItem);
            if (nextEntryBeforeEntryItem) {
                return true;
            }
        });
        if (previousEntryItem === null) {
            this.mount(entryItem);
        } else {
            entryItem.mountBefore(previousEntryItem);
        }
    }
    removeEntryItem(entryItem) {
        this.unmount(entryItem);
    }
    removeEntryItems() {
        const entryItems = this.getEntryItems();
        entryItems.forEach((entryItem)=>{
            this.removeEntryItem(entryItem);
        });
    }
    addMarkerEntryItem(markerEntryItemName, dragEntryItemType) {
        let markerEntryItem;
        const name = markerEntryItemName, type = dragEntryItemType; ///
        switch(type){
            case _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE:
                {
                    const explorer = this.getExplorer(), FileNameMarkerEntryItem = explorer.getFileNameMarkerEntryItem(), fileNameMarkerEntryItem = /*#__PURE__*/ React.createElement(FileNameMarkerEntryItem, {
                        name: name,
                        explorer: explorer
                    });
                    markerEntryItem = fileNameMarkerEntryItem; ///
                    break;
                }
            case _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE:
                {
                    const explorer = this.getExplorer(), DirectoryNameMarkerEntryItem = explorer.getDirectoryNameMarkerEntryItem(), directoryNameMarkerEntryItem = /*#__PURE__*/ React.createElement(DirectoryNameMarkerEntryItem, {
                        name: name,
                        explorer: explorer
                    });
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
        const name = fileName, explorer = this.getExplorer(), FileNameDragEntryItem = explorer.getFileNameDragEntryItem(readOnly), fileNameDragEntryItem = /*#__PURE__*/ React.createElement(FileNameDragEntryItem, {
            name: name,
            readOnly: readOnly,
            explorer: explorer
        });
        return fileNameDragEntryItem;
    }
    createDirectoryNameDragEntryItem(directoryName, readOnly, collapsed) {
        const name = directoryName, topmost = this.isTopmost(), explorer = this.getExplorer(), DirectoryNameDragEntryItem = explorer.getDirectoryNameDragEntryItem(readOnly, topmost), directoryNameDragEntryItem = /*#__PURE__*/ React.createElement(DirectoryNameDragEntryItem, {
            name: name,
            explorer: explorer,
            readOnly: readOnly,
            topmost: topmost,
            collapsed: collapsed
        });
        return directoryNameDragEntryItem;
    }
    isFileNameDragEntryItemPresent(fileName) {
        const fileNameDragEntryItem = this.findFileNameDragEntryItem(fileName), fileNameDragEntryItemPresent = fileNameDragEntryItem !== null;
        return fileNameDragEntryItemPresent;
    }
    isDirectoryNameDragEntryItemPresent(directoryName) {
        const directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName), directoryNameDragEntryItemPresent = directoryNameDragEntryItem !== null;
        return directoryNameDragEntryItemPresent;
    }
    forEachEntryItemByTypes(callback, ...types) {
        const entryItems = this.getEntryItems();
        entryItems.forEach((entryItem)=>{
            const entryItemType = entryItem.getType(), typesIncludesEntryItemType = types.includes(entryItemType);
            if (typesIncludesEntryItemType) {
                callback(entryItem);
            }
        });
    }
    forEachDragEntryItem(callback) {
        this.forEachEntryItemByTypes(callback, _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE, _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE);
    }
    forEachFileNameDragEntryItem(callback) {
        this.forEachEntryItemByTypes(callback, _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE);
    }
    forEachDirectoryNameDragEntryItem(callback) {
        this.forEachEntryItemByTypes(callback, _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE);
    }
    findEntryItem(callback) {
        const entryItems = this.getEntryItems(), entryItem = entryItems.find(callback) || null; ///
        return entryItem;
    }
    findEntryItemByTypes(callback, ...types) {
        const entryItems = this.getEntryItems(), entryItem = entryItems.find((entryItem)=>{
            const entryItemType = entryItem.getType(), typesIncludesEntryItemType = types.includes(entryItemType);
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
        filter(entryItems, (entryItem)=>{
            const entryItemType = entryItem.getType(), typesIncludesEntryItemType = types.includes(entryItemType);
            if (typesIncludesEntryItemType) {
                return true;
            }
        });
        return entryItems;
    }
    findEntryItemByNameAndTypes(name, ...types) {
        const entryItem = this.findEntryItemByTypes((entryItem)=>{
            const entryItemName = entryItem.getName();
            if (entryItemName === name) {
                return true;
            }
        }, ...types) || null;
        return entryItem;
    }
    findDragEntryItem(name) {
        const entryItem = this.findEntryItemByNameAndTypes(name, _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE, _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE), dragEntryItem = entryItem; ///
        return dragEntryItem;
    }
    findDragEntryItems() {
        const entryItems = this.findEntryItemsByTypes(_entryTypes.FILE_NAME_DRAG_ENTRY_TYPE, _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE), dragEntryItems = entryItems; ///
        return dragEntryItems;
    }
    findFileNameDragEntryItem(fileName) {
        const name = fileName, entryItem = this.findEntryItemByNameAndTypes(name, _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE), fileNameDragEntryItem = entryItem; ///
        return fileNameDragEntryItem;
    }
    findDirectoryNameDragEntryItem(directoryName) {
        const entryItem = this.findEntryItemByNameAndTypes(directoryName, _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE), directoryNameDragEntryItem = entryItem; ///
        return directoryNameDragEntryItem;
    }
    retrieveDragEntryItems(dragEntryItems = []) {
        this.forEachDirectoryNameDragEntryItem((directoryNameDragEntryItem)=>{
            const dragEntryItem = directoryNameDragEntryItem; ///
            directoryNameDragEntryItem.retrieveDragEntryItems(dragEntryItems);
            dragEntryItems.push(dragEntryItem);
        });
        this.forEachFileNameDragEntryItem((fileNameDragEntryItem)=>{
            const dragEntryItem = fileNameDragEntryItem; ///
            dragEntryItems.push(dragEntryItem);
        });
        return dragEntryItems;
    }
    retrieveFileNameDragEntryItems(fileNameDragEntryItems = []) {
        this.forEachDragEntryItem((dragEntryItem)=>{
            const dragEntryItemDirectoryNameDragEntryItem = dragEntryItem.isDirectoryNameDragEntryItem();
            if (dragEntryItemDirectoryNameDragEntryItem) {
                const directoryNameDragEntryItem = dragEntryItem; ///
                directoryNameDragEntryItem.retrieveFileNameDragEntryItems(fileNameDragEntryItems);
            } else {
                const fileNameDragEntryItem = dragEntryItem; ///
                fileNameDragEntryItems.push(fileNameDragEntryItem);
            }
        });
        return fileNameDragEntryItems;
    }
    retrieveDirectoryNameDragEntryItems(directoryNameDragEntryItems = []) {
        this.forEachDirectoryNameDragEntryItem((directoryNameDragEntryItem)=>{
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
        const dragEntryItems = this.retrieveDragEntryItems(), editableDragEntryItem = dragEntryItems.find((dragEntryItem)=>{
            const dragEntryItemEditable = dragEntryItem.isEditable();
            if (dragEntryItemEditable) {
                return true;
            }
        }) || null;
        return editableDragEntryItem;
    }
    retrieveSelectedDragEntryItem() {
        const dragEntryItems = this.retrieveDragEntryItems(), selectedDragEntryItem = dragEntryItems.find((dragEntryItem)=>{
            const selected = dragEntryItem.isSelected();
            if (selected) {
                return true;
            }
        }) || null;
        return selectedDragEntryItem;
    }
    retrieveFileNameDragEntryItem(filePath) {
        const fileNameDragEntryItems = this.retrieveFileNameDragEntryItems(), fileNameDragEntryItem = fileNameDragEntryItems.find((fileNameDragEntryItem)=>{
            const fileNameDragEntryItemPath = fileNameDragEntryItem.getPath();
            if (fileNameDragEntryItemPath === filePath) {
                return true;
            }
        }) || null; ///
        return fileNameDragEntryItem;
    }
    retrieveDirectoryNameDragEntryItem(directoryPath) {
        const directoryNameDragEntryItems = this.retrieveDirectoryNameDragEntryItems(), directoryNameDragEntryItem = directoryNameDragEntryItems.find((directoryNameDragEntryItem)=>{
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
        const expandEntriesList = this.expand.bind(this), collapseEntriesList = this.collapse.bind(this), isEntriesListCollapsed = this.isCollapsed.bind(this), isEmpty = this.isEmpty.bind(this), addMarker = this.addMarker.bind(this), selectPath = this.selectPath.bind(this), addFilePath = this.addFilePath.bind(this), deselectPath = this.deselectPath.bind(this), removeMarker = this.removeMarker.bind(this), addEntryItem = this.addEntryItem.bind(this), removeFilePath = this.removeFilePath.bind(this), removeAllPaths = this.removeAllPaths.bind(this), removeEntryItem = this.removeEntryItem.bind(this), deselectAllPaths = this.deselectAllPaths.bind(this), addDirectoryPath = this.addDirectoryPath.bind(this), removeDirectoryPath = this.removeDirectoryPath.bind(this), forEachDragEntryItem = this.forEachDragEntryItem.bind(this), retrieveDragEntryItems = this.retrieveDragEntryItems.bind(this), retrieveMarkerEntryItem = this.retrieveMarkerEntryItem.bind(this), retrieveSelectedDragEntryItem = this.retrieveSelectedDragEntryItem.bind(this), retrieveEditableDragEntryItem = this.retrieveEditableDragEntryItem.bind(this), retrieveFileNameDragEntryItem = this.retrieveFileNameDragEntryItem.bind(this), retrieveFileNameDragEntryItems = this.retrieveFileNameDragEntryItems.bind(this), retrieveDirectoryNameDragEntryItem = this.retrieveDirectoryNameDragEntryItem.bind(this), retrieveDirectoryNameDragEntryItems = this.retrieveDirectoryNameDragEntryItems.bind(this);
        return {
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
        };
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
const _default = (0, _easywithstyle.default)(EntriesList)`

  list-style: none;
  padding-left: ${_styles.entriesListPaddingLeft};
  
  .topmost {
    padding-left: 0;
  }
  
  .collapsed {
    display: none;
  }
      
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGVudHJpZXNMaXN0UGFkZGluZ0xlZnQgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vZW50cnlUeXBlc1wiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuZnVuY3Rpb24gZ2V0TWFya2VyRW50cnlJdGVtKCkge1xuICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbSB9ID0gZ2xvYmFsVGhpcztcblxuICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xufVxuXG5mdW5jdGlvbiBzZXRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtKSB7XG4gIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgIG1hcmtlckVudHJ5SXRlbVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IG51bGw7XG5cbiAgc2V0TWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbSk7XG59XG5cbk9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICBnZXRNYXJrZXJFbnRyeUl0ZW0sXG4gIHNldE1hcmtlckVudHJ5SXRlbSxcbiAgcmVzZXRNYXJrZXJFbnRyeUl0ZW1cbn0pO1xuXG5yZXNldE1hcmtlckVudHJ5SXRlbSgpO1xuXG5jbGFzcyBFbnRyaWVzTGlzdCBleHRlbmRzIEVsZW1lbnQge1xuICBpc1RvcG1vc3QoKSB7XG4gICAgY29uc3QgeyB0b3Btb3N0ID0gZmFsc2UgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiB0b3Btb3N0O1xuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG5cdFx0Y29uc3QgeyBleHBsb3JlciB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG5cdFx0cmV0dXJuIGV4cGxvcmVyO1xuXHR9XG5cblx0Z2V0RW50cnlJdGVtcygpIHtcblx0XHRjb25zdCBjaGlsZEVudHJ5SXRlbUVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwibGkuZW50cnlcIiksXG5cdFx0XHRcdFx0ZW50cnlJdGVtcyA9IGNoaWxkRW50cnlJdGVtRWxlbWVudHM7ICAvLy9cblxuXHRcdHJldHVybiBlbnRyeUl0ZW1zO1xuXHR9XG5cblx0Z2V0RW50cnlJdGVtc0xlbmd0aCgpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtc0xlbmd0aCA9IGVudHJ5SXRlbXMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbXNMZW5ndGg7XG4gIH1cblxuICBpc0NvbGxhcHNlZCgpIHtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmhhc0NsYXNzKFwiY29sbGFwc2VkXCIpO1xuXG4gICAgcmV0dXJuIGNvbGxhcHNlZDtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpLFxuICAgICAgICAgIGVudHJ5SXRlbXNMZW5ndGggPSBlbnRyeUl0ZW1zLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChlbnRyeUl0ZW1zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIGFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFya2VyRW50cnlJdGVtTmFtZSA9IG1hcmtlckVudHJ5SXRlbVBhdGg7ICAvLy9cblxuICAgICAgdGhpcy5hZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSksXG4gICAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZU1hcmtlcigpIHtcbiAgICB0aGlzLnJlbW92ZU1hcmtlckVudHJ5SXRlbSgpO1xuICB9XG5cbiAgc2VsZWN0UGF0aChwYXRoKSB7XG4gICAgbGV0IGRyYWdFbnRyeUl0ZW0gPSBudWxsO1xuXG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGF0aDsgIC8vL1xuXG4gICAgICBkcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRHJhZ0VudHJ5SXRlbShuYW1lKTtcblxuICAgICAgaWYgKGRyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgZHJhZ0VudHJ5SXRlbS5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTtcblxuICAgICAgICBwYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5leHBhbmQoKTtcblxuICAgICAgICBkcmFnRW50cnlJdGVtID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnNlbGVjdFBhdGgocGF0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRyYWdFbnRyeUl0ZW07XG4gIH1cblxuICBkZXNlbGVjdFBhdGgocGF0aCkge1xuICAgIGxldCBkcmFnRW50cnlJdGVtID0gbnVsbDtcblxuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbmFtZSA9IHBhdGg7ICAvLy9cblxuICAgICAgZHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERyYWdFbnRyeUl0ZW0obmFtZSk7XG5cbiAgICAgIGlmIChkcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIGRyYWdFbnRyeUl0ZW0uZGVzZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTtcblxuICAgICAgICBwYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIGRyYWdFbnRyeUl0ZW0gPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZGVzZWxlY3RQYXRoKHBhdGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgYWRkRmlsZVBhdGgoZmlsZVBhdGgsIHJlYWRPbmx5ID0gZmFsc2UpIHtcblx0XHRsZXQgZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlUGF0aDsgIC8vL1xuXG4gICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpO1xuXG4gICAgICBpZiAoZmlsZU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lLCByZWFkT25seSk7XG5cbiAgICAgICAgdGhpcy5hZGRFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb2xsYXBzZWQgPSB0cnVlO1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUsIHJlYWRPbmx5LCBjb2xsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGRGaWxlUGF0aChmaWxlUGF0aCwgcmVhZE9ubHkpO1xuICAgIH1cblxuXHRcdHJldHVybiBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICByZW1vdmVGaWxlUGF0aChmaWxlUGF0aCwgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3RvcmllcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlUGF0aCwgIC8vL1xuICAgICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKTtcblxuICAgICAgaWYgKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgIGZpbGVQYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZW1vdmVGaWxlUGF0aChmaWxlUGF0aCwgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllcyk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5pc0VtcHR5KCk7XG5cbiAgICAgICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQWxsUGF0aHMoKSB7XG4gICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW1zKCk7XG4gIH1cblxuICBkZXNlbGVjdEFsbFBhdGhzKCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkcmFnRW50cnlJdGVtcy5mb3JFYWNoKChkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBkcmFnRW50cnlJdGVtLmRlc2VsZWN0KCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlYWRPbmx5ID0gZmFsc2UsIGNvbGxhcHNlZCA9IHRydWUpIHtcbiAgICBsZXQgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWUgPSBkaXJlY3RvcnlQYXRoOyAgLy8vXG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSwgcmVhZE9ubHksIGNvbGxhcHNlZCk7XG5cbiAgICAgICAgdGhpcy5hZGRFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGFwc2VkID9cbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5jb2xsYXBzZSgpIDpcbiAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmV4cGFuZCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUsIHJlYWRPbmx5LCBjb2xsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCByZWFkT25seSwgY29sbGFwc2VkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGRpcmVjdG9yeVBhdGgsICAvLy9cbiAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucmVtb3ZlRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzKTtcblxuICAgICAgICBpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllcykge1xuICAgICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKTtcblxuICAgICAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRFbnRyeUl0ZW0oZW50cnlJdGVtKSB7XG4gICAgY29uc3QgbmV4dEVudHJ5SXRlbSA9IGVudHJ5SXRlbSwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzRW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSA9IG5leHRFbnRyeUl0ZW0uaXNCZWZvcmUoZW50cnlJdGVtKTtcblxuICAgICAgICAgICAgaWYgKG5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChwcmV2aW91c0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5tb3VudChlbnRyeUl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRyeUl0ZW0ubW91bnRCZWZvcmUocHJldmlvdXNFbnRyeUl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVudHJ5SXRlbShlbnRyeUl0ZW0pIHtcbiAgICB0aGlzLnVubW91bnQoZW50cnlJdGVtKTtcbiAgfVxuXG4gIHJlbW92ZUVudHJ5SXRlbXMoKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgZW50cnlJdGVtcy5mb3JFYWNoKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKGVudHJ5SXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtO1xuXG4gICAgY29uc3QgbmFtZSA9IG1hcmtlckVudHJ5SXRlbU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBkcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgICAgICBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IGV4cGxvcmVyLmdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgICAgIGZpbGVOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGZpbGVOYW1lTWFya2VyRW50cnlJdGVtOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIDoge1xuICAgICAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICAgICAgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9IGV4cGxvcmVyLmdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVudHJ5SXRlbSA9IG1hcmtlckVudHJ5SXRlbTsgLy8vXG5cbiAgICB0aGlzLmFkZEVudHJ5SXRlbShlbnRyeUl0ZW0pO1xuXG4gICAgc2V0TWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbSk7XG4gIH1cblxuICByZW1vdmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgbWFya2VyRW50cnlJdGVtLnJlbW92ZSgpO1xuXG4gICAgcmVzZXRNYXJrZXJFbnRyeUl0ZW0oKTtcblxuICAgIHJlc2V0RHJvcEVsZW1lbnQoKTtcbiAgfVxuXG4gIGNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSwgcmVhZE9ubHkpIHtcblx0XHRjb25zdCBuYW1lID0gZmlsZU5hbWUsXHQvLy9cblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocmVhZE9ubHkpLFxuXHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9XG5cblx0XHRcdFx0XHRcdDxGaWxlTmFtZURyYWdFbnRyeUl0ZW0gbmFtZT17bmFtZX0gcmVhZE9ubHk9e3JlYWRPbmx5fSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cblx0XHRcdFx0XHQ7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cblx0Y3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSwgcmVhZE9ubHksIGNvbGxhcHNlZCkge1xuXHRcdGNvbnN0IG5hbWUgPSBkaXJlY3RvcnlOYW1lLFx0Ly8vXG4gICAgICAgICAgdG9wbW9zdCA9IHRoaXMuaXNUb3Btb3N0KCksXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShyZWFkT25seSwgdG9wbW9zdCksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPVxuXG5cdFx0XHRcdFx0XHQ8RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSByZWFkT25seT17cmVhZE9ubHl9IHRvcG1vc3Q9e3RvcG1vc3R9IGNvbGxhcHNlZD17Y29sbGFwc2VkfSAvPlxuXG5cdFx0XHRcdFx0O1xuXG5cdFx0cmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cblx0aXNGaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KGZpbGVOYW1lKSB7XG5cdFx0Y29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKSxcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50ID0gKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudDtcblx0fVxuXG5cdGlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KGRpcmVjdG9yeU5hbWUpIHtcblx0XHRjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCA9IChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50O1xuXHR9XG5cbiAgZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgZW50cnlJdGVtcy5mb3JFYWNoKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaERyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKTsgfVxuXG4gIGZvckVhY2hGaWxlTmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSk7IH1cblxuICBmb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKTsgfVxuXG4gIGZpbmRFbnRyeUl0ZW0oY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtID0gZW50cnlJdGVtcy5maW5kKGNhbGxiYWNrKSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtID0gZW50cnlJdGVtcy5maW5kKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7IC8vLztcblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRW50cnlJdGVtc0J5VHlwZXMoLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cbiAgICBmaWx0ZXIoZW50cnlJdGVtcywgKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5SXRlbVR5cGUpO1xuXG4gICAgICBpZiAodHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtcztcbiAgfVxuXG4gIGZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhuYW1lLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5VHlwZXMoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChlbnRyeUl0ZW1OYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sIC4uLnR5cGVzKSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmREcmFnRW50cnlJdGVtKG5hbWUpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhuYW1lLCBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW0gPSBlbnRyeUl0ZW07ICAvLy9cblxuICAgIHJldHVybiBkcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgZmluZERyYWdFbnRyeUl0ZW1zKCkge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmZpbmRFbnRyeUl0ZW1zQnlUeXBlcyhGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1zID0gZW50cnlJdGVtczsgIC8vL1xuXG4gICAgcmV0dXJuIGRyYWdFbnRyeUl0ZW1zO1xuICB9XG5cbiAgZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBmaWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKG5hbWUsIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IGVudHJ5SXRlbTsgIC8vL1xuXG4gICAgcmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKSB7XG4gICAgY29uc3QgZW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMoZGlyZWN0b3J5TmFtZSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGVudHJ5SXRlbTsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKGRyYWdFbnRyeUl0ZW1zID0gW10pIHtcbiAgICB0aGlzLmZvckVhY2hEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTsgLy8vXG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoZHJhZ0VudHJ5SXRlbXMpO1xuXG4gICAgICBkcmFnRW50cnlJdGVtcy5wdXNoKGRyYWdFbnRyeUl0ZW0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5mb3JFYWNoRmlsZU5hbWVEcmFnRW50cnlJdGVtKChmaWxlTmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW07ICAvLy9cblxuICAgICAgZHJhZ0VudHJ5SXRlbXMucHVzaChkcmFnRW50cnlJdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkcmFnRW50cnlJdGVtcztcbiAgfVxuXG4gIHJldHJpZXZlRmlsZU5hbWVEcmFnRW50cnlJdGVtcyhmaWxlTmFtZURyYWdFbnRyeUl0ZW1zID0gW10pIHtcbiAgICB0aGlzLmZvckVhY2hEcmFnRW50cnlJdGVtKChkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBkcmFnRW50cnlJdGVtLmlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKTtcblxuICAgICAgaWYgKGRyYWdFbnRyeUl0ZW1EaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGRyYWdFbnRyeUl0ZW07IC8vL1xuXG4gICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJldHJpZXZlRmlsZU5hbWVEcmFnRW50cnlJdGVtcyhmaWxlTmFtZURyYWdFbnRyeUl0ZW1zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IGRyYWdFbnRyeUl0ZW07ICAvLy9cblxuICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW1zLnB1c2goZmlsZU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlTmFtZURyYWdFbnRyeUl0ZW1zO1xuICB9XG5cbiAgcmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zID0gW10pIHtcbiAgICB0aGlzLmZvckVhY2hEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyk7XG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcy5wdXNoKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXM7XG4gIH1cblxuICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSBnZXRNYXJrZXJFbnRyeUl0ZW0oKTtcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZUVkaXRhYmxlRHJhZ0VudHJ5SXRlbSgpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtcygpLFxuICAgICAgICAgIGVkaXRhYmxlRHJhZ0VudHJ5SXRlbSA9IGRyYWdFbnRyeUl0ZW1zLmZpbmQoKGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1FZGl0YWJsZSA9IGRyYWdFbnRyeUl0ZW0uaXNFZGl0YWJsZSgpO1xuXG4gICAgICAgICAgICBpZiAoZHJhZ0VudHJ5SXRlbUVkaXRhYmxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZWRpdGFibGVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKSxcbiAgICAgICAgICBzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSBkcmFnRW50cnlJdGVtcy5maW5kKChkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGRyYWdFbnRyeUl0ZW0uaXNTZWxlY3RlZCgpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzZWxlY3RlZERyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRmlsZU5hbWVEcmFnRW50cnlJdGVtcygpLFxuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbXMuZmluZCgoZmlsZU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKTtcblxuICAgICAgICAgICAgaWYgKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPT09IGZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7IC8vL1xuXG4gICAgcmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIHJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMoKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcy5maW5kKChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgICAgICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoID09PSBkaXJlY3RvcnlQYXRoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgY29sbGFwc2UoKSB7XG5cdCAgdGhpcy5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKTtcbiAgfVxuXG5cdGV4cGFuZCgpIHtcblx0ICB0aGlzLnJlbW92ZUNsYXNzKFwiY29sbGFwc2VkXCIpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgdG9wbW9zdCA9IHRoaXMuaXNUb3Btb3N0KCk7XG5cbiAgICBpZiAodG9wbW9zdCkge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcInRvcG1vc3RcIik7XG4gICAgfVxuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHRcdGNvbnN0IGV4cGFuZEVudHJpZXNMaXN0ID0gdGhpcy5leHBhbmQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGNvbGxhcHNlRW50cmllc0xpc3QgPSB0aGlzLmNvbGxhcHNlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBpc0VudHJpZXNMaXN0Q29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc0VtcHR5ID0gdGhpcy5pc0VtcHR5LmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkTWFya2VyID0gdGhpcy5hZGRNYXJrZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZWxlY3RQYXRoID0gdGhpcy5zZWxlY3RQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkRmlsZVBhdGggPSB0aGlzLmFkZEZpbGVQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgZGVzZWxlY3RQYXRoID0gdGhpcy5kZXNlbGVjdFBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVNYXJrZXIgPSB0aGlzLnJlbW92ZU1hcmtlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZEVudHJ5SXRlbSA9IHRoaXMuYWRkRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRmlsZVBhdGggPSB0aGlzLnJlbW92ZUZpbGVQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlQWxsUGF0aHMgPSB0aGlzLnJlbW92ZUFsbFBhdGhzLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRW50cnlJdGVtID0gdGhpcy5yZW1vdmVFbnRyeUl0ZW0uYmluZCh0aGlzKSxcbiAgICAgICAgICBkZXNlbGVjdEFsbFBhdGhzID0gdGhpcy5kZXNlbGVjdEFsbFBhdGhzLmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkRGlyZWN0b3J5UGF0aCA9IHRoaXMuYWRkRGlyZWN0b3J5UGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZURpcmVjdG9yeVBhdGggPSB0aGlzLnJlbW92ZURpcmVjdG9yeVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICBmb3JFYWNoRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZm9yRWFjaERyYWdFbnRyeUl0ZW0uYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZURyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVFZGl0YWJsZURyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlRWRpdGFibGVEcmFnRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlRmlsZU5hbWVEcmFnRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVGaWxlTmFtZURyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbXMuYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zLmJpbmQodGhpcyk7XG5cblx0XHRyZXR1cm4gKHtcbiAgICAgIGV4cGFuZEVudHJpZXNMaXN0LFxuICAgICAgY29sbGFwc2VFbnRyaWVzTGlzdCxcbiAgICAgIGlzRW50cmllc0xpc3RDb2xsYXBzZWQsXG4gICAgICBpc0VtcHR5LFxuICAgICAgYWRkTWFya2VyLFxuICAgICAgc2VsZWN0UGF0aCxcblx0XHRcdGFkZEZpbGVQYXRoLFxuICAgICAgZGVzZWxlY3RQYXRoLFxuICAgICAgcmVtb3ZlTWFya2VyLFxuICAgICAgYWRkRW50cnlJdGVtLFxuICAgICAgcmVtb3ZlRmlsZVBhdGgsXG4gICAgICByZW1vdmVBbGxQYXRocyxcbiAgICAgIHJlbW92ZUVudHJ5SXRlbSxcbiAgICAgIGRlc2VsZWN0QWxsUGF0aHMsXG4gICAgICBhZGREaXJlY3RvcnlQYXRoLFxuICAgICAgcmVtb3ZlRGlyZWN0b3J5UGF0aCxcbiAgICAgIGZvckVhY2hEcmFnRW50cnlJdGVtLFxuICAgICAgcmV0cmlldmVEcmFnRW50cnlJdGVtcyxcbiAgICAgIHJldHJpZXZlTWFya2VyRW50cnlJdGVtLFxuICAgICAgcmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0sXG4gICAgICByZXRyaWV2ZUVkaXRhYmxlRHJhZ0VudHJ5SXRlbSxcbiAgICAgIHJldHJpZXZlRmlsZU5hbWVEcmFnRW50cnlJdGVtLFxuICAgICAgcmV0cmlldmVGaWxlTmFtZURyYWdFbnRyeUl0ZW1zLFxuICAgICAgcmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSxcbiAgICAgIHJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zXG5cdFx0fSk7XG5cdH1cblxuXHRzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJ0b3Btb3N0XCIsXG4gICAgXCJleHBsb3JlclwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJlbnRyaWVzXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEVudHJpZXNMaXN0KWBcblxuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6ICR7ZW50cmllc0xpc3RQYWRkaW5nTGVmdH07XG4gIFxuICAudG9wbW9zdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIFxuICAuY29sbGFwc2VkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOlsiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwicGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwicGF0aFV0aWxpdGllcyIsImdldE1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbSIsImdsb2JhbFRoaXMiLCJzZXRNYXJrZXJFbnRyeUl0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJyZXNldE1hcmtlckVudHJ5SXRlbSIsIkVudHJpZXNMaXN0IiwiRWxlbWVudCIsImlzVG9wbW9zdCIsInRvcG1vc3QiLCJwcm9wZXJ0aWVzIiwiZ2V0RXhwbG9yZXIiLCJleHBsb3JlciIsImdldEVudHJ5SXRlbXMiLCJjaGlsZEVudHJ5SXRlbUVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImVudHJ5SXRlbXMiLCJnZXRFbnRyeUl0ZW1zTGVuZ3RoIiwiZW50cnlJdGVtc0xlbmd0aCIsImxlbmd0aCIsImlzQ29sbGFwc2VkIiwiY29sbGFwc2VkIiwiaGFzQ2xhc3MiLCJpc0VtcHR5IiwiZW1wdHkiLCJhZGRNYXJrZXIiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsIm1hcmtlckVudHJ5SXRlbU5hbWUiLCJhZGRNYXJrZXJFbnRyeUl0ZW0iLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJmaW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lIiwicmVtb3ZlTWFya2VyIiwicmVtb3ZlTWFya2VyRW50cnlJdGVtIiwic2VsZWN0UGF0aCIsInBhdGgiLCJkcmFnRW50cnlJdGVtIiwibmFtZSIsImZpbmREcmFnRW50cnlJdGVtIiwic2VsZWN0IiwiZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJleHBhbmQiLCJkZXNlbGVjdFBhdGgiLCJkZXNlbGVjdCIsImFkZEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJyZWFkT25seSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lIiwiZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImFkZEVudHJ5SXRlbSIsImNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwicmVtb3ZlRmlsZVBhdGgiLCJyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzIiwicmVtb3ZlRW50cnlJdGVtIiwidG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkiLCJyZW1vdmVBbGxQYXRocyIsInJlbW92ZUVudHJ5SXRlbXMiLCJkZXNlbGVjdEFsbFBhdGhzIiwiZHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURyYWdFbnRyeUl0ZW1zIiwiZm9yRWFjaCIsImFkZERpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlQYXRoIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lIiwiY29sbGFwc2UiLCJkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImVudHJ5SXRlbSIsIm5leHRFbnRyeUl0ZW0iLCJwcmV2aW91c0VudHJ5SXRlbSIsImZpbmRFbnRyeUl0ZW0iLCJuZXh0RW50cnlCZWZvcmVFbnRyeUl0ZW0iLCJpc0JlZm9yZSIsIm1vdW50IiwibW91bnRCZWZvcmUiLCJ1bm1vdW50IiwidHlwZSIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsInJlbW92ZSIsInJlc2V0RHJvcEVsZW1lbnQiLCJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiaXNGaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMiLCJjYWxsYmFjayIsInR5cGVzIiwiZW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJ0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSIsImluY2x1ZGVzIiwiZm9yRWFjaERyYWdFbnRyeUl0ZW0iLCJmb3JFYWNoRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZm9yRWFjaERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZmluZCIsImZpbmRFbnRyeUl0ZW1CeVR5cGVzIiwicmVzdWx0IiwiZmluZEVudHJ5SXRlbXNCeVR5cGVzIiwiZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzIiwiZW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJmaW5kRHJhZ0VudHJ5SXRlbXMiLCJwdXNoIiwicmV0cmlldmVGaWxlTmFtZURyYWdFbnRyeUl0ZW1zIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtcyIsImRyYWdFbnRyeUl0ZW1EaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJyZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyIsInJldHJpZXZlRWRpdGFibGVEcmFnRW50cnlJdGVtIiwiZWRpdGFibGVEcmFnRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbUVkaXRhYmxlIiwiaXNFZGl0YWJsZSIsInJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtIiwic2VsZWN0ZWREcmFnRW50cnlJdGVtIiwic2VsZWN0ZWQiLCJpc1NlbGVjdGVkIiwicmV0cmlldmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoIiwiZ2V0UGF0aCIsInJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsInBhcmVudENvbnRleHQiLCJleHBhbmRFbnRyaWVzTGlzdCIsImJpbmQiLCJjb2xsYXBzZUVudHJpZXNMaXN0IiwiaXNFbnRyaWVzTGlzdENvbGxhcHNlZCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZW50cmllc0xpc3RQYWRkaW5nTGVmdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa3RCQTs7O2VBQUE7OztzRUFodEJzQjtzQkFFRTsyQkFDc0I7d0JBRVA7NEJBQ21DOzs7Ozs7QUFFMUUsTUFBTSxFQUFFQSxNQUFNLEVBQUUsR0FBR0MseUJBQWMsRUFDM0IsRUFBRUMsNEJBQTRCLEVBQUVDLHVDQUF1QyxFQUFFLEdBQUdDLHdCQUFhO0FBRS9GLFNBQVNDO0lBQ1AsTUFBTSxFQUFFQyxlQUFlLEVBQUUsR0FBR0M7SUFFNUIsT0FBT0Q7QUFDVDtBQUVBLFNBQVNFLG1CQUFtQkYsZUFBZTtJQUN6Q0csT0FBT0MsTUFBTSxDQUFDSCxZQUFZO1FBQ3hCRDtJQUNGO0FBQ0Y7QUFFQSxTQUFTSztJQUNQLE1BQU1MLGtCQUFrQjtJQUV4QkUsbUJBQW1CRjtBQUNyQjtBQUVBRyxPQUFPQyxNQUFNLENBQUNILFlBQVk7SUFDeEJGO0lBQ0FHO0lBQ0FHO0FBQ0Y7QUFFQUE7QUFFQSxNQUFNQyxvQkFBb0JDLGFBQU87SUFDL0JDLFlBQVk7UUFDVixNQUFNLEVBQUVDLFVBQVUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDQyxVQUFVO1FBRTNDLE9BQU9EO0lBQ1Q7SUFFQUUsY0FBYztRQUNkLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDRixVQUFVO1FBRXBDLE9BQU9FO0lBQ1I7SUFFQUMsZ0JBQWdCO1FBQ2YsTUFBTUMseUJBQXlCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsYUFDbERDLGFBQWFGLHdCQUF5QixHQUFHO1FBRTVDLE9BQU9FO0lBQ1I7SUFFQUMsc0JBQXNCO1FBQ25CLE1BQU1ELGFBQWEsSUFBSSxDQUFDSCxhQUFhLElBQy9CSyxtQkFBbUJGLFdBQVdHLE1BQU07UUFFMUMsT0FBT0Q7SUFDVDtJQUVBRSxjQUFjO1FBQ1osTUFBTUMsWUFBWSxJ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