"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _entryItem = _interopRequireDefault(require("../../div/entryItem"));
var _background = _interopRequireDefault(require("../../div/background"));
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
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var MarkerEntryItemDiv = /*#__PURE__*/ function(EntryItemDiv) {
    _inherits(MarkerEntryItemDiv, EntryItemDiv);
    function MarkerEntryItemDiv() {
        _classCallCheck(this, MarkerEntryItemDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(MarkerEntryItemDiv).apply(this, arguments));
    }
    _createClass(MarkerEntryItemDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var MarkerSVG = this.properties.MarkerSVG;
                return [
                    /*#__PURE__*/ React.createElement(MarkerSVG, null),
                    /*#__PURE__*/ React.createElement(_background.default, null)
                ];
            }
        }
    ]);
    return MarkerEntryItemDiv;
}(_entryItem.default);
_defineProperty(MarkerEntryItemDiv, "defaultProperties", {
    className: "file-name"
});
exports.default = MarkerEntryItemDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvZW50cnlJdGVtL21hcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vZGl2L2VudHJ5SXRlbVwiO1xuaW1wb3J0IEJhY2tncm91bmREaXYgZnJvbSBcIi4uLy4uL2Rpdi9iYWNrZ3JvdW5kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlckVudHJ5SXRlbURpdiBleHRlbmRzIEVudHJ5SXRlbURpdiB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBNYXJrZXJTVkcgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8TWFya2VyU1ZHLz4sXG4gICAgICA8QmFja2dyb3VuZERpdi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJNYXJrZXJFbnRyeUl0ZW1EaXYiLCJjaGlsZEVsZW1lbnRzIiwiTWFya2VyU1ZHIiwicHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVhLEdBQXFCLENBQXJCLFVBQXFCO0FBQ3BCLEdBQXNCLENBQXRCLFdBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTNCQSxrQkFBa0IsaUJBQXhCLFFBQVE7Y0FBRkEsa0JBQWtCO2FBQWxCQSxrQkFBa0I7OEJBQWxCQSxrQkFBa0I7Z0VBQWxCQSxrQkFBa0I7O2lCQUFsQkEsa0JBQWtCOztZQUNyQ0MsR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBR0MsU0FBUyxHQUFLLElBQUksQ0FBQ0MsVUFBVSxDQUE3QkQsU0FBUztnQkFFakIsTUFBTSxDQUFFLENBQUM7c0RBRU5BLFNBQVM7c0RBUlUsV0FBc0I7Z0JBVzVDLENBQUM7WUFDSCxDQUFDOzs7V0FWa0JGLGtCQUFrQjtFQUhkLFVBQXFCO2dCQUd6QkEsa0JBQWtCLEVBWTlCSSxDQUFpQixvQkFBRyxDQUFDO0lBQzFCQyxTQUFTLEVBQUUsQ0FBVztBQUN4QixDQUFDO2tCQWRrQkwsa0JBQWtCIn0=