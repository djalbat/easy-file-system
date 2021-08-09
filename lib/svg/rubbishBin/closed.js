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
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ClosedRubbishBinSVG = function(properties) {
    var className = properties.className;
    return(/*#__PURE__*/ React.createElement("svg", {
        width: "60",
        height: "60",
        viewBox: "4 10 60 60",
        className: "".concat(className, " closed-rubbish-bin")
    }, /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
        style: "fill:none;stroke:#000000;stroke-width:2.83465",
        d: "M 40,34 V 60"
    }), /*#__PURE__*/ React.createElement("path", {
        style: "fill:none;stroke:#000000;stroke-width:2.83465",
        d: "M 46,34 V 60"
    }), /*#__PURE__*/ React.createElement("path", {
        style: "fill:none;stroke:#000000;stroke-width:3.77953",
        d: "m 16,30 v 32 l 2,2 h 32 l 2,-2 V 30"
    }), /*#__PURE__*/ React.createElement("path", {
        style: "fill:none;stroke:#000000;stroke-width:3.77953",
        d: "M 12,30 H 56"
    }), /*#__PURE__*/ React.createElement("path", {
        style: "fill:none;stroke:#000000;stroke-width:3.77953",
        d: "m 24,30 -2,-8 h 24 l -2,8"
    }), /*#__PURE__*/ React.createElement("path", {
        style: "fill:none;stroke:#000000;stroke-width:2.83465",
        d: "M 22,34 V 60"
    }), /*#__PURE__*/ React.createElement("path", {
        style: "fill:none;stroke:#000000;stroke-width:2.83465",
        d: "M 28,34 V 60"
    }), /*#__PURE__*/ React.createElement("path", {
        style: "fill:none;stroke:#000000;stroke-width:2.83465",
        d: "M 34,34 V 60"
    }))));
};
var _default = (0, _easyWithStyle).default(ClosedRubbishBinSVG)(_templateObject(), _styles.rubbishBinSVGHeight);
exports.default = _default;
