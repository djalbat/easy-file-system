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
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
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
        "\n\n  border: none;\n  outline: none;\n  display: inline-block;\n  font-size: inherit;\n  text-align: left;\n  font-weight: inherit;\n  font-family: inherit;\n  background: transparent;\n  vertical-align: bottom;\n  \n"
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
            key: "getName",
            value: function getName() {
                var html = this.html(), name = html; ///
                return name;
            }
        },
        {
            key: "setName",
            value: function setName(name) {
                var html = name; ///
                this.html(html);
            }
        },
        {
            key: "show",
            value: function show() {
                var display = _constants.INLINE_BLOCK;
                this.display(display);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _this_properties = this.properties, _this_properties_onDoubleClick = _this_properties.onDoubleClick, onDoubleClick = _this_properties_onDoubleClick === void 0 ? null : _this_properties_onDoubleClick, doubleClickHandler = onDoubleClick; ///
                this.onDoubleClick(doubleClickHandler, this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _this_properties = this.properties, _this_properties_onDoubleClick = _this_properties.onDoubleClick, onDoubleClick = _this_properties_onDoubleClick === void 0 ? null : _this_properties_onDoubleClick, doubleClickHandler = onDoubleClick; ///
                this.offDoubleClick(doubleClickHandler, this);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showNameButton = this.show.bind(this), hideNameButton = this.hide.bind(this), getNameButtonName = this.getName.bind(this), setNameButtonName = this.setName.bind(this); ///
                return {
                    showNameButton: showNameButton,
                    hideNameButton: hideNameButton,
                    getNameButtonName: getNameButtonName,
                    setNameButtonName: setNameButtonName
                };
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
var _default = (0, _easyWithStyle.default)(NameButton)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vbmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IElOTElORV9CTE9DSyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgTmFtZUJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuaHRtbCgpLFxuICAgICAgICAgIG5hbWUgPSBodG1sOyAgLy8vXG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIGNvbnN0IGh0bWwgPSBuYW1lOyAgLy8vXG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBJTkxJTkVfQkxPQ0s7XG5cbiAgICB0aGlzLmRpc3BsYXkoZGlzcGxheSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG9uRG91YmxlQ2xpY2sgPSBudWxsIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgZG91YmxlQ2xpY2tIYW5kbGVyID0gb25Eb3VibGVDbGljazsgLy8vXG5cbiAgICB0aGlzLm9uRG91YmxlQ2xpY2soZG91YmxlQ2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Eb3VibGVDbGljayA9IG51bGwgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBkb3VibGVDbGlja0hhbmRsZXIgPSBvbkRvdWJsZUNsaWNrOyAvLy9cblxuICAgIHRoaXMub2ZmRG91YmxlQ2xpY2soZG91YmxlQ2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd05hbWVCdXR0b24gPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaGlkZU5hbWVCdXR0b24gPSB0aGlzLmhpZGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ2V0TmFtZUJ1dHRvbk5hbWUgPSB0aGlzLmdldE5hbWUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0TmFtZUJ1dHRvbk5hbWUgPSB0aGlzLnNldE5hbWUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93TmFtZUJ1dHRvbixcbiAgICAgIGhpZGVOYW1lQnV0dG9uLFxuICAgICAgZ2V0TmFtZUJ1dHRvbk5hbWUsXG4gICAgICBzZXROYW1lQnV0dG9uTmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Eb3VibGVDbGlja1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJuYW1lXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE5hbWVCdXR0b24pYFxuXG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJOYW1lQnV0dG9uIiwiZ2V0TmFtZSIsImh0bWwiLCJuYW1lIiwic2V0TmFtZSIsInNob3ciLCJkaXNwbGF5IiwiSU5MSU5FX0JMT0NLIiwiZGlkTW91bnQiLCJwcm9wZXJ0aWVzIiwib25Eb3VibGVDbGljayIsImRvdWJsZUNsaWNrSGFuZGxlciIsIndpbGxVbm1vdW50Iiwib2ZmRG91YmxlQ2xpY2siLCJwYXJlbnRDb250ZXh0Iiwic2hvd05hbWVCdXR0b24iLCJiaW5kIiwiaGlkZU5hbWVCdXR0b24iLCJoaWRlIiwiZ2V0TmFtZUJ1dHRvbk5hbWUiLCJzZXROYW1lQnV0dG9uTmFtZSIsIkJ1dHRvbiIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdFQTs7O2VBQUE7OztrRUE5RHNCO29CQUVDO3lCQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSwyQkF5REgsQUF6REg7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsSUFBTUMsT0FBTyxJQUFJLENBQUNBLElBQUksSUFDaEJDLE9BQU9ELE1BQU8sR0FBRztnQkFFdkIsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRRCxJQUFJLEVBQUU7Z0JBQ1osSUFBTUQsT0FBT0MsTUFBTyxHQUFHO2dCQUV2QixJQUFJLENBQUNELElBQUksQ0FBQ0E7WUFDWjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPO2dCQUNMLElBQU1DLFVBQVVDLHVCQUFZO2dCQUU1QixJQUFJLENBQUNELE9BQU8sQ0FBQ0E7WUFDZjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQWlDLG1CQUFBLElBQUksQ0FBQ0MsVUFBVSxtQ0FBZixpQkFBekJDLGVBQUFBLDREQUFnQixJQUFJLG1DQUN0QkMscUJBQXFCRCxlQUFlLEdBQUc7Z0JBRTdDLElBQUksQ0FBQ0EsYUFBYSxDQUFDQyxvQkFBb0IsSUFBSTtZQUM3Qzs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLElBQWlDLG1CQUFBLElBQUksQ0FBQ0gsVUFBVSxtQ0FBZixpQkFBekJDLGVBQUFBLDREQUFnQixJQUFJLG1DQUN0QkMscUJBQXFCRCxlQUFlLEdBQUc7Z0JBRTdDLElBQUksQ0FBQ0csY0FBYyxDQUFDRixvQkFBb0IsSUFBSTtZQUM5Qzs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ1YsSUFBSSxDQUFDVyxJQUFJLENBQUMsSUFBSSxHQUNwQ0MsaUJBQWlCLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUNwQ0csb0JBQW9CLElBQUksQ0FBQ2xCLE9BQU8sQ0FBQ2UsSUFBSSxDQUFDLElBQUksR0FDMUNJLG9CQUFvQixJQUFJLENBQUNoQixPQUFPLENBQUNZLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRztnQkFFdkQsT0FBUTtvQkFDTkQsZ0JBQUFBO29CQUNBRSxnQkFBQUE7b0JBQ0FFLG1CQUFBQTtvQkFDQUMsbUJBQUFBO2dCQUNGO1lBQ0Y7OztXQTlDSXBCO0VBQW1CcUIsWUFBTTtBQWdEN0IsZ0JBaERJckIsWUFnREdzQixxQkFBb0I7SUFDekI7Q0FDRDtBQUVELGdCQXBESXRCLFlBb0RHdUIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDekIifQ==