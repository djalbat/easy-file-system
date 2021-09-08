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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vdG9nZ2xlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVXBUb2dnbGVTVkdEaXYgZnJvbSBcIi4uL2Rpdi9zdmcvdG9nZ2xlL3VwXCI7XG5pbXBvcnQgRG93blRvZ2dsZVNWR0RpdiBmcm9tIFwiLi4vZGl2L3N2Zy90b2dnbGUvZG93blwiO1xuXG5jbGFzcyBUb2dnbGVCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBleHBhbmQoKSB7XG4gICAgdGhpcy5oaWRlVXBUb2dnbGVTVkdEaXYoKTtcbiAgICB0aGlzLnNob3dEb3duVG9nZ2xlU1ZHRGl2KCk7XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICB0aGlzLnNob3dVcFRvZ2dsZVNWR0RpdigpO1xuICAgIHRoaXMuaGlkZURvd25Ub2dnbGVTVkdEaXYoKTtcbiAgfVxuXG4gIGdldFVwVG9nZ2xlU1ZHRGl2KCkge1xuICAgIGNvbnN0IHsgVXBUb2dnbGVTVkdEaXYgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gVXBUb2dnbGVTVkdEaXY7XG4gIH1cblxuICBnZXREb3duVG9nZ2xlU1ZHRGl2KCkge1xuICAgIGNvbnN0IHsgRG93blRvZ2dsZVNWR0RpdiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBEb3duVG9nZ2xlU1ZHRGl2O1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBVcFRvZ2dsZVNWR0RpdiA9IHRoaXMuZ2V0VXBUb2dnbGVTVkdEaXYoKSxcbiAgICAgICAgICBEb3duVG9nZ2xlU1ZHRGl2ID0gdGhpcy5nZXREb3duVG9nZ2xlU1ZHRGl2KCk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFVwVG9nZ2xlU1ZHRGl2Lz4sXG4gICAgICA8RG93blRvZ2dsZVNWR0Rpdi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZXhwYW5kVG9nZ2xlQnV0dG9uID0gdGhpcy5leHBhbmQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgY29sbGFwc2VUb2dnbGVCdXR0b24gPSB0aGlzLmNvbGxhcHNlLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZXhwYW5kVG9nZ2xlQnV0dG9uLFxuICAgICAgY29sbGFwc2VUb2dnbGVCdXR0b25cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgVXBUb2dnbGVTVkdEaXYgPSBVcFRvZ2dsZVNWR0RpdjtcblxuICBzdGF0aWMgRG93blRvZ2dsZVNWR0RpdiA9IERvd25Ub2dnbGVTVkdEaXY7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ0b2dnbGVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVG9nZ2xlQnV0dG9uKWBcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVoQixLQUFNO0lBRUYsR0FBc0I7SUFDcEIsS0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0E0RGQsd0RBS3ZDOzs7Ozs7O0lBL0RNLFlBQVk7Y0FBWixZQUFZO2FBQVosWUFBWTs4QkFBWixZQUFZO2dFQUFaLFlBQVk7O2lCQUFaLFlBQVk7O1lBQ2hCLEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU07cUJBQ0Msa0JBQWtCO3FCQUNsQixvQkFBb0I7Ozs7WUFHM0IsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUTtxQkFDRCxrQkFBa0I7cUJBQ2xCLG9CQUFvQjs7OztZQUczQixHQUFpQixHQUFqQixpQkFBaUI7NEJBQWpCLGlCQUFpQjtvQkFDWSxZQUFnQixRQUFYLFdBQVcsRUFBbkMsY0FBYyxHQUFLLFlBQWdCLENBQW5DLGNBQWM7dUJBRWYsY0FBYzs7OztZQUd2QixHQUFtQixHQUFuQixtQkFBbUI7NEJBQW5CLG1CQUFtQjtvQkFDWSxZQUFnQixRQUFYLFdBQVcsRUFBckMsZ0JBQWdCLEdBQUssWUFBZ0IsQ0FBckMsZ0JBQWdCO3VCQUVqQixnQkFBZ0I7Ozs7WUFHekIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDTCxjQUFjLFFBQVEsaUJBQWlCLElBQ3ZDLGdCQUFnQixRQUFRLG1CQUFtQjs7c0RBSTlDLGNBQWM7c0RBQ2QsZ0JBQWdCOzs7OztZQUtyQixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNMLGtCQUFrQixRQUFRLE1BQU0sQ0FBQyxJQUFJLFFBQ3JDLG9CQUFvQixRQUFRLFFBQVEsQ0FBQyxJQUFJLE9BQVMsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOztvQkFHekQsa0JBQWtCLEVBQWxCLGtCQUFrQjtvQkFDbEIsb0JBQW9CLEVBQXBCLG9CQUFvQjs7Ozs7WUFJeEIsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVTtxQkFDSCxhQUFhOzs7O1dBOUNoQixZQUFZO0VBTEssS0FBTTtnQkFLdkIsWUFBWSxHQWlEVCxjQUFjLEdBcERJLEdBQXNCO2dCQUczQyxZQUFZLEdBbURULGdCQUFnQixHQXJESSxLQUF3QjtnQkFFL0MsWUFBWSxHQXFEVCxpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLE1BQVE7O21CQTdERCxjQUFpQixVQWlFZCxZQUFZIn0=