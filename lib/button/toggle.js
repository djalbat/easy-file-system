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
var _up = /*#__PURE__*/ _interop_require_default(require("../svg/toggle/up"));
var _down = /*#__PURE__*/ _interop_require_default(require("../svg/toggle/down"));
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
        "\n\n  cursor: pointer;\n  outline: none;\n  background: transparent;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ToggleButton = /*#__PURE__*/ function(Button) {
    _inherits(ToggleButton, Button);
    function ToggleButton() {
        _class_call_check(this, ToggleButton);
        return _call_super(this, ToggleButton, arguments);
    }
    _create_class(ToggleButton, [
        {
            key: "expand",
            value: function expand() {
                this.hideUpToggleSVG();
                this.showDownToggleSVG();
            }
        },
        {
            key: "collapse",
            value: function collapse() {
                this.showUpToggleSVG();
                this.hideDownToggleSVG();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _this_constructor = this.constructor, _$UpToggleSVG = _this_constructor.UpToggleSVG, _$DownToggleSVG = _this_constructor.DownToggleSVG;
                return [
                    /*#__PURE__*/ React.createElement(_$UpToggleSVG, null),
                    /*#__PURE__*/ React.createElement(_$DownToggleSVG, null)
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var expandToggleButton = this.expand.bind(this), collapseToggleButton = this.collapse.bind(this); ///
                return {
                    expandToggleButton: expandToggleButton,
                    collapseToggleButton: collapseToggleButton
                };
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ]);
    return ToggleButton;
}(_easy.Button);
_define_property(ToggleButton, "UpToggleSVG", _up.default);
_define_property(ToggleButton, "DownToggleSVG", _down.default);
_define_property(ToggleButton, "defaultProperties", {
    className: "toggle"
});
var _default = (0, _easywithstyle.default)(ToggleButton)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vdG9nZ2xlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVXBUb2dnbGVTVkcgZnJvbSBcIi4uL3N2Zy90b2dnbGUvdXBcIjtcbmltcG9ydCBEb3duVG9nZ2xlU1ZHIGZyb20gXCIuLi9zdmcvdG9nZ2xlL2Rvd25cIjtcblxuY2xhc3MgVG9nZ2xlQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgZXhwYW5kKCkge1xuICAgIHRoaXMuaGlkZVVwVG9nZ2xlU1ZHKCk7XG4gICAgdGhpcy5zaG93RG93blRvZ2dsZVNWRygpO1xuICB9XG5cbiAgY29sbGFwc2UoKSB7XG4gICAgdGhpcy5zaG93VXBUb2dnbGVTVkcoKTtcbiAgICB0aGlzLmhpZGVEb3duVG9nZ2xlU1ZHKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgVXBUb2dnbGVTVkcsIERvd25Ub2dnbGVTVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFVwVG9nZ2xlU1ZHLz4sXG4gICAgICA8RG93blRvZ2dsZVNWRy8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZXhwYW5kVG9nZ2xlQnV0dG9uID0gdGhpcy5leHBhbmQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgY29sbGFwc2VUb2dnbGVCdXR0b24gPSB0aGlzLmNvbGxhcHNlLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZXhwYW5kVG9nZ2xlQnV0dG9uLFxuICAgICAgY29sbGFwc2VUb2dnbGVCdXR0b25cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgVXBUb2dnbGVTVkcgPSBVcFRvZ2dsZVNWRztcblxuICBzdGF0aWMgRG93blRvZ2dsZVNWRyA9IERvd25Ub2dnbGVTVkc7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ0b2dnbGVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVG9nZ2xlQnV0dG9uKWBcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBcbmA7XG4iXSwibmFtZXMiOlsiVG9nZ2xlQnV0dG9uIiwiZXhwYW5kIiwiaGlkZVVwVG9nZ2xlU1ZHIiwic2hvd0Rvd25Ub2dnbGVTVkciLCJjb2xsYXBzZSIsInNob3dVcFRvZ2dsZVNWRyIsImhpZGVEb3duVG9nZ2xlU1ZHIiwiY2hpbGRFbGVtZW50cyIsIlVwVG9nZ2xlU1ZHIiwiRG93blRvZ2dsZVNWRyIsInBhcmVudENvbnRleHQiLCJleHBhbmRUb2dnbGVCdXR0b24iLCJiaW5kIiwiY29sbGFwc2VUb2dnbGVCdXR0b24iLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkJ1dHRvbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzREE7OztlQUFBOzs7b0VBcERzQjtvQkFFQzt5REFFQzsyREFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUEsNkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsZUFBZTtnQkFDcEIsSUFBSSxDQUFDQyxpQkFBaUI7WUFDeEI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxlQUFlO2dCQUNwQixJQUFJLENBQUNDLGlCQUFpQjtZQUN4Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUF1QyxvQkFBQSxJQUFJLENBQUMsV0FBVyxFQUEvQ0MsZ0JBQStCLGtCQUEvQkEsYUFBYUMsa0JBQWtCLGtCQUFsQkE7Z0JBRXJCLE9BQVE7a0NBRU4sb0JBQUNEO2tDQUNELG9CQUFDQztpQkFFRjtZQUNIOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHFCQUFxQixJQUFJLENBQUNWLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLElBQUksR0FDMUNDLHVCQUF1QixJQUFJLENBQUNULFFBQVEsQ0FBQ1EsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUUzRCxPQUFRO29CQUNORCxvQkFBQUE7b0JBQ0FFLHNCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsYUFBYTtZQUNwQjs7O1dBbENJZjtFQUFxQmdCLFlBQU07QUFvQy9CLGlCQXBDSWhCLGNBb0NHUSxlQUFjQSxXQUFXO0FBRWhDLGlCQXRDSVIsY0FzQ0dTLGlCQUFnQkEsYUFBYTtBQUVwQyxpQkF4Q0lULGNBd0NHaUIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDbkIifQ==