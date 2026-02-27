"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectoryNameDragEntryItemDiv;
    }
});
const _drag = /*#__PURE__*/ _interop_require_default(require("../../../../div/item/entry/drag"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DirectoryNameDragEntryItemDiv extends _drag.default {
    toggleButtonClickHandler = (event, element)=>{
        const dragEntryItem = this.getDragEntryItem(), directoryNameDragEntryItem = dragEntryItem; ///
        directoryNameDragEntryItem.doubleClick(event, element); ///
        event.stopPropagation();
    };
    childElements() {
        const { name, NameSpan, ToggleButton, DirectoryNameSVG } = this.properties;
        return [
            /*#__PURE__*/ React.createElement(ToggleButton, {
                onClick: this.toggleButtonClickHandler
            }),
            /*#__PURE__*/ React.createElement(DirectoryNameSVG, null),
            /*#__PURE__*/ React.createElement(NameSpan, null, name)
        ];
    }
    static ignoredProperties = [
        "ToggleButton",
        "DirectoryNameSVG"
    ];
    static defaultProperties = {
        className: "directory-name"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEcmFnRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kcmFnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRGl2IGV4dGVuZHMgRHJhZ0VudHJ5SXRlbURpdiB7XG4gIHRvZ2dsZUJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSB0aGlzLmdldERyYWdFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGRyYWdFbnRyeUl0ZW07IC8vL1xuXG4gICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZG91YmxlQ2xpY2soZXZlbnQsIGVsZW1lbnQpOyAvLy9cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IG5hbWUsIE5hbWVTcGFuLCBUb2dnbGVCdXR0b24sIERpcmVjdG9yeU5hbWVTVkcgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8VG9nZ2xlQnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPixcbiAgICAgIDxEaXJlY3RvcnlOYW1lU1ZHLz4sXG4gICAgICA8TmFtZVNwYW4+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9OYW1lU3Bhbj5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiVG9nZ2xlQnV0dG9uXCIsXG4gICAgXCJEaXJlY3RvcnlOYW1lU1ZHXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbURpdiIsIkRyYWdFbnRyeUl0ZW1EaXYiLCJ0b2dnbGVCdXR0b25DbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJkcmFnRW50cnlJdGVtIiwiZ2V0RHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZG91YmxlQ2xpY2siLCJzdG9wUHJvcGFnYXRpb24iLCJjaGlsZEVsZW1lbnRzIiwibmFtZSIsIk5hbWVTcGFuIiwiVG9nZ2xlQnV0dG9uIiwiRGlyZWN0b3J5TmFtZVNWRyIsInByb3BlcnRpZXMiLCJvbkNsaWNrIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7Ozs2REFGUTs7Ozs7O0FBRWQsTUFBTUEsc0NBQXNDQyxhQUFnQjtJQUN6RUMsMkJBQTJCLENBQUNDLE9BQU9DO1FBQ2pDLE1BQU1DLGdCQUFnQixJQUFJLENBQUNDLGdCQUFnQixJQUNyQ0MsNkJBQTZCRixlQUFlLEdBQUc7UUFFckRFLDJCQUEyQkMsV0FBVyxDQUFDTCxPQUFPQyxVQUFVLEdBQUc7UUFFM0RELE1BQU1NLGVBQWU7SUFDdkIsRUFBQztJQUVEQyxnQkFBZ0I7UUFDZCxNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLGdCQUFnQixFQUFFLEdBQUcsSUFBSSxDQUFDQyxVQUFVO1FBRTFFLE9BQVE7MEJBRU4sb0JBQUNGO2dCQUFhRyxTQUFTLElBQUksQ0FBQ2Qsd0JBQXdCOzswQkFDcEQsb0JBQUNZOzBCQUNELG9CQUFDRixnQkFDRUQ7U0FHSjtJQUNIO0lBRUEsT0FBT00sb0JBQW9CO1FBQ3pCO1FBQ0E7S0FDRCxDQUFDO0lBRUYsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKIn0=