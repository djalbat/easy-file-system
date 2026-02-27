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
const _svg = /*#__PURE__*/ _interop_require_default(require("../svg"));
const _styles = require("../styles");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DirectoryNameSVG extends _svg.default {
    childElements() {
        return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:4",
            d: "m 168,32 v 22 h 26 V 38 h -26"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:4",
            d: "m 166,32 h 12 l 6,6"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:4",
            d: "m 169,35 h 11"
        }));
    }
    static tagName = "svg";
    static defaultProperties = {
        width: "32",
        height: "32",
        viewBox: "165 25 32 32",
        className: "directory-name"
    };
}
const _default = (0, _easywithstyle.default)(DirectoryNameSVG)`

  fill: none;
  height: ${_styles.directoryNameSVGHeight};
  display: inline;
  padding-right: ${_styles.directoryNameSVGPaddingRight};
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFNWRyBmcm9tIFwiLi4vc3ZnXCI7XG5cbmltcG9ydCB7IGRpcmVjdG9yeU5hbWVTVkdIZWlnaHQsIGRpcmVjdG9yeU5hbWVTVkdQYWRkaW5nUmlnaHQgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5cbmNsYXNzIERpcmVjdG9yeU5hbWVTVkcgZXh0ZW5kcyBTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDo0XCIgZD1cIm0gMTY4LDMyIHYgMjIgaCAyNiBWIDM4IGggLTI2XCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6NFwiIGQ9XCJtIDE2NiwzMiBoIDEyIGwgNiw2XCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6NFwiIGQ9XCJtIDE2OSwzNSBoIDExXCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3ZnXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHdpZHRoOiBcIjMyXCIsXG4gICAgaGVpZ2h0OiBcIjMyXCIsXG4gICAgdmlld0JveDogXCIxNjUgMjUgMzIgMzJcIixcbiAgICBjbGFzc05hbWU6IFwiZGlyZWN0b3J5LW5hbWVcIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEaXJlY3RvcnlOYW1lU1ZHKWBcblxuICBmaWxsOiBub25lO1xuICBoZWlnaHQ6ICR7ZGlyZWN0b3J5TmFtZVNWR0hlaWdodH07XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZy1yaWdodDogJHtkaXJlY3RvcnlOYW1lU1ZHUGFkZGluZ1JpZ2h0fTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkRpcmVjdG9yeU5hbWVTVkciLCJTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInBhdGgiLCJzdHlsZSIsImQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJkaXJlY3RvcnlOYW1lU1ZHSGVpZ2h0IiwiZGlyZWN0b3J5TmFtZVNWR1BhZGRpbmdSaWdodCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK0JBOzs7ZUFBQTs7O3NFQTdCc0I7NERBRU47d0JBRXFEOzs7Ozs7QUFFckUsTUFBTUEseUJBQXlCQyxZQUFHO0lBQ2hDQyxnQkFBZ0I7UUFDZCxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO1lBQUtDLE9BQU07WUFBaUJDLEdBQUU7MEJBQy9CLG9CQUFDRjtZQUFLQyxPQUFNO1lBQWlCQyxHQUFFOzBCQUMvQixvQkFBQ0Y7WUFBS0MsT0FBTTtZQUFpQkMsR0FBRTs7SUFJckM7SUFFQSxPQUFPQyxVQUFVLE1BQU07SUFFdkIsT0FBT0Msb0JBQW9CO1FBQ3pCQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsU0FBUztRQUNUQyxXQUFXO0lBQ2IsRUFBQztBQUNIO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2IsaUJBQWlCLENBQUM7OztVQUdqQyxFQUFFYyw4QkFBc0IsQ0FBQzs7aUJBRWxCLEVBQUVDLG9DQUE0QixDQUFDOztBQUVoRCxDQUFDIn0=