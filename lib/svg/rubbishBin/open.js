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
var OpenRubbishBinSVG = /*#__PURE__*/ function(Element) {
    _inherits(OpenRubbishBinSVG, Element);
    var _super = _createSuper(OpenRubbishBinSVG);
    function OpenRubbishBinSVG() {
        _classCallCheck(this, OpenRubbishBinSVG);
        return _super.apply(this, arguments);
    }
    _createClass(OpenRubbishBinSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:2.83465",
                    d: "M 100,34 V 60"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:2.83465",
                    d: "M 106,34 V 60"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:3.77953",
                    d: "m 76,30 v 32 l 2,2 h 32 l 2,-2 V 30"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:3.77953",
                    d: "m 72,24 h 44"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:3.77953",
                    d: "m 84,24 -2,-8 h 24 l -2,8"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:3.77953",
                    d: "m 74,30 h 40"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:2.83465",
                    d: "M 82,34 V 60"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:2.83465",
                    d: "M 88,34 V 60"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:2.83465",
                    d: "M 94,34 V 60"
                }));
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showOpenRubbishBinSVG = this.show.bind(this), hideOpenRubbishBinSVG = this.hide.bind(this); ///
                return {
                    showOpenRubbishBinSVG: showOpenRubbishBinSVG,
                    hideOpenRubbishBinSVG: hideOpenRubbishBinSVG
                };
            }
        }
    ]);
    return OpenRubbishBinSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(OpenRubbishBinSVG, "tagName", "svg");
_defineProperty(OpenRubbishBinSVG, "defaultProperties", {
    width: "60",
    height: "60",
    viewBox: "64 10 60 60",
    className: "open-rubbish-bin"
});
var _default = (0, _easyWithStyle.default)(OpenRubbishBinSVG)(_templateObject(), _styles.rubbishBinSVGHeight);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvcnViYmlzaEJpbi9vcGVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgcnViYmlzaEJpblNWR0hlaWdodCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgT3BlblJ1YmJpc2hCaW5TVkcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6Mi44MzQ2NVwiIGQ9XCJNIDEwMCwzNCBWIDYwXCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6Mi44MzQ2NVwiIGQ9XCJNIDEwNiwzNCBWIDYwXCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6My43Nzk1M1wiIGQ9XCJtIDc2LDMwIHYgMzIgbCAyLDIgaCAzMiBsIDIsLTIgViAzMFwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjMuNzc5NTNcIiBkPVwibSA3MiwyNCBoIDQ0XCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6My43Nzk1M1wiIGQ9XCJtIDg0LDI0IC0yLC04IGggMjQgbCAtMiw4XCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6My43Nzk1M1wiIGQ9XCJtIDc0LDMwIGggNDBcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDoyLjgzNDY1XCIgZD1cIk0gODIsMzQgViA2MFwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjIuODM0NjVcIiBkPVwiTSA4OCwzNCBWIDYwXCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6Mi44MzQ2NVwiIGQ9XCJNIDk0LDM0IFYgNjBcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd09wZW5SdWJiaXNoQmluU1ZHID0gdGhpcy5zaG93LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGhpZGVPcGVuUnViYmlzaEJpblNWRyA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd09wZW5SdWJiaXNoQmluU1ZHLFxuICAgICAgaGlkZU9wZW5SdWJiaXNoQmluU1ZHXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3ZnXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHdpZHRoOiBcIjYwXCIsXG4gICAgaGVpZ2h0OiBcIjYwXCIsXG4gICAgdmlld0JveDogXCI2NCAxMCA2MCA2MFwiLFxuICAgIGNsYXNzTmFtZTogXCJvcGVuLXJ1YmJpc2gtYmluXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE9wZW5SdWJiaXNoQmluU1ZHKWBcblxuICBmaWxsOiBub25lO1xuICB3aWR0aDogYXV0bztcbiAgc3Ryb2tlOiAjMDAwMDAwO1xuICBoZWlnaHQ6ICR7cnViYmlzaEJpblNWR0hlaWdodH07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJPcGVuUnViYmlzaEJpblNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwicGF0aCIsInN0eWxlIiwiZCIsInBhcmVudENvbnRleHQiLCJzaG93T3BlblJ1YmJpc2hCaW5TVkciLCJzaG93IiwiYmluZCIsImhpZGVPcGVuUnViYmlzaEJpblNWRyIsImhpZGUiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwicnViYmlzaEJpblNWR0hlaWdodCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK0NBOzs7ZUFBQTs7O2tFQTdDc0I7b0JBRUU7c0JBRVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBQSxBQUFNQSxrQ0F1Q0gsQUF2Q0g7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO29CQUFLQyxPQUFNO29CQUF1QkMsR0FBRTtrQ0FDckMsb0JBQUNGO29CQUFLQyxPQUFNO29CQUF1QkMsR0FBRTtrQ0FDckMsb0JBQUNGO29CQUFLQyxPQUFNO29CQUF1QkMsR0FBRTtrQ0FDckMsb0JBQUNGO29CQUFLQyxPQUFNO29CQUF1QkMsR0FBRTtrQ0FDckMsb0JBQUNGO29CQUFLQyxPQUFNO29CQUF1QkMsR0FBRTtrQ0FDckMsb0JBQUNGO29CQUFLQyxPQUFNO29CQUF1QkMsR0FBRTtrQ0FDckMsb0JBQUNGO29CQUFLQyxPQUFNO29CQUF1QkMsR0FBRTtrQ0FDckMsb0JBQUNGO29CQUFLQyxPQUFNO29CQUF1QkMsR0FBRTtrQ0FDckMsb0JBQUNGO29CQUFLQyxPQUFNO29CQUF1QkMsR0FBRTs7WUFJM0M7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQU1DLHdCQUF3QixJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDM0NDLHdCQUF3QixJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUV2RCxPQUFRO29CQUNORix1QkFBQUE7b0JBQ0FHLHVCQUFBQTtnQkFDRjtZQUNGOzs7V0EzQklWO21CQUEwQlksYUFBTztBQTZCckMsZ0JBN0JJWixtQkE2QkdhLFdBQVU7QUFFakIsZ0JBL0JJYixtQkErQkdjLHFCQUFvQjtJQUN6QkMsT0FBTztJQUNQQyxRQUFRO0lBQ1JDLFNBQVM7SUFDVEMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ25CLHNDQUtib0IsMkJBQW1CIn0=