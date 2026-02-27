"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileNameDragEntryItem;
    }
});
const _fileName = /*#__PURE__*/ _interop_require_default(require("../../../svg/fileName"));
const _drag = /*#__PURE__*/ _interop_require_default(require("../../../item/entry/drag"));
const _fileName1 = /*#__PURE__*/ _interop_require_default(require("../../../div/item/entry/drag/fileName"));
const _name = require("../../../utilities/name");
const _entryTypes = require("../../../entryTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class FileNameDragEntryItem extends _drag.default {
    openFileNameDragEntryItem(event, element) {
        const explorer = this.getExplorer(), fileNameDragEntryItem = this; ///
        explorer.openFileNameDragEntryItem(event, element, fileNameDragEntryItem);
    }
    doubleClick(event, element) {
        this.openFileNameDragEntryItem(event, element);
    }
    singleClick(event, element) {
        this.openFileNameDragEntryItem(event, element);
    }
    isBefore(entryItem) {
        let before;
        const entryItemType = entryItem.getType();
        switch(entryItemType){
            case _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE:
            case _entryTypes.FILE_NAME_MARKER_ENTRY_TYPE:
            case _entryTypes.DIRECTORY_NAME_MARKER_ENTRY_TYPE:
                const name = this.getName(), entryItemName = entryItem.getName();
                before = (0, _name.nameIsBeforeEntryItemName)(name, entryItemName);
                break;
            case _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE:
                before = false;
                break;
        }
        return before;
    }
    getFileName() {
        const name = this.getName(), fileName = name; ///
        return fileName;
    }
    isCollapsed() {
        const collapsed = null; ///
        return collapsed;
    }
    retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps) {
        const pathMap = this.getPathMap(sourceEntryPath, targetEntryPath);
        pathMaps.push(pathMap);
    }
    removeFromExplorer() {
        const path = this.getPath(), explorer = this.getExplorer(), filePath = path; ///
        explorer.removeFilePath(filePath);
    }
    childElements() {
        const { name } = this.properties, { NameSpan, FileNameSVG } = this.constructor, explorer = this.getExplorer();
        return /*#__PURE__*/ React.createElement(_fileName1.default, {
            name: name,
            explorer: explorer,
            NameSpan: NameSpan,
            FileNameSVG: FileNameSVG
        });
    }
    static type = _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE;
    static FileNameSVG = _fileName.default;
    static defaultProperties = {
        className: "file-name"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGaWxlTmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRmlsZU5hbWVEcmFnRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5cbmltcG9ydCB7IG5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9lbnRyeVR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuXHRvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50KSB7XG5cdFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcztcdC8vL1xuXG5cdFx0ZXhwbG9yZXIub3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbShldmVudCwgZWxlbWVudCwgZmlsZU5hbWVEcmFnRW50cnlJdGVtKTtcblx0fVxuXG5cdGRvdWJsZUNsaWNrKGV2ZW50LCBlbGVtZW50KSB7XG5cdFx0dGhpcy5vcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50KTtcblx0fVxuXG5cdHNpbmdsZUNsaWNrKGV2ZW50LCBlbGVtZW50KSB7XG5cdFx0dGhpcy5vcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50KTtcblx0fVxuXG5cdGlzQmVmb3JlKGVudHJ5SXRlbSkge1xuXHRcdGxldCBiZWZvcmU7XG5cblx0XHRjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKTtcblxuXHRcdHN3aXRjaCAoZW50cnlJdGVtVHlwZSkge1xuXHRcdFx0Y2FzZSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFOlxuXHRcdFx0Y2FzZSBGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEU6XG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFOlxuXHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0XHRcdGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG5cdFx0XHRcdGJlZm9yZSA9IG5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUobmFtZSwgZW50cnlJdGVtTmFtZSk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFOlxuXHRcdFx0XHRiZWZvcmUgPSBmYWxzZTtcblxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gYmVmb3JlO1xuXHR9XG5cblx0Z2V0RmlsZU5hbWUoKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdGZpbGVOYW1lID0gbmFtZTtcdC8vL1xuXG5cdFx0cmV0dXJuIGZpbGVOYW1lO1xuXHR9XG5cbiAgaXNDb2xsYXBzZWQoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gbnVsbDsgLy8vXG5cbiAgICByZXR1cm4gY29sbGFwc2VkO1xuICB9XG5cblx0cmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpIHtcblx0XHRjb25zdCBwYXRoTWFwID0gdGhpcy5nZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKTtcblxuXHRcdHBhdGhNYXBzLnB1c2gocGF0aE1hcCk7XG5cdH1cblxuXHRyZW1vdmVGcm9tRXhwbG9yZXIoKSB7XG5cdFx0Y29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdGZpbGVQYXRoID0gcGF0aDtcdC8vL1xuXG5cdFx0ZXhwbG9yZXIucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpO1xuXHR9XG5cblx0Y2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB7IE5hbWVTcGFuLCBGaWxlTmFtZVNWRyB9ID0gdGhpcy5jb25zdHJ1Y3Rvcixcblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKTtcblxuXHRcdHJldHVybiAoXG5cblx0XHRcdDxGaWxlTmFtZURyYWdFbnRyeUl0ZW1EaXYgbmFtZT17bmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXhwbG9yZXI9e2V4cGxvcmVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHROYW1lU3Bhbj17TmFtZVNwYW59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEZpbGVOYW1lU1ZHPXtGaWxlTmFtZVNWR31cblx0XHRcdC8+XG5cblx0XHQpO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFO1xuXG4gIHN0YXRpYyBGaWxlTmFtZVNWRyA9IEZpbGVOYW1lU1ZHO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJEcmFnRW50cnlJdGVtIiwib3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImV2ZW50IiwiZWxlbWVudCIsImV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJkb3VibGVDbGljayIsInNpbmdsZUNsaWNrIiwiaXNCZWZvcmUiLCJlbnRyeUl0ZW0iLCJiZWZvcmUiLCJlbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSIsIm5hbWUiLCJnZXROYW1lIiwiZW50cnlJdGVtTmFtZSIsIm5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJnZXRGaWxlTmFtZSIsImZpbGVOYW1lIiwiaXNDb2xsYXBzZWQiLCJjb2xsYXBzZWQiLCJyZXRyaWV2ZVBhdGhNYXBzIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcHMiLCJwYXRoTWFwIiwiZ2V0UGF0aE1hcCIsInB1c2giLCJyZW1vdmVGcm9tRXhwbG9yZXIiLCJwYXRoIiwiZ2V0UGF0aCIsImZpbGVQYXRoIiwicmVtb3ZlRmlsZVBhdGgiLCJjaGlsZEVsZW1lbnRzIiwicHJvcGVydGllcyIsIk5hbWVTcGFuIiwiRmlsZU5hbWVTVkciLCJGaWxlTmFtZURyYWdFbnRyeUl0ZW1EaXYiLCJ0eXBlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBcUJBOzs7aUVBUEc7NkRBQ0U7a0VBQ1c7c0JBRUs7NEJBQytGOzs7Ozs7QUFFMUgsTUFBTUEsOEJBQThCQyxhQUFhO0lBQy9EQywwQkFBMEJDLEtBQUssRUFBRUMsT0FBTyxFQUFFO1FBQ3pDLE1BQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzlCQyx3QkFBd0IsSUFBSSxFQUFFLEdBQUc7UUFFcENGLFNBQVNILHlCQUF5QixDQUFDQyxPQUFPQyxTQUFTRztJQUNwRDtJQUVBQyxZQUFZTCxLQUFLLEVBQUVDLE9BQU8sRUFBRTtRQUMzQixJQUFJLENBQUNGLHlCQUF5QixDQUFDQyxPQUFPQztJQUN2QztJQUVBSyxZQUFZTixLQUFLLEVBQUVDLE9BQU8sRUFBRTtRQUMzQixJQUFJLENBQUNGLHlCQUF5QixDQUFDQyxPQUFPQztJQUN2QztJQUVBTSxTQUFTQyxTQUFTLEVBQUU7UUFDbkIsSUFBSUM7UUFFSixNQUFNQyxnQkFBZ0JGLFVBQVVHLE9BQU87UUFFdkMsT0FBUUQ7WUFDUCxLQUFLRSxxQ0FBeUI7WUFDOUIsS0FBS0MsdUNBQTJCO1lBQ2hDLEtBQUtDLDRDQUFnQztnQkFDcEMsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDdEJDLGdCQUFnQlQsVUFBVVEsT0FBTztnQkFFcENQLFNBQVNTLElBQUFBLCtCQUF5QixFQUFDSCxNQUFNRTtnQkFFekM7WUFFRCxLQUFLRSwwQ0FBOEI7Z0JBQ2xDVixTQUFTO2dCQUVUO1FBQ0Y7UUFFQSxPQUFPQTtJQUNSO0lBRUFXLGNBQWM7UUFDYixNQUFNTCxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUN0QkssV0FBV04sTUFBTSxHQUFHO1FBRXZCLE9BQU9NO0lBQ1I7SUFFQ0MsY0FBYztRQUNaLE1BQU1DLFlBQVksTUFBTSxHQUFHO1FBRTNCLE9BQU9BO0lBQ1Q7SUFFREMsaUJBQWlCQyxlQUFlLEVBQUVDLGVBQWUsRUFBRUMsUUFBUSxFQUFFO1FBQzVELE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLENBQUNKLGlCQUFpQkM7UUFFakRDLFNBQVNHLElBQUksQ0FBQ0Y7SUFDZjtJQUVBRyxxQkFBcUI7UUFDcEIsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDdEIvQixXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQitCLFdBQVdGLE1BQU0sR0FBRztRQUV2QjlCLFNBQVNpQyxjQUFjLENBQUNEO0lBQ3pCO0lBRUFFLGdCQUFnQjtRQUNiLE1BQU0sRUFBRXJCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQ3NCLFVBQVUsRUFDMUIsRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUNqRHJDLFdBQVcsSUFBSSxDQUFDQyxXQUFXO1FBRTlCLHFCQUVDLG9CQUFDcUMsa0JBQXdCO1lBQUN6QixNQUFNQTtZQUNuQmIsVUFBVUE7WUFDVm9DLFVBQVVBO1lBQ1ZDLGFBQWFBOztJQUkzQjtJQUVBLE9BQU9FLE9BQU83QixxQ0FBeUIsQ0FBQztJQUV4QyxPQUFPMkIsY0FBY0EsaUJBQVcsQ0FBQztJQUVqQyxPQUFPRyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0oifQ==