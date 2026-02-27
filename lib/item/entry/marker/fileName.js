"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileNameMarkerEntryItem;
    }
});
const _marker = /*#__PURE__*/ _interop_require_default(require("../../../item/entry/marker"));
const _name = require("../../../utilities/name");
const _entryTypes = require("../../../entryTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class FileNameMarkerEntryItem extends _marker.default {
    isBefore(dragEntryItem) {
        let before;
        const dragEntryItemType = dragEntryItem.getType();
        switch(dragEntryItemType){
            case _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE:
                const name = this.getName(), dragEntryItemName = dragEntryItem.getName();
                before = (0, _name.nameIsBeforeEntryItemName)(name, dragEntryItemName);
                break;
            case _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE:
                before = false;
                break;
        }
        return before;
    }
    static type = _entryTypes.FILE_NAME_MARKER_ENTRY_TYPE;
    static defaultProperties = {
        className: "file-name"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L21hcmtlci9maWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9tYXJrZXJcIjtcblxuaW1wb3J0IHsgbmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vZW50cnlUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBleHRlbmRzIE1hcmtlckVudHJ5SXRlbSB7XG4gIGlzQmVmb3JlKGRyYWdFbnRyeUl0ZW0pIHtcbiAgICBsZXQgYmVmb3JlO1xuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAoZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgIGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgICAgIGJlZm9yZSA9IG5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUobmFtZSwgZHJhZ0VudHJ5SXRlbU5hbWUpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcbiAgICAgICAgYmVmb3JlID0gZmFsc2U7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJlZm9yZTtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIk1hcmtlckVudHJ5SXRlbSIsImlzQmVmb3JlIiwiZHJhZ0VudHJ5SXRlbSIsImJlZm9yZSIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJuYW1lIiwiZ2V0TmFtZSIsImRyYWdFbnRyeUl0ZW1OYW1lIiwibmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsInR5cGUiLCJGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7OzsrREFMTztzQkFFYzs0QkFDNkQ7Ozs7OztBQUV4RixNQUFNQSxnQ0FBZ0NDLGVBQWU7SUFDbEVDLFNBQVNDLGFBQWEsRUFBRTtRQUN0QixJQUFJQztRQUVKLE1BQU1DLG9CQUFvQkYsY0FBY0csT0FBTztRQUUvQyxPQUFRRDtZQUNOLEtBQUtFLHFDQUF5QjtnQkFDNUIsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLG9CQUFvQlAsY0FBY00sT0FBTztnQkFFL0NMLFNBQVNPLElBQUFBLCtCQUF5QixFQUFDSCxNQUFNRTtnQkFFekM7WUFFRixLQUFLRSwwQ0FBOEI7Z0JBQ2pDUixTQUFTO2dCQUVUO1FBQ0o7UUFFQSxPQUFPQTtJQUNUO0lBRUEsT0FBT1MsT0FBT0MsdUNBQTJCLENBQUM7SUFFMUMsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKIn0=