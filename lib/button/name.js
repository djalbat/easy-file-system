"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _constants = require("../constants");
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
        "\n\n  border: none;\n  outline: none;\n  display: inline-block;\n  font-size: inherit;\n  text-align: left;\n  font-family: inherit;\n  background: transparent;\n  \n"
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
                var _properties = this.properties, onDoubleClick = _properties.onDoubleClick, doubleClickHandler = onDoubleClick; ///
                this.on(_constants.DBLCLICK, doubleClickHandler, this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _properties = this.properties, onDoubleClick = _properties.onDoubleClick, doubleClickHandler = onDoubleClick; ///
                this.off(_constants.DBLCLICK, doubleClickHandler, this);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vbmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgREJMQ0xJQ0sgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIE5hbWVCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG9uRG91YmxlQ2xpY2sgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBkb3VibGVDbGlja0hhbmRsZXIgPSBvbkRvdWJsZUNsaWNrOyAvLy9cblxuICAgIHRoaXMub24oREJMQ0xJQ0ssIGRvdWJsZUNsaWNrSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IG9uRG91YmxlQ2xpY2sgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBkb3VibGVDbGlja0hhbmRsZXIgPSBvbkRvdWJsZUNsaWNrOyAvLy9cblxuICAgIHRoaXMub2ZmKERCTENMSUNLLCBkb3VibGVDbGlja0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Eb3VibGVDbGlja1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJuYW1lXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE5hbWVCdXR0b24pYFxuXG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFaEIsS0FBTTtJQUVKLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0EwQkYsc0tBVXJDOzs7Ozs7O0lBbENNLFVBQVU7Y0FBVixVQUFVO2FBQVYsVUFBVTs4QkFBVixVQUFVO2dFQUFWLFVBQVU7O2lCQUFWLFVBQVU7O1lBQ2QsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUTtvQkFDb0IsV0FBZSxRQUFWLFVBQVUsRUFBakMsYUFBYSxHQUFLLFdBQWUsQ0FBakMsYUFBYSxFQUNmLGtCQUFrQixHQUFHLGFBQWEsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7cUJBRXhDLEVBQUUsQ0FQYyxVQUFjLFdBT2pCLGtCQUFrQjs7OztZQUd0QyxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXO29CQUNpQixXQUFlLFFBQVYsVUFBVSxFQUFqQyxhQUFhLEdBQUssV0FBZSxDQUFqQyxhQUFhLEVBQ2Ysa0JBQWtCLEdBQUcsYUFBYSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztxQkFFeEMsR0FBRyxDQWRhLFVBQWMsV0FjaEIsa0JBQWtCOzs7O1dBWm5DLFVBQVU7RUFKTyxLQUFNO2dCQUl2QixVQUFVLEdBZVAsaUJBQWlCO0tBQ3RCLGFBQWU7O2dCQWhCYixVQUFVLEdBbUJQLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsSUFBTTs7bUJBMUJDLGNBQWlCLFVBOEJkLFVBQVUifQ==