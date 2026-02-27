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
const _styles = require("../../styles");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class EntryItemDiv extends _easy.Element {
    getExplorer() {
        const { explorer } = this.properties;
        return explorer;
    }
    getDragEntryItem() {
        const parentElement = this.getParentElement(), dragEntryItem = parentElement; ///
        return dragEntryItem; ///
    }
    static tagName = "div";
    static ignoredProperties = [
        "name",
        "explorer"
    ];
    static defaultProperties = {
        className: "entry-item"
    };
}
const _default = (0, _easywithstyle.default)(EntryItemDiv)`

  padding-top: ${_styles.entryItemDivPaddingTop};
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IGVudHJ5SXRlbURpdlBhZGRpbmdUb3AgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIEVudHJ5SXRlbURpdiBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCB7IGV4cGxvcmVyIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cblxuICBnZXREcmFnRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudEVsZW1lbnQoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gcGFyZW50RWxlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGRyYWdFbnRyeUl0ZW07IC8vL1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm5hbWVcIixcbiAgICBcImV4cGxvcmVyXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImVudHJ5LWl0ZW1cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRW50cnlJdGVtRGl2KWBcblxuICBwYWRkaW5nLXRvcDogJHtlbnRyeUl0ZW1EaXZQYWRkaW5nVG9wfTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkVudHJ5SXRlbURpdiIsIkVsZW1lbnQiLCJnZXRFeHBsb3JlciIsImV4cGxvcmVyIiwicHJvcGVydGllcyIsImdldERyYWdFbnRyeUl0ZW0iLCJwYXJlbnRFbGVtZW50IiwiZ2V0UGFyZW50RWxlbWVudCIsImRyYWdFbnRyeUl0ZW0iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImVudHJ5SXRlbURpdlBhZGRpbmdUb3AiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtDQTs7O2VBQUE7OztzRUFoQ3NCO3NCQUVFO3dCQUVlOzs7Ozs7QUFFdkMsTUFBTUEscUJBQXFCQyxhQUFPO0lBQ2hDQyxjQUFjO1FBQ1osTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUNDLFVBQVU7UUFFcEMsT0FBT0Q7SUFDVDtJQUVBRSxtQkFBbUI7UUFDakIsTUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCLElBQ3JDQyxnQkFBZ0JGLGVBQWdCLEdBQUc7UUFFekMsT0FBT0UsZUFBZSxHQUFHO0lBQzNCO0lBRUEsT0FBT0MsVUFBVSxNQUFNO0lBRXZCLE9BQU9DLG9CQUFvQjtRQUN6QjtRQUNBO0tBQ0QsQ0FBQztJQUVGLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNiLGFBQWEsQ0FBQzs7ZUFFeEIsRUFBRWMsOEJBQXNCLENBQUM7O0FBRXhDLENBQUMifQ==