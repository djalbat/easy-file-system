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
            key: "getUpToggleSVGDiv",
            value: function getUpToggleSVGDiv() {
                var _constructor = this.constructor, UpToggleSVGDiv = _constructor.UpToggleSVGDiv;
                return UpToggleSVGDiv;
            }
        },
        {
            key: "getDownToggleSVGDiv",
            value: function getDownToggleSVGDiv() {
                var _constructor = this.constructor, DownToggleSVGDiv = _constructor.DownToggleSVGDiv;
                return DownToggleSVGDiv;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var UpToggleSVGDiv = this.getUpToggleSVGDiv(), DownToggleSVGDiv = this.getDownToggleSVGDiv();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vdG9nZ2xlLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIkJ1dHRvbiIsIlVwVG9nZ2xlU1ZHRGl2IiwiRG93blRvZ2dsZVNWR0RpdiIsIlRvZ2dsZUJ1dHRvbiIsImV4cGFuZCIsImhpZGVVcFRvZ2dsZVNWR0RpdiIsInNob3dEb3duVG9nZ2xlU1ZHRGl2IiwiY29sbGFwc2UiLCJzaG93VXBUb2dnbGVTVkdEaXYiLCJoaWRlRG93blRvZ2dsZVNWR0RpdiIsImdldFVwVG9nZ2xlU1ZHRGl2IiwiY29uc3RydWN0b3IiLCJnZXREb3duVG9nZ2xlU1ZHRGl2IiwiY2hpbGRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJleHBhbmRUb2dnbGVCdXR0b24iLCJiaW5kIiwiY29sbGFwc2VUb2dnbGVCdXR0b24iLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWhCLEdBQU0sQ0FBTixLQUFNO0FBRUYsR0FBc0IsQ0FBdEIsR0FBc0I7QUFDcEIsR0FBd0IsQ0FBeEIsS0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0E0RGQsd0RBS3ZDOzs7Ozs7O0lBL0RNLFlBQVksaUJBQWxCLFFBQVE7Y0FBRixZQUFZO2FBQVosWUFBWTs4QkFBWixZQUFZO2dFQUFaLFlBQVk7O2lCQUFaLFlBQVk7O1lBQ2hCLEdBQU0sR0FBTixNQUFNO21CQUFOLFFBQVEsQ0FBUixNQUFNLEdBQUcsQ0FBQztnQkFDUixJQUFJLENBQUMsa0JBQWtCO2dCQUN2QixJQUFJLENBQUMsb0JBQW9CO1lBQzNCLENBQUM7OztZQUVELEdBQVEsR0FBUixRQUFRO21CQUFSLFFBQVEsQ0FBUixRQUFRLEdBQUcsQ0FBQztnQkFDVixJQUFJLENBQUMsa0JBQWtCO2dCQUN2QixJQUFJLENBQUMsb0JBQW9CO1lBQzNCLENBQUM7OztZQUVELEdBQWlCLEdBQWpCLGlCQUFpQjttQkFBakIsUUFBUSxDQUFSLGlCQUFpQixHQUFHLENBQUM7Z0JBQ25CLEdBQUssQ0FBc0IsWUFBZ0IsR0FBaEIsSUFBSSxDQUFDLFdBQVcsRUFBbkMsY0FBYyxHQUFLLFlBQWdCLENBQW5DLGNBQWM7Z0JBRXRCLE1BQU0sQ0FBQyxjQUFjO1lBQ3ZCLENBQUM7OztZQUVELEdBQW1CLEdBQW5CLG1CQUFtQjttQkFBbkIsUUFBUSxDQUFSLG1CQUFtQixHQUFHLENBQUM7Z0JBQ3JCLEdBQUssQ0FBd0IsWUFBZ0IsR0FBaEIsSUFBSSxDQUFDLFdBQVcsRUFBckMsZ0JBQWdCLEdBQUssWUFBZ0IsQ0FBckMsZ0JBQWdCO2dCQUV4QixNQUFNLENBQUMsZ0JBQWdCO1lBQ3pCLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsSUFDdkMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQjtnQkFFakQsTUFBTSxDQUFFLENBQUM7c0RBRU4sY0FBYztzREFDZCxnQkFBZ0I7Z0JBRW5CLENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FDMUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFM0QsTUFBTSxDQUFFLENBQUM7b0JBQ1Asa0JBQWtCLEVBQWxCLGtCQUFrQjtvQkFDbEIsb0JBQW9CLEVBQXBCLG9CQUFvQjtnQkFDdEIsQ0FBQztZQUNILENBQUM7OztZQUVELEdBQVUsR0FBVixVQUFVO21CQUFWLFFBQVEsQ0FBUixVQUFVLEdBQUcsQ0FBQztnQkFDWixJQUFJLENBQUMsYUFBYTtZQUNwQixDQUFDOzs7V0EvQ0csWUFBWTtFQUxLLEtBQU07Z0JBS3ZCLFlBQVksR0FpRFQsY0FBYyxHQXBESSxHQUFzQjtnQkFHM0MsWUFBWSxHQW1EVCxnQkFBZ0IsR0FyREksS0FBd0I7Z0JBRS9DLFlBQVksR0FxRFQsaUJBQWlCLEdBQUcsQ0FBQztJQUMxQixTQUFTLEdBQUUsTUFBUTtBQUNyQixDQUFDO21CQTlEbUIsY0FBaUIsVUFpRWQsWUFBWSJ9