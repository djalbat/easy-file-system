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
        ";\n  margin-right: 1rem;\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DownToggleSVG = function(properties) {
    var className = properties.className;
    return(/*#__PURE__*/ React.createElement("svg", {
        width: "32",
        height: "32",
        viewBox: "206 26 32 32",
        className: "".concat(className, " down-toggle")
    }, /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
        style: "fill:#000000;stroke:#000000;stroke-width:1px",
        d: "m 222,54 -7,-14 h 14 z"
    }))));
};
var _default = (0, _easyWithStyle).default(DownToggleSVG)(_templateObject(), _styles.toggleSVGHeight);
exports.default = _default;
