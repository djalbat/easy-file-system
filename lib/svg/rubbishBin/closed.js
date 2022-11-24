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
        "\n\n  fill: none;\n  width: auto;\n  stroke: #000000;\n  height: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ClosedRubbishBinSVG = /*#__PURE__*/ function(Element) {
    _inherits(ClosedRubbishBinSVG, Element);
    var _super = _createSuper(ClosedRubbishBinSVG);
    function ClosedRubbishBinSVG() {
        _classCallCheck(this, ClosedRubbishBinSVG);
        return _super.apply(this, arguments);
    }
    _createClass(ClosedRubbishBinSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:2.83465",
                    d: "M 40,34 V 60"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:2.83465",
                    d: "M 46,34 V 60"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:3.77953",
                    d: "m 16,30 v 32 l 2,2 h 32 l 2,-2 V 30"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:3.77953",
                    d: "M 12,30 H 56"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:3.77953",
                    d: "m 24,30 -2,-8 h 24 l -2,8"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:2.83465",
                    d: "M 22,34 V 60"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:2.83465",
                    d: "M 28,34 V 60"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:2.83465",
                    d: "M 34,34 V 60"
                }));
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showClosedRubbishBinSVG = this.show.bind(this), hideClosedRubbishBinSVG = this.hide.bind(this); ///
                return {
                    showClosedRubbishBinSVG: showClosedRubbishBinSVG,
                    hideClosedRubbishBinSVG: hideClosedRubbishBinSVG
                };
            }
        }
    ]);
    return ClosedRubbishBinSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(ClosedRubbishBinSVG, "tagName", "svg");
_defineProperty(ClosedRubbishBinSVG, "defaultProperties", {
    width: "60",
    height: "60",
    viewBox: "4 10 60 60",
    className: "closed-rubbish-bin"
});
var _default = (0, _easyWithStyle.default)(ClosedRubbishBinSVG)(_templateObject(), _styles.rubbishBinSVGHeight);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvcnViYmlzaEJpbi9jbG9zZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBydWJiaXNoQmluU1ZHSGVpZ2h0IH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBDbG9zZWRSdWJiaXNoQmluU1ZHIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjIuODM0NjVcIiBkPVwiTSA0MCwzNCBWIDYwXCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6Mi44MzQ2NVwiIGQ9XCJNIDQ2LDM0IFYgNjBcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDozLjc3OTUzXCIgZD1cIm0gMTYsMzAgdiAzMiBsIDIsMiBoIDMyIGwgMiwtMiBWIDMwXCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6My43Nzk1M1wiIGQ9XCJNIDEyLDMwIEggNTZcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDozLjc3OTUzXCIgZD1cIm0gMjQsMzAgLTIsLTggaCAyNCBsIC0yLDhcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDoyLjgzNDY1XCIgZD1cIk0gMjIsMzQgViA2MFwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjIuODM0NjVcIiBkPVwiTSAyOCwzNCBWIDYwXCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6Mi44MzQ2NVwiIGQ9XCJNIDM0LDM0IFYgNjBcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd0Nsb3NlZFJ1YmJpc2hCaW5TVkcgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaGlkZUNsb3NlZFJ1YmJpc2hCaW5TVkcgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dDbG9zZWRSdWJiaXNoQmluU1ZHLFxuICAgICAgaGlkZUNsb3NlZFJ1YmJpc2hCaW5TVkdcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzdmdcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgd2lkdGg6IFwiNjBcIixcbiAgICBoZWlnaHQ6IFwiNjBcIixcbiAgICB2aWV3Qm94OiBcIjQgMTAgNjAgNjBcIixcbiAgICBjbGFzc05hbWU6IFwiY2xvc2VkLXJ1YmJpc2gtYmluXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKENsb3NlZFJ1YmJpc2hCaW5TVkcpYFxuXG4gIGZpbGw6IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBzdHJva2U6ICMwMDAwMDA7XG4gIGhlaWdodDogJHtydWJiaXNoQmluU1ZHSGVpZ2h0fTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkNsb3NlZFJ1YmJpc2hCaW5TVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInBhdGgiLCJzdHlsZSIsImQiLCJwYXJlbnRDb250ZXh0Iiwic2hvd0Nsb3NlZFJ1YmJpc2hCaW5TVkciLCJzaG93IiwiYmluZCIsImhpZGVDbG9zZWRSdWJiaXNoQmluU1ZHIiwiaGlkZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJydWJiaXNoQmluU1ZHSGVpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4Q0E7OztlQUFBOzs7a0VBNUNzQjtvQkFFRTtzQkFFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxJQUFBLEFBQU1BLG9DQXNDSCxBQXRDSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQXVCQyxHQUFFO2tDQUNyQyxvQkFBQ0Y7b0JBQUtDLE9BQU07b0JBQXVCQyxHQUFFO2tDQUNyQyxvQkFBQ0Y7b0JBQUtDLE9BQU07b0JBQXVCQyxHQUFFO2tDQUNyQyxvQkFBQ0Y7b0JBQUtDLE9BQU07b0JBQXVCQyxHQUFFO2tDQUNyQyxvQkFBQ0Y7b0JBQUtDLE9BQU07b0JBQXVCQyxHQUFFO2tDQUNyQyxvQkFBQ0Y7b0JBQUtDLE9BQU07b0JBQXVCQyxHQUFFO2tDQUNyQyxvQkFBQ0Y7b0JBQUtDLE9BQU07b0JBQXVCQyxHQUFFO2tDQUNyQyxvQkFBQ0Y7b0JBQUtDLE9BQU07b0JBQXVCQyxHQUFFOztZQUkzQzs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QsSUFBTUMsMEJBQTBCLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUM3Q0MsMEJBQTBCLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRXpELE9BQVE7b0JBQ05GLHlCQUFBQTtvQkFDQUcseUJBQUFBO2dCQUNGO1lBQ0Y7OztXQTFCSVY7bUJBQTRCWSxhQUFPO0FBNEJ2QyxnQkE1QklaLHFCQTRCR2EsV0FBVTtBQUVqQixnQkE5QkliLHFCQThCR2MscUJBQW9CO0lBQ3pCQyxPQUFPO0lBQ1BDLFFBQVE7SUFDUkMsU0FBUztJQUNUQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDbkIsd0NBS2JvQiwyQkFBbUIifQ==