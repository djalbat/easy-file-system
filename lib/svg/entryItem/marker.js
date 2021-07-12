"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _styles = require("../../styles");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  width: auto;\n  height: ",
        ";\n  display: inline;\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MarkerEntryItemSVG = function(properties) {
    var className = properties.className;
    return(/*#__PURE__*/ React.createElement("svg", {
        width: "32",
        height: "32",
        viewBox: "92 43 32 32",
        className: "".concat(className, " marker")
    }, /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
        style: "fill:none;stroke:#000000;stroke-width:6",
        d: "m 93,60 h 30"
    }))));
};
var _default = (0, _easyWithStyle).default(MarkerEntryItemSVG)(_templateObject(), _styles.entryItemSVGHeight);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvZW50cnlJdGVtL21hcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7ZW50cnlJdGVtU1ZHSGVpZ2h0IH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jb25zdCBNYXJrZXJFbnRyeUl0ZW1TVkcgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPHN2ZyB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiOTIgNDMgMzIgMzJcIiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gbWFya2VyYH0+XG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjZcIiBkPVwibSA5Myw2MCBoIDMwXCIgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1hcmtlckVudHJ5SXRlbVNWRylgXG5cbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogJHtlbnRyeUl0ZW1TVkdIZWlnaHR9O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRUwsT0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBZ0JILDhCQUduQztTQUFxQixzREFJL0I7Ozs7Ozs7SUFyQk0sa0JBQWtCLFlBQUksVUFBVTtRQUM1QixTQUFTLEdBQUssVUFBVSxDQUF4QixTQUFTOzhDQUlkLEdBQUc7UUFBQyxLQUFLLEdBQUMsRUFBSTtRQUFDLE1BQU0sR0FBQyxFQUFJO1FBQUMsT0FBTyxHQUFDLFdBQWE7UUFBQyxTQUFTLEtBQWUsTUFBTyxDQUFqQixTQUFTLEdBQUMsT0FBTzswQ0FDOUUsQ0FBQyw0Q0FDQyxJQUFJO1FBQUMsS0FBSyxHQUFDLHVDQUF5QztRQUFDLENBQUMsR0FBQyxZQUFjOzs7bUJBWHhELGNBQWlCLFVBa0JkLGtCQUFrQixxQkFoQlQsT0FBYyJ9