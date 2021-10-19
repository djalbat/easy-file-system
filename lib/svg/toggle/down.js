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
        ";\n  stroke: #000000;\n  padding-right: ",
        ";\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DownToggleSVG = /*#__PURE__*/ function(Element) {
    _inherits(DownToggleSVG, Element);
    function DownToggleSVG() {
        _classCallCheck(this, DownToggleSVG);
        return _possibleConstructorReturn(this, _getPrototypeOf(DownToggleSVG).apply(this, arguments));
    }
    _createClass(DownToggleSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:1px",
                    d: "m 222,54 -7,-14 h 14 z"
                })));
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showDownToggleSVG = this.show.bind(this), hideDownToggleSVG = this.hide.bind(this); ///
                return {
                    showDownToggleSVG: showDownToggleSVG,
                    hideDownToggleSVG: hideDownToggleSVG
                };
            }
        }
    ]);
    return DownToggleSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(DownToggleSVG, "tagName", "svg");
_defineProperty(DownToggleSVG, "defaultProperties", {
    width: "32",
    height: "32",
    viewBox: "206 26 32 32",
    className: "down-toggle"
});
var _default = (0, _easyWithStyle).default(DownToggleSVG)(_templateObject(), _styles.toggleSVGHeight, _styles.toggleSVGPaddingRight);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9nZ2xlL2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgdG9nZ2xlU1ZHSGVpZ2h0LCB0b2dnbGVTVkdQYWRkaW5nUmlnaHQgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIERvd25Ub2dnbGVTVkcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6MXB4XCIgZD1cIm0gMjIyLDU0IC03LC0xNCBoIDE0IHpcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd0Rvd25Ub2dnbGVTVkcgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaGlkZURvd25Ub2dnbGVTVkcgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dEb3duVG9nZ2xlU1ZHLFxuICAgICAgaGlkZURvd25Ub2dnbGVTVkdcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzdmdcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgd2lkdGg6IFwiMzJcIixcbiAgICBoZWlnaHQ6IFwiMzJcIixcbiAgICB2aWV3Qm94OiBcIjIwNiAyNiAzMiAzMlwiLFxuICAgIGNsYXNzTmFtZTogXCJkb3duLXRvZ2dsZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEb3duVG9nZ2xlU1ZHKWBcblxuICBmaWxsOiAjMDAwMDAwO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAke3RvZ2dsZVNWR0hlaWdodH07XG4gIHN0cm9rZTogIzAwMDAwMDtcbiAgcGFkZGluZy1yaWdodDogJHt0b2dnbGVTVkdQYWRkaW5nUmlnaHR9O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBcbmA7XG5cbiJdLCJuYW1lcyI6WyJEb3duVG9nZ2xlU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwic3R5bGUiLCJkIiwicGFyZW50Q29udGV4dCIsInNob3dEb3duVG9nZ2xlU1ZHIiwic2hvdyIsImJpbmQiLCJoaWRlRG93blRvZ2dsZVNWRyIsImhpZGUiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFNLENBQU4sS0FBTTtBQUV5QixHQUFjLENBQWQsT0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFpQzdCLENBSTlCO1FBQWtCLENBRVg7UUFBd0IsQ0FHekM7Ozs7Ozs7SUF4Q01BLGFBQWEsaUJBQW5CLFFBQVE7Y0FBRkEsYUFBYTthQUFiQSxhQUFhOzhCQUFiQSxhQUFhO2dFQUFiQSxhQUFhOztpQkFBYkEsYUFBYTs7WUFDakJDLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFBUSxDQUFSQSxhQUFhLEdBQUcsQ0FBQztnQkFDZixNQUFNLG1DQUVIQyxDQUFDLDRDQUNDQyxDQUFJO29CQUFDQyxLQUFLLEVBQUMsQ0FBa0I7b0JBQUNDLENBQUMsRUFBQyxDQUF3Qjs7WUFJL0QsQ0FBQzs7O1lBRURDLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFBUSxDQUFSQSxhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUNDLGlCQUFpQixHQUFHLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUN2Q0MsaUJBQWlCLEdBQUcsSUFBSSxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQyxJQUFJLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVuRCxNQUFNLENBQUUsQ0FBQztvQkFDUEYsaUJBQWlCLEVBQWpCQSxpQkFBaUI7b0JBQ2pCRyxpQkFBaUIsRUFBakJBLGlCQUFpQjtnQkFDbkIsQ0FBQztZQUNILENBQUM7OztXQW5CR1YsYUFBYTttQkFKSyxLQUFNO2dCQUl4QkEsYUFBYSxFQXFCVlksQ0FBTyxVQUFHLENBQUs7Z0JBckJsQlosYUFBYSxFQXVCVmEsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsS0FBSyxFQUFFLENBQUk7SUFDWEMsTUFBTSxFQUFFLENBQUk7SUFDWkMsT0FBTyxFQUFFLENBQWM7SUFDdkJDLFNBQVMsRUFBRSxDQUFhO0FBQzFCLENBQUM7bUJBbENtQixjQUFpQixVQXFDZGpCLGFBQWEscUJBakNpQixPQUFjLGtCQUFkLE9BQWMifQ==