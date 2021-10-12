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
        "\n\n  fill: #000000;\n  width: auto;\n  height: ",
        ";\n  stroke: #000000;\n  margin-right: ",
        ";\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var UpToggleSVG = /*#__PURE__*/ function(Element) {
    _inherits(UpToggleSVG, Element);
    function UpToggleSVG() {
        _classCallCheck(this, UpToggleSVG);
        return _possibleConstructorReturn(this, _getPrototypeOf(UpToggleSVG).apply(this, arguments));
    }
    _createClass(UpToggleSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:1px",
                    d: "m 264,50 -14,7 V 44 Z"
                })));
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showUpToggleSVG = this.show.bind(this), hideUpToggleSVG = this.hide.bind(this); ///
                return {
                    showUpToggleSVG: showUpToggleSVG,
                    hideUpToggleSVG: hideUpToggleSVG
                };
            }
        }
    ]);
    return UpToggleSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(UpToggleSVG, "tagName", "svg");
_defineProperty(UpToggleSVG, "defaultProperties", {
    width: "32",
    height: "32",
    viewBox: "240 30 32 32",
    className: "up-toggle"
});
var _default = (0, _easyWithStyle).default(UpToggleSVG)(_templateObject(), _styles.toggleSVGHeight, _styles.toggleSVGPaddingRight);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9nZ2xlL3VwLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIkVsZW1lbnQiLCJ0b2dnbGVTVkdIZWlnaHQiLCJ0b2dnbGVTVkdQYWRkaW5nUmlnaHQiLCJVcFRvZ2dsZVNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwicGF0aCIsInN0eWxlIiwiZCIsInBhcmVudENvbnRleHQiLCJzaG93VXBUb2dnbGVTVkciLCJzaG93IiwiYmluZCIsImhpZGVVcFRvZ2dsZVNWRyIsImhpZGUiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFNLENBQU4sS0FBTTtBQUV5QixHQUFjLENBQWQsT0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFpQy9CLENBSTVCO1FBQWtCLENBRVo7UUFBd0IsQ0FHeEM7Ozs7Ozs7SUF4Q00sV0FBVyxpQkFBakIsUUFBUTtjQUFGLFdBQVc7YUFBWCxXQUFXOzhCQUFYLFdBQVc7Z0VBQVgsV0FBVzs7aUJBQVgsV0FBVzs7WUFDZixHQUFhLEVBQWIsQ0FBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsTUFBTSxtQ0FFSCxDQUFDLDRDQUNDLENBQUk7b0JBQUMsS0FBSyxFQUFDLENBQWtCO29CQUFDLENBQUMsRUFBQyxDQUF1Qjs7WUFJOUQsQ0FBQzs7O1lBRUQsR0FBYSxFQUFiLENBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUNyQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFakQsTUFBTSxDQUFFLENBQUM7b0JBQ1AsZUFBZSxFQUFmLGVBQWU7b0JBQ2YsZUFBZSxFQUFmLGVBQWU7Z0JBQ2pCLENBQUM7WUFDSCxDQUFDOzs7V0FuQkcsV0FBVzttQkFKTyxLQUFNO2dCQUl4QixXQUFXLEVBcUJSLENBQU8sVUFBRyxDQUFLO2dCQXJCbEIsV0FBVyxFQXVCUixDQUFpQixvQkFBRyxDQUFDO0lBQzFCLEtBQUssRUFBRSxDQUFJO0lBQ1gsTUFBTSxFQUFFLENBQUk7SUFDWixPQUFPLEVBQUUsQ0FBYztJQUN2QixTQUFTLEVBQUUsQ0FBVztBQUN4QixDQUFDO21CQWxDbUIsY0FBaUIsVUFxQ2QsV0FBVyxxQkFqQ21CLE9BQWMsa0JBQWQsT0FBYyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IHRvZ2dsZVNWR0hlaWdodCwgdG9nZ2xlU1ZHUGFkZGluZ1JpZ2h0IH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBVcFRvZ2dsZVNWRyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDoxcHhcIiBkPVwibSAyNjQsNTAgLTE0LDcgViA0NCBaXCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dVcFRvZ2dsZVNWRyA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBoaWRlVXBUb2dnbGVTVkcgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dVcFRvZ2dsZVNWRyxcbiAgICAgIGhpZGVVcFRvZ2dsZVNWR1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInN2Z1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB3aWR0aDogXCIzMlwiLFxuICAgIGhlaWdodDogXCIzMlwiLFxuICAgIHZpZXdCb3g6IFwiMjQwIDMwIDMyIDMyXCIsXG4gICAgY2xhc3NOYW1lOiBcInVwLXRvZ2dsZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShVcFRvZ2dsZVNWRylgXG5cbiAgZmlsbDogIzAwMDAwMDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogJHt0b2dnbGVTVkdIZWlnaHR9O1xuICBzdHJva2U6ICMwMDAwMDA7XG4gIG1hcmdpbi1yaWdodDogJHt0b2dnbGVTVkdQYWRkaW5nUmlnaHR9O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBcbmA7XG4iXX0=