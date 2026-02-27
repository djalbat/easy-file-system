"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectoryNameMarkerEntryItem;
    }
});
const _marker = /*#__PURE__*/ _interop_require_default(require("../../../item/entry/marker"));
const _entryTypes = require("../../../entryTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DirectoryNameMarkerEntryItem extends _marker.default {
    isBefore(dragEntryItem) {
        let before;
        const dragEntryItemType = dragEntryItem.getType();
        switch(dragEntryItemType){
            case _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE:
                before = true;
                break;
            case _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE:
                const name = this.getName(), dragEntryItemName = dragEntryItem.getName();
                before = name.localeCompare(dragEntryItemName) < 0;
                break;
        }
        return before;
    }
    static type = _entryTypes.DIRECTORY_NAME_MARKER_ENTRY_TYPE;
    static defaultProperties = {
        className: "directory-name"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L21hcmtlci9kaXJlY3RvcnlOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2VyRW50cnlJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2VudHJ5L21hcmtlclwiO1xuXG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL2VudHJ5VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBleHRlbmRzIE1hcmtlckVudHJ5SXRlbSB7XG4gIGlzQmVmb3JlKGRyYWdFbnRyeUl0ZW0pIHtcbiAgICBsZXQgYmVmb3JlO1xuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAoZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgIGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcbiAgICAgICAgYmVmb3JlID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEU6XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgICAgICBiZWZvcmUgPSAobmFtZS5sb2NhbGVDb21wYXJlKGRyYWdFbnRyeUl0ZW1OYW1lKSA8IDApO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBiZWZvcmU7XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IERJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZGlyZWN0b3J5LW5hbWVcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJNYXJrZXJFbnRyeUl0ZW0iLCJpc0JlZm9yZSIsImRyYWdFbnRyeUl0ZW0iLCJiZWZvcmUiLCJkcmFnRW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwibmFtZSIsImdldE5hbWUiLCJkcmFnRW50cnlJdGVtTmFtZSIsImxvY2FsZUNvbXBhcmUiLCJ0eXBlIiwiRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7OzsrREFKTzs0QkFFZ0Y7Ozs7OztBQUU3RixNQUFNQSxxQ0FBcUNDLGVBQWU7SUFDdkVDLFNBQVNDLGFBQWEsRUFBRTtRQUN0QixJQUFJQztRQUVKLE1BQU1DLG9CQUFvQkYsY0FBY0csT0FBTztRQUUvQyxPQUFRRDtZQUNOLEtBQUtFLHFDQUF5QjtnQkFDNUJILFNBQVM7Z0JBRVQ7WUFFRixLQUFLSSwwQ0FBOEI7Z0JBQ2pDLE1BQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxvQkFBb0JSLGNBQWNPLE9BQU87Z0JBRS9DTixTQUFVSyxLQUFLRyxhQUFhLENBQUNELHFCQUFxQjtnQkFFbEQ7UUFDSjtRQUVBLE9BQU9QO0lBQ1Q7SUFFQSxPQUFPUyxPQUFPQyw0Q0FBZ0MsQ0FBQztJQUUvQyxPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0oifQ==