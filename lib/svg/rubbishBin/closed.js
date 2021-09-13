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
        "\n\n  fill: none;\n  width: auto;\n  stroke: #000000;\n  height: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ClosedRubbishBinSVG = /*#__PURE__*/ function(Element1) {
    _inherits(ClosedRubbishBinSVG, Element1);
    function ClosedRubbishBinSVG() {
        _classCallCheck(this, ClosedRubbishBinSVG);
        return _possibleConstructorReturn(this, _getPrototypeOf(ClosedRubbishBinSVG).apply(this, arguments));
    }
    _createClass(ClosedRubbishBinSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:2.83465",
                    d: "M 40,34 V 60"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:2.83465",
                    d: "M 46,34 V 60"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:3.77953",
                    d: "m 16,30 v 32 l 2,2 h 32 l 2,-2 V 30"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:3.77953",
                    d: "M 12,30 H 56"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:3.77953",
                    d: "m 24,30 -2,-8 h 24 l -2,8"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:2.83465",
                    d: "M 22,34 V 60"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:2.83465",
                    d: "M 28,34 V 60"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:2.83465",
                    d: "M 34,34 V 60"
                })));
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showClosedRubbishBinSVG = this.show.bind(this), hideClosedRubbishBinSVG = this.hide.bind(this); ///
                return {
                    showClosedRubbishBinSVG: showClosedRubbishBinSVG,
                    hideClosedRubbishBinSVG: hideClosedRubbishBinSVG
                };
            }
        }
    ]);
    return ClosedRubbishBinSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(ClosedRubbishBinSVG, "tagName", "svg");
_defineProperty(ClosedRubbishBinSVG, "defaultProperties", {
    width: "60",
    height: "60",
    viewBox: "4 10 60 60",
    className: "closed-rubbish-bin"
});
var _default = (0, _easyWithStyle).default(ClosedRubbishBinSVG)(_templateObject(), _styles.rubbishBinSVGHeight);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvcnViYmlzaEJpbi9jbG9zZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgcnViYmlzaEJpblNWR0hlaWdodCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgQ2xvc2VkUnViYmlzaEJpblNWRyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDoyLjgzNDY1XCIgZD1cIk0gNDAsMzQgViA2MFwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjIuODM0NjVcIiBkPVwiTSA0NiwzNCBWIDYwXCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6My43Nzk1M1wiIGQ9XCJtIDE2LDMwIHYgMzIgbCAyLDIgaCAzMiBsIDIsLTIgViAzMFwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjMuNzc5NTNcIiBkPVwiTSAxMiwzMCBIIDU2XCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6My43Nzk1M1wiIGQ9XCJtIDI0LDMwIC0yLC04IGggMjQgbCAtMiw4XCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6Mi44MzQ2NVwiIGQ9XCJNIDIyLDM0IFYgNjBcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDoyLjgzNDY1XCIgZD1cIk0gMjgsMzQgViA2MFwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjIuODM0NjVcIiBkPVwiTSAzNCwzNCBWIDYwXCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dDbG9zZWRSdWJiaXNoQmluU1ZHID0gdGhpcy5zaG93LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGhpZGVDbG9zZWRSdWJiaXNoQmluU1ZHID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93Q2xvc2VkUnViYmlzaEJpblNWRyxcbiAgICAgIGhpZGVDbG9zZWRSdWJiaXNoQmluU1ZHXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3ZnXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHdpZHRoOiBcIjYwXCIsXG4gICAgaGVpZ2h0OiBcIjYwXCIsXG4gICAgdmlld0JveDogXCI0IDEwIDYwIDYwXCIsXG4gICAgY2xhc3NOYW1lOiBcImNsb3NlZC1ydWJiaXNoLWJpblwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShDbG9zZWRSdWJiaXNoQmluU1ZHKWBcblxuICBmaWxsOiBub25lO1xuICB3aWR0aDogYXV0bztcbiAgc3Ryb2tlOiAjMDAwMDAwO1xuICBoZWlnaHQ6ICR7cnViYmlzaEJpblNWR0hlaWdodH07XG4gIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWYsS0FBTTtJQUVNLE9BQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBd0NKLGlFQUtwQztTQUFzQixPQUVoQzs7Ozs7OztJQTdDTSxtQkFBbUI7Y0FBbkIsbUJBQW1CO2FBQW5CLG1CQUFtQjs4QkFBbkIsbUJBQW1CO2dFQUFuQixtQkFBbUI7O2lCQUFuQixtQkFBbUI7O1lBQ3ZCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7MERBR1IsQ0FBQyw0Q0FDQyxJQUFJO29CQUFDLEtBQUssR0FBQyxvQkFBc0I7b0JBQUMsQ0FBQyxHQUFDLFlBQWM7dURBQ2xELElBQUk7b0JBQUMsS0FBSyxHQUFDLG9CQUFzQjtvQkFBQyxDQUFDLEdBQUMsWUFBYzt1REFDbEQsSUFBSTtvQkFBQyxLQUFLLEdBQUMsb0JBQXNCO29CQUFDLENBQUMsR0FBQyxtQ0FBcUM7dURBQ3pFLElBQUk7b0JBQUMsS0FBSyxHQUFDLG9CQUFzQjtvQkFBQyxDQUFDLEdBQUMsWUFBYzt1REFDbEQsSUFBSTtvQkFBQyxLQUFLLEdBQUMsb0JBQXNCO29CQUFDLENBQUMsR0FBQyx5QkFBMkI7dURBQy9ELElBQUk7b0JBQUMsS0FBSyxHQUFDLG9CQUFzQjtvQkFBQyxDQUFDLEdBQUMsWUFBYzt1REFDbEQsSUFBSTtvQkFBQyxLQUFLLEdBQUMsb0JBQXNCO29CQUFDLENBQUMsR0FBQyxZQUFjO3VEQUNsRCxJQUFJO29CQUFDLEtBQUssR0FBQyxvQkFBc0I7b0JBQUMsQ0FBQyxHQUFDLFlBQWM7Ozs7O1lBTXpELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wsdUJBQXVCLFFBQVEsSUFBSSxDQUFDLElBQUksUUFDeEMsdUJBQXVCLFFBQVEsSUFBSSxDQUFDLElBQUksT0FBUSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7O29CQUd2RCx1QkFBdUIsRUFBdkIsdUJBQXVCO29CQUN2Qix1QkFBdUIsRUFBdkIsdUJBQXVCOzs7OztXQXhCdkIsbUJBQW1CO21CQUpELEtBQU07Z0JBSXhCLG1CQUFtQixHQTRCaEIsT0FBTyxJQUFHLEdBQUs7Z0JBNUJsQixtQkFBbUIsR0E4QmhCLGlCQUFpQjtJQUN0QixLQUFLLEdBQUUsRUFBSTtJQUNYLE1BQU0sR0FBRSxFQUFJO0lBQ1osT0FBTyxHQUFFLFVBQVk7SUFDckIsU0FBUyxHQUFFLGtCQUFvQjs7bUJBeENiLGNBQWlCLFVBNENkLG1CQUFtQixxQkF4Q1IsT0FBYyJ9