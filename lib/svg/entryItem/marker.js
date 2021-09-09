"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _styles = require("../../styles");
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  fill: none;\n  width: auto;\n  height: ",
        ";\n  stroke: #000000;\n  display: inline;\n  margin-left: ",
        ";\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MarkerEntryItemSVG = /*#__PURE__*/ function(Element1) {
    _inherits(MarkerEntryItemSVG, Element1);
    function MarkerEntryItemSVG() {
        _classCallCheck(this, MarkerEntryItemSVG);
        return _possibleConstructorReturn(this, _getPrototypeOf(MarkerEntryItemSVG).apply(this, arguments));
    }
    _createClass(MarkerEntryItemSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:6",
                    d: "m 93,60 h 30"
                })));
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showMarkerEntryItemSVG = this.show.bind(this), hideMarkerEntryItemSVG = this.hide.bind(this); ///
                return {
                    showMarkerEntryItemSVG: showMarkerEntryItemSVG,
                    hideMarkerEntryItemSVG: hideMarkerEntryItemSVG
                };
            }
        }
    ]);
    return MarkerEntryItemSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(MarkerEntryItemSVG, "tagName", "svg");
_defineProperty(MarkerEntryItemSVG, "defaultProperties", {
    width: "32",
    height: "32",
    viewBox: "92 43 32 32",
    className: "marker"
});
var _default = (0, _easyWithStyle).default(MarkerEntryItemSVG)(_templateObject(), _styles.entryItemSVGHeight, _styles.markerEntryItemSVGMarginLeft);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvZW50cnlJdGVtL21hcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBlbnRyeUl0ZW1TVkdIZWlnaHQsIG1hcmtlckVudHJ5SXRlbVNWR01hcmdpbkxlZnQgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIE1hcmtlckVudHJ5SXRlbVNWRyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDo2XCIgZD1cIm0gOTMsNjAgaCAzMFwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93TWFya2VyRW50cnlJdGVtU1ZHID0gdGhpcy5zaG93LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBoaWRlTWFya2VyRW50cnlJdGVtU1ZHID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd01hcmtlckVudHJ5SXRlbVNWRyxcbiAgICAgIGhpZGVNYXJrZXJFbnRyeUl0ZW1TVkdcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzdmdcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgd2lkdGg6IFwiMzJcIixcbiAgICBoZWlnaHQ6IFwiMzJcIixcbiAgICB2aWV3Qm94OiBcIjkyIDQzIDMyIDMyXCIsXG4gICAgY2xhc3NOYW1lOiBcIm1hcmtlclwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShNYXJrZXJFbnRyeUl0ZW1TVkcpYFxuXG4gIGZpbGw6IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6ICR7ZW50cnlJdGVtU1ZHSGVpZ2h0fTtcbiAgc3Ryb2tlOiAjMDAwMDAwO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1sZWZ0OiAke21hcmtlckVudHJ5SXRlbVNWR01hcmdpbkxlZnR9O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFFbUMsT0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FpQ2xDLDZDQUluQztTQUFxQiwwREFHaEI7U0FBK0Isa0NBRzlDOzs7Ozs7O0lBekNNLGtCQUFrQjtjQUFsQixrQkFBa0I7YUFBbEIsa0JBQWtCOzhCQUFsQixrQkFBa0I7Z0VBQWxCLGtCQUFrQjs7aUJBQWxCLGtCQUFrQjs7WUFDdEIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTswREFHUixDQUFDLDRDQUNDLElBQUk7b0JBQUMsS0FBSyxHQUFDLGNBQWdCO29CQUFDLENBQUMsR0FBQyxZQUFjOzs7OztZQU1uRCxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNMLHNCQUFzQixRQUFRLElBQUksQ0FBQyxJQUFJLFFBQ3ZDLHNCQUFzQixRQUFRLElBQUksQ0FBQyxJQUFJLE9BQVMsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOztvQkFHdkQsc0JBQXNCLEVBQXRCLHNCQUFzQjtvQkFDdEIsc0JBQXNCLEVBQXRCLHNCQUFzQjs7Ozs7V0FqQnRCLGtCQUFrQjttQkFKQSxLQUFNO2dCQUl4QixrQkFBa0IsR0FxQmYsT0FBTyxJQUFHLEdBQUs7Z0JBckJsQixrQkFBa0IsR0F1QmYsaUJBQWlCO0lBQ3RCLEtBQUssR0FBRSxFQUFJO0lBQ1gsTUFBTSxHQUFFLEVBQUk7SUFDWixPQUFPLEdBQUUsV0FBYTtJQUN0QixTQUFTLEdBQUUsTUFBUTs7bUJBakNELGNBQWlCLFVBcUNkLGtCQUFrQixxQkFqQ3NCLE9BQWMscUJBQWQsT0FBYyJ9