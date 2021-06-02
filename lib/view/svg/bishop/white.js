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
var WhiteBishopSVG = function(properties) {
    var className = properties.className;
    return(/*#__PURE__*/ React.createElement("svg", {
        width: "45",
        height: "45",
        viewBox: "0 0 46 46",
        className: "".concat(className, " white-bishop")
    }, /*#__PURE__*/ React.createElement("g", {
        style: "opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"
    }, /*#__PURE__*/ React.createElement("g", {
        style: "fill:#ffffff; stroke:#000000; stroke-linecap:butt;"
    }, /*#__PURE__*/ React.createElement("path", {
        d: "M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"
    })), /*#__PURE__*/ React.createElement("path", {
        d: "M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18",
        style: "fill:none; stroke:#000000; stroke-linejoin:miter;"
    }))));
};
var _default = (0, _easyWithStyle).default(WhiteBishopSVG)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L3N2Zy9iaXNob3Avd2hpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiO1xuXG5jb25zdCBXaGl0ZUJpc2hvcFNWRyA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8c3ZnIHdpZHRoPVwiNDVcIiBoZWlnaHQ9XCI0NVwiIHZpZXdCb3g9XCIwIDAgNDYgNDZcIiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gd2hpdGUtYmlzaG9wYH0+XG4gICAgICA8ZyBzdHlsZT1cIm9wYWNpdHk6MTsgZmlsbDpub25lOyBmaWxsLXJ1bGU6ZXZlbm9kZDsgZmlsbC1vcGFjaXR5OjE7IHN0cm9rZTojMDAwMDAwOyBzdHJva2Utd2lkdGg6MS41OyBzdHJva2UtbGluZWNhcDpyb3VuZDsgc3Ryb2tlLWxpbmVqb2luOnJvdW5kOyBzdHJva2UtbWl0ZXJsaW1pdDo0OyBzdHJva2UtZGFzaGFycmF5Om5vbmU7IHN0cm9rZS1vcGFjaXR5OjE7XCI+XG4gICAgICAgIDxnIHN0eWxlPVwiZmlsbDojZmZmZmZmOyBzdHJva2U6IzAwMDAwMDsgc3Ryb2tlLWxpbmVjYXA6YnV0dDtcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTSA5LDM2IEMgMTIuMzksMzUuMDMgMTkuMTEsMzYuNDMgMjIuNSwzNCBDIDI1Ljg5LDM2LjQzIDMyLjYxLDM1LjAzIDM2LDM2IEMgMzYsMzYgMzcuNjUsMzYuNTQgMzksMzggQyAzOC4zMiwzOC45NyAzNy4zNSwzOC45OSAzNiwzOC41IEMgMzIuNjEsMzcuNTMgMjUuODksMzguOTYgMjIuNSwzNy41IEMgMTkuMTEsMzguOTYgMTIuMzksMzcuNTMgOSwzOC41IEMgNy42NSwzOC45OSA2LjY4LDM4Ljk3IDYsMzggQyA3LjM1LDM2LjU0IDksMzYgOSwzNiB6XCIvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNIDE1LDMyIEMgMTcuNSwzNC41IDI3LjUsMzQuNSAzMCwzMiBDIDMwLjUsMzAuNSAzMCwzMCAzMCwzMCBDIDMwLDI3LjUgMjcuNSwyNiAyNy41LDI2IEMgMzMsMjQuNSAzMy41LDE0LjUgMjIuNSwxMC41IEMgMTEuNSwxNC41IDEyLDI0LjUgMTcuNSwyNiBDIDE3LjUsMjYgMTUsMjcuNSAxNSwzMCBDIDE1LDMwIDE0LjUsMzAuNSAxNSwzMiB6XCIvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNIDI1IDggQSAyLjUgMi41IDAgMSAxICAyMCw4IEEgMi41IDIuNSAwIDEgMSAgMjUgOCB6XCIvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDE3LjUsMjYgTCAyNy41LDI2IE0gMTUsMzAgTCAzMCwzMCBNIDIyLjUsMTUuNSBMIDIyLjUsMjAuNSBNIDIwLDE4IEwgMjUsMThcIiBzdHlsZT1cImZpbGw6bm9uZTsgc3Ryb2tlOiMwMDAwMDA7IHN0cm9rZS1saW5lam9pbjptaXRlcjtcIi8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShXaGl0ZUJpc2hvcFNWRylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXFCRSxpRUFNekM7Ozs7Ozs7SUF6Qk0sY0FBYyxZQUFJLFVBQVU7UUFDeEIsU0FBUyxHQUFLLFVBQVUsQ0FBeEIsU0FBUzs4Q0FJZCxHQUFHO1FBQUMsS0FBSyxHQUFDLEVBQUk7UUFBQyxNQUFNLEdBQUMsRUFBSTtRQUFDLE9BQU8sR0FBQyxTQUFXO1FBQUMsU0FBUyxLQUFlLE1BQWEsQ0FBdkIsU0FBUyxHQUFDLGFBQWE7MENBQ2xGLENBQUM7UUFBQyxLQUFLLEdBQUMscU1BQXVNOzBDQUM3TSxDQUFDO1FBQUMsS0FBSyxHQUFDLGtEQUFvRDswQ0FDMUQsSUFBSTtRQUFDLENBQUMsR0FBQywrUEFBaVE7MkNBQ3hRLElBQUk7UUFBQyxDQUFDLEdBQUMsaU1BQW1NOzJDQUMxTSxJQUFJO1FBQUMsQ0FBQyxHQUFDLG9EQUFzRDs0Q0FFL0QsSUFBSTtRQUFDLENBQUMsR0FBQywyRUFBNkU7UUFBQyxLQUFLLEdBQUMsaURBQW1EOzs7bUJBZGpJLGNBQWlCLFVBcUJkLGNBQWMifQ==