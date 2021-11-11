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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var MarkerEntryItemDiv = /*#__PURE__*/ function(EntryItemDiv) {
    _inherits(MarkerEntryItemDiv, EntryItemDiv);
    var _super = _createSuper(MarkerEntryItemDiv);
    function MarkerEntryItemDiv() {
        _classCallCheck(this, MarkerEntryItemDiv);
        return _super.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvZW50cnlJdGVtL21hcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vZGl2L2VudHJ5SXRlbVwiO1xuaW1wb3J0IEJhY2tncm91bmREaXYgZnJvbSBcIi4uLy4uL2Rpdi9iYWNrZ3JvdW5kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlckVudHJ5SXRlbURpdiBleHRlbmRzIEVudHJ5SXRlbURpdiB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBNYXJrZXJTVkcgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8TWFya2VyU1ZHLz4sXG4gICAgICA8QmFja2dyb3VuZERpdi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJNYXJrZXJFbnRyeUl0ZW1EaXYiLCJjaGlsZEVsZW1lbnRzIiwiTWFya2VyU1ZHIiwicHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVhLEdBQXFCLENBQXJCLFVBQXFCO0FBQ3BCLEdBQXNCLENBQXRCLFdBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUzQkEsa0JBQWtCLGlCQUF4QixRQUFRO2NBQUZBLGtCQUFrQjs4QkFBbEJBLGtCQUFrQjthQUFsQkEsa0JBQWtCOzhCQUFsQkEsa0JBQWtCOzs7aUJBQWxCQSxrQkFBa0I7O1lBQ3JDQyxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFHQyxTQUFTLEdBQUssSUFBSSxDQUFDQyxVQUFVLENBQTdCRCxTQUFTO2dCQUVqQixNQUFNLENBQUUsQ0FBQztzREFFTkEsU0FBUztzREFSVSxXQUFzQjtnQkFXNUMsQ0FBQztZQUNILENBQUM7OztXQVZrQkYsa0JBQWtCO0VBSGQsVUFBcUI7Z0JBR3pCQSxrQkFBa0IsRUFZOUJJLENBQWlCLG9CQUFHLENBQUM7SUFDMUJDLFNBQVMsRUFBRSxDQUFXO0FBQ3hCLENBQUM7a0JBZGtCTCxrQkFBa0IifQ==