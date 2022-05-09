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
        "\n\n  fill:none;\n  width: auto;\n  height: ",
        ";\n  stroke:#000000;\n  display: inline;\n  padding-left: ",
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
var _default = (0, _easyWithStyle).default(FileNameSVG)(_templateObject(), _styles.fileNameSVGHeight, _styles.fileNameSVGPaddingLeft, _styles.fileNameSVGPaddingRight);
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvZmlsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBmaWxlTmFtZVNWR0hlaWdodCwgZmlsZU5hbWVTVkdQYWRkaW5nUmlnaHQsIGZpbGVOYW1lU1ZHUGFkZGluZ0xlZnQgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5cbmNsYXNzIEZpbGVOYW1lU1ZHIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjRcIiBkPVwibSAxNDIsMzQgdiA4IGggOFwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjRcIiBkPVwibSAxMjgsMzQgdiAyNiBoIDIyIFYgNDIgbCAtOCwtOCB6XCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6NFwiIGQ9XCJtIDE0Myw0MCBoIDNcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzdmdcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgd2lkdGg6IFwiMzJcIixcbiAgICBoZWlnaHQ6IFwiMzJcIixcbiAgICB2aWV3Qm94OiBcIjEyMSAzMSAzMiAzMlwiLFxuICAgIGNsYXNzTmFtZTogXCJmaWxlLW5hbWVcIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShGaWxlTmFtZVNWRylgXG5cbiAgZmlsbDpub25lO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAke2ZpbGVOYW1lU1ZHSGVpZ2h0fTtcbiAgc3Ryb2tlOiMwMDAwMDA7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZy1sZWZ0OiAke2ZpbGVOYW1lU1ZHUGFkZGluZ0xlZnR9O1xuICBwYWRkaW5nLXJpZ2h0OiAke2ZpbGVOYW1lU1ZHUGFkZGluZ1JpZ2h0fTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkZpbGVOYW1lU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwic3R5bGUiLCJkIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImZpbGVOYW1lU1ZHSGVpZ2h0IiwiZmlsZU5hbWVTVkdQYWRkaW5nTGVmdCIsImZpbGVOYW1lU1ZHUGFkZGluZ1JpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOzs7OztBQUVVLElBQUEsY0FBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBRWYsSUFBQSxLQUFNLFdBQU4sTUFBTSxDQUFBO0FBRXFELElBQUEsT0FBVyxXQUFYLFdBQVcsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlGLElBQUEsQUFBTUEsV0FBVyxpQkF1QmQsQUF2Qkg7OzthQUFNQSxXQUFXOzs7Ozs7WUFDZkMsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QscUJBRUUsb0JBQUNDLEdBQUMsc0JBQ0Esb0JBQUNDLE1BQUk7b0JBQUNDLEtBQUssRUFBQyxnQkFBZ0I7b0JBQUNDLENBQUMsRUFBQyxrQkFBa0I7a0JBQUcsZ0JBQ3BELG9CQUFDRixNQUFJO29CQUFDQyxLQUFLLEVBQUMsZ0JBQWdCO29CQUFDQyxDQUFDLEVBQUMsbUNBQW1DO2tCQUFHLGdCQUNyRSxvQkFBQ0YsTUFBSTtvQkFBQ0MsS0FBSyxFQUFDLGdCQUFnQjtvQkFBQ0MsQ0FBQyxFQUFDLGNBQWM7a0JBQUcsQ0FDOUMsQ0FFSjthQUNIOzs7O0NBVUYsa0JBckJ5QkMsS0FBTyxRQUFBLEVBcUJoQztBQVJDLGdCQWJJTixXQUFXLEVBYVJPLFNBQU8sRUFBRyxLQUFLLENBQUM7QUFFdkIsZ0JBZklQLFdBQVcsRUFlUlEsbUJBQWlCLEVBQUc7SUFDekJDLEtBQUssRUFBRSxJQUFJO0lBQ1hDLE1BQU0sRUFBRSxJQUFJO0lBQ1pDLE9BQU8sRUFBRSxjQUFjO0lBQ3ZCQyxTQUFTLEVBQUUsV0FBVztDQUN2QixDQUFBO2VBR1lDLENBQUFBLEdBQUFBLGNBQVMsQUFBYSxDQUFBLFFBQWIsQ0FBQ2IsV0FBVyxDQUFDLG9CQUl6QmMsT0FBaUIsa0JBQUEsRUFHWEMsT0FBc0IsdUJBQUEsRUFDckJDLE9BQXVCLHdCQUFBIn0=