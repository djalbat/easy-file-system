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
class FileNameSVG extends _svg.default {
    childElements() {
        return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:4",
            d: "m 142,34 v 8 h 8"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:4",
            d: "m 128,34 v 26 h 22 V 42 l -8,-8 z"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:4",
            d: "m 143,40 h 3"
        }));
    }
    static tagName = "svg";
    static defaultProperties = {
        width: "32",
        height: "32",
        viewBox: "121 31 32 32",
        className: "file-name"
    };
}
const _default = (0, _easywithstyle.default)(FileNameSVG)`

  fill: none;
  height: ${_styles.fileNameSVGHeight};
  display: inline;
  padding-left: ${_styles.fileNameSVGPaddingLeft};
  padding-right: ${_styles.fileNameSVGPaddingRight};
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvZmlsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFNWRyBmcm9tIFwiLi4vc3ZnXCI7XG5cbmltcG9ydCB7IGZpbGVOYW1lU1ZHSGVpZ2h0LCBmaWxlTmFtZVNWR1BhZGRpbmdSaWdodCwgZmlsZU5hbWVTVkdQYWRkaW5nTGVmdCB9IGZyb20gXCIuLi9zdHlsZXNcIjtcblxuY2xhc3MgRmlsZU5hbWVTVkcgZXh0ZW5kcyBTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDo0XCIgZD1cIm0gMTQyLDM0IHYgOCBoIDhcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDo0XCIgZD1cIm0gMTI4LDM0IHYgMjYgaCAyMiBWIDQyIGwgLTgsLTggelwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjRcIiBkPVwibSAxNDMsNDAgaCAzXCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3ZnXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHdpZHRoOiBcIjMyXCIsXG4gICAgaGVpZ2h0OiBcIjMyXCIsXG4gICAgdmlld0JveDogXCIxMjEgMzEgMzIgMzJcIixcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRmlsZU5hbWVTVkcpYFxuXG4gIGZpbGw6IG5vbmU7XG4gIGhlaWdodDogJHtmaWxlTmFtZVNWR0hlaWdodH07XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZy1sZWZ0OiAke2ZpbGVOYW1lU1ZHUGFkZGluZ0xlZnR9O1xuICBwYWRkaW5nLXJpZ2h0OiAke2ZpbGVOYW1lU1ZHUGFkZGluZ1JpZ2h0fTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkZpbGVOYW1lU1ZHIiwiU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwic3R5bGUiLCJkIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZmlsZU5hbWVTVkdIZWlnaHQiLCJmaWxlTmFtZVNWR1BhZGRpbmdMZWZ0IiwiZmlsZU5hbWVTVkdQYWRkaW5nUmlnaHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStCQTs7O2VBQUE7OztzRUE3QnNCOzREQUVOO3dCQUVtRTs7Ozs7O0FBRW5GLE1BQU1BLG9CQUFvQkMsWUFBRztJQUMzQkMsZ0JBQWdCO1FBQ2QscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQztZQUFLQyxPQUFNO1lBQWlCQyxHQUFFOzBCQUMvQixvQkFBQ0Y7WUFBS0MsT0FBTTtZQUFpQkMsR0FBRTswQkFDL0Isb0JBQUNGO1lBQUtDLE9BQU07WUFBaUJDLEdBQUU7O0lBSXJDO0lBRUEsT0FBT0MsVUFBVSxNQUFNO0lBRXZCLE9BQU9DLG9CQUFvQjtRQUN6QkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFNBQVM7UUFDVEMsV0FBVztJQUNiLEVBQUM7QUFDSDtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNiLFlBQVksQ0FBQzs7O1VBRzVCLEVBQUVjLHlCQUFpQixDQUFDOztnQkFFZCxFQUFFQyw4QkFBc0IsQ0FBQztpQkFDeEIsRUFBRUMsK0JBQXVCLENBQUM7O0FBRTNDLENBQUMifQ==