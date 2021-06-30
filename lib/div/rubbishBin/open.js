"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _open = _interopRequireDefault(require("../../svg/rubbishBin/open"));
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
        "\n\n  width: 24rem;\n  height: 24rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var OpenRubbishBinDiv = /*#__PURE__*/ function(Element1) {
    _inherits(OpenRubbishBinDiv, Element1);
    function OpenRubbishBinDiv() {
        _classCallCheck(this, OpenRubbishBinDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(OpenRubbishBinDiv).apply(this, arguments));
    }
    _createClass(OpenRubbishBinDiv, [
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement(_open.default, null));
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showOpenRubbishBinDiv = this.show.bind(this), hideOpenRubbishBinDiv = this.hide.bind(this);
                return {
                    showOpenRubbishBinDiv: showOpenRubbishBinDiv,
                    hideOpenRubbishBinDiv: hideOpenRubbishBinDiv
                };
            }
        }
    ]);
    return OpenRubbishBinDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(OpenRubbishBinDiv, "tagName", "div");
_defineProperty(OpenRubbishBinDiv, "defaultProperties", {
    className: "open-rubbish-bin"
});
var _default = (0, _easyWithStyle).default(OpenRubbishBinDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvcnViYmlzaEJpbi9vcGVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IE9wZW5SdWJiaXNoQmluU1ZHIGZyb20gXCIuLi8uLi9zdmcvcnViYmlzaEJpbi9vcGVuXCI7XG5cbmNsYXNzIE9wZW5SdWJiaXNoQmluRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPE9wZW5SdWJiaXNoQmluU1ZHLz5cblxuICAgICk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dPcGVuUnViYmlzaEJpbkRpdiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGhpZGVPcGVuUnViYmlzaEJpbkRpdiA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93T3BlblJ1YmJpc2hCaW5EaXYsXG4gICAgICBoaWRlT3BlblJ1YmJpc2hCaW5EaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm9wZW4tcnViYmlzaC1iaW5cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoT3BlblJ1YmJpc2hCaW5EaXYpYFxuXG4gIHdpZHRoOiAyNHJlbTtcbiAgaGVpZ2h0OiAyNHJlbTtcbiAgXG5gOyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWYsS0FBTTtJQUVBLEtBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQTRCYiwyQ0FLNUM7Ozs7Ozs7SUEvQk0saUJBQWlCO2NBQWpCLGlCQUFpQjthQUFqQixpQkFBaUI7OEJBQWpCLGlCQUFpQjtnRUFBakIsaUJBQWlCOztpQkFBakIsaUJBQWlCOztZQUNyQixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO3lEQUhlLEtBQTJCOzs7O1lBV3ZELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wscUJBQXFCLFFBQVEsSUFBSSxDQUFDLElBQUksUUFDdEMscUJBQXFCLFFBQVEsSUFBSSxDQUFDLElBQUk7O29CQUcxQyxxQkFBcUIsRUFBckIscUJBQXFCO29CQUNyQixxQkFBcUIsRUFBckIscUJBQXFCOzs7OztXQWZyQixpQkFBaUI7bUJBSkMsS0FBTTtnQkFJeEIsaUJBQWlCLEdBbUJkLE9BQU8sSUFBRyxHQUFLO2dCQW5CbEIsaUJBQWlCLEdBcUJkLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsZ0JBQWtCOzttQkE1QlgsY0FBaUIsVUFnQ2QsaUJBQWlCIn0=