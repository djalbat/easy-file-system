"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkerEntryItem;
    }
});
var _entry = /*#__PURE__*/ _interop_require_default(require("../../item/entry"));
var _marker = /*#__PURE__*/ _interop_require_default(require("../../svg/marker"));
var _marker1 = /*#__PURE__*/ _interop_require_default(require("../../div/item/entry/marker"));
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
var MarkerEntryItem = /*#__PURE__*/ function(EntryItem) {
    _inherits(MarkerEntryItem, EntryItem);
    function MarkerEntryItem() {
        _class_call_check(this, MarkerEntryItem);
        return _call_super(this, MarkerEntryItem, arguments);
    }
    _create_class(MarkerEntryItem, [
        {
            key: "remove",
            value: function remove() {
                this.domElement.remove();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _$MarkerSVG = this.constructor.MarkerSVG;
                return /*#__PURE__*/ React.createElement(_marker1.default, {
                    MarkerSVG: _$MarkerSVG
                });
            }
        }
    ]);
    return MarkerEntryItem;
}(_entry.default);
_define_property(MarkerEntryItem, "MarkerSVG", _marker.default);
_define_property(MarkerEntryItem, "defaultProperties", {
    className: "marker"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L21hcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVudHJ5SXRlbSBmcm9tIFwiLi4vLi4vaXRlbS9lbnRyeVwiO1xuaW1wb3J0IE1hcmtlclNWRyBmcm9tIFwiLi4vLi4vc3ZnL21hcmtlclwiO1xuaW1wb3J0IE1hcmtlckVudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vZGl2L2l0ZW0vZW50cnkvbWFya2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlckVudHJ5SXRlbSBleHRlbmRzIEVudHJ5SXRlbSB7XG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgTWFya2VyU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPE1hcmtlckVudHJ5SXRlbURpdiBNYXJrZXJTVkc9e01hcmtlclNWR30gLz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgTWFya2VyU1ZHID0gTWFya2VyU1ZHO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWFya2VyXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJNYXJrZXJFbnRyeUl0ZW0iLCJyZW1vdmUiLCJkb21FbGVtZW50IiwiY2hpbGRFbGVtZW50cyIsIk1hcmtlclNWRyIsImNvbnN0cnVjdG9yIiwiTWFya2VyRW50cnlJdGVtRGl2IiwiRW50cnlJdGVtIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzREQUpDOzZEQUNBOzhEQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLGdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsVUFBVSxDQUFDRCxNQUFNO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsY0FBYyxJQUFJLENBQUNDLFdBQVcsQ0FBOUJEO2dCQUVSLHFCQUVFLG9CQUFDRSxnQkFBa0I7b0JBQUNGLFdBQVdBOztZQUduQzs7O1dBYm1CSjtFQUF3Qk8sY0FBUztBQWVwRCxpQkFmbUJQLGlCQWVaSSxhQUFZQSxlQUFTO0FBRTVCLGlCQWpCbUJKLGlCQWlCWlEscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==