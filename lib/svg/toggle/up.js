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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  height: ",
        ";\n  margin-right: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var UpToggleSVG = /*#__PURE__*/ function(SVG) {
    _inherits(UpToggleSVG, SVG);
    function UpToggleSVG() {
        _class_call_check(this, UpToggleSVG);
        return _call_super(this, UpToggleSVG, arguments);
    }
    _create_class(UpToggleSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:1px",
                    d: "m 264,50 -14,7 V 44 Z"
                }));
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showUpToggleSVG = this.show.bind(this), hideUpToggleSVG = this.hide.bind(this); ///
                return {
                    showUpToggleSVG: showUpToggleSVG,
                    hideUpToggleSVG: hideUpToggleSVG
                };
            }
        }
    ]);
    return UpToggleSVG;
}(_svg.default);
_define_property(UpToggleSVG, "tagName", "svg");
_define_property(UpToggleSVG, "defaultProperties", {
    width: "32",
    height: "32",
    viewBox: "240 30 32 32",
    className: "up-toggle"
});
var _default = (0, _easywithstyle.default)(UpToggleSVG)(_templateObject(), _styles.toggleSVGHeight, _styles.toggleSVGPaddingRight);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9nZ2xlL3VwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgU1ZHIGZyb20gXCIuLi8uLi9zdmdcIjtcblxuaW1wb3J0IHsgdG9nZ2xlU1ZHSGVpZ2h0LCB0b2dnbGVTVkdQYWRkaW5nUmlnaHQgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIFVwVG9nZ2xlU1ZHIGV4dGVuZHMgU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6MXB4XCIgZD1cIm0gMjY0LDUwIC0xNCw3IFYgNDQgWlwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93VXBUb2dnbGVTVkcgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaGlkZVVwVG9nZ2xlU1ZHID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93VXBUb2dnbGVTVkcsXG4gICAgICBoaWRlVXBUb2dnbGVTVkdcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzdmdcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgd2lkdGg6IFwiMzJcIixcbiAgICBoZWlnaHQ6IFwiMzJcIixcbiAgICB2aWV3Qm94OiBcIjI0MCAzMCAzMiAzMlwiLFxuICAgIGNsYXNzTmFtZTogXCJ1cC10b2dnbGVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVXBUb2dnbGVTVkcpYFxuXG4gIGhlaWdodDogJHt0b2dnbGVTVkdIZWlnaHR9O1xuICBtYXJnaW4tcmlnaHQ6ICR7dG9nZ2xlU1ZHUGFkZGluZ1JpZ2h0fTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlVwVG9nZ2xlU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwic3R5bGUiLCJkIiwicGFyZW50Q29udGV4dCIsInNob3dVcFRvZ2dsZVNWRyIsInNob3ciLCJiaW5kIiwiaGlkZVVwVG9nZ2xlU1ZHIiwiaGlkZSIsIlNWRyIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsInRvZ2dsZVNWR0hlaWdodCIsInRvZ2dsZVNWR1BhZGRpbmdSaWdodCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUNBOzs7ZUFBQTs7O29FQXJDc0I7MERBRU47c0JBRXVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFBLEFBQU1BLDRCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO29CQUFLQyxPQUFNO29CQUFtQkMsR0FBRTs7WUFJdkM7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUNyQ0Msa0JBQWtCLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRWpELE9BQVE7b0JBQ05GLGlCQUFBQTtvQkFDQUcsaUJBQUFBO2dCQUNGO1lBQ0Y7OztXQW5CSVY7RUFBb0JZLFlBQUc7QUFxQjNCLGlCQXJCSVosYUFxQkdhLFdBQVU7QUFFakIsaUJBdkJJYixhQXVCR2MscUJBQW9CO0lBQ3pCQyxPQUFPO0lBQ1BDLFFBQVE7SUFDUkMsU0FBUztJQUNUQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDbkIsZ0NBRWJvQix1QkFBZSxFQUNUQyw2QkFBcUIifQ==