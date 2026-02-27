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
const _easydraganddrop = require("easy-drag-and-drop");
const _necessary = require("necessary");
const _entries = /*#__PURE__*/ _interop_require_default(require("./list/entries"));
const _explorer = /*#__PURE__*/ _interop_require_default(require("./mixins/explorer"));
const _dragEntryItem = /*#__PURE__*/ _interop_require_default(require("./mixins/dragEntryItem"));
const _fileName = /*#__PURE__*/ _interop_require_default(require("./item/entry/drag/fileName"));
const _fileName1 = /*#__PURE__*/ _interop_require_default(require("./item/entry/marker/fileName"));
const _directoryName = /*#__PURE__*/ _interop_require_default(require("./item/entry/drag/directoryName"));
const _directoryName1 = /*#__PURE__*/ _interop_require_default(require("./item/entry/marker/directoryName"));
const _styles = require("./styles");
const _constants = require("./constants");
const _entryTypes = require("./entryTypes");
const _pathMap = require("./utilities/pathMap");
const _customEventTypes = require("./customEventTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { first } = _necessary.arrayUtilities, { concatenatePaths, pathWithoutBottommostNameFromPath } = _necessary.pathUtilities;
class Explorer extends _easy.Element {
    dragOverCustomHandler = (event, element, dragElement)=>{
        const dragEntryItem = dragElement, markerEntryItem = this.retrieveMarkerEntryItem(), dragEntryItemName = dragEntryItem.getName();
        let markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer(), previousMarkerEntryItemPath = markerEntryItemPath, previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///
        markerEntryItemPath = dragEntryItemName; ///
        markerEntryItemExplorer = this; ///
        if (markerEntryItemExplorer !== previousMarkerEntryItemExplorer || markerEntryItemPath !== previousMarkerEntryItemPath) {
            const dragEntryItemType = dragEntryItem.getType();
            previousMarkerEntryItemExplorer.removeMarker();
            markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
        }
    };
    dropCustomHandler = (event, element, dragElement, aborted, done)=>{
        const markerEntryItem = this.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
        if (aborted) {
            markerEntryItemExplorer.removeMarker();
            done();
            return;
        }
        const dragEntryItem = dragElement; ///
        markerEntryItemExplorer.dropDragEntryItem(event, element, dragEntryItem, done);
    };
    getExplorer() {
        const explorer = this; ///
        return explorer;
    }
    getReference() {
        const { reference = null } = this.properties;
        return reference;
    }
    getReferences() {
        const { references = [] } = this.properties;
        return references;
    }
    getEntriesList() {
        const { EntriesList } = this.constructor;
        return EntriesList;
    }
    getFileNameDragEntryItem(readOnly) {
        const { FileNameDragEntryItem } = this.constructor;
        return FileNameDragEntryItem;
    }
    getFileNameMarkerEntryItem() {
        const { FileNameMarkerEntryItem } = this.constructor;
        return FileNameMarkerEntryItem;
    }
    getDirectoryNameDragEntryItem(readOnly, topmost) {
        const { DirectoryNameDragEntryItem } = this.constructor;
        return DirectoryNameDragEntryItem;
    }
    getDirectoryNameMarkerEntryItem() {
        const { DirectoryNameMarkerEntryItem } = this.constructor;
        return DirectoryNameMarkerEntryItem;
    }
    retrievePaths(type) {
        const dragEntryItems = this.retrieveDragEntryItems(), paths = dragEntryItems.reduce((paths, dragEntryItem)=>{
            const dragEntryItemType = dragEntryItem.getType();
            if (dragEntryItemType === type) {
                const dragEntryItemPath = dragEntryItem.getPath(), path = dragEntryItemPath; ///
                paths.push(path);
            }
            return paths;
        }, []);
        return paths;
    }
    retrieveFilePaths() {
        const type = _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE, paths = this.retrievePaths(type), filePaths = paths; ///
        return filePaths;
    }
    retrieveDirectoryPaths() {
        const type = _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE, paths = this.retrievePaths(type), directoryPaths = paths; ///
        return directoryPaths;
    }
    collapse() {
        const directoryNameDragEntryItems = this.retrieveDirectoryNameDragEntryItems();
        directoryNameDragEntryItems.forEach((directoryNameDragEntryItem)=>{
            directoryNameDragEntryItem.collapse();
        });
    }
    createPath() {
        let path;
        const name = _constants.PERIOD, selectedDragEntryItem = this.retrieveSelectedDragEntryItem();
        if (selectedDragEntryItem === null) {
            path = name; ///
        } else {
            const selectedDragEntryItemDirectoryNameDragEntryItem = selectedDragEntryItem.isDirectoryNameDragEntryItem();
            if (selectedDragEntryItemDirectoryNameDragEntryItem) {
                const directoryNameDragEntryItem = selectedDragEntryItem, directoryNameDragEntryItemPath = directoryNameDragEntryItem.getPath();
                path = concatenatePaths(directoryNameDragEntryItemPath, name);
                selectedDragEntryItem.expand();
            } else {
                const fileNameDragEntryItem = selectedDragEntryItem, fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(), fileNameDragEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(fileNameDragEntryItemPath);
                path = concatenatePaths(fileNameDragEntryItemPathWithoutBottommostName, name);
            }
        }
        return path;
    }
    createFilePath() {
        const path = this.createPath(), filePath = path, fileNameDragEntryItem = this.addFilePath(filePath);
        fileNameDragEntryItem.create();
    }
    createDirectoryPath() {
        const path = this.createPath(), readOnly = false, collapsed = false, directoryPath = path, directoryNameDragEntryItem = this.addDirectoryPath(directoryPath, readOnly, collapsed);
        directoryNameDragEntryItem.create();
    }
    renameSelectedPath() {
        const selectedDragEntryItem = this.retrieveSelectedDragEntryItem();
        if (selectedDragEntryItem !== null) {
            selectedDragEntryItem.rename();
        }
    }
    getSelectedPath() {
        let selectedPath = null;
        const selectedDragEntryItem = this.retrieveSelectedDragEntryItem();
        if (selectedDragEntryItem !== null) {
            const selectedDragEntryItemPath = selectedDragEntryItem.getPath();
            selectedPath = selectedDragEntryItemPath; ///
        }
        return selectedPath;
    }
    clickDragEntryItem(event, element, dragEntryItem) {
        const singleClick = this.isSingleClick();
        if (singleClick) {
            const selected = dragEntryItem.click(event, element);
            if (selected) {
                dragEntryItem.singleClick(event, element);
            }
            return;
        }
        const clickedDragEntryItem = this.getClickedDragEntryItem();
        if (dragEntryItem !== clickedDragEntryItem) {
            const interval = this.getInterval();
            clearInterval(interval);
            this.clearInterval();
            this.clearClickedDragEntryItem();
        }
        const interval = this.getInterval();
        if (interval === null) {
            const delay = _constants.DOUBLE_CLICK_DELAY, interval = setTimeout(()=>{
                this.clearInterval();
                this.clearClickedDragEntryItem();
                dragEntryItem.click(event, element);
            }, delay), clickedDragEntryItem = dragEntryItem; ///
            this.setInterval(interval);
            this.setClickedDragEntryItem(clickedDragEntryItem);
            return;
        }
        clearInterval(interval);
        this.clearInterval();
        this.clearClickedDragEntryItem();
        dragEntryItem.doubleClick(event, element);
    }
    openFileNameDragEntryItem(event, element, fileNameDragEntryItem) {
        const disabled = this.isDisabled();
        if (disabled) {
            return;
        }
        const fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(), filePath = fileNameDragEntryItemPath, customEventType = _customEventTypes.OPEN_CUSTOM_EVENT_TYPE;
        this.callCustomHandlers(customEventType, event, element, filePath);
    }
    selectOrDeselectDragEntryItem(event, element, dragEntryItem) {
        const disabled = this.isDisabled();
        if (disabled) {
            return;
        }
        let selected = dragEntryItem.isSelected();
        const path = dragEntryItem.getPath();
        if (selected) {
            dragEntryItem.deselect();
        } else {
            this.deselectAllPaths();
            this.selectPath(path);
        }
        selected = !selected; ///
        const readOnly = dragEntryItem.isReadOnly(), customEventType = _customEventTypes.SELECT_CUSTOM_EVENT_TYPE;
        this.callCustomHandlers(customEventType, event, element, path, selected, readOnly);
        return selected;
    }
    createDragEntryItem(event, element, dragEntryItem, done) {
        const sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem), targetEntryPath = (0, _pathMap.targetEntryPathFromEntryItem)(dragEntryItem), pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = this; ///
        this.createDragEntryItems(event, element, pathMaps, explorer, done);
    }
    renameDragEntryItem(event, element, dragEntryItem, done) {
        let sourceEntryPath, targetEntryPath;
        sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem);
        targetEntryPath = (0, _pathMap.targetEntryPathFromEntryItem)(dragEntryItem);
        const pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), firstPathMap = first(pathMaps), pathMap = firstPathMap; ///
        ({ sourceEntryPath, targetEntryPath } = pathMap);
        if (sourceEntryPath === targetEntryPath) {
            done();
            return;
        }
        const explorer = this; ///
        this.renameDragEntryItems(event, element, pathMaps, explorer, done);
    }
    dropDragEntryItem(event, element, dragEntryItem, done) {
        const dragEntryItemExplorer = dragEntryItem.getExplorer(), markerEntryItem = this.retrieveMarkerEntryItem(), sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem), targetEntryPath = (0, _pathMap.targetEntryPathFromEntryItem)(markerEntryItem);
        if (sourceEntryPath === targetEntryPath && dragEntryItemExplorer === this) {
            this.removeMarker();
            done();
            return;
        }
        const pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = dragEntryItemExplorer; ///
        this.moveDragEntryItems(event, element, pathMaps, explorer, done);
    }
    renameDragEntryItems(event, element, pathMaps, explorer, done) {
        const customEventType = _customEventTypes.RENAME_CUSTOM_EVENT_TYPE;
        this.callCustomHandlersAsync(customEventType, event, element, pathMaps, ()=>{
            pathMaps.forEach((pathMap)=>{
                this.removeDragEntryItem(pathMap, explorer);
            });
            pathMaps.forEach((pathMap)=>{
                this.addDragEntryItem(pathMap, explorer);
            });
            done();
        });
    }
    moveDragEntryItems(event, element, pathMaps, explorer, done) {
        const customEventType = _customEventTypes.MOVE_CUSTOM_EVENT_TYPE;
        this.callCustomHandlersAsync(customEventType, event, element, pathMaps, ()=>{
            pathMaps.forEach((pathMap)=>{
                this.removeDragEntryItem(pathMap, explorer);
            });
            pathMaps.forEach((pathMap)=>{
                this.addDragEntryItem(pathMap, explorer);
            });
            this.removeMarker();
            done();
        });
    }
    removeDragEntryItems(event, element, pathMaps, explorer, done) {
        const customEventType = _customEventTypes.REMOVE_CUSTOM_EVENT_TYPE;
        this.callCustomHandlersAsync(customEventType, event, element, pathMaps, ()=>{
            pathMaps.forEach((pathMap)=>{
                this.removeDragEntryItem(pathMap, explorer);
            });
            pathMaps.forEach((pathMap)=>{
                this.addDragEntryItem(pathMap, explorer);
            });
            done();
        });
    }
    createDragEntryItems(event, element, pathMaps, explorer, done) {
        const customEventType = _customEventTypes.CREATE_CUSTOM_EVENT_TYPE;
        this.callCustomHandlersAsync(customEventType, event, element, pathMaps, ()=>{
            pathMaps.forEach((pathMap)=>{
                this.removeDragEntryItem(pathMap, explorer);
            });
            pathMaps.forEach((pathMap)=>{
                this.addDragEntryItem(pathMap, explorer);
            });
            done();
        });
    }
    enable() {
        const disabled = false;
        this.setDisabled(disabled);
        this.enableDrag();
    }
    disable() {
        const disabled = true;
        this.setDisabled(disabled);
        this.disableDrag();
    }
    enableDrag() {
        const dragEntryItems = this.retrieveDragEntryItems();
        dragEntryItems.forEach((dragEntryItem)=>{
            dragEntryItem.enableDrag();
        });
    }
    disableDrag() {
        const dragEntryItems = this.retrieveDragEntryItems();
        dragEntryItems.forEach((dragEntryItem)=>{
            dragEntryItem.disableDrag();
        });
    }
    clearInterval() {
        const interval = null;
        this.setInterval(interval);
    }
    clearClickedDragEntryItem() {
        const clickedDragEntryItem = null;
        this.setClickedDragEntryItem(clickedDragEntryItem);
    }
    isDisabled() {
        const { disabled } = this.getState();
        return disabled;
    }
    isEditable() {
        const editableDragEntryItem = this.retrieveEditableDragEntryItem(), editable = editableDragEntryItem !== null;
        return editable;
    }
    getInterval() {
        const { interval } = this.getState();
        return interval;
    }
    isSingleClick() {
        const { singleClick } = this.getState();
        return singleClick;
    }
    getClickedDragEntryItem() {
        const { clickedDragEntryItem } = this.getState();
        return clickedDragEntryItem;
    }
    setDisabled(disabled) {
        this.updateState({
            disabled
        });
    }
    setInterval(interval) {
        this.updateState({
            interval
        });
    }
    setSingleClick(singleClick) {
        this.updateState({
            singleClick
        });
    }
    setClickedDragEntryItem(clickedDragEntryItem) {
        this.updateState({
            clickedDragEntryItem
        });
    }
    cancelEditableDragEntryItem() {
        const editableDragEntryItem = this.retrieveEditableDragEntryItem(), created = editableDragEntryItem.isCreated();
        editableDragEntryItem.cancel(created);
    }
    setInitialState() {
        const disabled = false, interval = null, singleClick = false, clickedDragEntryItem = null;
        this.setState({
            disabled,
            interval,
            singleClick,
            clickedDragEntryItem
        });
    }
    didMount() {
        const { singleClick = false } = this.properties;
        this.setSingleClick(singleClick);
        this.enableDrop();
        this.onCustomDragOver(this.dragOverCustomHandler);
        this.onCustomDrop(this.dropCustomHandler);
    }
    willUnmount() {
        this.disableDrop();
        this.offCustomDragOver(this.dragOverCustomHandler);
        this.offCustomDrop(this.dropCustomHandler);
    }
    childElements() {
        const explorer = this; ///
        return /*#__PURE__*/ React.createElement(_entries.default, {
            explorer: explorer,
            topmost: true
        });
    }
    parentContext() {
        const context = this.getContext(), collapse = this.collapse.bind(this), getSelectedPath = this.getSelectedPath.bind(this), retrieveFilePaths = this.retrieveFilePaths.bind(this), retrieveDirectoryPaths = this.retrieveDirectoryPaths.bind(this);
        return {
            ...context,
            collapse,
            getSelectedPath,
            retrieveFilePaths,
            retrieveDirectoryPaths
        };
    }
    initialise() {
        this.assignContext();
        this.setInitialState();
    }
    static EntriesList = _entries.default;
    static FileNameDragEntryItem = _fileName.default;
    static FileNameMarkerEntryItem = _fileName1.default;
    static DirectoryNameDragEntryItem = _directoryName.default;
    static DirectoryNameMarkerEntryItem = _directoryName1.default;
    static tagName = "div";
    static ignoredProperties = [
        "reference",
        "references",
        "singleClick"
    ];
    static defaultProperties = {
        className: "explorer"
    };
}
Object.assign(Explorer.prototype, _easydraganddrop.dropMixins);
Object.assign(Explorer.prototype, _explorer.default);
Object.assign(Explorer.prototype, _dragEntryItem.default);
const _default = (0, _easywithstyle.default)(Explorer)`
  
  padding: ${_styles.explorerPadding}; 
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbnRyaWVzTGlzdCBmcm9tIFwiLi9saXN0L2VudHJpZXNcIjtcbmltcG9ydCBleHBsb3Jlck1peGlucyBmcm9tIFwiLi9taXhpbnMvZXhwbG9yZXJcIjtcbmltcG9ydCBkcmFnRW50cnlJdGVtTWl4aW5zIGZyb20gXCIuL21peGlucy9kcmFnRW50cnlJdGVtXCI7XG5pbXBvcnQgRmlsZU5hbWVEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZy9maWxlTmFtZVwiO1xuaW1wb3J0IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgZXhwbG9yZXJQYWRkaW5nIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBQRVJJT0QsIERPVUJMRV9DTElDS19ERUxBWSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4vZW50cnlUeXBlc1wiO1xuaW1wb3J0IHsgc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbSwgdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbSB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5pbXBvcnQgeyBNT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgT1BFTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFJFTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFJFTkFNRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNFTEVDVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIENSRUFURV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuL2N1c3RvbUV2ZW50VHlwZXNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZHJhZ092ZXJDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBkcmFnRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtTmFtZTsvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgaWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgZHJvcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGRyYWdFbGVtZW50LCBhYm9ydGVkLCBkb25lKSA9PiB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudDsgIC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZXZlbnQsIGVsZW1lbnQsIGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UgPSBudWxsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcygpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZXMgPSBbXSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRFbnRyaWVzTGlzdCgpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNMaXN0IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIFx0cmV0dXJuIEVudHJpZXNMaXN0O1xuXHR9XG5cbiAgZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtKHJlYWRPbmx5KSB7XG5cdFx0Y29uc3QgeyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHJlYWRPbmx5LCB0b3Btb3N0KSB7XG5cdFx0Y29uc3QgeyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZVBhdGhzKHR5cGUpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtcygpLFxuICAgICAgICAgIHBhdGhzID0gZHJhZ0VudHJ5SXRlbXMucmVkdWNlKChwYXRocywgZHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgICAgICAgICAgaWYgKGRyYWdFbnRyeUl0ZW1UeXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBkcmFnRW50cnlJdGVtUGF0aDsgLy8vXG5cbiAgICAgICAgICAgICAgcGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhdGhzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBwYXRocztcbiAgfVxuXG4gIHJldHJpZXZlRmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IHR5cGUgPSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLFxuICAgICAgICAgIHBhdGhzID0gdGhpcy5yZXRyaWV2ZVBhdGhzKHR5cGUpLFxuICAgICAgICAgIGZpbGVQYXRocyA9IHBhdGhzOyAvLy9cblxuICAgIHJldHVybiBmaWxlUGF0aHM7XG4gIH1cblxuICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzKCkge1xuICAgIGNvbnN0IHR5cGUgPSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUsXG4gICAgICAgICAgcGF0aHMgPSB0aGlzLnJldHJpZXZlUGF0aHModHlwZSksXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aHMgPSBwYXRoczsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMuZm9yRWFjaCgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmNvbGxhcHNlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVQYXRoKCkge1xuICAgIGxldCBwYXRoO1xuXG4gICAgY29uc3QgbmFtZSA9IFBFUklPRCwgIC8vL1xuICAgICAgICAgIHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHBhdGggPSBuYW1lOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLmlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKTtcblxuICAgICAgaWYgKHNlbGVjdGVkRHJhZ0VudHJ5SXRlbURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgICAgIHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCwgbmFtZSk7XG5cbiAgICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtLmV4cGFuZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLCAgLy8vXG4gICAgICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGgpO1xuXG4gICAgICAgIHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUsIG5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgY3JlYXRlRmlsZVBhdGgoKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuY3JlYXRlUGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gcGF0aCwgIC8vL1xuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtLmNyZWF0ZSgpO1xuICB9XG5cbiAgY3JlYXRlRGlyZWN0b3J5UGF0aCgpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5jcmVhdGVQYXRoKCksXG4gICAgICAgICAgcmVhZE9ubHkgPSBmYWxzZSxcbiAgICAgICAgICBjb2xsYXBzZWQgPSBmYWxzZSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gcGF0aCwgIC8vL1xuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5hZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlYWRPbmx5LCBjb2xsYXBzZWQpO1xuXG4gICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uY3JlYXRlKCk7XG4gIH1cblxuICByZW5hbWVTZWxlY3RlZFBhdGgoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgaWYgKHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtLnJlbmFtZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkUGF0aCgpIHtcbiAgICBsZXQgc2VsZWN0ZWRQYXRoID0gbnVsbDtcblxuICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbVBhdGggPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgICBzZWxlY3RlZFBhdGggPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRQYXRoO1xuICB9XG5cbiAgY2xpY2tEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50LCBkcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3Qgc2luZ2xlQ2xpY2sgPSB0aGlzLmlzU2luZ2xlQ2xpY2soKTtcblxuICAgIGlmIChzaW5nbGVDbGljaykge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkcmFnRW50cnlJdGVtLmNsaWNrKGV2ZW50LCBlbGVtZW50KTtcblxuICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgIGRyYWdFbnRyeUl0ZW0uc2luZ2xlQ2xpY2soZXZlbnQsIGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2xpY2tlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLmdldENsaWNrZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbSAhPT0gY2xpY2tlZERyYWdFbnRyeUl0ZW0pIHtcbiAgICAgIGNvbnN0IGludGVydmFsID0gdGhpcy5nZXRJbnRlcnZhbCgpO1xuXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgICAgdGhpcy5jbGVhckludGVydmFsKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJDbGlja2VkRHJhZ0VudHJ5SXRlbSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGludGVydmFsID0gdGhpcy5nZXRJbnRlcnZhbCgpO1xuXG4gICAgaWYgKGludGVydmFsID09PSBudWxsKSB7XG4gICAgICBjb25zdCBkZWxheSA9IERPVUJMRV9DTElDS19ERUxBWSxcbiAgICAgICAgICAgIGludGVydmFsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY2xlYXJJbnRlcnZhbCgpO1xuXG4gICAgICAgICAgICAgIHRoaXMuY2xlYXJDbGlja2VkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgICAgICAgICAgIGRyYWdFbnRyeUl0ZW0uY2xpY2soZXZlbnQsIGVsZW1lbnQpO1xuICAgICAgICAgICAgfSwgZGVsYXkpLFxuICAgICAgICAgICAgY2xpY2tlZERyYWdFbnRyeUl0ZW0gPSBkcmFnRW50cnlJdGVtOyAvLy9cblxuICAgICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgIHRoaXMuc2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0oY2xpY2tlZERyYWdFbnRyeUl0ZW0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcblxuICAgIHRoaXMuY2xlYXJDbGlja2VkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgZHJhZ0VudHJ5SXRlbS5kb3VibGVDbGljayhldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50LCBmaWxlTmFtZURyYWdFbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBPUEVOX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgZmlsZVBhdGgpO1xuICB9XG5cbiAgc2VsZWN0T3JEZXNlbGVjdERyYWdFbnRyeUl0ZW0oZXZlbnQsIGVsZW1lbnQsIGRyYWdFbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdGVkID0gZHJhZ0VudHJ5SXRlbS5pc1NlbGVjdGVkKCk7XG5cbiAgICBjb25zdCBwYXRoID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIGRyYWdFbnRyeUl0ZW0uZGVzZWxlY3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXNlbGVjdEFsbFBhdGhzKCk7XG5cbiAgICAgIHRoaXMuc2VsZWN0UGF0aChwYXRoKTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZCA9ICFzZWxlY3RlZDsgLy8vXG5cbiAgICBjb25zdCByZWFkT25seSA9IGRyYWdFbnRyeUl0ZW0uaXNSZWFkT25seSgpLFxuICAgICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNFTEVDVF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHBhdGgsIHNlbGVjdGVkLCByZWFkT25seSk7XG5cbiAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gIH1cblxuICBjcmVhdGVEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50LCBkcmFnRW50cnlJdGVtLCBkb25lKSB7XG4gICAgY29uc3Qgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICB0aGlzLmNyZWF0ZURyYWdFbnRyeUl0ZW1zKGV2ZW50LCBlbGVtZW50LCBwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpO1xuICB9XG5cbiAgcmVuYW1lRHJhZ0VudHJ5SXRlbShldmVudCwgZWxlbWVudCwgZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGxldCBzb3VyY2VFbnRyeVBhdGgsXG4gICAgICAgIHRhcmdldEVudHJ5UGF0aDtcblxuICAgIHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSk7XG4gICAgdGFyZ2V0RW50cnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKTtcblxuICAgIGNvbnN0IHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZmlyc3RQYXRoTWFwID0gZmlyc3QocGF0aE1hcHMpLFxuICAgICAgICAgIHBhdGhNYXAgPSBmaXJzdFBhdGhNYXA7IC8vL1xuXG4gICAgKHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXApO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHRoaXMucmVuYW1lRHJhZ0VudHJ5SXRlbXMoZXZlbnQsIGVsZW1lbnQsIHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSk7XG4gIH1cblxuICBkcm9wRHJhZ0VudHJ5SXRlbShldmVudCwgZWxlbWVudCwgZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbSk7XG5cbiAgICBpZiAoKHNvdXJjZUVudHJ5UGF0aCA9PT0gdGFyZ2V0RW50cnlQYXRoKSAmJiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID09PSB0aGlzKSkge1xuICAgICAgdGhpcy5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICB0aGlzLm1vdmVEcmFnRW50cnlJdGVtcyhldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKTtcbiAgfVxuXG4gIHJlbmFtZURyYWdFbnRyeUl0ZW1zKGV2ZW50LCBlbGVtZW50LCBwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBSRU5BTUVfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0FzeW5jKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHBhdGhNYXBzLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmVEcmFnRW50cnlJdGVtcyhldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gTU9WRV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQXN5bmMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRHJhZ0VudHJ5SXRlbXMoZXZlbnQsIGVsZW1lbnQsIHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFJFTU9WRV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQXN5bmMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRHJhZ0VudHJ5SXRlbXMoZXZlbnQsIGVsZW1lbnQsIHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IENSRUFURV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQXN5bmMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldERpc2FibGVkKGRpc2FibGVkKTtcblxuICAgIHRoaXMuZW5hYmxlRHJhZygpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRydWU7XG5cbiAgICB0aGlzLnNldERpc2FibGVkKGRpc2FibGVkKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcbiAgfVxuXG4gIGVuYWJsZURyYWcoKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKTtcblxuICAgIGRyYWdFbnRyeUl0ZW1zLmZvckVhY2goKGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRyYWdFbnRyeUl0ZW0uZW5hYmxlRHJhZygpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzYWJsZURyYWcoKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKTtcblxuICAgIGRyYWdFbnRyeUl0ZW1zLmZvckVhY2goKGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRyYWdFbnRyeUl0ZW0uZGlzYWJsZURyYWcoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFySW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH1cblxuICBjbGVhckNsaWNrZWREcmFnRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IGNsaWNrZWREcmFnRW50cnlJdGVtID0gbnVsbDtcblxuICAgIHRoaXMuc2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0oY2xpY2tlZERyYWdFbnRyeUl0ZW0pO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICBpc0VkaXRhYmxlKCkge1xuICAgIGNvbnN0IGVkaXRhYmxlRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVFZGl0YWJsZURyYWdFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBlZGl0YWJsZSA9IChlZGl0YWJsZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGVkaXRhYmxlO1xuICB9XG5cbiAgZ2V0SW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgeyBpbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGludGVydmFsO1xuICB9XG5cbiAgaXNTaW5nbGVDbGljaygpIHtcbiAgICBjb25zdCB7IHNpbmdsZUNsaWNrIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc2luZ2xlQ2xpY2s7XG4gIH1cblxuICBnZXRDbGlja2VkRHJhZ0VudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IGNsaWNrZWREcmFnRW50cnlJdGVtIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gY2xpY2tlZERyYWdFbnRyeUl0ZW07XG4gIH1cblxuICBzZXREaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgZGlzYWJsZWRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEludGVydmFsKGludGVydmFsKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBpbnRlcnZhbFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U2luZ2xlQ2xpY2soc2luZ2xlQ2xpY2spIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHNpbmdsZUNsaWNrXG4gICAgfSk7XG4gIH1cblxuICBzZXRDbGlja2VkRHJhZ0VudHJ5SXRlbShjbGlja2VkRHJhZ0VudHJ5SXRlbSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgY2xpY2tlZERyYWdFbnRyeUl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIGNhbmNlbEVkaXRhYmxlRHJhZ0VudHJ5SXRlbSgpIHtcbiAgICBjb25zdCBlZGl0YWJsZURyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlRWRpdGFibGVEcmFnRW50cnlJdGVtKCksXG4gICAgICAgICAgY3JlYXRlZCA9IGVkaXRhYmxlRHJhZ0VudHJ5SXRlbS5pc0NyZWF0ZWQoKTtcblxuICAgIGVkaXRhYmxlRHJhZ0VudHJ5SXRlbS5jYW5jZWwoY3JlYXRlZCk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSBmYWxzZSxcbiAgICAgICAgICBpbnRlcnZhbCA9IG51bGwsXG4gICAgICAgICAgc2luZ2xlQ2xpY2sgPSBmYWxzZSxcbiAgICAgICAgICBjbGlja2VkRHJhZ0VudHJ5SXRlbSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaW50ZXJ2YWwsXG4gICAgICBzaW5nbGVDbGljayxcbiAgICAgIGNsaWNrZWREcmFnRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHNpbmdsZUNsaWNrID0gZmFsc2UgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHRoaXMuc2V0U2luZ2xlQ2xpY2soc2luZ2xlQ2xpY2spO1xuXG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ092ZXIodGhpcy5kcmFnT3ZlckN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbURyb3AodGhpcy5kcm9wQ3VzdG9tSGFuZGxlcik7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9mZkN1c3RvbURyYWdPdmVyKHRoaXMuZHJhZ092ZXJDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRHJvcCh0aGlzLmRyb3BDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gIFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgXHRyZXR1cm4gKFxuXG4gIFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSB0b3Btb3N0IC8+XG5cblx0XHQpO1xuXHR9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29sbGFwc2UgPSB0aGlzLmNvbGxhcHNlLmJpbmQodGhpcyksXG4gICAgICAgICAgZ2V0U2VsZWN0ZWRQYXRoID0gdGhpcy5nZXRTZWxlY3RlZFBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZUZpbGVQYXRocyA9IHRoaXMucmV0cmlldmVGaWxlUGF0aHMuYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeVBhdGhzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICBjb2xsYXBzZSxcbiAgICAgIGdldFNlbGVjdGVkUGF0aCxcbiAgICAgIHJldHJpZXZlRmlsZVBhdGhzLFxuICAgICAgcmV0cmlldmVEaXJlY3RvcnlQYXRoc1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgXHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG5cdH1cblxuXHRzdGF0aWMgRW50cmllc0xpc3QgPSBFbnRyaWVzTGlzdDtcblxuICBzdGF0aWMgRmlsZU5hbWVEcmFnRW50cnlJdGVtID0gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwicmVmZXJlbmNlXCIsXG4gICAgXCJyZWZlcmVuY2VzXCIsXG4gICAgXCJzaW5nbGVDbGlja1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJleHBsb3JlclwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBleHBsb3Jlck1peGlucyk7XG5PYmplY3QuYXNzaWduKEV4cGxvcmVyLnByb3RvdHlwZSwgZHJhZ0VudHJ5SXRlbU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFeHBsb3JlcilgXG4gIFxuICBwYWRkaW5nOiAke2V4cGxvcmVyUGFkZGluZ307IFxuICBcbmA7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImNvbmNhdGVuYXRlUGF0aHMiLCJwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgiLCJwYXRoVXRpbGl0aWVzIiwiRXhwbG9yZXIiLCJFbGVtZW50IiwiZHJhZ092ZXJDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZHJhZ0VsZW1lbnQiLCJkcmFnRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiZ2V0UGF0aCIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwicmVtb3ZlTWFya2VyIiwiYWRkTWFya2VyIiwiZHJvcEN1c3RvbUhhbmRsZXIiLCJhYm9ydGVkIiwiZG9uZSIsImRyb3BEcmFnRW50cnlJdGVtIiwiZXhwbG9yZXIiLCJnZXRSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJwcm9wZXJ0aWVzIiwiZ2V0UmVmZXJlbmNlcyIsInJlZmVyZW5jZXMiLCJnZXRFbnRyaWVzTGlzdCIsIkVudHJpZXNMaXN0IiwiZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtIiwicmVhZE9ubHkiLCJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJ0b3Btb3N0IiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlUGF0aHMiLCJ0eXBlIiwiZHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURyYWdFbnRyeUl0ZW1zIiwicGF0aHMiLCJyZWR1Y2UiLCJkcmFnRW50cnlJdGVtUGF0aCIsInBhdGgiLCJwdXNoIiwicmV0cmlldmVGaWxlUGF0aHMiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZmlsZVBhdGhzIiwicmV0cmlldmVEaXJlY3RvcnlQYXRocyIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImRpcmVjdG9yeVBhdGhzIiwiY29sbGFwc2UiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyIsImZvckVhY2giLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImNyZWF0ZVBhdGgiLCJuYW1lIiwiUEVSSU9EIiwic2VsZWN0ZWREcmFnRW50cnlJdGVtIiwicmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW1EaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJleHBhbmQiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsImNyZWF0ZUZpbGVQYXRoIiwiZmlsZVBhdGgiLCJhZGRGaWxlUGF0aCIsImNyZWF0ZSIsImNyZWF0ZURpcmVjdG9yeVBhdGgiLCJjb2xsYXBzZWQiLCJkaXJlY3RvcnlQYXRoIiwiYWRkRGlyZWN0b3J5UGF0aCIsInJlbmFtZVNlbGVjdGVkUGF0aCIsInJlbmFtZSIsImdldFNlbGVjdGVkUGF0aCIsInNlbGVjdGVkUGF0aCIsInNlbGVjdGVkRHJhZ0VudHJ5SXRlbVBhdGgiLCJjbGlja0RyYWdFbnRyeUl0ZW0iLCJzaW5nbGVDbGljayIsImlzU2luZ2xlQ2xpY2siLCJzZWxlY3RlZCIsImNsaWNrIiwiY2xpY2tlZERyYWdFbnRyeUl0ZW0iLCJnZXRDbGlja2VkRHJhZ0VudHJ5SXRlbSIsImludGVydmFsIiwiZ2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xlYXJDbGlja2VkRHJhZ0VudHJ5SXRlbSIsImRlbGF5IiwiRE9VQkxFX0NMSUNLX0RFTEFZIiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwic2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0iLCJkb3VibGVDbGljayIsIm9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJjdXN0b21FdmVudFR5cGUiLCJPUEVOX0NVU1RPTV9FVkVOVF9UWVBFIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwic2VsZWN0T3JEZXNlbGVjdERyYWdFbnRyeUl0ZW0iLCJpc1NlbGVjdGVkIiwiZGVzZWxlY3QiLCJkZXNlbGVjdEFsbFBhdGhzIiwic2VsZWN0UGF0aCIsImlzUmVhZE9ubHkiLCJTRUxFQ1RfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwic291cmNlRW50cnlQYXRoIiwic291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbSIsInRhcmdldEVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0iLCJwYXRoTWFwcyIsImdldFBhdGhNYXBzIiwiY3JlYXRlRHJhZ0VudHJ5SXRlbXMiLCJyZW5hbWVEcmFnRW50cnlJdGVtIiwiZmlyc3RQYXRoTWFwIiwicGF0aE1hcCIsInJlbmFtZURyYWdFbnRyeUl0ZW1zIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVyIiwibW92ZURyYWdFbnRyeUl0ZW1zIiwiUkVOQU1FX0NVU1RPTV9FVkVOVF9UWVBFIiwiY2FsbEN1c3RvbUhhbmRsZXJzQXN5bmMiLCJyZW1vdmVEcmFnRW50cnlJdGVtIiwiYWRkRHJhZ0VudHJ5SXRlbSIsIk1PVkVfQ1VTVE9NX0VWRU5UX1RZUEUiLCJyZW1vdmVEcmFnRW50cnlJdGVtcyIsIlJFTU9WRV9DVVNUT01fRVZFTlRfVFlQRSIsIkNSRUFURV9DVVNUT01fRVZFTlRfVFlQRSIsImVuYWJsZSIsInNldERpc2FibGVkIiwiZW5hYmxlRHJhZyIsImRpc2FibGUiLCJkaXNhYmxlRHJhZyIsImdldFN0YXRlIiwiaXNFZGl0YWJsZSIsImVkaXRhYmxlRHJhZ0VudHJ5SXRlbSIsInJldHJpZXZlRWRpdGFibGVEcmFnRW50cnlJdGVtIiwiZWRpdGFibGUiLCJ1cGRhdGVTdGF0ZSIsInNldFNpbmdsZUNsaWNrIiwiY2FuY2VsRWRpdGFibGVEcmFnRW50cnlJdGVtIiwiY3JlYXRlZCIsImlzQ3JlYXRlZCIsImNhbmNlbCIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25DdXN0b21EcmFnT3ZlciIsIm9uQ3VzdG9tRHJvcCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZDdXN0b21EcmFnT3ZlciIsIm9mZkN1c3RvbURyb3AiLCJjaGlsZEVsZW1lbnRzIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJkcm9wTWl4aW5zIiwiZXhwbG9yZXJNaXhpbnMiLCJkcmFnRW50cnlJdGVtTWl4aW5zIiwid2l0aFN0eWxlIiwiZXhwbG9yZXJQYWRkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzb0JBOzs7ZUFBQTs7O3NFQXBvQnNCO3NCQUVFO2lDQUNHOzJCQUNtQjtnRUFFdEI7aUVBQ0c7c0VBQ0s7aUVBQ0U7a0VBQ0U7c0VBQ0c7dUVBQ0U7d0JB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