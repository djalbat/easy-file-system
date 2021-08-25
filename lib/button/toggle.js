"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _up = _interopRequireDefault(require("../div/svg/toggle/up"));
var _down = _interopRequireDefault(require("../div/svg/toggle/down"));
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
        "\n\n  cursor: pointer;\n  background: transparent;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ToggleButton = /*#__PURE__*/ function(Button) {
    _inherits(ToggleButton, Button);
    function ToggleButton() {
        _classCallCheck(this, ToggleButton);
        return _possibleConstructorReturn(this, _getPrototypeOf(ToggleButton).apply(this, arguments));
    }
    _createClass(ToggleButton, [
        {
            key: "expand",
            value: function expand() {
                this.hideUpToggleSVGDiv();
                this.showDownToggleSVGDiv();
            }
        },
        {
            key: "collapse",
            value: function collapse() {
                this.showUpToggleSVGDiv();
                this.hideDownToggleSVGDiv();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _constructor = this.constructor, UpToggleSVGDiv = _constructor.UpToggleSVGDiv, DownToggleSVGDiv = _constructor.DownToggleSVGDiv;
                return [
                    /*#__PURE__*/ React.createElement(UpToggleSVGDiv, null),
                    /*#__PURE__*/ React.createElement(DownToggleSVGDiv, null)
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
_defineProperty(ToggleButton, "UpToggleSVGDiv", _up.default);
_defineProperty(ToggleButton, "DownToggleSVGDiv", _down.default);
_defineProperty(ToggleButton, "defaultProperties", {
    className: "toggle"
});
var _default = (0, _easyWithStyle).default(ToggleButton)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vdG9nZ2xlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVXBUb2dnbGVTVkdEaXYgZnJvbSBcIi4uL2Rpdi9zdmcvdG9nZ2xlL3VwXCI7XG5pbXBvcnQgRG93blRvZ2dsZVNWR0RpdiBmcm9tIFwiLi4vZGl2L3N2Zy90b2dnbGUvZG93blwiO1xuXG5jbGFzcyBUb2dnbGVCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBleHBhbmQoKSB7XG4gICAgdGhpcy5oaWRlVXBUb2dnbGVTVkdEaXYoKTtcbiAgICB0aGlzLnNob3dEb3duVG9nZ2xlU1ZHRGl2KCk7XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICB0aGlzLnNob3dVcFRvZ2dsZVNWR0RpdigpO1xuICAgIHRoaXMuaGlkZURvd25Ub2dnbGVTVkdEaXYoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBVcFRvZ2dsZVNWR0RpdiwgRG93blRvZ2dsZVNWR0RpdiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8VXBUb2dnbGVTVkdEaXYvPixcbiAgICAgIDxEb3duVG9nZ2xlU1ZHRGl2Lz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBleHBhbmRUb2dnbGVCdXR0b24gPSB0aGlzLmV4cGFuZC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBjb2xsYXBzZVRvZ2dsZUJ1dHRvbiA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBleHBhbmRUb2dnbGVCdXR0b24sXG4gICAgICBjb2xsYXBzZVRvZ2dsZUJ1dHRvblxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyBVcFRvZ2dsZVNWR0RpdiA9IFVwVG9nZ2xlU1ZHRGl2O1xuXG4gIHN0YXRpYyBEb3duVG9nZ2xlU1ZHRGl2ID0gRG93blRvZ2dsZVNWR0RpdjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInRvZ2dsZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShUb2dnbGVCdXR0b24pYFxuXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWhCLEtBQU07SUFFRixHQUFzQjtJQUNwQixLQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQStDZCx3REFLdkM7Ozs7Ozs7SUFsRE0sWUFBWTtjQUFaLFlBQVk7YUFBWixZQUFZOzhCQUFaLFlBQVk7Z0VBQVosWUFBWTs7aUJBQVosWUFBWTs7WUFDaEIsR0FBTSxHQUFOLE1BQU07NEJBQU4sTUFBTTtxQkFDQyxrQkFBa0I7cUJBQ2xCLG9CQUFvQjs7OztZQUczQixHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRO3FCQUNELGtCQUFrQjtxQkFDbEIsb0JBQW9COzs7O1lBRzNCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ2tDLFlBQWdCLFFBQVgsV0FBVyxFQUFyRCxjQUFjLEdBQXVCLFlBQWdCLENBQXJELGNBQWMsRUFBRSxnQkFBZ0IsR0FBSyxZQUFnQixDQUFyQyxnQkFBZ0I7O3NEQUlyQyxjQUFjO3NEQUNkLGdCQUFnQjs7Ozs7WUFLckIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDTCxrQkFBa0IsUUFBUSxNQUFNLENBQUMsSUFBSSxRQUNyQyxvQkFBb0IsUUFBUSxRQUFRLENBQUMsSUFBSSxPQUFTLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7b0JBR3pELGtCQUFrQixFQUFsQixrQkFBa0I7b0JBQ2xCLG9CQUFvQixFQUFwQixvQkFBb0I7Ozs7O1lBSXhCLEdBQVUsR0FBVixVQUFVOzRCQUFWLFVBQVU7cUJBQ0gsYUFBYTs7OztXQWpDaEIsWUFBWTtFQUxLLEtBQU07Z0JBS3ZCLFlBQVksR0FvQ1QsY0FBYyxHQXZDSSxHQUFzQjtnQkFHM0MsWUFBWSxHQXNDVCxnQkFBZ0IsR0F4Q0ksS0FBd0I7Z0JBRS9DLFlBQVksR0F3Q1QsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxNQUFROzttQkFoREQsY0FBaUIsVUFvRGQsWUFBWSJ9