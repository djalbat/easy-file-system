"use strict";
require("./preamble");
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _view = _interopRequireDefault(require("./example/view"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyles = _easyWithStyle.default.renderStyles;
var body = new _easy.Body(), view = /*#__PURE__*/ React.createElement(_view.default, null);
renderStyles();
body.mount(view);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL3ByZWFtYmxlXCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXdcIjtcblxuY29uc3QgeyByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICB2aWV3ID1cblxuICAgICAgICA8Vmlldy8+XG5cbiAgICAgIDtcblxucmVuZGVyU3R5bGVzKCk7XG5cbmJvZHkubW91bnQodmlldyk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7SUFJVSxjQUFpQjtJQUVsQixLQUFNO0lBRVYsS0FBZ0I7Ozs7OztJQUV6QixZQUFZLEdBTkUsY0FBaUIsU0FNL0IsWUFBWTtJQUVkLElBQUksT0FOVyxLQUFNLFNBT3JCLElBQUkscUNBTE8sS0FBZ0I7QUFXakMsWUFBWTtBQUVaLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSJ9