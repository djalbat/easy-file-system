"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
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
        "\n\n  width: 100%;\n  height: 100%;\n  position: absolute; \n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var WhiteRookSVG = function(properties) {
    var className = properties.className;
    return(/*#__PURE__*/ React.createElement("svg", {
        width: "45",
        height: "45",
        viewBox: "0 0 46 46",
        className: "".concat(className, " white-rook")
    }, /*#__PURE__*/ React.createElement("g", {
        style: "opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"
    }, /*#__PURE__*/ React.createElement("path", {
        d: "M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z ",
        style: "stroke-linecap:butt;"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z ",
        style: "stroke-linecap:butt;"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14",
        style: "stroke-linecap:butt;"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 34,14 L 31,17 L 14,17 L 11,14"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 31,17 L 31,29.5 L 14,29.5 L 14,17",
        style: "stroke-linecap:butt; stroke-linejoin:miter;"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 11,14 L 34,14",
        style: "fill:none; stroke:#000000; stroke-linejoin:miter;"
    }))));
};
var _default = (0, _easyWithStyle).default(WhiteRookSVG)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc3ZnL3Jvb2svd2hpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiO1xuXG5jb25zdCBXaGl0ZVJvb2tTVkcgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPHN2ZyB3aWR0aD1cIjQ1XCIgaGVpZ2h0PVwiNDVcIiB2aWV3Qm94PVwiMCAwIDQ2IDQ2XCIgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHdoaXRlLXJvb2tgfT5cbiAgICAgIDxnIHN0eWxlPVwib3BhY2l0eToxOyBmaWxsOiNmZmZmZmY7IGZpbGwtb3BhY2l0eToxOyBmaWxsLXJ1bGU6ZXZlbm9kZDsgc3Ryb2tlOiMwMDAwMDA7IHN0cm9rZS13aWR0aDoxLjU7IHN0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0OyBzdHJva2UtZGFzaGFycmF5Om5vbmU7IHN0cm9rZS1vcGFjaXR5OjE7XCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDksMzkgTCAzNiwzOSBMIDM2LDM2IEwgOSwzNiBMIDksMzkgeiBcIiBzdHlsZT1cInN0cm9rZS1saW5lY2FwOmJ1dHQ7XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0gMTIsMzYgTCAxMiwzMiBMIDMzLDMyIEwgMzMsMzYgTCAxMiwzNiB6IFwiIHN0eWxlPVwic3Ryb2tlLWxpbmVjYXA6YnV0dDtcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSAxMSwxNCBMIDExLDkgTCAxNSw5IEwgMTUsMTEgTCAyMCwxMSBMIDIwLDkgTCAyNSw5IEwgMjUsMTEgTCAzMCwxMSBMIDMwLDkgTCAzNCw5IEwgMzQsMTRcIiBzdHlsZT1cInN0cm9rZS1saW5lY2FwOmJ1dHQ7XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0gMzQsMTQgTCAzMSwxNyBMIDE0LDE3IEwgMTEsMTRcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSAzMSwxNyBMIDMxLDI5LjUgTCAxNCwyOS41IEwgMTQsMTdcInN0eWxlPVwic3Ryb2tlLWxpbmVjYXA6YnV0dDsgc3Ryb2tlLWxpbmVqb2luOm1pdGVyO1wiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDMxLDI5LjUgTCAzMi41LDMyIEwgMTIuNSwzMiBMIDE0LDI5LjVcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSAxMSwxNCBMIDM0LDE0XCJzdHlsZT1cImZpbGw6bm9uZTsgc3Ryb2tlOiMwMDAwMDA7IHN0cm9rZS1saW5lam9pbjptaXRlcjtcIiAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoV2hpdGVSb29rU1ZHKWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBc0JBLGlFQU12Qzs7Ozs7OztJQTFCTSxZQUFZLFlBQUksVUFBVTtRQUN0QixTQUFTLEdBQUssVUFBVSxDQUF4QixTQUFTOzhDQUlkLEdBQUc7UUFBQyxLQUFLLEdBQUMsRUFBSTtRQUFDLE1BQU0sR0FBQyxFQUFJO1FBQUMsT0FBTyxHQUFDLFNBQVc7UUFBQyxTQUFTLEtBQWUsTUFBVyxDQUFyQixTQUFTLEdBQUMsV0FBVzswQ0FDaEYsQ0FBQztRQUFDLEtBQUssR0FBQyxzTUFBd007MENBQzlNLElBQUk7UUFBQyxDQUFDLEdBQUMsdUNBQXlDO1FBQUMsS0FBSyxHQUFDLG9CQUFzQjsyQ0FDN0UsSUFBSTtRQUFDLENBQUMsR0FBQywwQ0FBNEM7UUFBQyxLQUFLLEdBQUMsb0JBQXNCOzJDQUNoRixJQUFJO1FBQUMsQ0FBQyxHQUFDLHlGQUEyRjtRQUFDLEtBQUssR0FBQyxvQkFBc0I7MkNBQy9ILElBQUk7UUFBQyxDQUFDLEdBQUMsK0JBQWlDOzJDQUN4QyxJQUFJO1FBQUMsQ0FBQyxHQUFDLG1DQUFxQztRQUFBLEtBQUssR0FBQywyQ0FBNkM7MkNBQy9GLElBQUk7UUFBQyxDQUFDLEdBQUMsdUNBQXlDOzJDQUNoRCxJQUFJO1FBQUMsQ0FBQyxHQUFDLGVBQWlCO1FBQUEsS0FBSyxHQUFDLGlEQUFtRDs7O21CQWZwRSxjQUFpQixVQXNCZCxZQUFZIn0=