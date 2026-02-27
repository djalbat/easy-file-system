"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectoryNameDragEntryItem;
    }
});
const _easydraganddrop = require("easy-drag-and-drop");
const _necessary = require("necessary");
const _toggle = /*#__PURE__*/ _interop_require_default(require("../../../button/toggle"));
const _drag = /*#__PURE__*/ _interop_require_default(require("../../../item/entry/drag"));
const _directoryName = /*#__PURE__*/ _interop_require_default(require("../../../svg/directoryName"));
const _directoryName1 = /*#__PURE__*/ _interop_require_default(require("../../../div/item/entry/drag/directoryName"));
const _pathMap = require("../../../utilities/pathMap");
const _entryTypes = require("../../../entryTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { concatenatePaths } = _necessary.pathUtilities;
class DirectoryNameDragEntryItem extends _drag.default {
    dragOverCustomHandler = (event, element, dragElement)=>{
        const collapsed = this.isCollapsed();
        if (collapsed) {
            return;
        }
        const path = this.getPath(), explorer = this.getExplorer(), dragEntryItem = dragElement, markerEntryItem = this.retrieveMarkerEntryItem(), dragEntryItemName = dragEntryItem.getName();
        let markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer(), previousMarkerEntryItemPath = markerEntryItemPath, previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///
        markerEntryItemPath = concatenatePaths(path, dragEntryItemName);
        markerEntryItemExplorer = explorer; ///
        if (markerEntryItemExplorer !== previousMarkerEntryItemExplorer || markerEntryItemPath !== previousMarkerEntryItemPath) {
            const dragEntryItemType = dragEntryItem.getType();
            previousMarkerEntryItemExplorer.removeMarker();
            markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
        }
    };
    dropCustomHandler = (event, element, dragElement, aborted, done)=>{
        const dragEntryItem = dragElement, markerEntryItem = this.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
        if (aborted) {
            markerEntryItemExplorer.removeMarker();
            done();
            return;
        }
        markerEntryItemExplorer.dropDragEntryItem(event, element, dragEntryItem, done);
    };
    doubleClick(event, element) {
        let collapsed = this.isCollapsed();
        collapsed = !collapsed;
        collapsed ? this.collapse() : this.expand();
    }
    singleClick(event, element) {
        this.expand();
    }
    isBefore(entryItem) {
        let before;
        const entryItemType = entryItem.getType();
        switch(entryItemType){
            case _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE:
            case _entryTypes.FILE_NAME_MARKER_ENTRY_TYPE:
            case _entryTypes.DIRECTORY_NAME_MARKER_ENTRY_TYPE:
                before = true;
                break;
            case _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE:
                const name = this.getName(), entryItemName = entryItem.getName();
                before = name.localeCompare(entryItemName) < 0;
                break;
        }
        return before;
    }
    isTopmost() {
        const { topmost } = this.properties;
        return topmost;
    }
    isCollapsed() {
        const entriesListCollapsed = this.isEntriesListCollapsed(), collapsed = entriesListCollapsed; ///
        return collapsed;
    }
    getReference() {
        const explorer = this.getExplorer(), reference = explorer.getReference();
        return reference;
    }
    getReferences() {
        const explorer = this.getExplorer(), references = explorer.getReferences();
        return references;
    }
    retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps) {
        const name = this.getName(), pathMap = this.getPathMap(sourceEntryPath, targetEntryPath), nameSpanName = this.getNameSpanName();
        pathMaps.push(pathMap);
        sourceEntryPath = (0, _pathMap.adjustSourceEntryPath)(sourceEntryPath, name);
        targetEntryPath = (0, _pathMap.adjustTargetEntryPath)(targetEntryPath, nameSpanName);
        this.forEachDragEntryItem((dragEntryItem)=>{
            dragEntryItem.retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps);
        });
    }
    removeFromExplorer() {
        const path = this.getPath(), explorer = this.getExplorer(), directoryPath = path; ///
        explorer.removeDirectoryPath(directoryPath);
    }
    collapse() {
        this.collapseEntriesList();
        this.collapseToggleButton();
    }
    expand() {
        this.expandEntriesList();
        this.expandToggleButton();
    }
    didMount() {
        const { collapsed } = this.properties;
        collapsed ? this.collapse() : this.expand();
        this.enableDrop();
        this.onCustomDrop(this.dropCustomHandler);
        this.onCustomDragOver(this.dragOverCustomHandler);
        super.didMount();
    }
    willUnmount() {
        this.disableDrop();
        this.offCustomDrop(this.dropCustomHandler);
        this.offCustomDragOver(this.dragOverCustomHandler);
        super.willUnmount();
    }
    childElements() {
        const { name } = this.properties, { NameSpan, ToggleButton, DirectoryNameSVG } = this.constructor, explorer = this.getExplorer(), EntriesList = explorer.getEntriesList();
        return [
            /*#__PURE__*/ React.createElement(_directoryName1.default, {
                name: name,
                explorer: explorer,
                NameSpan: NameSpan,
                ToggleButton: ToggleButton,
                DirectoryNameSVG: DirectoryNameSVG
            }),
            /*#__PURE__*/ React.createElement(EntriesList, {
                explorer: explorer
            })
        ];
    }
    static type = _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE;
    static ToggleButton = _toggle.default;
    static DirectoryNameSVG = _directoryName.default;
    static ignoredProperties = [
        "topmost"
    ];
    static defaultProperties = {
        className: "directory-name"
    };
}
Object.assign(DirectoryNameDragEntryItem.prototype, _easydraganddrop.dropMixins);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi90b2dnbGVcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgYWRqdXN0U291cmNlRW50cnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIEZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9lbnRyeVR5cGVzXCI7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBEcmFnRW50cnlJdGVtIHtcblx0ZHJhZ092ZXJDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBkcmFnRWxlbWVudCkgPT4ge1xuXHRcdGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcblxuXHRcdGlmIChjb2xsYXBzZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG5cdFx0XHRcdFx0bWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1OYW1lID0gZHJhZ0VudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG5cdFx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGgsIC8vL1xuXHRcdFx0XHRwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG5cdFx0bWFya2VyRW50cnlJdGVtUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgZHJhZ0VudHJ5SXRlbU5hbWUpO1xuXG5cdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBleHBsb3JlcjsgIC8vL1xuXG5cdFx0aWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcblx0XHRcdGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRcdHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cblx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG5cdFx0fVxuXHR9XG5cblx0ZHJvcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGRyYWdFbGVtZW50LCBhYm9ydGVkLCBkb25lKSA9PiB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50LCBkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG5cdGRvdWJsZUNsaWNrKGV2ZW50LCBlbGVtZW50KSB7XG5cdFx0bGV0IGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcblxuXHRcdGNvbGxhcHNlZCA9ICFjb2xsYXBzZWQ7XG5cblx0XHRjb2xsYXBzZWQgP1xuXHRcdFx0dGhpcy5jb2xsYXBzZSgpIDpcblx0XHRcdFx0dGhpcy5leHBhbmQoKTtcblx0fVxuXG5cdHNpbmdsZUNsaWNrKGV2ZW50LCBlbGVtZW50KSB7XG5cdFx0dGhpcy5leHBhbmQoKTtcblx0fVxuXG5cdGlzQmVmb3JlKGVudHJ5SXRlbSkge1xuXHRcdGxldCBiZWZvcmU7XG5cblx0XHRjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKTtcblxuXHRcdHN3aXRjaCAoZW50cnlJdGVtVHlwZSkge1xuXHRcdFx0Y2FzZSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFOlxuXHRcdFx0Y2FzZSBGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEU6XG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFOlxuXHRcdFx0XHRiZWZvcmUgPSB0cnVlO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdFx0XHRlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdFx0XHRiZWZvcmUgPSAobmFtZS5sb2NhbGVDb21wYXJlKGVudHJ5SXRlbU5hbWUpIDwgMCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJlZm9yZTtcblx0fVxuXG5cdGlzVG9wbW9zdCgpIHtcblx0XHRjb25zdCB7IHRvcG1vc3QgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdHJldHVybiB0b3Btb3N0O1xuXHR9XG5cblx0aXNDb2xsYXBzZWQoKSB7XG5cdFx0Y29uc3QgZW50cmllc0xpc3RDb2xsYXBzZWQgPSB0aGlzLmlzRW50cmllc0xpc3RDb2xsYXBzZWQoKSxcblx0XHRcdFx0XHRjb2xsYXBzZWQgPSBlbnRyaWVzTGlzdENvbGxhcHNlZDtcdC8vL1xuXG5cdFx0cmV0dXJuIGNvbGxhcHNlZDtcblx0fVxuXG5cdGdldFJlZmVyZW5jZSgpIHtcblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRyZWZlcmVuY2UgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2UoKTtcblxuXHRcdHJldHVybiByZWZlcmVuY2U7XG5cdH1cblxuXHRnZXRSZWZlcmVuY2VzKCkge1xuXHRcdGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdHJlZmVyZW5jZXMgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2VzKCk7XG5cblx0XHRyZXR1cm4gcmVmZXJlbmNlcztcblx0fVxuXG5cdHJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdHBhdGhNYXAgPSB0aGlzLmdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIG5hbWVTcGFuTmFtZSA9IHRoaXMuZ2V0TmFtZVNwYW5OYW1lKCk7XG5cblx0XHRwYXRoTWFwcy5wdXNoKHBhdGhNYXApO1xuXG5cdFx0c291cmNlRW50cnlQYXRoID0gYWRqdXN0U291cmNlRW50cnlQYXRoKHNvdXJjZUVudHJ5UGF0aCwgbmFtZSk7XG5cblx0XHR0YXJnZXRFbnRyeVBhdGggPSBhZGp1c3RUYXJnZXRFbnRyeVBhdGgodGFyZ2V0RW50cnlQYXRoLCBuYW1lU3Bhbk5hbWUpO1xuXG5cdFx0dGhpcy5mb3JFYWNoRHJhZ0VudHJ5SXRlbSgoZHJhZ0VudHJ5SXRlbSkgPT4ge1xuXHRcdFx0ZHJhZ0VudHJ5SXRlbS5yZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcyk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZW1vdmVGcm9tRXhwbG9yZXIoKSB7XG5cdFx0Y29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeVBhdGggPSBwYXRoO1x0Ly8vXG5cblx0XHRleHBsb3Jlci5yZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpO1xuXHR9XG5cblx0Y29sbGFwc2UoKSB7XG4gICAgdGhpcy5jb2xsYXBzZUVudHJpZXNMaXN0KCk7XG5cdFx0dGhpcy5jb2xsYXBzZVRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgZXhwYW5kKCkge1xuICAgIHRoaXMuZXhwYW5kRW50cmllc0xpc3QoKTtcblx0XHR0aGlzLmV4cGFuZFRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cblx0ZGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgeyBjb2xsYXBzZWQgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdGNvbGxhcHNlZCA/XG5cdFx0XHR0aGlzLmNvbGxhcHNlKCkgOlxuXHRcdFx0XHR0aGlzLmV4cGFuZCgpO1xuXG5cdFx0dGhpcy5lbmFibGVEcm9wKCk7XG5cblx0XHR0aGlzLm9uQ3VzdG9tRHJvcCh0aGlzLmRyb3BDdXN0b21IYW5kbGVyKTtcblxuXHRcdHRoaXMub25DdXN0b21EcmFnT3Zlcih0aGlzLmRyYWdPdmVyQ3VzdG9tSGFuZGxlcik7XG5cblx0XHRzdXBlci5kaWRNb3VudCgpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5kaXNhYmxlRHJvcCgpO1xuXG5cdFx0dGhpcy5vZmZDdXN0b21Ecm9wKHRoaXMuZHJvcEN1c3RvbUhhbmRsZXIpO1xuXG5cdFx0dGhpcy5vZmZDdXN0b21EcmFnT3Zlcih0aGlzLmRyYWdPdmVyQ3VzdG9tSGFuZGxlcik7XG5cblx0XHRzdXBlci53aWxsVW5tb3VudCgpO1xuXHR9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcblx0XHRjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB7IE5hbWVTcGFuLCBUb2dnbGVCdXR0b24sIERpcmVjdG9yeU5hbWVTVkcgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgRW50cmllc0xpc3QgPSBleHBsb3Jlci5nZXRFbnRyaWVzTGlzdCgpO1xuXG5cdFx0cmV0dXJuIChbXG5cblx0XHRcdDxEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbURpdiBuYW1lPXtuYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGV4cGxvcmVyPXtleHBsb3Jlcn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBOYW1lU3Bhbj17TmFtZVNwYW59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgVG9nZ2xlQnV0dG9uPXtUb2dnbGVCdXR0b259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgRGlyZWN0b3J5TmFtZVNWRz17RGlyZWN0b3J5TmFtZVNWR31cblx0XHRcdC8+LFxuXHRcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuXHRcdF0pO1xuXHR9XG5cbiAgc3RhdGljIHR5cGUgPSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEU7XG5cbiAgc3RhdGljIFRvZ2dsZUJ1dHRvbiA9IFRvZ2dsZUJ1dHRvbjtcblxuXHRzdGF0aWMgRGlyZWN0b3J5TmFtZVNWRyA9IERpcmVjdG9yeU5hbWVTVkc7XG5cblx0c3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuXHRcdFwidG9wbW9zdFwiXG5cdF07XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkaXJlY3RvcnktbmFtZVwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcbiJdLCJuYW1lcyI6WyJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImNvbmNhdGVuYXRlUGF0aHMiLCJwYXRoVXRpbGl0aWVzIiwiRHJhZ0VudHJ5SXRlbSIsImRyYWdPdmVyQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImRyYWdFbGVtZW50IiwiY29sbGFwc2VkIiwiaXNDb2xsYXBzZWQiLCJwYXRoIiwiZ2V0UGF0aCIsImV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwicmVtb3ZlTWFya2VyIiwiYWRkTWFya2VyIiwiZHJvcEN1c3RvbUhhbmRsZXIiLCJhYm9ydGVkIiwiZG9uZSIsImRyb3BEcmFnRW50cnlJdGVtIiwiZG91YmxlQ2xpY2siLCJjb2xsYXBzZSIsImV4cGFuZCIsInNpbmdsZUNsaWNrIiwiaXNCZWZvcmUiLCJlbnRyeUl0ZW0iLCJiZWZvcmUiLCJlbnRyeUl0ZW1UeXBlIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIkZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSIsIkRJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwibmFtZSIsImVudHJ5SXRlbU5hbWUiLCJsb2NhbGVDb21wYXJlIiwiaXNUb3Btb3N0IiwidG9wbW9zdCIsInByb3BlcnRpZXMiLCJlbnRyaWVzTGlzdENvbGxhcHNlZCIsImlzRW50cmllc0xpc3RDb2xsYXBzZWQiLCJnZXRSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2VzIiwicmVmZXJlbmNlcyIsInJldHJpZXZlUGF0aE1hcHMiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwcyIsInBhdGhNYXAiLCJnZXRQYXRoTWFwIiwibmFtZVNwYW5OYW1lIiwiZ2V0TmFtZVNwYW5OYW1lIiwicHVzaCIsImFkanVzdFNvdXJjZUVudHJ5UGF0aCIsImFkanVzdFRhcmdldEVudHJ5UGF0aCIsImZvckVhY2hEcmFnRW50cnlJdGVtIiwicmVtb3ZlRnJvbUV4cGxvcmVyIiwiZGlyZWN0b3J5UGF0aCIsInJlbW92ZURpcmVjdG9yeVBhdGgiLCJjb2xsYXBzZUVudHJpZXNMaXN0IiwiY29sbGFwc2VUb2dnbGVCdXR0b24iLCJleHBhbmRFbnRyaWVzTGlzdCIsImV4cGFuZFRvZ2dsZUJ1dHRvbiIsImRpZE1vdW50IiwiZW5hYmxlRHJvcCIsIm9uQ3VzdG9tRHJvcCIsIm9uQ3VzdG9tRHJhZ092ZXIiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmQ3VzdG9tRHJvcCIsIm9mZkN1c3RvbURyYWdPdmVyIiwiY2hpbGRFbGVtZW50cyIsIk5hbWVTcGFuIiwiVG9nZ2xlQnV0dG9uIiwiRGlyZWN0b3J5TmFtZVNWRyIsIkVudHJpZXNMaXN0IiwiZ2V0RW50cmllc0xpc3QiLCJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbURpdiIsInR5cGUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUFxQkE7OztpQ0FiTTsyQkFDRzsrREFFTDs2REFDQztzRUFDRzt1RUFDYTt5QkFFbUI7NEJBQzRFOzs7Ozs7QUFFekksTUFBTSxFQUFFQyxnQkFBZ0IsRUFBRSxHQUFHQyx3QkFBYTtBQUUzQixNQUFNRixtQ0FBbUNHLGFBQWE7SUFDcEVDLHdCQUF3QixDQUFDQyxPQUFPQyxTQUFTQztRQUN4QyxNQUFNQyxZQUFZLElBQUksQ0FBQ0MsV0FBVztRQUVsQyxJQUFJRCxXQUFXO1lBQ2Q7UUFDRDtRQUVBLE1BQU1FLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ3RCQyxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsZ0JBQWdCUCxhQUNoQlEsa0JBQWtC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