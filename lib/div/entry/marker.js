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
        "\n\n  width: 4rem;\n  height: 2.4rem;\n  margin-left: 2rem;\n  background-color: yellow;\n  background-image: url(\"css/image/marker.png\");\n  background-repeat: no-repeat;\n  background-position: 0 1rem;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MarkerEntryDiv = /*#__PURE__*/ function(EntryDiv) {
    _inherits(MarkerEntryDiv, EntryDiv);
    function MarkerEntryDiv() {
        _classCallCheck(this, MarkerEntryDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(MarkerEntryDiv).apply(this, arguments));
    }
    _createClass(MarkerEntryDiv, [
        {
            key: "getName",
            value: function getName() {
                var _properties = this.properties, name = _properties.name;
                return name;
            }
        }
    ]);
    return MarkerEntryDiv;
}(_entry.default);
_defineProperty(MarkerEntryDiv, "defaultProperties", {
    className: "marker"
});
var _default = (0, _easyWithStyle).default(MarkerEntryDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvZW50cnkvbWFya2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgRW50cnlEaXYgZnJvbSBcIi4uLy4uL2Rpdi9lbnRyeVwiO1xuXG5jbGFzcyBNYXJrZXJFbnRyeURpdiBleHRlbmRzIEVudHJ5RGl2IHtcbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtYXJrZXJcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTWFya2VyRW50cnlEaXYpYFxuXG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDIuNHJlbTtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiY3NzL2ltYWdlL21hcmtlci5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMXJlbTtcblxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWxCLE1BQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBY0csaU5BVXpDOzs7Ozs7O0lBdEJNLGNBQWM7Y0FBZCxjQUFjO2FBQWQsY0FBYzs4QkFBZCxjQUFjO2dFQUFkLGNBQWM7O2lCQUFkLGNBQWM7O1lBQ2xCLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU87b0JBQ1ksV0FBZSxRQUFWLFVBQVUsRUFBeEIsSUFBSSxHQUFLLFdBQWUsQ0FBeEIsSUFBSTt1QkFFTCxJQUFJOzs7O1dBSlQsY0FBYztFQUZDLE1BQWlCO2dCQUVoQyxjQUFjLEdBT1gsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxNQUFROzttQkFaRCxjQUFpQixVQWdCZCxjQUFjIn0=