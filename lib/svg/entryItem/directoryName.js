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
        ";\n  display: inline;\n  margin-right: ",
        ";\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DirectoryNameEntryItemSVG = function(properties) {
    var className = properties.className;
    return(/*#__PURE__*/ React.createElement("svg", {
        width: "32",
        height: "32",
        viewBox: "165 25 32 32",
        className: "".concat(className, " directory-name")
    }, /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
        style: "fill:none;stroke:#000000;stroke-width:4",
        d: "m 168,32 v 22 h 26 V 38 h -26"
    }), /*#__PURE__*/ React.createElement("path", {
        style: "fill:none;stroke:#000000;stroke-width:4",
        d: "m 166,32 h 12 l 6,6"
    }), /*#__PURE__*/ React.createElement("path", {
        style: "fill:none;stroke:#000000;stroke-width:4",
        d: "m 169,35 h 11"
    }))));
};
var _default = (0, _easyWithStyle).default(DirectoryNameEntryItemSVG)(_templateObject(), _styles.entryItemSVGHeight, _styles.dragEntryItemSVGMarginRight);
exports.default = _default;
