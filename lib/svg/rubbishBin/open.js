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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent1, args1, Class1) {
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
function _wrapNativeSuper(Class2) {
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
    return _wrapNativeSuper(Class2);
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
var _default = (0, _easyWithStyle).default(OpenRubbishBinSVG)(_templateObject(), _styles.rubbishBinSVGHeight);
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvcnViYmlzaEJpbi9vcGVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IHJ1YmJpc2hCaW5TVkdIZWlnaHQgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIE9wZW5SdWJiaXNoQmluU1ZHIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjIuODM0NjVcIiBkPVwiTSAxMDAsMzQgViA2MFwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjIuODM0NjVcIiBkPVwiTSAxMDYsMzQgViA2MFwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjMuNzc5NTNcIiBkPVwibSA3NiwzMCB2IDMyIGwgMiwyIGggMzIgbCAyLC0yIFYgMzBcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDozLjc3OTUzXCIgZD1cIm0gNzIsMjQgaCA0NFwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjMuNzc5NTNcIiBkPVwibSA4NCwyNCAtMiwtOCBoIDI0IGwgLTIsOFwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjMuNzc5NTNcIiBkPVwibSA3NCwzMCBoIDQwXCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6Mi44MzQ2NVwiIGQ9XCJNIDgyLDM0IFYgNjBcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDoyLjgzNDY1XCIgZD1cIk0gODgsMzQgViA2MFwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjIuODM0NjVcIiBkPVwiTSA5NCwzNCBWIDYwXCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dPcGVuUnViYmlzaEJpblNWRyA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBoaWRlT3BlblJ1YmJpc2hCaW5TVkcgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dPcGVuUnViYmlzaEJpblNWRyxcbiAgICAgIGhpZGVPcGVuUnViYmlzaEJpblNWR1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInN2Z1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB3aWR0aDogXCI2MFwiLFxuICAgIGhlaWdodDogXCI2MFwiLFxuICAgIHZpZXdCb3g6IFwiNjQgMTAgNjAgNjBcIixcbiAgICBjbGFzc05hbWU6IFwib3Blbi1ydWJiaXNoLWJpblwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShPcGVuUnViYmlzaEJpblNWRylgXG5cbiAgZmlsbDogbm9uZTtcbiAgd2lkdGg6IGF1dG87XG4gIHN0cm9rZTogIzAwMDAwMDtcbiAgaGVpZ2h0OiAke3J1YmJpc2hCaW5TVkdIZWlnaHR9O1xuICBcbmA7XG4iXSwibmFtZXMiOlsiT3BlblJ1YmJpc2hCaW5TVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInBhdGgiLCJzdHlsZSIsImQiLCJwYXJlbnRDb250ZXh0Iiwic2hvd09wZW5SdWJiaXNoQmluU1ZHIiwic2hvdyIsImJpbmQiLCJoaWRlT3BlblJ1YmJpc2hCaW5TVkciLCJoaWRlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImNsYXNz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