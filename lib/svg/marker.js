"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _styles = require("../styles");
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
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
    "@swc/helpers - typeof";
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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
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
var MarkerSVG = /*#__PURE__*/ function(Element) {
    _inherits(MarkerSVG, Element);
    var _super = _createSuper(MarkerSVG);
    function MarkerSVG() {
        _classCallCheck(this, MarkerSVG);
        return _super.apply(this, arguments);
    }
    _createClass(MarkerSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:6",
                    d: "m 93,60 h 30"
                }));
            }
        }
    ]);
    return MarkerSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(MarkerSVG, "tagName", "svg");
_defineProperty(MarkerSVG, "defaultProperties", {
    width: "32",
    height: "32",
    viewBox: "92 43 32 32",
    className: "marker"
});
var _default = (0, _easyWithStyle.default)(MarkerSVG)(_templateObject(), _styles.markerSVGHeight, _styles.markerSVGPaddingLeft);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvbWFya2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IG1hcmtlclNWR0hlaWdodCwgbWFya2VyU1ZHUGFkZGluZ0xlZnQgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5cbmNsYXNzIE1hcmtlclNWRyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDo2XCIgZD1cIm0gOTMsNjAgaCAzMFwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInN2Z1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB3aWR0aDogXCIzMlwiLFxuICAgIGhlaWdodDogXCIzMlwiLFxuICAgIHZpZXdCb3g6IFwiOTIgNDMgMzIgMzJcIixcbiAgICBjbGFzc05hbWU6IFwibWFya2VyXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1hcmtlclNWRylgXG5cbiAgZmlsbDogbm9uZTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogJHttYXJrZXJTVkdIZWlnaHR9O1xuICBzdHJva2U6ICMwMDAwMDA7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLWxlZnQ6ICR7bWFya2VyU1ZHUGFkZGluZ0xlZnR9O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiTWFya2VyU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwic3R5bGUiLCJkIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsIm1hcmtlclNWR0hlaWdodCIsIm1hcmtlclNWR1BhZGRpbmdMZWZ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBNkJiLFNBVUU7OztlQVZGLFFBVUU7OztrRUFyQ29CLGlCQUFpQjtvQkFFZixNQUFNO3NCQUV3QixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRSxJQUFBLEFBQU1BLFNBQVMsaUJBcUJaLEFBckJIOzs7YUFBTUEsU0FBUzs7Ozs7O1lBQ2JDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLHFCQUVFLG9CQUFDQyxHQUFDLHNCQUNBLG9CQUFDQyxNQUFJO29CQUFDQyxLQUFLLEVBQUMsZ0JBQWdCO29CQUFDQyxDQUFDLEVBQUMsY0FBYztrQkFBRyxDQUM5QyxDQUVKO2FBQ0g7Ozs7Q0FVRixrQkFuQnVCQyxLQUFPLFFBQUEsRUFtQjlCO0FBUkMsZ0JBWElOLFNBQVMsRUFXTk8sU0FBTyxFQUFHLEtBQUssQ0FBQztBQUV2QixnQkFiSVAsU0FBUyxFQWFOUSxtQkFBaUIsRUFBRztJQUN6QkMsS0FBSyxFQUFFLElBQUk7SUFDWEMsTUFBTSxFQUFFLElBQUk7SUFDWkMsT0FBTyxFQUFFLGFBQWE7SUFDdEJDLFNBQVMsRUFBRSxRQUFRO0NBQ3BCLENBQUM7SUFHSixRQVVFLEdBVmFDLElBQUFBLGNBQVMsUUFBQSxFQUFDYixTQUFTLENBQUMsb0JBSXZCYyxPQUFlLGdCQUFBLEVBR1ZDLE9BQW9CLHFCQUFBIn0=