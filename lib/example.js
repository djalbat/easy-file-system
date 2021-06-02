"use strict";
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _view = _interopRequireDefault(require("./view"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
_easy.window.assign({
    React: _easy.React
});
var renderStyles = _easyWithStyle.default.renderStyles;
var body = new _easy.Body(), view = /*#__PURE__*/ _easy.React.createElement(_view.default, null);
renderStyles();
body.mount(view);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5LCBSZWFjdCwgd2luZG93IH0gZnJvbSBcImVhc3lcIjtcblxud2luZG93LmFzc2lnbih7XG4gIFJlYWN0XG59KTtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vdmlld1wiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIHZpZXcgPVxuXG4gICAgICAgIDxWaWV3Lz5cblxuICAgICAgO1xuXG5yZW5kZXJTdHlsZXMoKTtcblxuYm9keS5tb3VudCh2aWV3KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZO0lBRVUsY0FBaUI7SUFFSCxLQUFNO0lBTXpCLEtBQVE7Ozs7OztBQU5XLEtBQU0sUUFFbkMsTUFBTTtJQUNYLEtBQUssRUFINkIsS0FBTTs7SUFRbEMsWUFBWSxHQVZFLGNBQWlCLFNBVS9CLFlBQVk7SUFFZCxJQUFJLE9BVjBCLEtBQU0sU0FXcEMsSUFBSSxpQkFYMEIsS0FBTSxxQkFNekIsS0FBUTtBQVd6QixZQUFZO0FBRVosSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJIn0=