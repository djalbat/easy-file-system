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
                this.onDoubleClick(doubleClickHandler, this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _properties = this.properties, _onDoubleClick = _properties.onDoubleClick, onDoubleClick = _onDoubleClick === void 0 ? null : _onDoubleClick, doubleClickHandler = onDoubleClick; ///
                this.offDoubleClick(doubleClickHandler, this);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vbmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImVhc3lcIjtcblxuY2xhc3MgTmFtZUJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Eb3VibGVDbGljayA9IG51bGwgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBkb3VibGVDbGlja0hhbmRsZXIgPSBvbkRvdWJsZUNsaWNrOyAvLy9cblxuICAgIHRoaXMub25Eb3VibGVDbGljayhkb3VibGVDbGlja0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBvbkRvdWJsZUNsaWNrID0gbnVsbCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGRvdWJsZUNsaWNrSGFuZGxlciA9IG9uRG91YmxlQ2xpY2s7IC8vL1xuXG4gICAgdGhpcy5vZmZEb3VibGVDbGljayhkb3VibGVDbGlja0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Eb3VibGVDbGlja1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJuYW1lXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE5hbWVCdXR0b24pYFxuXG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIk5hbWVCdXR0b24iLCJkaWRNb3VudCIsInByb3BlcnRpZXMiLCJvbkRvdWJsZUNsaWNrIiwiZG91YmxlQ2xpY2tIYW5kbGVyIiwid2lsbFVubW91bnQiLCJvZmZEb3VibGVDbGljayIsIkJ1dHRvbiIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLGNBQWlCLGtDQUFqQixpQkFBaUIsRUFBQTtBQUVoQixJQUFBLEtBQU0sV0FBTixNQUFNLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLFVBQVUsaUJBd0JiLEFBeEJIOzs7YUFBTUEsVUFBVTs7Ozs7O1lBQ2RDLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxHQUFHO2dCQUNULElBQWlDLFdBQWUsR0FBZixJQUFJLENBQUNDLFVBQVUsbUJBQWYsV0FBZSxDQUF4Q0MsYUFBYSxFQUFiQSxhQUFhLCtCQUFHLElBQUksaUJBQUEsRUFDdEJDLGtCQUFrQixHQUFHRCxhQUFhLEFBQUMsRUFBQyxHQUFHO2dCQUU3QyxJQUFJLENBQUNBLGFBQWEsQ0FBQ0Msa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDOUM7OztZQUVEQyxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsR0FBRztnQkFDWixJQUFpQyxXQUFlLEdBQWYsSUFBSSxDQUFDSCxVQUFVLG1CQUFmLFdBQWUsQ0FBeENDLGFBQWEsRUFBYkEsYUFBYSwrQkFBRyxJQUFJLGlCQUFBLEVBQ3RCQyxrQkFBa0IsR0FBR0QsYUFBYSxBQUFDLEVBQUMsR0FBRztnQkFFN0MsSUFBSSxDQUFDRyxjQUFjLENBQUNGLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO2FBQy9DOzs7O0NBU0YsQ0F0QndCRyxLQUFNLE9BQUEsQ0FzQjlCO0FBUEMsZ0JBZklQLFVBQVUsRUFlUFEsbUJBQWlCLEVBQUc7SUFDekIsZUFBZTtDQUNoQixDQUFDO0FBRUYsZ0JBbkJJUixVQUFVLEVBbUJQUyxtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLE1BQU07Q0FDbEIsQ0FBQztlQUdXQyxDQUFBQSxHQUFBQSxjQUFTLEFBQVksQ0FBQSxRQUFaLENBQUNYLFVBQVUsQ0FBQyJ9