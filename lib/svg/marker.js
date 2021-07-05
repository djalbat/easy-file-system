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
        "\n\n  width: 10rem;\n  height: 10rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MarkerSVG = function(properties) {
    var className = properties.className;
    return [
        /*#__PURE__*/ React.createElement("svg", {
            width: "32",
            height: "32",
            viewBox: "92 43 32 32",
            className: "".concat(className, " marker")
        }, /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
            style: "fill:none;stroke:#000000;stroke-width:6",
            d: "m 93,60 h 30"
        })))
    ];
};
var _default = (0, _easyWithStyle).default(MarkerSVG)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvbWFya2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuY29uc3QgTWFya2VyU1ZHID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChbXG5cbiAgICA8c3ZnIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCI5MiA0MyAzMiAzMlwiIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBtYXJrZXJgfT5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6NlwiIGQ9XCJtIDkzLDYwIGggMzBcIiAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1hcmtlclNWRylgXG5cbiAgd2lkdGg6IDEwcmVtO1xuICBoZWlnaHQ6IDEwcmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBZ0JILDJDQUtwQzs7Ozs7OztJQW5CTSxTQUFTLFlBQUksVUFBVTtRQUNuQixTQUFTLEdBQUssVUFBVSxDQUF4QixTQUFTOzsyQ0FJZCxHQUFHO1lBQUMsS0FBSyxHQUFDLEVBQUk7WUFBQyxNQUFNLEdBQUMsRUFBSTtZQUFDLE9BQU8sR0FBQyxXQUFhO1lBQUMsU0FBUyxLQUFlLE1BQU8sQ0FBakIsU0FBUyxHQUFDLE9BQU87OENBQzlFLENBQUMsNENBQ0MsSUFBSTtZQUFDLEtBQUssR0FBQyx1Q0FBeUM7WUFBQyxDQUFDLEdBQUMsWUFBYzs7OzttQkFUeEQsY0FBaUIsVUFnQmQsU0FBUyJ9