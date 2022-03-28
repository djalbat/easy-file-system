"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
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
        "\n\n  border: none;\n  outline: none;\n  display: inline-block;\n  font-size: inherit;\n  text-align: left;\n  font-family: inherit;\n  background: transparent;\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DBLCLICK_EVENT_TYPE = _easy.eventTypes.DBLCLICK_EVENT_TYPE;
var NameButton = /*#__PURE__*/ function(Button) {
    _inherits(NameButton, Button);
    var _super = _createSuper(NameButton);
    function NameButton() {
        _classCallCheck(this, NameButton);
        return _super.apply(this, arguments);
    }
    _createClass(NameButton, [
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, _onDoubleClick = _properties.onDoubleClick, onDoubleClick = _onDoubleClick === void 0 ? null : _onDoubleClick, doubleClickHandler = onDoubleClick; ///
                if (doubleClickHandler !== null) {
                    this.on(DBLCLICK_EVENT_TYPE, doubleClickHandler, this);
                }
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _properties = this.properties, _onDoubleClick = _properties.onDoubleClick, onDoubleClick = _onDoubleClick === void 0 ? null : _onDoubleClick, doubleClickHandler = onDoubleClick; ///
                if (doubleClickHandler !== null) {
                    this.off(DBLCLICK_EVENT_TYPE, doubleClickHandler, this);
                }
            }
        }
    ]);
    return NameButton;
}(_easy.Button);
_defineProperty(NameButton, "ignoredProperties", [
    "onDoubleClick"
]);
_defineProperty(NameButton, "defaultProperties", {
    className: "name"
});
var _default = (0, _easyWithStyle).default(NameButton)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vbmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQnV0dG9uLCBldmVudFR5cGVzIH0gZnJvbSBcImVhc3lcIjtcblxuY29uc3QgeyBEQkxDTElDS19FVkVOVF9UWVBFIH0gPSBldmVudFR5cGVzO1xuXG5jbGFzcyBOYW1lQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvbkRvdWJsZUNsaWNrID0gbnVsbCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGRvdWJsZUNsaWNrSGFuZGxlciA9IG9uRG91YmxlQ2xpY2s7IC8vL1xuXG4gICAgaWYgKGRvdWJsZUNsaWNrSGFuZGxlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vbihEQkxDTElDS19FVkVOVF9UWVBFLCBkb3VibGVDbGlja0hhbmRsZXIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Eb3VibGVDbGljayA9IG51bGwgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBkb3VibGVDbGlja0hhbmRsZXIgPSBvbkRvdWJsZUNsaWNrOyAvLy9cblxuICAgIGlmIChkb3VibGVDbGlja0hhbmRsZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub2ZmKERCTENMSUNLX0VWRU5UX1RZUEUsIGRvdWJsZUNsaWNrSGFuZGxlciwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Eb3VibGVDbGlja1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJuYW1lXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE5hbWVCdXR0b24pYFxuXG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkRCTENMSUNLX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiTmFtZUJ1dHRvbiIsImRpZE1vdW50IiwicHJvcGVydGllcyIsIm9uRG91YmxlQ2xpY2siLCJkb3VibGVDbGlja0hhbmRsZXIiLCJvbiIsIndpbGxVbm1vdW50Iiwib2ZmIiwiQnV0dG9uIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFQUFiO3dCQUFBO0FBRXNCLEdBQWlCLENBQWpCLGNBQWlCO0FBRUosR0FBTSxDQUFOLEtBQU07Ozs7Ozs7Ozs7Ozs7Ozs4REFKekM7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7OzhCQUFBOzs7Ozs7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7Ozs7O1FBb0NxQyxDQVdyQzs7OztLQS9DQTs7O0FBTUEsR0FBSyxDQUFHQSxtQkFBbUIsR0FBS0MsS0FBVSxZQUFsQ0QsbUJBQW1CO0FBRTNCLEdBQUssQ0FBQ0UsVUFBVSxpQkFBaEIsUUFBUTtpQ0FSUjs7YUFRTUEsVUFBVTt5Q0FSaEI7Ozs7O1lBU0VDLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFDVixHQUFLLENBQTRCLFdBQWUsR0FBZixJQUFJLENBQUNDLFVBQVUsbUJBQWYsV0FBZSxDQUF4Q0MsYUFBYSxFQUFiQSxhQUFhLCtCQUFHLElBQUksbUJBQ3RCQyxrQkFBa0IsR0FBR0QsYUFBYSxFQUFFLEVBQUcsQUFBSCxDQUFHO2dCQUU3QyxFQUFFLEVBQUVDLGtCQUFrQixLQUFLLElBQUksRUFBRSxDQUFDO29CQUNoQyxJQUFJLENBQUNDLEVBQUUsQ0FBQ1AsbUJBQW1CLEVBQUVNLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN6RCxDQUFDO1lBQ0gsQ0FBQzs7O1lBRURFLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLEdBQUcsQ0FBQztnQkFDYixHQUFLLENBQTRCLFdBQWUsR0FBZixJQUFJLENBQUNKLFVBQVUsbUJBQWYsV0FBZSxDQUF4Q0MsYUFBYSxFQUFiQSxhQUFhLCtCQUFHLElBQUksbUJBQ3RCQyxrQkFBa0IsR0FBR0QsYUFBYSxFQUFFLEVBQUcsQUFBSCxDQUFHO2dCQUU3QyxFQUFFLEVBQUVDLGtCQUFrQixLQUFLLElBQUksRUFBRSxDQUFDO29CQUNoQyxJQUFJLENBQUNHLEdBQUcsQ0FBQ1QsbUJBQW1CLEVBQUVNLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMxRCxDQUFDO1lBQ0gsQ0FBQzs7TUF6Qkg7O0VBUXlCSSxLQUFNO2dCQUF6QlIsVUFBVSxFQW1CUFMsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQixDQUFlO0FBQ2pCLENBQUMsQ0E3Qkg7Z0JBUU1ULFVBQVUsRUF1QlBVLENBQWlCLG9CQUFHLENBQUM7SUFDMUJDLFNBQVMsRUFBRSxDQUFNO0FBQ25CLENBQUMsQ0FqQ0g7bUJBb0NlQyxjQUFTLFVBQUNaLFVBQVU7MEJBcENuQyJ9