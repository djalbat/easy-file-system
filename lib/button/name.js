"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _eventTypes = require("../eventTypes");
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  border: none;\n  outline: none;\n  display: inline-block;\n  font-size: inherit;\n  text-align: left;\n  font-family: inherit;\n  background: transparent;\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var NameButton = /*#__PURE__*/ function(Button) {
    _inherits(NameButton, Button);
    function NameButton() {
        _classCallCheck(this, NameButton);
        return _possibleConstructorReturn(this, _getPrototypeOf(NameButton).apply(this, arguments));
    }
    _createClass(NameButton, [
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, _onDoubleClick = _properties.onDoubleClick, onDoubleClick = _onDoubleClick === void 0 ? null : _onDoubleClick, doubleClickHandler = onDoubleClick; ///
                if (doubleClickHandler !== null) {
                    this.on(_eventTypes.DBLCLICK_EVENT_TYPE, doubleClickHandler, this);
                }
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _properties = this.properties, _onDoubleClick = _properties.onDoubleClick, onDoubleClick = _onDoubleClick === void 0 ? null : _onDoubleClick, doubleClickHandler = onDoubleClick; ///
                if (doubleClickHandler !== null) {
                    this.off(_eventTypes.DBLCLICK_EVENT_TYPE, doubleClickHandler, this);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vbmFtZS5qcyJdLCJuYW1lcyI6WyJ3aXRoU3R5bGUiLCJCdXR0b24iLCJEQkxDTElDS19FVkVOVF9UWVBFIiwiTmFtZUJ1dHRvbiIsImRpZE1vdW50Iiwib25Eb3VibGVDbGljayIsInByb3BlcnRpZXMiLCJkb3VibGVDbGlja0hhbmRsZXIiLCJvbiIsIndpbGxVbm1vdW50Iiwib2ZmIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVoQixHQUFNLENBQU4sS0FBTTtBQUVPLEdBQWUsQ0FBZixXQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBOEJkLENBV3JDOzs7Ozs7O0lBdkNNLFVBQVUsaUJBQWhCLFFBQVE7Y0FBRixVQUFVO2FBQVYsVUFBVTs4QkFBVixVQUFVO2dFQUFWLFVBQVU7O2lCQUFWLFVBQVU7O1lBQ2QsR0FBUSxFQUFSLENBQVE7bUJBQVIsUUFBUSxDQUFSLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBNEIsV0FBZSxHQUFmLElBQUksQ0FBQyxVQUFVLG1CQUFmLFdBQWUsQ0FBeEMsYUFBYSxFQUFiLGFBQWEsK0JBQUcsSUFBSSxtQkFDdEIsa0JBQWtCLEdBQUcsYUFBYSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFN0MsRUFBRSxFQUFFLGtCQUFrQixLQUFLLElBQUksRUFBRSxDQUFDO29CQUNoQyxJQUFJLENBQUMsRUFBRSxDQVJ1QixXQUFlLHNCQVFoQixrQkFBa0IsRUFBRSxJQUFJO2dCQUN2RCxDQUFDO1lBQ0gsQ0FBQzs7O1lBRUQsR0FBVyxFQUFYLENBQVc7bUJBQVgsUUFBUSxDQUFSLFdBQVcsR0FBRyxDQUFDO2dCQUNiLEdBQUssQ0FBNEIsV0FBZSxHQUFmLElBQUksQ0FBQyxVQUFVLG1CQUFmLFdBQWUsQ0FBeEMsYUFBYSxFQUFiLGFBQWEsK0JBQUcsSUFBSSxtQkFDdEIsa0JBQWtCLEdBQUcsYUFBYSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFN0MsRUFBRSxFQUFFLGtCQUFrQixLQUFLLElBQUksRUFBRSxDQUFDO29CQUNoQyxJQUFJLENBQUMsR0FBRyxDQWpCc0IsV0FBZSxzQkFpQmYsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEQsQ0FBQztZQUNILENBQUM7OztXQWpCRyxVQUFVO0VBSk8sS0FBTTtnQkFJdkIsVUFBVSxFQW1CUCxDQUFpQixvQkFBRyxDQUFDO0lBQzFCLENBQWU7QUFDakIsQ0FBQztnQkFyQkcsVUFBVSxFQXVCUCxDQUFpQixvQkFBRyxDQUFDO0lBQzFCLFNBQVMsRUFBRSxDQUFNO0FBQ25CLENBQUM7bUJBL0JtQixjQUFpQixVQWtDZCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IERCTENMSUNLX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5jbGFzcyBOYW1lQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvbkRvdWJsZUNsaWNrID0gbnVsbCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGRvdWJsZUNsaWNrSGFuZGxlciA9IG9uRG91YmxlQ2xpY2s7IC8vL1xuXG4gICAgaWYgKGRvdWJsZUNsaWNrSGFuZGxlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vbihEQkxDTElDS19FVkVOVF9UWVBFLCBkb3VibGVDbGlja0hhbmRsZXIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Eb3VibGVDbGljayA9IG51bGwgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBkb3VibGVDbGlja0hhbmRsZXIgPSBvbkRvdWJsZUNsaWNrOyAvLy9cblxuICAgIGlmIChkb3VibGVDbGlja0hhbmRsZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub2ZmKERCTENMSUNLX0VWRU5UX1RZUEUsIGRvdWJsZUNsaWNrSGFuZGxlciwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Eb3VibGVDbGlja1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJuYW1lXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE5hbWVCdXR0b24pYFxuXG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgXG5gO1xuIl19