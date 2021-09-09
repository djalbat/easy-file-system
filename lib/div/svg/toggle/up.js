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
var UpToggleSVGDiv = /*#__PURE__*/ function(Element) {
    _inherits(UpToggleSVGDiv, Element);
    function UpToggleSVGDiv() {
        _classCallCheck(this, UpToggleSVGDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(UpToggleSVGDiv).apply(this, arguments));
    }
    _createClass(UpToggleSVGDiv, [
        {
            key: "getUpToggleSVG",
            value: function getUpToggleSVG() {
                var _constructor = this.constructor, UpToggleSVG = _constructor.UpToggleSVG;
                return UpToggleSVG;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var UpToggleSVG = this.getUpToggleSVG();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvc3ZnL3RvZ2dsZS91cC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwiVXBUb2dnbGVTVkciLCJVcFRvZ2dsZVNWR0RpdiIsImdldFVwVG9nZ2xlU1ZHIiwiY29uc3RydWN0b3IiLCJjaGlsZEVsZW1lbnRzIiwicGFyZW50Q29udGV4dCIsInNob3dVcFRvZ2dsZVNWR0RpdiIsInNob3ciLCJiaW5kIiwiaGlkZVVwVG9nZ2xlU1ZHRGl2IiwiaGlkZSIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFWSxHQUFNLENBQU4sS0FBTTtBQUVOLEdBQXdCLENBQXhCLEdBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUzQixjQUFjLGlCQUFwQixRQUFRO2NBQUYsY0FBYzthQUFkLGNBQWM7OEJBQWQsY0FBYztnRUFBZCxjQUFjOztpQkFBZCxjQUFjOztZQUNqQyxHQUFjLEdBQWQsY0FBYzttQkFBZCxRQUFRLENBQVIsY0FBYyxHQUFHLENBQUM7Z0JBQ2hCLEdBQUssQ0FBbUIsWUFBZ0IsR0FBaEIsSUFBSSxDQUFDLFdBQVcsRUFBaEMsV0FBVyxHQUFLLFlBQWdCLENBQWhDLFdBQVc7Z0JBRW5CLE1BQU0sQ0FBQyxXQUFXO1lBQ3BCLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjO2dCQUV2QyxNQUFNLG1DQUVILFdBQVc7WUFHaEIsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQ3hDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXJELE1BQU0sQ0FBRSxDQUFDO29CQUNQLGtCQUFrQixFQUFsQixrQkFBa0I7b0JBQ2xCLGtCQUFrQixFQUFsQixrQkFBa0I7Z0JBQ3BCLENBQUM7WUFDSCxDQUFDOzs7V0F6QmtCLGNBQWM7bUJBSlgsS0FBTTtnQkFJVCxjQUFjLEdBMkIxQixXQUFXLEdBN0JJLEdBQXdCO2dCQUUzQixjQUFjLEdBNkIxQixPQUFPLElBQUcsR0FBSztnQkE3QkgsY0FBYyxHQStCMUIsaUJBQWlCLEdBQUcsQ0FBQztJQUMxQixTQUFTLEdBQUUsYUFBZTtBQUM1QixDQUFDO2tCQWpDa0IsY0FBYyJ9