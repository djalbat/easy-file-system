"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
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
        ";\n  stroke: #000000;\n  display: inline;\n  padding-right: ",
        ";\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DirectoryNameSVG = /*#__PURE__*/ function(Element1) {
    _inherits(DirectoryNameSVG, Element1);
    function DirectoryNameSVG() {
        _classCallCheck(this, DirectoryNameSVG);
        return _possibleConstructorReturn(this, _getPrototypeOf(DirectoryNameSVG).apply(this, arguments));
    }
    _createClass(DirectoryNameSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 168,32 v 22 h 26 V 38 h -26"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 166,32 h 12 l 6,6"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 169,35 h 11"
                })));
            }
        }
    ]);
    return DirectoryNameSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(DirectoryNameSVG, "tagName", "svg");
_defineProperty(DirectoryNameSVG, "defaultProperties", {
    width: "32",
    height: "32",
    viewBox: "165 25 32 32",
    className: "directory-name"
});
var _default = (0, _easyWithStyle).default(DirectoryNameSVG)(_templateObject(), _styles.directoryNameSVGHeight, _styles.directoryNameSVGPaddingRight);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBkaXJlY3RvcnlOYW1lU1ZHSGVpZ2h0LCBkaXJlY3RvcnlOYW1lU1ZHUGFkZGluZ1JpZ2h0IH0gZnJvbSBcIi4uL3N0eWxlc1wiO1xuXG5jbGFzcyBEaXJlY3RvcnlOYW1lU1ZHIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjRcIiBkPVwibSAxNjgsMzIgdiAyMiBoIDI2IFYgMzggaCAtMjZcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDo0XCIgZD1cIm0gMTY2LDMyIGggMTIgbCA2LDZcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDo0XCIgZD1cIm0gMTY5LDM1IGggMTFcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzdmdcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgd2lkdGg6IFwiMzJcIixcbiAgICBoZWlnaHQ6IFwiMzJcIixcbiAgICB2aWV3Qm94OiBcIjE2NSAyNSAzMiAzMlwiLFxuICAgIGNsYXNzTmFtZTogXCJkaXJlY3RvcnktbmFtZVwiXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERpcmVjdG9yeU5hbWVTVkcpYFxuXG4gIGZpbGw6IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6ICR7ZGlyZWN0b3J5TmFtZVNWR0hlaWdodH07XG4gIHN0cm9rZTogIzAwMDAwMDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nLXJpZ2h0OiAke2RpcmVjdG9yeU5hbWVTVkdQYWRkaW5nUmlnaHR9O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFFdUMsT0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F5QnJDLDZDQUlqQztTQUF5Qiw0REFHbEI7U0FBK0Isa0NBR2hEOzs7Ozs7O0lBakNNLGdCQUFnQjtjQUFoQixnQkFBZ0I7YUFBaEIsZ0JBQWdCOzhCQUFoQixnQkFBZ0I7Z0VBQWhCLGdCQUFnQjs7aUJBQWhCLGdCQUFnQjs7WUFDcEIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTswREFHUixDQUFDLDRDQUNDLElBQUk7b0JBQUMsS0FBSyxHQUFDLGNBQWdCO29CQUFDLENBQUMsR0FBQyw2QkFBK0I7dURBQzdELElBQUk7b0JBQUMsS0FBSyxHQUFDLGNBQWdCO29CQUFDLENBQUMsR0FBQyxtQkFBcUI7dURBQ25ELElBQUk7b0JBQUMsS0FBSyxHQUFDLGNBQWdCO29CQUFDLENBQUMsR0FBQyxhQUFlOzs7OztXQVBoRCxnQkFBZ0I7bUJBSkUsS0FBTTtnQkFJeEIsZ0JBQWdCLEdBYWIsT0FBTyxJQUFHLEdBQUs7Z0JBYmxCLGdCQUFnQixHQWViLGlCQUFpQjtJQUN0QixLQUFLLEdBQUUsRUFBSTtJQUNYLE1BQU0sR0FBRSxFQUFJO0lBQ1osT0FBTyxHQUFFLFlBQWM7SUFDdkIsU0FBUyxHQUFFLGNBQWdCOzttQkF6QlQsY0FBaUIsVUE2QmQsZ0JBQWdCLHFCQXpCNEIsT0FBVyx5QkFBWCxPQUFXIn0=