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
const _rubbishBin = /*#__PURE__*/ _interop_require_default(require("./mixins/rubbishBin"));
const _open = /*#__PURE__*/ _interop_require_default(require("./svg/rubbishBin/open"));
const _closed = /*#__PURE__*/ _interop_require_default(require("./svg/rubbishBin/closed"));
const _dragEntryItem = /*#__PURE__*/ _interop_require_default(require("./mixins/dragEntryItem"));
const _fileName = /*#__PURE__*/ _interop_require_default(require("./item/entry/marker/fileName"));
const _directoryName = /*#__PURE__*/ _interop_require_default(require("./item/entry/marker/directoryName"));
const _customEventTypes = require("./customEventTypes");
const _pathMap = require("./utilities/pathMap");
const _entryTypes = require("./entryTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class RubbishBin extends _easy.Element {
    dragOverCustomHandler = (event, element, dragElement)=>{
        const dragEntryItem = dragElement, markerEntryItem = this.retrieveMarkerEntryItem();
        let markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer(), previousMarkerEntryItemPath = markerEntryItemPath, previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///
        markerEntryItemPath = null; ///
        markerEntryItemExplorer = this; ///
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
    getReference() {
        const { reference = null } = this.properties;
        return reference;
    }
    getReferences() {
        const { references = [] } = this.properties;
        return references;
    }
    retrieveMarkerEntryItem() {
        const markerEntryItem = getMarkerEntryItem();
        return markerEntryItem;
    }
    addMarker(markerEntryItemPath, dragEntryItemType) {
        const markerEntryItemName = markerEntryItemPath; ///
        this.addMarkerEntryItem(markerEntryItemName, dragEntryItemType);
        this.open();
    }
    removeMarker() {
        this.removeMarkerEntryItem();
        this.close();
    }
    addMarkerEntryItem(markerEntryItemName, dragEntryItemType) {
        let markerEntryItem;
        const name = markerEntryItemName, type = dragEntryItemType; ///
        switch(type){
            case _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE:
                {
                    const explorer = this, fileNameMarkerEntryItem = /*#__PURE__*/ React.createElement(_fileName.default, {
                        name: name,
                        explorer: explorer
                    });
                    markerEntryItem = fileNameMarkerEntryItem; ///
                    break;
                }
            case _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE:
                {
                    const explorer = this, directoryNameMarkerEntryItem = /*#__PURE__*/ React.createElement(_directoryName.default, {
                        name: name,
                        explorer: explorer
                    });
                    markerEntryItem = directoryNameMarkerEntryItem; ///
                    break;
                }
        }
        setMarkerEntryItem(markerEntryItem);
    }
    removeMarkerEntryItem() {
        resetMarkerEntryItem();
        resetDropElement();
    }
    dropDragEntryItem(event, element, dragEntryItem, done) {
        const dragEntryItemExplorer = dragEntryItem.getExplorer(), sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem), targetEntryPath = null, pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = dragEntryItemExplorer; ///
        this.removeDragEntryItems(event, element, pathMaps, explorer, done);
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
            this.removeMarker();
            done();
        });
    }
    open() {
        this.showOpenRubbishBinSVG();
        this.hideClosedRubbishBinSVG();
    }
    close() {
        this.hideOpenRubbishBinSVG();
        this.showClosedRubbishBinSVG();
    }
    didMount() {
        this.enableDrop();
        this.onCustomDrop(this.dropCustomHandler);
        this.onCustomDragOver(this.dragOverCustomHandler);
        this.close();
    }
    willUnmount() {
        this.disableDrop();
        this.offCustomDrop(this.dropCustomHandler);
        this.offCustomDragOver(this.dragOverCustomHandler);
    }
    addFilePath(filePath, readOnly = false) {
    ///
    }
    removeFilePath(filePath, removeEmptyParentDirectories = false) {
    ///
    }
    removeAllPaths() {
    ///
    }
    addDirectoryPath(directoryPath, readOnly = false, collapsed = true) {
    ///
    }
    removeDirectoryPath(directoryPath, removeEmptyParentDirectories = false) {
    ///
    }
    getMarkerEntryItemPath() {
        const { markerEntryItemPath } = this.getState();
        return markerEntryItemPath;
    }
    getMarkerEntryItemExplorer() {
        const { markerEntryItemExplorer } = this.getState();
        return markerEntryItemExplorer;
    }
    setMarkerEntryItemPath(markerEntryItemPath) {
        this.updateState({
            markerEntryItemPath
        });
    }
    setMarkerEntryItemExplorer(markerEntryItemExplorer) {
        this.updateState({
            markerEntryItemExplorer
        });
    }
    setInitialState() {
        const markerEntryItemPath = null, markerEntryItemExplorer = null;
        this.setState({
            markerEntryItemPath,
            markerEntryItemExplorer
        });
    }
    childElements() {
        const { OpenRubbishBinSVG, ClosedRubbishBinSVG } = this.constructor;
        return [
            /*#__PURE__*/ React.createElement(OpenRubbishBinSVG, null),
            /*#__PURE__*/ React.createElement(ClosedRubbishBinSVG, null)
        ];
    }
    initialise() {
        this.assignContext();
        this.setInitialState();
    }
    static OpenRubbishBinSVG = _open.default;
    static ClosedRubbishBinSVG = _closed.default;
    static tagName = "div";
    static ignoredProperties = [
        "reference",
        "references"
    ];
    static defaultProperties = {
        className: "rubbish-bin"
    };
}
Object.assign(RubbishBin.prototype, _easydraganddrop.dropMixins);
Object.assign(RubbishBin.prototype, _rubbishBin.default);
Object.assign(RubbishBin.prototype, _dragEntryItem.default);
const _default = (0, _easywithstyle.default)(RubbishBin)`
  
  display: inline-block;
      
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWJiaXNoQmluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGRyb3BNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBydWJiaXNoQmluTWl4aW5zIGZyb20gXCIuL21peGlucy9ydWJiaXNoQmluXCI7XG5pbXBvcnQgT3BlblJ1YmJpc2hCaW5TVkcgZnJvbSBcIi4vc3ZnL3J1YmJpc2hCaW4vb3BlblwiO1xuaW1wb3J0IENsb3NlZFJ1YmJpc2hCaW5TVkcgZnJvbSBcIi4vc3ZnL3J1YmJpc2hCaW4vY2xvc2VkXCI7XG5pbXBvcnQgZHJhZ0VudHJ5SXRlbU1peGlucyBmcm9tIFwiLi9taXhpbnMvZHJhZ0VudHJ5SXRlbVwiO1xuaW1wb3J0IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9kaXJlY3RvcnlOYW1lXCI7XG5cbmltcG9ydCB7IFJFTU9WRV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuL2N1c3RvbUV2ZW50VHlwZXNcIjtcbmltcG9ydCB7IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0gfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuaW1wb3J0IHsgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLCBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4vZW50cnlUeXBlc1wiO1xuXG5jbGFzcyBSdWJiaXNoQmluIGV4dGVuZHMgRWxlbWVudCB7XG4gIGRyYWdPdmVyQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgZHJhZ0VsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICBsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IG51bGw7IC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBpZiAoKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB8fCAobWFya2VyRW50cnlJdGVtUGF0aCAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoKSkge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgICB9XG4gIH1cblxuICBkcm9wQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGRvbmUpID0+IHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZXZlbnQsIGVsZW1lbnQsIGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlID0gbnVsbCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2VzID0gW10gfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gZ2V0TWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtTmFtZSA9IG1hcmtlckVudHJ5SXRlbVBhdGg7ICAvLy9cblxuICAgIHRoaXMuYWRkTWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbU5hbWUsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcblxuICAgIHRoaXMub3BlbigpO1xuICB9XG5cbiAgcmVtb3ZlTWFya2VyKCkge1xuICAgIHRoaXMucmVtb3ZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBhZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtO1xuXG4gICAgY29uc3QgbmFtZSA9IG1hcmtlckVudHJ5SXRlbU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBkcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBmaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBmaWxlTmFtZU1hcmtlckVudHJ5SXRlbTsgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtKTtcbiAgfVxuXG4gIHJlbW92ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICByZXNldE1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgcmVzZXREcm9wRWxlbWVudCgpO1xuICB9XG5cbiAgZHJvcERyYWdFbnRyeUl0ZW0oZXZlbnQsIGVsZW1lbnQsIGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSBudWxsLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtRXhwbG9yZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbXMoZXZlbnQsIGVsZW1lbnQsIHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSk7XG4gIH1cblxuICByZW1vdmVEcmFnRW50cnlJdGVtcyhldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUkVNT1ZFX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnNBc3luYyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBwYXRoTWFwcywgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpXG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zaG93T3BlblJ1YmJpc2hCaW5TVkcoKTtcbiAgICB0aGlzLmhpZGVDbG9zZWRSdWJiaXNoQmluU1ZHKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmhpZGVPcGVuUnViYmlzaEJpblNWRygpO1xuICAgIHRoaXMuc2hvd0Nsb3NlZFJ1YmJpc2hCaW5TVkcoKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vbkN1c3RvbURyb3AodGhpcy5kcm9wQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ092ZXIodGhpcy5kcmFnT3ZlckN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21Ecm9wKHRoaXMuZHJvcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21EcmFnT3Zlcih0aGlzLmRyYWdPdmVyQ3VzdG9tSGFuZGxlcik7XG4gIH1cblxuICBhZGRGaWxlUGF0aChmaWxlUGF0aCwgcmVhZE9ubHkgPSBmYWxzZSkge1xuICAgIC8vL1xuICB9XG5cbiAgcmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgsIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMgPSBmYWxzZSkge1xuICAgIC8vL1xuICB9XG5cbiAgcmVtb3ZlQWxsUGF0aHMoKSB7XG4gICAgLy8vXG4gIH1cblxuICBhZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlYWRPbmx5ID0gZmFsc2UsIGNvbGxhcHNlZCA9IHRydWUpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3RvcmllcyA9IGZhbHNlKSB7XG4gICAgLy8vXG4gIH1cblxuICBnZXRNYXJrZXJFbnRyeUl0ZW1QYXRoKCkge1xuICAgIGNvbnN0IHsgbWFya2VyRW50cnlJdGVtUGF0aCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbVBhdGg7XG4gIH1cblxuICBnZXRNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcigpIHtcbiAgICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7XG4gIH1cblxuICBzZXRNYXJrZXJFbnRyeUl0ZW1QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGhcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlclxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBudWxsLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCxcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyXG4gICAgfSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgT3BlblJ1YmJpc2hCaW5TVkcsIENsb3NlZFJ1YmJpc2hCaW5TVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPE9wZW5SdWJiaXNoQmluU1ZHLz4sXG4gICAgICA8Q2xvc2VkUnViYmlzaEJpblNWRy8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIE9wZW5SdWJiaXNoQmluU1ZHID0gT3BlblJ1YmJpc2hCaW5TVkc7XG5cbiAgc3RhdGljIENsb3NlZFJ1YmJpc2hCaW5TVkcgPSBDbG9zZWRSdWJiaXNoQmluU1ZHO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJyZWZlcmVuY2VcIixcbiAgICBcInJlZmVyZW5jZXNcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicnViYmlzaC1iaW5cIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKFJ1YmJpc2hCaW4ucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUnViYmlzaEJpbi5wcm90b3R5cGUsIHJ1YmJpc2hCaW5NaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihSdWJiaXNoQmluLnByb3RvdHlwZSwgZHJhZ0VudHJ5SXRlbU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShSdWJiaXNoQmluKWBcbiAgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIFxuYDtcbiJdLCJuYW1lcyI6WyJSdWJiaXNoQmluIiwiRWxlbWVudCIsImRyYWdPdmVyQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImRyYWdFbGVtZW50IiwiZHJhZ0VudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImdldFBhdGgiLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImdldEV4cGxvcmVyIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsInJlbW92ZU1hcmtlciIsImFkZE1hcmtlciIsImRyb3BDdXN0b21IYW5kbGVyIiwiYWJvcnRlZCIsImRvbmUiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImdldFJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInByb3BlcnRpZXMiLCJnZXRSZWZlcmVuY2VzIiwicmVmZXJlbmNlcyIsImdldE1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbU5hbWUiLCJhZGRNYXJrZXJFbnRyeUl0ZW0iLCJvcGVuIiwicmVtb3ZlTWFya2VyRW50cnlJdGVtIiwiY2xvc2UiLCJuYW1lIiwidHlwZSIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJleHBsb3JlciIsImZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInNldE1hcmtlckVudHJ5SXRlbSIsInJlc2V0TWFya2VyRW50cnlJdGVtIiwicmVzZXREcm9wRWxlbWVudCIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsInNvdXJjZUVudHJ5UGF0aCIsInNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0iLCJ0YXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwcyIsImdldFBhdGhNYXBzIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJjdXN0b21FdmVudFR5cGUiLCJSRU1PVkVfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjYWxsQ3VzdG9tSGFuZGxlcnNBc3luYyIsImZvckVhY2giLCJwYXRoTWFwIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbSIsImFkZERyYWdFbnRyeUl0ZW0iLCJzaG93T3BlblJ1YmJpc2hCaW5TVkciLCJoaWRlQ2xvc2VkUnViYmlzaEJpblNWRyIsImhpZGVPcGVuUnViYmlzaEJpblNWRyIsInNob3dDbG9zZWRSdWJiaXNoQmluU1ZHIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25DdXN0b21Ecm9wIiwib25DdXN0b21EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZDdXN0b21Ecm9wIiwib2ZmQ3VzdG9tRHJhZ092ZXIiLCJhZGRGaWxlUGF0aCIsImZpbGVQYXRoIiwicmVhZE9ubHkiLCJyZW1vdmVGaWxlUGF0aCIsInJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMiLCJyZW1vdmVBbGxQYXRocyIsImFkZERpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlQYXRoIiwiY29sbGFwc2VkIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImdldE1hcmtlckVudHJ5SXRlbVBhdGgiLCJnZXRTdGF0ZSIsImdldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwic2V0TWFya2VyRW50cnlJdGVtUGF0aCIsInVwZGF0ZVN0YXRlIiwic2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImNoaWxkRWxlbWVudHMiLCJPcGVuUnViYmlzaEJpblNWRyIsIkNsb3NlZFJ1YmJpc2hCaW5TVkciLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyIsInJ1YmJp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