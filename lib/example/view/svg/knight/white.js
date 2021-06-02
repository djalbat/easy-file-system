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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc3ZnL2tuaWdodC93aGl0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmNvbnN0IFdoaXRlS25pZ2h0U1ZHID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxzdmcgd2lkdGg9XCI0NVwiIGhlaWdodD1cIjQ1XCIgdmlld0JveD1cIjAgMCA0NiA0NlwiIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSB3aGl0ZS1rbmlnaHRgfT5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBkPVwiTSAyMiwxMCBDIDMyLjUsMTEgMzguNSwxOCAzOCwzOSBMIDE1LDM5IEMgMTUsMzAgMjUsMzIuNSAyMywxOFwiIHN0eWxlPVwiZmlsbDojZmZmZmZmOyBzdHJva2U6IzAwMDAwMDtcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSAyNCwxOCBDIDI0LjM4LDIwLjkxIDE4LjQ1LDI1LjM3IDE2LDI3IEMgMTMsMjkgMTMuMTgsMzEuMzQgMTEsMzEgQyA5Ljk1OCwzMC4wNiAxMi40MSwyNy45NiAxMSwyOCBDIDEwLDI4IDExLjE5LDI5LjIzIDEwLDMwIEMgOSwzMCA1Ljk5NywzMSA2LDI2IEMgNiwyNCAxMiwxNCAxMiwxNCBDIDEyLDE0IDEzLjg5LDEyLjEgMTQsMTAuNSBDIDEzLjI3LDkuNTA2IDEzLjUsOC41IDEzLjUsNy41IEMgMTQuNSw2LjUgMTYuNSwxMCAxNi41LDEwIEwgMTguNSwxMCBDIDE4LjUsMTAgMTkuMjgsOC4wMDggMjEsNyBDIDIyLDcgMjIsMTAgMjIsMTBcIiBzdHlsZT1cImZpbGw6I2ZmZmZmZjsgc3Ryb2tlOiMwMDAwMDA7XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0gOS41IDI1LjUgQSAwLjUgMC41IDAgMSAxIDguNSwyNS41IEEgMC41IDAuNSAwIDEgMSA5LjUgMjUuNSB6XCIgc3R5bGU9XCJmaWxsOiMwMDAwMDA7IHN0cm9rZTojMDAwMDAwO1wiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDE1IDE1LjUgQSAwLjUgMS41IDAgMSAxICAxNCwxNS41IEEgMC41IDEuNSAwIDEgMSAgMTUgMTUuNSB6XCIgdHJhbnNmb3JtPVwibWF0cml4KDAuODY2LDAuNSwtMC41LDAuODY2LDkuNjkzLC01LjE3MylcIiBzdHlsZT1cImZpbGw6IzAwMDAwMDsgc3Ryb2tlOiMwMDAwMDA7XCIgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFdoaXRlS25pZ2h0U1ZHKWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBbUJFLGlFQU16Qzs7Ozs7OztJQXZCTSxjQUFjLFlBQUksVUFBVTtRQUN4QixTQUFTLEdBQUssVUFBVSxDQUF4QixTQUFTOzhDQUlkLEdBQUc7UUFBQyxLQUFLLEdBQUMsRUFBSTtRQUFDLE1BQU0sR0FBQyxFQUFJO1FBQUMsT0FBTyxHQUFDLFNBQVc7UUFBQyxTQUFTLEtBQWUsTUFBYSxDQUF2QixTQUFTLEdBQUMsYUFBYTswQ0FDbEYsQ0FBQyw0Q0FDQyxJQUFJO1FBQUMsQ0FBQyxHQUFDLDZEQUErRDtRQUFDLEtBQUssR0FBQyw2QkFBK0I7MkNBQzVHLElBQUk7UUFBQyxDQUFDLEdBQUMsaVRBQW1UO1FBQUMsS0FBSyxHQUFDLDZCQUErQjsyQ0FDaFcsSUFBSTtRQUFDLENBQUMsR0FBQyw4REFBZ0U7UUFBQyxLQUFLLEdBQUMsNkJBQStCOzJDQUM3RyxJQUFJO1FBQUMsQ0FBQyxHQUFDLDZEQUErRDtRQUFDLFNBQVMsR0FBQyx5Q0FBMkM7UUFBQyxLQUFLLEdBQUMsNkJBQStCOzs7bUJBWnJKLGNBQWlCLFVBbUJkLGNBQWMifQ==