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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vbmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgREJMQ0xJQ0tfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmNsYXNzIE5hbWVCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG9uRG91YmxlQ2xpY2sgPSBudWxsIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgZG91YmxlQ2xpY2tIYW5kbGVyID0gb25Eb3VibGVDbGljazsgLy8vXG5cbiAgICBpZiAoZG91YmxlQ2xpY2tIYW5kbGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9uKERCTENMSUNLX0VWRU5UX1RZUEUsIGRvdWJsZUNsaWNrSGFuZGxlciwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBvbkRvdWJsZUNsaWNrID0gbnVsbCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGRvdWJsZUNsaWNrSGFuZGxlciA9IG9uRG91YmxlQ2xpY2s7IC8vL1xuXG4gICAgaWYgKGRvdWJsZUNsaWNrSGFuZGxlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vZmYoREJMQ0xJQ0tfRVZFTlRfVFlQRSwgZG91YmxlQ2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbkRvdWJsZUNsaWNrXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm5hbWVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTmFtZUJ1dHRvbilgXG5cbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiTmFtZUJ1dHRvbiIsImRpZE1vdW50IiwicHJvcGVydGllcyIsIm9uRG91YmxlQ2xpY2siLCJkb3VibGVDbGlja0hhbmRsZXIiLCJvbiIsIndpbGxVbm1vdW50Iiwib2ZmIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVoQixHQUFNLENBQU4sS0FBTTtBQUVPLEdBQWUsQ0FBZixXQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBOEJkLENBV3JDOzs7Ozs7O0lBdkNNQSxVQUFVLGlCQUFoQixRQUFRO2NBQUZBLFVBQVU7OEJBQVZBLFVBQVU7YUFBVkEsVUFBVTs4QkFBVkEsVUFBVTs7O2lCQUFWQSxVQUFVOztZQUNkQyxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsR0FBSyxDQUE0QixXQUFlLEdBQWYsSUFBSSxDQUFDQyxVQUFVLG1CQUFmLFdBQWUsQ0FBeENDLGFBQWEsRUFBYkEsYUFBYSwrQkFBRyxJQUFJLG1CQUN0QkMsa0JBQWtCLEdBQUdELGFBQWEsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTdDLEVBQUUsRUFBRUMsa0JBQWtCLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ2hDLElBQUksQ0FBQ0MsRUFBRSxDQVJ1QixXQUFlLHNCQVFoQkQsa0JBQWtCLEVBQUUsSUFBSTtnQkFDdkQsQ0FBQztZQUNILENBQUM7OztZQUVERSxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsR0FBSyxDQUE0QixXQUFlLEdBQWYsSUFBSSxDQUFDSixVQUFVLG1CQUFmLFdBQWUsQ0FBeENDLGFBQWEsRUFBYkEsYUFBYSwrQkFBRyxJQUFJLG1CQUN0QkMsa0JBQWtCLEdBQUdELGFBQWEsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTdDLEVBQUUsRUFBRUMsa0JBQWtCLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ2hDLElBQUksQ0FBQ0csR0FBRyxDQWpCc0IsV0FBZSxzQkFpQmZILGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hELENBQUM7WUFDSCxDQUFDOzs7V0FqQkdKLFVBQVU7RUFKTyxLQUFNO2dCQUl2QkEsVUFBVSxFQW1CUFEsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQixDQUFlO0FBQ2pCLENBQUM7Z0JBckJHUixVQUFVLEVBdUJQUyxDQUFpQixvQkFBRyxDQUFDO0lBQzFCQyxTQUFTLEVBQUUsQ0FBTTtBQUNuQixDQUFDO21CQS9CbUIsY0FBaUIsVUFrQ2RWLFVBQVUifQ==