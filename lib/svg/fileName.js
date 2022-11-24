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
        ";\n  stroke: #000000;\n  display: inline;\n  padding-left: ",
        ";\n  padding-right: ",
        ";\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var FileNameSVG = /*#__PURE__*/ function(Element) {
    _inherits(FileNameSVG, Element);
    var _super = _createSuper(FileNameSVG);
    function FileNameSVG() {
        _classCallCheck(this, FileNameSVG);
        return _super.apply(this, arguments);
    }
    _createClass(FileNameSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 142,34 v 8 h 8"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 128,34 v 26 h 22 V 42 l -8,-8 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 143,40 h 3"
                }));
            }
        }
    ]);
    return FileNameSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(FileNameSVG, "tagName", "svg");
_defineProperty(FileNameSVG, "defaultProperties", {
    width: "32",
    height: "32",
    viewBox: "121 31 32 32",
    className: "file-name"
});
var _default = (0, _easyWithStyle.default)(FileNameSVG)(_templateObject(), _styles.fileNameSVGHeight, _styles.fileNameSVGPaddingLeft, _styles.fileNameSVGPaddingRight);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvZmlsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IGZpbGVOYW1lU1ZHSGVpZ2h0LCBmaWxlTmFtZVNWR1BhZGRpbmdSaWdodCwgZmlsZU5hbWVTVkdQYWRkaW5nTGVmdCB9IGZyb20gXCIuLi9zdHlsZXNcIjtcblxuY2xhc3MgRmlsZU5hbWVTVkcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6NFwiIGQ9XCJtIDE0MiwzNCB2IDggaCA4XCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6NFwiIGQ9XCJtIDEyOCwzNCB2IDI2IGggMjIgViA0MiBsIC04LC04IHpcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDo0XCIgZD1cIm0gMTQzLDQwIGggM1wiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInN2Z1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB3aWR0aDogXCIzMlwiLFxuICAgIGhlaWdodDogXCIzMlwiLFxuICAgIHZpZXdCb3g6IFwiMTIxIDMxIDMyIDMyXCIsXG4gICAgY2xhc3NOYW1lOiBcImZpbGUtbmFtZVwiXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEZpbGVOYW1lU1ZHKWBcblxuICBmaWxsOiBub25lO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAke2ZpbGVOYW1lU1ZHSGVpZ2h0fTtcbiAgc3Ryb2tlOiAjMDAwMDAwO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmctbGVmdDogJHtmaWxlTmFtZVNWR1BhZGRpbmdMZWZ0fTtcbiAgcGFkZGluZy1yaWdodDogJHtmaWxlTmFtZVNWR1BhZGRpbmdSaWdodH07XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJGaWxlTmFtZVNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwicGF0aCIsInN0eWxlIiwiZCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJmaWxlTmFtZVNWR0hlaWdodCIsImZpbGVOYW1lU1ZHUGFkZGluZ0xlZnQiLCJmaWxlTmFtZVNWR1BhZGRpbmdSaWdodCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK0JBOzs7ZUFBQTs7O2tFQTdCc0I7b0JBRUU7c0JBRTJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkYsSUFBQSxBQUFNQSw0QkF1QkgsQUF2Qkg7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO29CQUFLQyxPQUFNO29CQUFpQkMsR0FBRTtrQ0FDL0Isb0JBQUNGO29CQUFLQyxPQUFNO29CQUFpQkMsR0FBRTtrQ0FDL0Isb0JBQUNGO29CQUFLQyxPQUFNO29CQUFpQkMsR0FBRTs7WUFJckM7OztXQVhJTDttQkFBb0JNLGFBQU87QUFhL0IsZ0JBYklOLGFBYUdPLFdBQVU7QUFFakIsZ0JBZklQLGFBZUdRLHFCQUFvQjtJQUN6QkMsT0FBTztJQUNQQyxRQUFRO0lBQ1JDLFNBQVM7SUFDVEMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2IsZ0NBSWJjLHlCQUFpQixFQUdYQyw4QkFBc0IsRUFDckJDLCtCQUF1QiJ9