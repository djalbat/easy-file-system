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
var _easy = require("easy");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
        "\n\n  fill: #000000;\n  width: auto;\n  height: ",
        ";\n  stroke: #000000;\n  padding-right: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DownToggleSVG = /*#__PURE__*/ function(Element) {
    _inherits(DownToggleSVG, Element);
    var _super = _create_super(DownToggleSVG);
    function DownToggleSVG() {
        _class_call_check(this, DownToggleSVG);
        return _super.apply(this, arguments);
    }
    _create_class(DownToggleSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:1px",
                    d: "m 222,54 -7,-14 h 14 z"
                }));
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
}(_wrap_native_super(_easy.Element));
_define_property(DownToggleSVG, "tagName", "svg");
_define_property(DownToggleSVG, "defaultProperties", {
    width: "32",
    height: "32",
    viewBox: "206 26 32 32",
    className: "down-toggle"
});
var _default = (0, _easywithstyle.default)(DownToggleSVG)(_templateObject(), _styles.toggleSVGHeight, _styles.toggleSVGPaddingRight);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9nZ2xlL2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyB0b2dnbGVTVkdIZWlnaHQsIHRvZ2dsZVNWR1BhZGRpbmdSaWdodCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgRG93blRvZ2dsZVNWRyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDoxcHhcIiBkPVwibSAyMjIsNTQgLTcsLTE0IGggMTQgelwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93RG93blRvZ2dsZVNWRyA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBoaWRlRG93blRvZ2dsZVNWRyA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd0Rvd25Ub2dnbGVTVkcsXG4gICAgICBoaWRlRG93blRvZ2dsZVNWR1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInN2Z1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB3aWR0aDogXCIzMlwiLFxuICAgIGhlaWdodDogXCIzMlwiLFxuICAgIHZpZXdCb3g6IFwiMjA2IDI2IDMyIDMyXCIsXG4gICAgY2xhc3NOYW1lOiBcImRvd24tdG9nZ2xlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERvd25Ub2dnbGVTVkcpYFxuXG4gIGZpbGw6ICMwMDAwMDA7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6ICR7dG9nZ2xlU1ZHSGVpZ2h0fTtcbiAgc3Ryb2tlOiAjMDAwMDAwO1xuICBwYWRkaW5nLXJpZ2h0OiAke3RvZ2dsZVNWR1BhZGRpbmdSaWdodH07XG4gIFxuYDtcblxuIl0sIm5hbWVzIjpbIkRvd25Ub2dnbGVTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInBhdGgiLCJzdHlsZSIsImQiLCJwYXJlbnRDb250ZXh0Iiwic2hvd0Rvd25Ub2dnbGVTVkciLCJzaG93IiwiYmluZCIsImhpZGVEb3duVG9nZ2xlU1ZHIiwiaGlkZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJ0b2dnbGVTVkdIZWlnaHQiLCJ0b2dnbGVTVkdQYWRkaW5nUmlnaHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVDQTs7O2VBQUE7OztvRUFyQ3NCO29CQUVFO3NCQUUrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZELElBQUEsQUFBTUEsOEJBK0JILEFBL0JIO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQztvQkFBS0MsT0FBTTtvQkFBbUJDLEdBQUU7O1lBSXZDOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUFNQyxvQkFBb0IsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQ3ZDQyxvQkFBb0IsSUFBSSxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztnQkFFbkQsT0FBUTtvQkFDTkYsbUJBQUFBO29CQUNBRyxtQkFBQUE7Z0JBQ0Y7WUFDRjs7O1dBbkJJVjtxQkFBc0JZLGFBQU87QUFxQmpDLGlCQXJCSVosZUFxQkdhLFdBQVU7QUFFakIsaUJBdkJJYixlQXVCR2MscUJBQW9CO0lBQ3pCQyxPQUFPO0lBQ1BDLFFBQVE7SUFDUkMsU0FBUztJQUNUQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDbkIsa0NBSWJvQix1QkFBZSxFQUVSQyw2QkFBcUIifQ==