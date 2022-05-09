"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _up = _interopRequireDefault(require("../svg/toggle/up"));
var _down = _interopRequireDefault(require("../svg/toggle/down"));
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
        "\n\n  cursor: pointer;\n  outline: none;\n  background: transparent;\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ToggleButton = /*#__PURE__*/ function(Button) {
    _inherits(ToggleButton, Button);
    var _super = _createSuper(ToggleButton);
    function ToggleButton() {
        _classCallCheck(this, ToggleButton);
        return _super.apply(this, arguments);
    }
    _createClass(ToggleButton, [
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
            key: "getUpToggleSVG",
            value: function getUpToggleSVG() {
                var _$UpToggleSVG = this.constructor.UpToggleSVG;
                return _$UpToggleSVG;
            }
        },
        {
            key: "getDownToggleSVG",
            value: function getDownToggleSVG() {
                var _$DownToggleSVG = this.constructor.DownToggleSVG;
                return _$DownToggleSVG;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _$UpToggleSVG = this.getUpToggleSVG(), _$DownToggleSVG = this.getDownToggleSVG();
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
_defineProperty(ToggleButton, "UpToggleSVG", _up.default);
_defineProperty(ToggleButton, "DownToggleSVG", _down.default);
_defineProperty(ToggleButton, "defaultProperties", {
    className: "toggle"
});
var _default = (0, _easyWithStyle).default(ToggleButton)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vdG9nZ2xlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVXBUb2dnbGVTVkcgZnJvbSBcIi4uL3N2Zy90b2dnbGUvdXBcIjtcbmltcG9ydCBEb3duVG9nZ2xlU1ZHIGZyb20gXCIuLi9zdmcvdG9nZ2xlL2Rvd25cIjtcblxuY2xhc3MgVG9nZ2xlQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgZXhwYW5kKCkge1xuICAgIHRoaXMuaGlkZVVwVG9nZ2xlU1ZHKCk7XG4gICAgdGhpcy5zaG93RG93blRvZ2dsZVNWRygpO1xuICB9XG5cbiAgY29sbGFwc2UoKSB7XG4gICAgdGhpcy5zaG93VXBUb2dnbGVTVkcoKTtcbiAgICB0aGlzLmhpZGVEb3duVG9nZ2xlU1ZHKCk7XG4gIH1cblxuICBnZXRVcFRvZ2dsZVNWRygpIHtcbiAgICBjb25zdCB7IFVwVG9nZ2xlU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIFVwVG9nZ2xlU1ZHO1xuICB9XG5cbiAgZ2V0RG93blRvZ2dsZVNWRygpIHtcbiAgICBjb25zdCB7IERvd25Ub2dnbGVTVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRG93blRvZ2dsZVNWRztcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgVXBUb2dnbGVTVkcgPSB0aGlzLmdldFVwVG9nZ2xlU1ZHKCksXG4gICAgICAgICAgRG93blRvZ2dsZVNWRyA9IHRoaXMuZ2V0RG93blRvZ2dsZVNWRygpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxVcFRvZ2dsZVNWRy8+LFxuICAgICAgPERvd25Ub2dnbGVTVkcvPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGV4cGFuZFRvZ2dsZUJ1dHRvbiA9IHRoaXMuZXhwYW5kLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGNvbGxhcHNlVG9nZ2xlQnV0dG9uID0gdGhpcy5jb2xsYXBzZS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGV4cGFuZFRvZ2dsZUJ1dHRvbixcbiAgICAgIGNvbGxhcHNlVG9nZ2xlQnV0dG9uXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIFVwVG9nZ2xlU1ZHID0gVXBUb2dnbGVTVkc7XG5cbiAgc3RhdGljIERvd25Ub2dnbGVTVkcgPSBEb3duVG9nZ2xlU1ZHO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidG9nZ2xlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFRvZ2dsZUJ1dHRvbilgXG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlRvZ2dsZUJ1dHRvbiIsImV4cGFuZCIsImhpZGVVcFRvZ2dsZVNWRyIsInNob3dEb3duVG9nZ2xlU1ZHIiwiY29sbGFwc2UiLCJzaG93VXBUb2dnbGVTVkciLCJoaWRlRG93blRvZ2dsZVNWRyIsImdldFVwVG9nZ2xlU1ZHIiwiVXBUb2dnbGVTVkciLCJjb25zdHJ1Y3RvciIsImdldERvd25Ub2dnbGVTVkciLCJEb3duVG9nZ2xlU1ZHIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJleHBhbmRUb2dnbGVCdXR0b24iLCJiaW5kIiwiY29sbGFwc2VUb2dnbGVCdXR0b24iLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkJ1dHRv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