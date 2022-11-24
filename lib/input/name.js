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
var _constants = require("../constants");
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
        "\n  \n  width: fit-context;\n  border: 1px solid black;\n  display: inline-block;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var NameInput = /*#__PURE__*/ function(Element) {
    _inherits(NameInput, Element);
    var _super = _createSuper(NameInput);
    function NameInput() {
        _classCallCheck(this, NameInput);
        return _super.apply(this, arguments);
    }
    _createClass(NameInput, [
        {
            key: "show",
            value: function show() {
                var display = _constants.INLINE_BLOCK;
                this.display(display);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showNameInput = this.show.bind(this), hideNameInput = this.hide.bind(this); ///
                return {
                    showNameInput: showNameInput,
                    hideNameInput: hideNameInput
                };
            }
        }
    ]);
    return NameInput;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(NameInput, "tagName", "span");
_defineProperty(NameInput, "defaultProperties", {
    role: "textbox",
    className: "name",
    contentEditable: "true"
});
var _default = (0, _easyWithStyle.default)(NameInput)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IElOTElORV9CTE9DSyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgTmFtZUlucHV0IGV4dGVuZHMgRWxlbWVudCB7XG4gIHNob3coKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IElOTElORV9CTE9DSztcblxuICAgIHRoaXMuZGlzcGxheShkaXNwbGF5KTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd05hbWVJbnB1dCA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBoaWRlTmFtZUlucHV0ID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93TmFtZUlucHV0LFxuICAgICAgaGlkZU5hbWVJbnB1dFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInNwYW5cIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgcm9sZTogXCJ0ZXh0Ym94XCIsXG4gICAgY2xhc3NOYW1lOiBcIm5hbWVcIixcbiAgICBjb250ZW50RWRpdGFibGU6IFwidHJ1ZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShOYW1lSW5wdXQpYFxuICBcbiAgd2lkdGg6IGZpdC1jb250ZXh0O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiTmFtZUlucHV0Iiwic2hvdyIsImRpc3BsYXkiLCJJTkxJTkVfQkxPQ0siLCJwYXJlbnRDb250ZXh0Iiwic2hvd05hbWVJbnB1dCIsImJpbmQiLCJoaWRlTmFtZUlucHV0IiwiaGlkZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJyb2xlIiwiY2xhc3NOYW1lIiwiY29udGVudEVkaXRhYmxlIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQ0E7OztlQUFBOzs7a0VBL0JzQjtvQkFFRTt5QkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEsMEJBMEJILEFBMUJIO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPO2dCQUNMLElBQU1DLFVBQVVDLHVCQUFZO2dCQUU1QixJQUFJLENBQUNELE9BQU8sQ0FBQ0E7WUFDZjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0osSUFBSSxDQUFDSyxJQUFJLENBQUMsSUFBSSxHQUNuQ0MsZ0JBQWdCLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRS9DLE9BQVE7b0JBQ05ELGVBQUFBO29CQUNBRSxlQUFBQTtnQkFDRjtZQUNGOzs7V0FmSVA7bUJBQWtCUyxhQUFPO0FBaUI3QixnQkFqQklULFdBaUJHVSxXQUFVO0FBRWpCLGdCQW5CSVYsV0FtQkdXLHFCQUFvQjtJQUN6QkMsTUFBTTtJQUNOQyxXQUFXO0lBQ1hDLGlCQUFpQjtBQUNuQjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNmIn0=