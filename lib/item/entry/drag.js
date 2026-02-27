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
const _easydraganddrop = require("easy-drag-and-drop");
const _name = /*#__PURE__*/ _interop_require_default(require("../../span/name"));
const _entry = /*#__PURE__*/ _interop_require_default(require("../../item/entry"));
const _constants = require("../../constants");
const _entryTypes = require("../../entryTypes");
const _pathMap = require("../../utilities/pathMap");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DragEntryItem extends _entry.default {
    nameSpanChangeCustomHandler = (event, element)=>{
        const created = this.isCreated(), explorer = this.getExplorer(), nameSpanName = this.getNameSpanName();
        explorer.enable();
        if (nameSpanName === _constants.PERIOD || nameSpanName === _constants.EMPTY_STRING) {
            this.cancel(created);
            return;
        }
        const dragEntryItem = this; ///
        if (created) {
            explorer.createDragEntryItem(event, element, dragEntryItem, ()=>{
            ///
            });
        } else {
            explorer.renameDragEntryItem(event, element, dragEntryItem, ()=>{
            ///
            });
        }
    };
    nameSpanCancelCustomHandler = (event, element)=>{
        const created = this.isCreated(), explorer = this.getExplorer();
        explorer.enable();
        this.cancel(created);
    };
    startDragCustomHandler = (event, element)=>{
        const path = this.getPath(), type = this.getType(), explorer = this.getExplorer(), dragEntryItemType = type, markerEntryItemPath = path; ///
        explorer.addMarker(markerEntryItemPath, dragEntryItemType);
    };
    stopDragCustomHandler = (event, element, dropElement, aborted, done)=>{
        if (dropElement !== null) {
            done();
            return;
        }
        const markerEntryItem = this.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
        if (aborted) {
            markerEntryItemExplorer.removeMarker();
            done();
            return;
        }
        const dragEntryItem = this; ///
        markerEntryItemExplorer.dropDragEntryItem(event, element, dragEntryItem, done);
    };
    click(event, element) {
        const explorer = this.getExplorer(), dragEntryItem = this, selected = explorer.selectOrDeselectDragEntryItem(event, element, dragEntryItem);
        return selected;
    }
    isReadOnly() {
        const { readOnly } = this.properties;
        return readOnly;
    }
    getReferences() {
        const explorer = this.getExplorer(), references = explorer.getReferences();
        return references;
    }
    getPathMap(sourceEntryPath, targetEntryPath) {
        const name = this.getName(), readOnly = this.isReadOnly(), collapsed = this.isCollapsed(), nameSpanName = this.getNameSpanName(), entryDirectory = this.isEntryDirectory();
        sourceEntryPath = (0, _pathMap.adjustSourceEntryPath)(sourceEntryPath, name); ///
        targetEntryPath = (0, _pathMap.adjustTargetEntryPath)(targetEntryPath, nameSpanName); ///
        const pathMap = {
            readOnly,
            collapsed,
            entryDirectory,
            sourceEntryPath,
            targetEntryPath
        };
        return pathMap;
    }
    getPathMaps(sourceEntryPath, targetEntryPath) {
        let pathMaps = [];
        this.retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps);
        pathMaps.reverse();
        return pathMaps;
    }
    isEntryDirectory() {
        const directoryNameDragEntryItem = this.isDirectoryNameDragEntryItem(), entryDirectory = directoryNameDragEntryItem; ///
        return entryDirectory;
    }
    retrieveMarkerEntryItem() {
        const markerEntryItem = getMarkerEntryItem();
        return markerEntryItem;
    }
    isDirectoryNameDragEntryItem() {
        const type = this.getType(), typeDirectoryNameDragEntryItemType = type === _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE, directoryNameDragEntryItem = typeDirectoryNameDragEntryItemType; ///
        return directoryNameDragEntryItem;
    }
    setCreated(created) {
        this.updateState({
            created
        });
    }
    isCreated() {
        const { created } = this.getState();
        return created;
    }
    isSelected() {
        const selected = this.hasClass("selected"); ///
        return selected;
    }
    deselect() {
        this.removeClass("selected");
    }
    select() {
        this.addClass("selected");
    }
    create() {
        const created = true, explorer = this.getExplorer(), nameSpanName = _constants.EMPTY_STRING; ///
        explorer.disable();
        this.setCreated(created);
        this.setNameSpanName(nameSpanName);
        this.editNameSpan();
    }
    rename() {
        const name = this.getName(), created = false, explorer = this.getExplorer(), nameSpanName = name; ///
        explorer.disable();
        this.setCreated(created);
        this.setNameSpanName(nameSpanName);
        this.editNameSpan();
    }
    reset() {
        const name = this.getName(), nameSpanName = name; ///
        this.setNameSpanName(nameSpanName);
        this.resetNameSpan();
    }
    cancel(created) {
        created ? this.removeFromExplorer() : this.reset();
    }
    didMount() {
        const explorer = this.getExplorer(), disabled = explorer.isDisabled();
        if (!disabled) {
            this.enableDrag();
        }
        this.onCustomStopDrag(this.stopDragCustomHandler);
        this.onCustomStartDrag(this.startDragCustomHandler);
        this.onCustomNameSpanChange(this.nameSpanChangeCustomHandler);
        this.onCustomNameSpanCancel(this.nameSpanCancelCustomHandler);
    }
    willUnmount() {
        const explorer = this.getExplorer(), disabled = explorer.isDisabled();
        if (!disabled) {
            this.disableDrag();
        }
        this.offCustomStopDrag(this.stopDragCustomHandler);
        this.offCustomStartDrag(this.startDragCustomHandler);
        this.offCustomNameSpanChange(this.nameSpanChangeCustomHandler);
        this.offCustomNameSpanCancel(this.nameSpanCancelCustomHandler);
    }
    parentContext() {
        const context = this.getContext(), select = this.select.bind(this), deselect = this.deselect.bind(this);
        return {
            ...context,
            select,
            deselect
        };
    }
    initialise() {
        this.assignContext();
    }
    static NameSpan = _name.default;
    static ignoredProperties = [
        "readOnly"
    ];
    static defaultProperties = {
        className: "drag"
    };
}
Object.assign(_entry.default.prototype, _easydraganddrop.dragMixins);
const _default = (0, _easywithstyle.default)(DragEntryItem)`

  user-select: none;
    
  font-weight: normal;
  
  .selected {
    font-weight: bold;
  }

  .dragging {
    z-index: 1;
    position: fixed;
    pointer-events: none;
  }
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBOYW1lU3BhbiBmcm9tIFwiLi4vLi4vc3Bhbi9uYW1lXCI7XG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5cbmltcG9ydCB7IFBFUklPRCwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4uLy4uL2VudHJ5VHlwZXNcIjtcbmltcG9ydCB7IGFkanVzdFNvdXJjZUVudHJ5UGF0aCwgYWRqdXN0VGFyZ2V0RW50cnlQYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNsYXNzIERyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBFbnRyeUl0ZW0ge1xuICBuYW1lU3BhbkNoYW5nZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSB0aGlzLmdldE5hbWVTcGFuTmFtZSgpO1xuXG4gICAgZXhwbG9yZXIuZW5hYmxlKCk7XG5cbiAgICBpZiAoKG5hbWVTcGFuTmFtZSA9PT0gUEVSSU9EKSB8fCAobmFtZVNwYW5OYW1lID09PSBFTVBUWV9TVFJJTkcpKSB7XG4gICAgICB0aGlzLmNhbmNlbChjcmVhdGVkKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSB0aGlzOyAvLy9cblxuICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICBleHBsb3Jlci5jcmVhdGVEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50LCBkcmFnRW50cnlJdGVtLCAoKSA9PiB7XG4gICAgICAgIC8vL1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cGxvcmVyLnJlbmFtZURyYWdFbnRyeUl0ZW0oZXZlbnQsIGVsZW1lbnQsIGRyYWdFbnRyeUl0ZW0sICgpID0+IHtcbiAgICAgICAgLy8vXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuYW1lU3BhbkNhbmNlbEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKTtcblxuICAgIGV4cGxvcmVyLmVuYWJsZSgpO1xuXG4gICAgdGhpcy5jYW5jZWwoY3JlYXRlZCk7XG4gIH1cblxuICBzdGFydERyYWdDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuICAgICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtVHlwZSA9IHR5cGUsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gcGF0aDsgIC8vL1xuXG4gICAgZXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgfVxuXG4gIHN0b3BEcmFnQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgZHJvcEVsZW1lbnQsIGFib3J0ZWQsIGRvbmUpID0+IHtcbiAgICBpZiAoZHJvcEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gdGhpczsgIC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZXZlbnQsIGVsZW1lbnQsIGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgY2xpY2soZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gdGhpcywgLy8vXG4gICAgICAgICAgc2VsZWN0ZWQgPSBleHBsb3Jlci5zZWxlY3RPckRlc2VsZWN0RHJhZ0VudHJ5SXRlbShldmVudCwgZWxlbWVudCwgZHJhZ0VudHJ5SXRlbSk7XG5cbiAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gIH1cblxuICBpc1JlYWRPbmx5KCkge1xuICAgIGNvbnN0IHsgcmVhZE9ubHkgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWFkT25seTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgcmVmZXJlbmNlcyA9IGV4cGxvcmVyLmdldFJlZmVyZW5jZXMoKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICByZWFkT25seSA9IHRoaXMuaXNSZWFkT25seSgpLFxuICAgICAgICAgIGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSB0aGlzLmdldE5hbWVTcGFuTmFtZSgpLFxuICAgICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gdGhpcy5pc0VudHJ5RGlyZWN0b3J5KCk7XG5cbiAgICBzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcdC8vL1xuXG4gICAgdGFyZ2V0RW50cnlQYXRoID0gYWRqdXN0VGFyZ2V0RW50cnlQYXRoKHRhcmdldEVudHJ5UGF0aCwgbmFtZVNwYW5OYW1lKTtcdC8vL1xuXG4gICAgY29uc3QgcGF0aE1hcCA9IHtcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgY29sbGFwc2VkLFxuICAgICAgZW50cnlEaXJlY3RvcnksXG4gICAgICBzb3VyY2VFbnRyeVBhdGgsXG4gICAgICB0YXJnZXRFbnRyeVBhdGhcbiAgICB9O1xuXG4gICAgcmV0dXJuIHBhdGhNYXA7XG4gIH1cblxuICBnZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuICAgIGxldCBwYXRoTWFwcyA9IFtdO1xuXG4gICAgdGhpcy5yZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcyk7XG5cbiAgICBwYXRoTWFwcy5yZXZlcnNlKCk7XG5cbiAgICByZXR1cm4gcGF0aE1hcHM7XG4gIH1cblxuICBpc0VudHJ5RGlyZWN0b3J5KCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5pc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCksXG4gICAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTsgIC8vL1xuXG4gICAgcmV0dXJuIGVudHJ5RGlyZWN0b3J5O1xuICB9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gZ2V0TWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgdHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZSA9ICh0eXBlID09PSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgc2V0Q3JlYXRlZChjcmVhdGVkKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBjcmVhdGVkXG4gICAgfSk7XG4gIH1cblxuICBpc0NyZWF0ZWQoKSB7XG4gICAgY29uc3QgeyBjcmVhdGVkIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gY3JlYXRlZDtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmhhc0NsYXNzKFwic2VsZWN0ZWRcIik7IC8vL1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBjcmVhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSBFTVBUWV9TVFJJTkc7IC8vL1xuXG4gICAgZXhwbG9yZXIuZGlzYWJsZSgpO1xuXG4gICAgdGhpcy5zZXRDcmVhdGVkKGNyZWF0ZWQpO1xuXG4gICAgdGhpcy5zZXROYW1lU3Bhbk5hbWUobmFtZVNwYW5OYW1lKTtcblxuICAgIHRoaXMuZWRpdE5hbWVTcGFuKCk7XG4gIH1cblxuICByZW5hbWUoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNyZWF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSBuYW1lOyAvLy9cblxuICAgIGV4cGxvcmVyLmRpc2FibGUoKTtcblxuICAgIHRoaXMuc2V0Q3JlYXRlZChjcmVhdGVkKTtcblxuICAgIHRoaXMuc2V0TmFtZVNwYW5OYW1lKG5hbWVTcGFuTmFtZSk7XG5cbiAgICB0aGlzLmVkaXROYW1lU3BhbigpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5hbWVTcGFuTmFtZSA9IG5hbWU7IC8vL1xuXG4gICAgdGhpcy5zZXROYW1lU3Bhbk5hbWUobmFtZVNwYW5OYW1lKTtcblxuICAgIHRoaXMucmVzZXROYW1lU3BhbigpO1xuICB9XG5cbiAgY2FuY2VsKGNyZWF0ZWQpIHtcbiAgICBjcmVhdGVkID9cbiAgICAgIHRoaXMucmVtb3ZlRnJvbUV4cGxvcmVyKCkgOlxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkaXNhYmxlZCA9IGV4cGxvcmVyLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZW5hYmxlRHJhZygpO1xuICAgIH1cblxuICAgIHRoaXMub25DdXN0b21TdG9wRHJhZyh0aGlzLnN0b3BEcmFnQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tTmFtZVNwYW5DaGFuZ2UodGhpcy5uYW1lU3BhbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbU5hbWVTcGFuQ2FuY2VsKHRoaXMubmFtZVNwYW5DYW5jZWxDdXN0b21IYW5kbGVyKTtcblx0fVxuXG5cdHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRpc2FibGVkID0gZXhwbG9yZXIuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuICAgIH1cblxuICAgIHRoaXMub2ZmQ3VzdG9tU3RvcERyYWcodGhpcy5zdG9wRHJhZ0N1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21TdGFydERyYWcodGhpcy5zdGFydERyYWdDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tTmFtZVNwYW5DaGFuZ2UodGhpcy5uYW1lU3BhbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21OYW1lU3BhbkNhbmNlbCh0aGlzLm5hbWVTcGFuQ2FuY2VsQ3VzdG9tSGFuZGxlcik7XG5cdH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzZWxlY3QgPSB0aGlzLnNlbGVjdC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGRlc2VsZWN0ID0gdGhpcy5kZXNlbGVjdC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgc2VsZWN0LFxuICAgICAgZGVzZWxlY3RcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG5cdFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuICBzdGF0aWMgTmFtZVNwYW4gPSBOYW1lU3BhbjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJyZWFkT25seVwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuXHRcdGNsYXNzTmFtZTogXCJkcmFnXCJcblx0fTtcbn1cblxuT2JqZWN0LmFzc2lnbihFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdFbnRyeUl0ZW0pYFxuXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAgIFxuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBcbiAgLnNlbGVjdGVkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkRyYWdFbnRyeUl0ZW0iLCJFbnRyeUl0ZW0iLCJuYW1lU3BhbkNoYW5nZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjcmVhdGVkIiwiaXNDcmVhdGVkIiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsIm5hbWVTcGFuTmFtZSIsImdldE5hbWVTcGFuTmFtZSIsImVuYWJsZSIsIlBFUklPRCIsIkVNUFRZX1NUUklORyIsImNhbmNlbCIsImRyYWdFbnRyeUl0ZW0iLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwicmVuYW1lRHJhZ0VudHJ5SXRlbSIsIm5hbWVTcGFuQ2FuY2VsQ3VzdG9tSGFuZGxlciIsInN0YXJ0RHJhZ0N1c3RvbUhhbmRsZXIiLCJwYXRoIiwiZ2V0UGF0aCIsInR5cGUiLCJnZXRUeXBlIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiYWRkTWFya2VyIiwic3RvcERyYWdDdXN0b21IYW5kbGVyIiwiZHJvcEVsZW1lbnQiLCJhYm9ydGVkIiwiZG9uZSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImNsaWNrIiwic2VsZWN0ZWQiLCJzZWxlY3RPckRlc2VsZWN0RHJhZ0VudHJ5SXRlbSIsImlzUmVhZE9ubHkiLCJyZWFkT25seSIsInByb3BlcnRpZXMiLCJnZXRSZWZlcmVuY2VzIiwicmVmZXJlbmNlcyIsImdldFBhdGhNYXAiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJuYW1lIiwiZ2V0TmFtZSIsImNvbGxhcHNlZCIsImlzQ29sbGFwc2VkIiwiZW50cnlEaXJlY3RvcnkiLCJpc0VudHJ5RGlyZWN0b3J5IiwiYWRqdXN0U291cmNlRW50cnlQYXRoIiwiYWRqdXN0VGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcCIsImdldFBhdGhNYXBzIiwicGF0aE1hcHMiLCJyZXRyaWV2ZVBhdGhNYXBzIiwicmV2ZXJzZSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImdldE1hcmtlckVudHJ5SXRlbSIsInR5cGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVR5cGUiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJzZXRDcmVhdGVkIiwidXBkYXRlU3RhdGUiLCJnZXRTdGF0ZSIsImlzU2VsZWN0ZWQiLCJoYXNDbGFzcyIsImRlc2VsZWN0IiwicmVtb3ZlQ2xhc3MiLCJzZWxlY3QiLCJhZGRDbGFzcyIsImNyZWF0ZSIsImRpc2FibGUiLCJzZXROYW1lU3Bhbk5hbWUiLCJlZGl0TmFtZVNwYW4iLCJyZW5hbWUiLCJyZXNldCIsInJlc2V0TmFtZVNwYW4iLCJyZW1vdmVGcm9tRXhwbG9yZXIiLCJkaWRNb3VudCIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImVuYWJsZURyYWciLCJvbkN1c3RvbVN0b3BEcmFnIiwib25DdXN0b21TdGFydERyYWciLCJvbkN1c3RvbU5hbWVTcGFuQ2hhbmdlIiwib25DdXN0b21OYW1lU3BhbkNhbmNlbCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyYWciLCJvZmZDdXN0b21TdG9wRHJhZyIsIm9mZkN1c3RvbVN0YXJ0RHJhZyIsIm9mZkN1c3RvbU5hbWVTcGFuQ2hhbmdlIiwib2ZmQ3VzdG9tTmFtZVNwYW5DYW5jZWwiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJiaW5kIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJOYW1lU3BhbiIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJkcmFnTWl4aW5zIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpU0E7OztlQUFBOzs7c0VBL1JzQjtpQ0FFSzs2REFFTjs4REFDQzsyQkFFZTs0QkFDVTt5QkFDYzs7Ozs7O0FBRTdELE1BQU1BLHNCQUFzQkMsY0FBUztJQUNuQ0MsOEJBQThCLENBQUNDLE9BQU9DO1FBQ3BDLE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxTQUFTLElBQ3hCQyxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsZUFBZSxJQUFJLENBQUNDLGVBQWU7UUFFekNILFNBQVNJLE1BQU07UUFFZixJQUFJLEFBQUNGLGlCQUFpQkcsaUJBQU0sSUFBTUgsaUJBQWlCSSx1QkFBWSxFQUFHO1lBQ2hFLElBQUksQ0FBQ0MsTUFBTSxDQUFDVDtZQUVaO1FBQ0Y7UUFFQSxN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