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
        "\n\n  fill: #000000;\n  width: auto;\n  height: ",
        ";\n  stroke: #000000;\n  margin-right: 1rem;\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var UpToggleSVG = function(properties) {
    var className = properties.className;
    return(/*#__PURE__*/ React.createElement("svg", {
        width: "32",
        height: "32",
        viewBox: "240 30 32 32",
        className: "".concat(className, " up-toggle")
    }, /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
        style: "stroke-width:1px",
        d: "m 264,50 -14,7 V 44 Z"
    }))));
};
var _default = (0, _easyWithStyle).default(UpToggleSVG)(_templateObject(), _styles.toggleSVGHeight);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9nZ2xlL3VwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgdG9nZ2xlU1ZHSGVpZ2h0IH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jb25zdCBVcFRvZ2dsZVNWRyA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8c3ZnIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIyNDAgMzAgMzIgMzJcIiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gdXAtdG9nZ2xlYH0+XG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6MXB4XCIgZD1cIm0gMjY0LDUwIC0xNCw3IFYgNDQgWlwiIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShVcFRvZ2dsZVNWRylgXG5cbiAgZmlsbDogIzAwMDAwMDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogJHt0b2dnbGVTVkdIZWlnaHR9O1xuICBzdHJva2U6ICMwMDAwMDA7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFUCxPQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FnQlIsZ0RBSTVCO1NBQWtCLDZFQUs1Qjs7Ozs7OztJQXZCTSxXQUFXLFlBQUksVUFBVTtRQUNyQixTQUFTLEdBQUssVUFBVSxDQUF4QixTQUFTOzhDQUlkLEdBQUc7UUFBQyxLQUFLLEdBQUMsRUFBSTtRQUFDLE1BQU0sR0FBQyxFQUFJO1FBQUMsT0FBTyxHQUFDLFlBQWM7UUFBQyxTQUFTLEtBQWUsTUFBVSxDQUFwQixTQUFTLEdBQUMsVUFBVTswQ0FDbEYsQ0FBQyw0Q0FDQyxJQUFJO1FBQUMsS0FBSyxHQUFDLGdCQUFrQjtRQUFDLENBQUMsR0FBQyxxQkFBdUI7OzttQkFYMUMsY0FBaUIsVUFrQmQsV0FBVyxxQkFoQkosT0FBYyJ9