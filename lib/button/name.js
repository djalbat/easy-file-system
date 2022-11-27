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
        "\n\n  border: none;\n  outline: none;\n  display: inline-block;\n  font-size: inherit;\n  text-align: left;\n  font-weight: inherit;\n  font-family: inherit;\n  background: transparent;\n  \n"
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
                var showNameButton = this.show.bind(this), hideNameButton = this.hide.bind(this); ///
                return {
                    showNameButton: showNameButton,
                    hideNameButton: hideNameButton
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vbmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IElOTElORV9CTE9DSyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgTmFtZUJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuaHRtbCgpLFxuICAgICAgICAgIG5hbWUgPSBodG1sOyAgLy8vXG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIGNvbnN0IGh0bWwgPSBuYW1lOyAgLy8vXG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBJTkxJTkVfQkxPQ0s7XG5cbiAgICB0aGlzLmRpc3BsYXkoZGlzcGxheSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG9uRG91YmxlQ2xpY2sgPSBudWxsIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgZG91YmxlQ2xpY2tIYW5kbGVyID0gb25Eb3VibGVDbGljazsgLy8vXG5cbiAgICB0aGlzLm9uRG91YmxlQ2xpY2soZG91YmxlQ2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Eb3VibGVDbGljayA9IG51bGwgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBkb3VibGVDbGlja0hhbmRsZXIgPSBvbkRvdWJsZUNsaWNrOyAvLy9cblxuICAgIHRoaXMub2ZmRG91YmxlQ2xpY2soZG91YmxlQ2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd05hbWVCdXR0b24gPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaGlkZU5hbWVCdXR0b24gPSB0aGlzLmhpZGUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93TmFtZUJ1dHRvbixcbiAgICAgIGhpZGVOYW1lQnV0dG9uXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbkRvdWJsZUNsaWNrXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm5hbWVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTmFtZUJ1dHRvbilgXG5cbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIk5hbWVCdXR0b24iLCJnZXROYW1lIiwiaHRtbCIsIm5hbWUiLCJzZXROYW1lIiwic2hvdyIsImRpc3BsYXkiLCJJTkxJTkVfQkxPQ0siLCJkaWRNb3VudCIsInByb3BlcnRpZXMiLCJvbkRvdWJsZUNsaWNrIiwiZG91YmxlQ2xpY2tIYW5kbGVyIiwid2lsbFVubW91bnQiLCJvZmZEb3VibGVDbGljayIsInBhcmVudENvbnRleHQiLCJzaG93TmFtZUJ1dHRvbiIsImJpbmQiLCJoaWRlTmFtZUJ1dHRvbiIsImhpZGUiLCJCdXR0b24iLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0REE7OztlQUFBOzs7a0VBMURzQjtvQkFFQzt5QkFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEsMkJBcURILEFBckRIO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLElBQU1DLE9BQU8sSUFBSSxDQUFDQSxJQUFJLElBQ2hCQyxPQUFPRCxNQUFPLEdBQUc7Z0JBRXZCLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUQsSUFBSSxFQUFFO2dCQUNaLElBQU1ELE9BQU9DLE1BQU8sR0FBRztnQkFFdkIsSUFBSSxDQUFDRCxJQUFJLENBQUNBO1lBQ1o7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBTztnQkFDTCxJQUFNQyxVQUFVQyx1QkFBWTtnQkFFNUIsSUFBSSxDQUFDRCxPQUFPLENBQUNBO1lBQ2Y7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFpQyxtQkFBQSxJQUFJLENBQUNDLFVBQVUsbUNBQWYsaUJBQXpCQyxlQUFBQSw0REFBZ0IsSUFBSSxtQ0FDdEJDLHFCQUFxQkQsZUFBZSxHQUFHO2dCQUU3QyxJQUFJLENBQUNBLGFBQWEsQ0FBQ0Msb0JBQW9CLElBQUk7WUFDN0M7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDWixJQUFpQyxtQkFBQSxJQUFJLENBQUNILFVBQVUsbUNBQWYsaUJBQXpCQyxlQUFBQSw0REFBZ0IsSUFBSSxtQ0FDdEJDLHFCQUFxQkQsZUFBZSxHQUFHO2dCQUU3QyxJQUFJLENBQUNHLGNBQWMsQ0FBQ0Ysb0JBQW9CLElBQUk7WUFDOUM7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQU1DLGlCQUFpQixJQUFJLENBQUNWLElBQUksQ0FBQ1csSUFBSSxDQUFDLElBQUksR0FDcENDLGlCQUFpQixJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUVqRCxPQUFRO29CQUNORCxnQkFBQUE7b0JBQ0FFLGdCQUFBQTtnQkFDRjtZQUNGOzs7V0ExQ0lqQjtFQUFtQm1CLFlBQU07QUE0QzdCLGdCQTVDSW5CLFlBNENHb0IscUJBQW9CO0lBQ3pCO0NBQ0Q7QUFFRCxnQkFoRElwQixZQWdER3FCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3ZCIn0=