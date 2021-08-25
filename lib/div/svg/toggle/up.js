"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _up = _interopRequireDefault(require("../../../svg/toggle/up"));
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
var UpToggleSVGDiv = /*#__PURE__*/ function(Element1) {
    _inherits(UpToggleSVGDiv, Element1);
    function UpToggleSVGDiv() {
        _classCallCheck(this, UpToggleSVGDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(UpToggleSVGDiv).apply(this, arguments));
    }
    _createClass(UpToggleSVGDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var _constructor = this.constructor, UpToggleSVG = _constructor.UpToggleSVG;
                return(/*#__PURE__*/ React.createElement(UpToggleSVG, null));
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showUpToggleSVGDiv = this.show.bind(this), hideUpToggleSVGDiv = this.hide.bind(this); ///
                return {
                    showUpToggleSVGDiv: showUpToggleSVGDiv,
                    hideUpToggleSVGDiv: hideUpToggleSVGDiv
                };
            }
        }
    ]);
    return UpToggleSVGDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(UpToggleSVGDiv, "UpToggleSVG", _up.default);
_defineProperty(UpToggleSVGDiv, "tagName", "div");
_defineProperty(UpToggleSVGDiv, "defaultProperties", {
    className: "up-toggle-svg"
});
exports.default = UpToggleSVGDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvc3ZnL3RvZ2dsZS91cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBVcFRvZ2dsZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL3RvZ2dsZS91cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcFRvZ2dsZVNWR0RpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgVXBUb2dnbGVTVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8VXBUb2dnbGVTVkcvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd1VwVG9nZ2xlU1ZHRGl2ID0gdGhpcy5zaG93LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBoaWRlVXBUb2dnbGVTVkdEaXYgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93VXBUb2dnbGVTVkdEaXYsXG4gICAgICBoaWRlVXBUb2dnbGVTVkdEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBVcFRvZ2dsZVNWRyA9IFVwVG9nZ2xlU1ZHO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInVwLXRvZ2dsZS1zdmdcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVksS0FBTTtJQUVOLEdBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUzQixjQUFjO2NBQWQsY0FBYzthQUFkLGNBQWM7OEJBQWQsY0FBYztnRUFBZCxjQUFjOztpQkFBZCxjQUFjOztZQUNqQyxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNhLFlBQWdCLFFBQVgsV0FBVyxFQUFoQyxXQUFXLEdBQUssWUFBZ0IsQ0FBaEMsV0FBVzt5REFJaEIsV0FBVzs7OztZQUtoQixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNMLGtCQUFrQixRQUFRLElBQUksQ0FBQyxJQUFJLFFBQ25DLGtCQUFrQixRQUFRLElBQUksQ0FBQyxJQUFJLE9BQVMsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOztvQkFHbkQsa0JBQWtCLEVBQWxCLGtCQUFrQjtvQkFDbEIsa0JBQWtCLEVBQWxCLGtCQUFrQjs7Ozs7V0FqQkgsY0FBYzttQkFKWCxLQUFNO2dCQUlULGNBQWMsR0FxQjFCLFdBQVcsR0F2QkksR0FBd0I7Z0JBRTNCLGNBQWMsR0F1QjFCLE9BQU8sSUFBRyxHQUFLO2dCQXZCSCxjQUFjLEdBeUIxQixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLGFBQWU7O2tCQTFCVCxjQUFjIn0=