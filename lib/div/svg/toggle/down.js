"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _down = _interopRequireDefault(require("../../../svg/toggle/down"));
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
var DownToggleSVGDiv = /*#__PURE__*/ function(Element1) {
    _inherits(DownToggleSVGDiv, Element1);
    function DownToggleSVGDiv() {
        _classCallCheck(this, DownToggleSVGDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(DownToggleSVGDiv).apply(this, arguments));
    }
    _createClass(DownToggleSVGDiv, [
        {
            key: "getDownToggleSVG",
            value: function getDownToggleSVG() {
                var _constructor = this.constructor, DownToggleSVG = _constructor.DownToggleSVG;
                return DownToggleSVG;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var DownToggleSVG = this.getDownToggleSVG();
                return(/*#__PURE__*/ React.createElement(DownToggleSVG, null));
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showDownToggleSVGDiv = this.show.bind(this), hideDownToggleSVGDiv = this.hide.bind(this); ///
                return {
                    showDownToggleSVGDiv: showDownToggleSVGDiv,
                    hideDownToggleSVGDiv: hideDownToggleSVGDiv
                };
            }
        }
    ]);
    return DownToggleSVGDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(DownToggleSVGDiv, "DownToggleSVG", _down.default);
_defineProperty(DownToggleSVGDiv, "tagName", "div");
_defineProperty(DownToggleSVGDiv, "defaultProperties", {
    className: "down-toggle-svg"
});
exports.default = DownToggleSVGDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvc3ZnL3RvZ2dsZS9kb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IERvd25Ub2dnbGVTVkcgZnJvbSBcIi4uLy4uLy4uL3N2Zy90b2dnbGUvZG93blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb3duVG9nZ2xlU1ZHRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldERvd25Ub2dnbGVTVkcoKSB7XG4gICAgY29uc3QgeyBEb3duVG9nZ2xlU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIERvd25Ub2dnbGVTVkc7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IERvd25Ub2dnbGVTVkcgPSB0aGlzLmdldERvd25Ub2dnbGVTVkcoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxEb3duVG9nZ2xlU1ZHLz5cblxuICAgICk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dEb3duVG9nZ2xlU1ZHRGl2ID0gdGhpcy5zaG93LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBoaWRlRG93blRvZ2dsZVNWR0RpdiA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dEb3duVG9nZ2xlU1ZHRGl2LFxuICAgICAgaGlkZURvd25Ub2dnbGVTVkdEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBEb3duVG9nZ2xlU1ZHID0gRG93blRvZ2dsZVNWRztcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkb3duLXRvZ2dsZS1zdmdcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVksS0FBTTtJQUVKLEtBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUvQixnQkFBZ0I7Y0FBaEIsZ0JBQWdCO2FBQWhCLGdCQUFnQjs4QkFBaEIsZ0JBQWdCO2dFQUFoQixnQkFBZ0I7O2lCQUFoQixnQkFBZ0I7O1lBQ25DLEdBQWdCLEdBQWhCLGdCQUFnQjs0QkFBaEIsZ0JBQWdCO29CQUNZLFlBQWdCLFFBQVgsV0FBVyxFQUFsQyxhQUFhLEdBQUssWUFBZ0IsQ0FBbEMsYUFBYTt1QkFFZCxhQUFhOzs7O1lBR3RCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wsYUFBYSxRQUFRLGdCQUFnQjt5REFJeEMsYUFBYTs7OztZQUtsQixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNMLG9CQUFvQixRQUFRLElBQUksQ0FBQyxJQUFJLFFBQ3JDLG9CQUFvQixRQUFRLElBQUksQ0FBQyxJQUFJLE9BQVMsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOztvQkFHckQsb0JBQW9CLEVBQXBCLG9CQUFvQjtvQkFDcEIsb0JBQW9CLEVBQXBCLG9CQUFvQjs7Ozs7V0F2QkwsZ0JBQWdCO21CQUpiLEtBQU07Z0JBSVQsZ0JBQWdCLEdBMkI1QixhQUFhLEdBN0JJLEtBQTBCO2dCQUUvQixnQkFBZ0IsR0E2QjVCLE9BQU8sSUFBRyxHQUFLO2dCQTdCSCxnQkFBZ0IsR0ErQjVCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsZUFBaUI7O2tCQWhDWCxnQkFBZ0IifQ==