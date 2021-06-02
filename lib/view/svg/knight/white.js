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
var WhiteKnightSVG = function(properties) {
    var className = properties.className;
    return(/*#__PURE__*/ React.createElement("svg", {
        width: "45",
        height: "45",
        viewBox: "0 0 46 46",
        className: "".concat(className, " white-knight")
    }, /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
        d: "M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18",
        style: "fill:#ffffff; stroke:#000000;"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10",
        style: "fill:#ffffff; stroke:#000000;"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z",
        style: "fill:#000000; stroke:#000000;"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z",
        transform: "matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)",
        style: "fill:#000000; stroke:#000000;"
    }))));
};
var _default = (0, _easyWithStyle).default(WhiteKnightSVG)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L3N2Zy9rbmlnaHQvd2hpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiO1xuXG5jb25zdCBXaGl0ZUtuaWdodFNWRyA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8c3ZnIHdpZHRoPVwiNDVcIiBoZWlnaHQ9XCI0NVwiIHZpZXdCb3g9XCIwIDAgNDYgNDZcIiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gd2hpdGUta25pZ2h0YH0+XG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggZD1cIk0gMjIsMTAgQyAzMi41LDExIDM4LjUsMTggMzgsMzkgTCAxNSwzOSBDIDE1LDMwIDI1LDMyLjUgMjMsMThcIiBzdHlsZT1cImZpbGw6I2ZmZmZmZjsgc3Ryb2tlOiMwMDAwMDA7XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0gMjQsMTggQyAyNC4zOCwyMC45MSAxOC40NSwyNS4zNyAxNiwyNyBDIDEzLDI5IDEzLjE4LDMxLjM0IDExLDMxIEMgOS45NTgsMzAuMDYgMTIuNDEsMjcuOTYgMTEsMjggQyAxMCwyOCAxMS4xOSwyOS4yMyAxMCwzMCBDIDksMzAgNS45OTcsMzEgNiwyNiBDIDYsMjQgMTIsMTQgMTIsMTQgQyAxMiwxNCAxMy44OSwxMi4xIDE0LDEwLjUgQyAxMy4yNyw5LjUwNiAxMy41LDguNSAxMy41LDcuNSBDIDE0LjUsNi41IDE2LjUsMTAgMTYuNSwxMCBMIDE4LjUsMTAgQyAxOC41LDEwIDE5LjI4LDguMDA4IDIxLDcgQyAyMiw3IDIyLDEwIDIyLDEwXCIgc3R5bGU9XCJmaWxsOiNmZmZmZmY7IHN0cm9rZTojMDAwMDAwO1wiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDkuNSAyNS41IEEgMC41IDAuNSAwIDEgMSA4LjUsMjUuNSBBIDAuNSAwLjUgMCAxIDEgOS41IDI1LjUgelwiIHN0eWxlPVwiZmlsbDojMDAwMDAwOyBzdHJva2U6IzAwMDAwMDtcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSAxNSAxNS41IEEgMC41IDEuNSAwIDEgMSAgMTQsMTUuNSBBIDAuNSAxLjUgMCAxIDEgIDE1IDE1LjUgelwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjg2NiwwLjUsLTAuNSwwLjg2Niw5LjY5MywtNS4xNzMpXCIgc3R5bGU9XCJmaWxsOiMwMDAwMDA7IHN0cm9rZTojMDAwMDAwO1wiIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShXaGl0ZUtuaWdodFNWRylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW1CRSxpRUFNekM7Ozs7Ozs7SUF2Qk0sY0FBYyxZQUFJLFVBQVU7UUFDeEIsU0FBUyxHQUFLLFVBQVUsQ0FBeEIsU0FBUzs4Q0FJZCxHQUFHO1FBQUMsS0FBSyxHQUFDLEVBQUk7UUFBQyxNQUFNLEdBQUMsRUFBSTtRQUFDLE9BQU8sR0FBQyxTQUFXO1FBQUMsU0FBUyxLQUFlLE1BQWEsQ0FBdkIsU0FBUyxHQUFDLGFBQWE7MENBQ2xGLENBQUMsNENBQ0MsSUFBSTtRQUFDLENBQUMsR0FBQyw2REFBK0Q7UUFBQyxLQUFLLEdBQUMsNkJBQStCOzJDQUM1RyxJQUFJO1FBQUMsQ0FBQyxHQUFDLGlUQUFtVDtRQUFDLEtBQUssR0FBQyw2QkFBK0I7MkNBQ2hXLElBQUk7UUFBQyxDQUFDLEdBQUMsOERBQWdFO1FBQUMsS0FBSyxHQUFDLDZCQUErQjsyQ0FDN0csSUFBSTtRQUFDLENBQUMsR0FBQyw2REFBK0Q7UUFBQyxTQUFTLEdBQUMseUNBQTJDO1FBQUMsS0FBSyxHQUFDLDZCQUErQjs7O21CQVpySixjQUFpQixVQW1CZCxjQUFjIn0=