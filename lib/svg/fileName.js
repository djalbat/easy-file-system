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
var FileNameSVG = /*#__PURE__*/ function(Element1) {
    _inherits(FileNameSVG, Element1);
    function FileNameSVG() {
        _classCallCheck(this, FileNameSVG);
        return _possibleConstructorReturn(this, _getPrototypeOf(FileNameSVG).apply(this, arguments));
    }
    _createClass(FileNameSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 142,34 v 8 h 8"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 128,34 v 26 h 22 V 42 l -8,-8 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 143,40 h 3"
                })));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvZmlsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBmaWxlTmFtZVNWR0hlaWdodCwgZmlsZU5hbWVTVkdQYWRkaW5nUmlnaHQsIGZpbGVOYW1lU1ZHUGFkZGluZ0xlZnQgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5cbmNsYXNzIEZpbGVOYW1lU1ZHIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjRcIiBkPVwibSAxNDIsMzQgdiA4IGggOFwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjRcIiBkPVwibSAxMjgsMzQgdiAyNiBoIDIyIFYgNDIgbCAtOCwtOCB6XCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6NFwiIGQ9XCJtIDE0Myw0MCBoIDNcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzdmdcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgd2lkdGg6IFwiMzJcIixcbiAgICBoZWlnaHQ6IFwiMzJcIixcbiAgICB2aWV3Qm94OiBcIjEyMSAzMSAzMiAzMlwiLFxuICAgIGNsYXNzTmFtZTogXCJmaWxlLW5hbWVcIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShGaWxlTmFtZVNWRylgXG5cbiAgZmlsbDpub25lO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAke2ZpbGVOYW1lU1ZHSGVpZ2h0fTtcbiAgc3Ryb2tlOiMwMDAwMDA7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZy1sZWZ0OiAke2ZpbGVOYW1lU1ZHUGFkZGluZ0xlZnR9O1xuICBwYWRkaW5nLXJpZ2h0OiAke2ZpbGVOYW1lU1ZHUGFkZGluZ1JpZ2h0fTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBRXFELE9BQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBeUJ4RCw0Q0FJNUI7U0FBb0IsMERBR2Q7U0FBeUIsb0JBQ3hCO1NBQTBCLGtDQUczQzs7Ozs7OztJQWxDTSxXQUFXO2NBQVgsV0FBVzthQUFYLFdBQVc7OEJBQVgsV0FBVztnRUFBWCxXQUFXOztpQkFBWCxXQUFXOztZQUNmLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7MERBR1IsQ0FBQyw0Q0FDQyxJQUFJO29CQUFDLEtBQUssR0FBQyxjQUFnQjtvQkFBQyxDQUFDLEdBQUMsZ0JBQWtCO3VEQUNoRCxJQUFJO29CQUFDLEtBQUssR0FBQyxjQUFnQjtvQkFBQyxDQUFDLEdBQUMsaUNBQW1DO3VEQUNqRSxJQUFJO29CQUFDLEtBQUssR0FBQyxjQUFnQjtvQkFBQyxDQUFDLEdBQUMsWUFBYzs7Ozs7V0FQL0MsV0FBVzttQkFKTyxLQUFNO2dCQUl4QixXQUFXLEdBYVIsT0FBTyxJQUFHLEdBQUs7Z0JBYmxCLFdBQVcsR0FlUixpQkFBaUI7SUFDdEIsS0FBSyxHQUFFLEVBQUk7SUFDWCxNQUFNLEdBQUUsRUFBSTtJQUNaLE9BQU8sR0FBRSxZQUFjO0lBQ3ZCLFNBQVMsR0FBRSxTQUFXOzttQkF6QkosY0FBaUIsVUE2QmQsV0FBVyxxQkF6QitDLE9BQVcsb0JBQVgsT0FBVyx5QkFBWCxPQUFXIn0=