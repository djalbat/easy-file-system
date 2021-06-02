"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _entry = _interopRequireDefault(require("../../div/entry"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
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
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  font-size: 2rem;\n  background-color: lightgreen;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var FileNameEntryDiv = /*#__PURE__*/ function(EntryDiv) {
    _inherits(FileNameEntryDiv, EntryDiv);
    function FileNameEntryDiv() {
        _classCallCheck(this, FileNameEntryDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(FileNameEntryDiv).apply(this, arguments));
    }
    _createClass(FileNameEntryDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, fileName = _properties.fileName;
                return fileName;
            }
        }
    ]);
    return FileNameEntryDiv;
}(_entry.default);
_defineProperty(FileNameEntryDiv, "defaultProperties", {
    className: "file-name"
});
var _default = (0, _easyWithStyle).default(FileNameEntryDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2VudHJ5L2ZpbGVOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgRW50cnlEaXYgZnJvbSBcIi4uLy4uL2Rpdi9lbnRyeVwiO1xuXG5jbGFzcyBGaWxlTmFtZUVudHJ5RGl2IGV4dGVuZHMgRW50cnlEaXYge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgZmlsZU5hbWUgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBmaWxlTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEZpbGVOYW1lRW50cnlEaXYpYFxuXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgICAgIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWxCLE1BQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBY0ssaUVBSzNDOzs7Ozs7O0lBakJNLGdCQUFnQjtjQUFoQixnQkFBZ0I7YUFBaEIsZ0JBQWdCOzhCQUFoQixnQkFBZ0I7Z0VBQWhCLGdCQUFnQjs7aUJBQWhCLGdCQUFnQjs7WUFDcEIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDVSxXQUFlLFFBQVYsVUFBVSxFQUE1QixRQUFRLEdBQUssV0FBZSxDQUE1QixRQUFRO3VCQUVULFFBQVE7Ozs7V0FKYixnQkFBZ0I7RUFGRCxNQUFpQjtnQkFFaEMsZ0JBQWdCLEdBT2IsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxTQUFXOzttQkFaSixjQUFpQixVQWdCZCxnQkFBZ0IifQ==