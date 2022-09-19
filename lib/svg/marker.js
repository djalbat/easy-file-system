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
var _default = (0, _easyWithStyle.default)(MarkerSVG)(_templateObject(), _styles.markerSVGHeight, _styles.markerSVGMarginLeft);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvbWFya2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IG1hcmtlclNWR0hlaWdodCwgbWFya2VyU1ZHTWFyZ2luTGVmdCB9IGZyb20gXCIuLi9zdHlsZXNcIjtcblxuY2xhc3MgTWFya2VyU1ZHIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjZcIiBkPVwibSA5Myw2MCBoIDMwXCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3ZnXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHdpZHRoOiBcIjMyXCIsXG4gICAgaGVpZ2h0OiBcIjMyXCIsXG4gICAgdmlld0JveDogXCI5MiA0MyAzMiAzMlwiLFxuICAgIGNsYXNzTmFtZTogXCJtYXJrZXJcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTWFya2VyU1ZHKWBcblxuICBmaWxsOiBub25lO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAke21hcmtlclNWR0hlaWdodH07XG4gIHN0cm9rZTogIzAwMDAwMDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tbGVmdDogJHttYXJrZXJTVkdNYXJnaW5MZWZ0fTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIk1hcmtlclNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwicGF0aCIsInN0eWxlIiwiZCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJtYXJrZXJTVkdIZWlnaHQiLCJtYXJrZXJTVkdNYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBNkJiLFNBVUU7OztlQVZGLFFBVUU7OztrRUFyQ29CLGlCQUFpQjtvQkFFZixNQUFNO3NCQUV1QixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRSxJQUFBLEFBQU1BLFNBQVMsaUJBcUJaLEFBckJIO2NBQU1BLFNBQVM7OEJBQVRBLFNBQVM7YUFBVEEsU0FBUzs4QkFBVEEsU0FBUzs7O2lCQUFUQSxTQUFTOztZQUNiQyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxxQkFFRSxvQkFBQ0MsR0FBQyxzQkFDQSxvQkFBQ0MsTUFBSTtvQkFBQ0MsS0FBSyxFQUFDLGdCQUFnQjtvQkFBQ0MsQ0FBQyxFQUFDLGNBQWM7a0JBQUcsQ0FDOUMsQ0FFSjtZQUNKLENBQUM7OztXQVRHTCxTQUFTO0NBbUJkLGtCQW5CdUJNLEtBQU8sUUFBQSxFQW1COUI7QUFSQyxnQkFYSU4sU0FBUyxFQVdOTyxTQUFPLEVBQUcsS0FBSyxDQUFDO0FBRXZCLGdCQWJJUCxTQUFTLEVBYU5RLG1CQUFpQixFQUFHO0lBQ3pCQyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxNQUFNLEVBQUUsSUFBSTtJQUNaQyxPQUFPLEVBQUUsYUFBYTtJQUN0QkMsU0FBUyxFQUFFLFFBQVE7Q0FDcEIsQ0FBQztJQUdKLFFBVUUsR0FWYUMsSUFBQUEsY0FBUyxRQUFBLEVBQUNiLFNBQVMsQ0FBQyxvQkFJdkJjLE9BQWUsZ0JBQUEsRUFHVkMsT0FBbUIsb0JBQUEifQ==