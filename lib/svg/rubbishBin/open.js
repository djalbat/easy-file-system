"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _svg = /*#__PURE__*/ _interop_require_default(require("../../svg"));
var _styles = require("../../styles");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  fill: none;\n  height: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var OpenRubbishBinSVG = /*#__PURE__*/ function(SVG) {
    _inherits(OpenRubbishBinSVG, SVG);
    var _super = _create_super(OpenRubbishBinSVG);
    function OpenRubbishBinSVG() {
        _class_call_check(this, OpenRubbishBinSVG);
        return _super.apply(this, arguments);
    }
    _create_class(OpenRubbishBinSVG, [
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
}(_svg.default);
_define_property(OpenRubbishBinSVG, "tagName", "svg");
_define_property(OpenRubbishBinSVG, "defaultProperties", {
    width: "60",
    height: "60",
    viewBox: "64 10 60 60",
    className: "open-rubbish-bin"
});
var _default = (0, _easywithstyle.default)(OpenRubbishBinSVG)(_templateObject(), _styles.rubbishBinSVGHeight);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvcnViYmlzaEJpbi9vcGVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgU1ZHIGZyb20gXCIuLi8uLi9zdmdcIjtcblxuaW1wb3J0IHsgcnViYmlzaEJpblNWR0hlaWdodCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgT3BlblJ1YmJpc2hCaW5TVkcgZXh0ZW5kcyBTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDoyLjgzNDY1XCIgZD1cIk0gMTAwLDM0IFYgNjBcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDoyLjgzNDY1XCIgZD1cIk0gMTA2LDM0IFYgNjBcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDozLjc3OTUzXCIgZD1cIm0gNzYsMzAgdiAzMiBsIDIsMiBoIDMyIGwgMiwtMiBWIDMwXCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6My43Nzk1M1wiIGQ9XCJtIDcyLDI0IGggNDRcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDozLjc3OTUzXCIgZD1cIm0gODQsMjQgLTIsLTggaCAyNCBsIC0yLDhcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDozLjc3OTUzXCIgZD1cIm0gNzQsMzAgaCA0MFwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjIuODM0NjVcIiBkPVwiTSA4MiwzNCBWIDYwXCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6Mi44MzQ2NVwiIGQ9XCJNIDg4LDM0IFYgNjBcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDoyLjgzNDY1XCIgZD1cIk0gOTQsMzQgViA2MFwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93T3BlblJ1YmJpc2hCaW5TVkcgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaGlkZU9wZW5SdWJiaXNoQmluU1ZHID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93T3BlblJ1YmJpc2hCaW5TVkcsXG4gICAgICBoaWRlT3BlblJ1YmJpc2hCaW5TVkdcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzdmdcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgd2lkdGg6IFwiNjBcIixcbiAgICBoZWlnaHQ6IFwiNjBcIixcbiAgICB2aWV3Qm94OiBcIjY0IDEwIDYwIDYwXCIsXG4gICAgY2xhc3NOYW1lOiBcIm9wZW4tcnViYmlzaC1iaW5cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoT3BlblJ1YmJpc2hCaW5TVkcpYFxuXG4gIGZpbGw6IG5vbmU7XG4gIGhlaWdodDogJHtydWJiaXNoQmluU1ZHSGVpZ2h0fTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIk9wZW5SdWJiaXNoQmluU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwic3R5bGUiLCJkIiwicGFyZW50Q29udGV4dCIsInNob3dPcGVuUnViYmlzaEJpblNWRyIsInNob3ciLCJiaW5kIiwiaGlkZU9wZW5SdWJiaXNoQmluU1ZHIiwiaGlkZSIsIlNWRyIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsInJ1YmJpc2hCaW5TVkdIZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStDQTs7O2VBQUE7OztvRUE3Q3NCOzBEQUVOO3NCQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxJQUFBLEFBQU1BLGtDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQXVCQyxHQUFFO2tDQUNyQyxvQkFBQ0Y7b0JBQUtDLE9BQU07b0JBQXVCQyxHQUFFO2tDQUNyQyxvQkFBQ0Y7b0JBQUtDLE9BQU07b0JBQXVCQyxHQUFFO2tDQUNyQyxvQkFBQ0Y7b0JBQUtDLE9BQU07b0JBQXVCQyxHQUFFO2tDQUNyQyxvQkFBQ0Y7b0JBQUtDLE9BQU07b0JBQXVCQyxHQUFFO2tDQUNyQyxvQkFBQ0Y7b0JBQUtDLE9BQU07b0JBQXVCQyxHQUFFO2tDQUNyQyxvQkFBQ0Y7b0JBQUtDLE9BQU07b0JBQXVCQyxHQUFFO2tDQUNyQyxvQkFBQ0Y7b0JBQUtDLE9BQU07b0JBQXVCQyxHQUFFO2tDQUNyQyxvQkFBQ0Y7b0JBQUtDLE9BQU07b0JBQXVCQyxHQUFFOztZQUkzQzs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyx3QkFBd0IsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQzNDQyx3QkFBd0IsSUFBSSxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztnQkFFdkQsT0FBUTtvQkFDTkYsdUJBQUFBO29CQUNBRyx1QkFBQUE7Z0JBQ0Y7WUFDRjs7O1dBM0JJVjtFQUEwQlksWUFBRztBQTZCakMsaUJBN0JJWixtQkE2QkdhLFdBQVU7QUFFakIsaUJBL0JJYixtQkErQkdjLHFCQUFvQjtJQUN6QkMsT0FBTztJQUNQQyxRQUFRO0lBQ1JDLFNBQVM7SUFDVEMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ25CLHNDQUdib0IsMkJBQW1CIn0=