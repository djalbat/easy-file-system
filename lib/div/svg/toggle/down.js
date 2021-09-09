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
var DownToggleSVGDiv = /*#__PURE__*/ function(Element) {
    _inherits(DownToggleSVGDiv, Element);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvc3ZnL3RvZ2dsZS9kb3duLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJEb3duVG9nZ2xlU1ZHIiwiRG93blRvZ2dsZVNWR0RpdiIsImdldERvd25Ub2dnbGVTVkciLCJjb25zdHJ1Y3RvciIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRDb250ZXh0Iiwic2hvd0Rvd25Ub2dnbGVTVkdEaXYiLCJzaG93IiwiYmluZCIsImhpZGVEb3duVG9nZ2xlU1ZHRGl2IiwiaGlkZSIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFWSxHQUFNLENBQU4sS0FBTTtBQUVKLEdBQTBCLENBQTFCLEtBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUvQixnQkFBZ0IsaUJBQXRCLFFBQVE7Y0FBRixnQkFBZ0I7YUFBaEIsZ0JBQWdCOzhCQUFoQixnQkFBZ0I7Z0VBQWhCLGdCQUFnQjs7aUJBQWhCLGdCQUFnQjs7WUFDbkMsR0FBZ0IsR0FBaEIsZ0JBQWdCO21CQUFoQixRQUFRLENBQVIsZ0JBQWdCLEdBQUcsQ0FBQztnQkFDbEIsR0FBSyxDQUFxQixZQUFnQixHQUFoQixJQUFJLENBQUMsV0FBVyxFQUFsQyxhQUFhLEdBQUssWUFBZ0IsQ0FBbEMsYUFBYTtnQkFFckIsTUFBTSxDQUFDLGFBQWE7WUFDdEIsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQjtnQkFFM0MsTUFBTSxtQ0FFSCxhQUFhO1lBR2xCLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUMxQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUV2RCxNQUFNLENBQUUsQ0FBQztvQkFDUCxvQkFBb0IsRUFBcEIsb0JBQW9CO29CQUNwQixvQkFBb0IsRUFBcEIsb0JBQW9CO2dCQUN0QixDQUFDO1lBQ0gsQ0FBQzs7O1dBekJrQixnQkFBZ0I7bUJBSmIsS0FBTTtnQkFJVCxnQkFBZ0IsR0EyQjVCLGFBQWEsR0E3QkksS0FBMEI7Z0JBRS9CLGdCQUFnQixHQTZCNUIsT0FBTyxJQUFHLEdBQUs7Z0JBN0JILGdCQUFnQixHQStCNUIsaUJBQWlCLEdBQUcsQ0FBQztJQUMxQixTQUFTLEdBQUUsZUFBaUI7QUFDOUIsQ0FBQztrQkFqQ2tCLGdCQUFnQiJ9