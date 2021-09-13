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
        ";\n  stroke: #000000;\n  margin-right: 1rem;\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DownToggleSVG = /*#__PURE__*/ function(Element1) {
    _inherits(DownToggleSVG, Element1);
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
    height: "34",
    viewBox: "206 22 32 34",
    className: "down-toggle"
});
var _default = (0, _easyWithStyle).default(DownToggleSVG)(_templateObject(), _styles.toggleSVGHeight);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9nZ2xlL2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgdG9nZ2xlU1ZHSGVpZ2h0IH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBEb3duVG9nZ2xlU1ZHIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjFweFwiIGQ9XCJtIDIyMiw1NCAtNywtMTQgaCAxNCB6XCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dEb3duVG9nZ2xlU1ZHID0gdGhpcy5zaG93LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGhpZGVEb3duVG9nZ2xlU1ZHID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93RG93blRvZ2dsZVNWRyxcbiAgICAgIGhpZGVEb3duVG9nZ2xlU1ZHXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3ZnXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHdpZHRoOiBcIjMyXCIsXG4gICAgaGVpZ2h0OiBcIjM0XCIsXG4gICAgdmlld0JveDogXCIyMDYgMjIgMzIgMzRcIixcbiAgICBjbGFzc05hbWU6IFwiZG93bi10b2dnbGVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRG93blRvZ2dsZVNWRylgXG5cbiAgZmlsbDogIzAwMDAwMDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogJHt0b2dnbGVTVkdIZWlnaHR9O1xuICBzdHJva2U6ICMwMDAwMDA7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgXG5gO1xuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFFRSxPQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQWlDTixnREFJOUI7U0FBa0IsNkVBSzVCOzs7Ozs7O0lBeENNLGFBQWE7Y0FBYixhQUFhO2FBQWIsYUFBYTs4QkFBYixhQUFhO2dFQUFiLGFBQWE7O2lCQUFiLGFBQWE7O1lBQ2pCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7MERBR1IsQ0FBQyw0Q0FDQyxJQUFJO29CQUFDLEtBQUssR0FBQyxnQkFBa0I7b0JBQUMsQ0FBQyxHQUFDLHNCQUF3Qjs7Ozs7WUFNL0QsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDTCxpQkFBaUIsUUFBUSxJQUFJLENBQUMsSUFBSSxRQUNsQyxpQkFBaUIsUUFBUSxJQUFJLENBQUMsSUFBSSxPQUFRLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7b0JBR2pELGlCQUFpQixFQUFqQixpQkFBaUI7b0JBQ2pCLGlCQUFpQixFQUFqQixpQkFBaUI7Ozs7O1dBakJqQixhQUFhO21CQUpLLEtBQU07Z0JBSXhCLGFBQWEsR0FxQlYsT0FBTyxJQUFHLEdBQUs7Z0JBckJsQixhQUFhLEdBdUJWLGlCQUFpQjtJQUN0QixLQUFLLEdBQUUsRUFBSTtJQUNYLE1BQU0sR0FBRSxFQUFJO0lBQ1osT0FBTyxHQUFFLFlBQWM7SUFDdkIsU0FBUyxHQUFFLFdBQWE7O21CQWpDTixjQUFpQixVQXFDZCxhQUFhLHFCQWpDTixPQUFjIn0=