"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _entry = _interopRequireDefault(require("../../item/entry"));
var _marker = _interopRequireDefault(require("../../svg/marker"));
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
        "\n\n  width: 2rem;\n  height: 2.4rem;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MarkerEntryItem = /*#__PURE__*/ function(EntryItem) {
    _inherits(MarkerEntryItem, EntryItem);
    function MarkerEntryItem() {
        _classCallCheck(this, MarkerEntryItem);
        return _possibleConstructorReturn(this, _getPrototypeOf(MarkerEntryItem).apply(this, arguments));
    }
    _createClass(MarkerEntryItem, [
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement(_marker.default, null));
            }
        }
    ]);
    return MarkerEntryItem;
}(_entry.default);
_defineProperty(MarkerEntryItem, "defaultProperties", {
    className: "marker"
});
var _default = (0, _easyWithStyle).default(MarkerEntryItem)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L21hcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IEVudHJ5SXRlbSBmcm9tIFwiLi4vLi4vaXRlbS9lbnRyeVwiO1xuaW1wb3J0IE1hcmtlclNWRyBmcm9tIFwiLi4vLi4vc3ZnL21hcmtlclwiO1xuXG5jbGFzcyBNYXJrZXJFbnRyeUl0ZW0gZXh0ZW5kcyBFbnRyeUl0ZW0ge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxNYXJrZXJTVkcvPlxuXG4gICAgKTtcbiAgfVxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1hcmtlclwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShNYXJrZXJFbnRyeUl0ZW0pYFxuXG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDIuNHJlbTtcblxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWpCLE1BQWtCO0lBQ2xCLE9BQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBZUUseUNBSzFDOzs7Ozs7O0lBbEJNLGVBQWU7Y0FBZixlQUFlO2FBQWYsZUFBZTs4QkFBZixlQUFlO2dFQUFmLGVBQWU7O2lCQUFmLGVBQWU7O1lBQ25CLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7eURBSE8sT0FBa0I7Ozs7V0FFbEMsZUFBZTtFQUhDLE1BQWtCO2dCQUdsQyxlQUFlLEdBUVosaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxNQUFROzttQkFkRCxjQUFpQixVQWtCZCxlQUFlIn0=