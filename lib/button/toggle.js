"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _up = _interopRequireDefault(require("../svg/toggle/up"));
var _down = _interopRequireDefault(require("../svg/toggle/down"));
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
        "\n\n  cursor: pointer;\n  background: transparent;\n  vertical-align: bottom;\n  \n"
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
                this.hideUpToggleSVG();
                this.showDownToggleSVG();
            }
        },
        {
            key: "collapse",
            value: function collapse() {
                this.showUpToggleSVG();
                this.hideDownToggleSVG();
            }
        },
        {
            key: "getUpToggleSVG",
            value: function getUpToggleSVG() {
                var _constructor = this.constructor, UpToggleSVG = _constructor.UpToggleSVG;
                return UpToggleSVG;
            }
        },
        {
            key: "getDownToggleSVG",
            value: function getDownToggleSVG() {
                var _constructor = this.constructor, DownToggleSVG = _constructor.DownToggleSVG;
                return DownToggleSVG;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var UpToggleSVG = this.getUpToggleSVG(), DownToggleSVG = this.getDownToggleSVG();
                return [
                    /*#__PURE__*/ React.createElement(UpToggleSVG, null),
                    /*#__PURE__*/ React.createElement(DownToggleSVG, null)
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
_defineProperty(ToggleButton, "UpToggleSVG", _up.default);
_defineProperty(ToggleButton, "DownToggleSVG", _down.default);
_defineProperty(ToggleButton, "defaultProperties", {
    className: "toggle"
});
var _default = (0, _easyWithStyle).default(ToggleButton)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vdG9nZ2xlLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIkJ1dHRvbiIsIlVwVG9nZ2xlU1ZHIiwiRG93blRvZ2dsZVNWRyIsIlRvZ2dsZUJ1dHRvbiIsImV4cGFuZCIsImhpZGVVcFRvZ2dsZVNWRyIsInNob3dEb3duVG9nZ2xlU1ZHIiwiY29sbGFwc2UiLCJzaG93VXBUb2dnbGVTVkciLCJoaWRlRG93blRvZ2dsZVNWRyIsImdldFVwVG9nZ2xlU1ZHIiwiY29uc3RydWN0b3IiLCJnZXREb3duVG9nZ2xlU1ZHIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJleHBhbmRUb2dnbGVCdXR0b24iLCJiaW5kIiwiY29sbGFwc2VUb2dnbGVCdXR0b24iLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWhCLEdBQU0sQ0FBTixLQUFNO0FBRUwsR0FBa0IsQ0FBbEIsR0FBa0I7QUFDaEIsR0FBb0IsQ0FBcEIsS0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUE0RFAsQ0FNdkM7Ozs7Ozs7SUFoRU0sWUFBWSxpQkFBbEIsUUFBUTtjQUFGLFlBQVk7YUFBWixZQUFZOzhCQUFaLFlBQVk7Z0VBQVosWUFBWTs7aUJBQVosWUFBWTs7WUFDaEIsR0FBTSxFQUFOLENBQU07bUJBQU4sUUFBUSxDQUFSLE1BQU0sR0FBRyxDQUFDO2dCQUNSLElBQUksQ0FBQyxlQUFlO2dCQUNwQixJQUFJLENBQUMsaUJBQWlCO1lBQ3hCLENBQUM7OztZQUVELEdBQVEsRUFBUixDQUFRO21CQUFSLFFBQVEsQ0FBUixRQUFRLEdBQUcsQ0FBQztnQkFDVixJQUFJLENBQUMsZUFBZTtnQkFDcEIsSUFBSSxDQUFDLGlCQUFpQjtZQUN4QixDQUFDOzs7WUFFRCxHQUFjLEVBQWQsQ0FBYzttQkFBZCxRQUFRLENBQVIsY0FBYyxHQUFHLENBQUM7Z0JBQ2hCLEdBQUssQ0FBbUIsWUFBZ0IsR0FBaEIsSUFBSSxDQUFDLFdBQVcsRUFBaEMsV0FBVyxHQUFLLFlBQWdCLENBQWhDLFdBQVc7Z0JBRW5CLE1BQU0sQ0FBQyxXQUFXO1lBQ3BCLENBQUM7OztZQUVELEdBQWdCLEVBQWhCLENBQWdCO21CQUFoQixRQUFRLENBQVIsZ0JBQWdCLEdBQUcsQ0FBQztnQkFDbEIsR0FBSyxDQUFxQixZQUFnQixHQUFoQixJQUFJLENBQUMsV0FBVyxFQUFsQyxhQUFhLEdBQUssWUFBZ0IsQ0FBbEMsYUFBYTtnQkFFckIsTUFBTSxDQUFDLGFBQWE7WUFDdEIsQ0FBQzs7O1lBRUQsR0FBYSxFQUFiLENBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFDakMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0I7Z0JBRTNDLE1BQU0sQ0FBRSxDQUFDO3NEQUVOLFdBQVc7c0RBQ1gsYUFBYTtnQkFFaEIsQ0FBQztZQUNILENBQUM7OztZQUVELEdBQWEsRUFBYixDQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUMxQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUUzRCxNQUFNLENBQUUsQ0FBQztvQkFDUCxrQkFBa0IsRUFBbEIsa0JBQWtCO29CQUNsQixvQkFBb0IsRUFBcEIsb0JBQW9CO2dCQUN0QixDQUFDO1lBQ0gsQ0FBQzs7O1lBRUQsR0FBVSxFQUFWLENBQVU7bUJBQVYsUUFBUSxDQUFSLFVBQVUsR0FBRyxDQUFDO2dCQUNaLElBQUksQ0FBQyxhQUFhO1lBQ3BCLENBQUM7OztXQS9DRyxZQUFZO0VBTEssS0FBTTtnQkFLdkIsWUFBWSxFQWlEVCxDQUFXLGNBcERJLEdBQWtCO2dCQUdwQyxZQUFZLEVBbURULENBQWEsZ0JBckRJLEtBQW9CO2dCQUV4QyxZQUFZLEVBcURULENBQWlCLG9CQUFHLENBQUM7SUFDMUIsU0FBUyxFQUFFLENBQVE7QUFDckIsQ0FBQzttQkE5RG1CLGNBQWlCLFVBaUVkLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFVwVG9nZ2xlU1ZHIGZyb20gXCIuLi9zdmcvdG9nZ2xlL3VwXCI7XG5pbXBvcnQgRG93blRvZ2dsZVNWRyBmcm9tIFwiLi4vc3ZnL3RvZ2dsZS9kb3duXCI7XG5cbmNsYXNzIFRvZ2dsZUJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGV4cGFuZCgpIHtcbiAgICB0aGlzLmhpZGVVcFRvZ2dsZVNWRygpO1xuICAgIHRoaXMuc2hvd0Rvd25Ub2dnbGVTVkcoKTtcbiAgfVxuXG4gIGNvbGxhcHNlKCkge1xuICAgIHRoaXMuc2hvd1VwVG9nZ2xlU1ZHKCk7XG4gICAgdGhpcy5oaWRlRG93blRvZ2dsZVNWRygpO1xuICB9XG5cbiAgZ2V0VXBUb2dnbGVTVkcoKSB7XG4gICAgY29uc3QgeyBVcFRvZ2dsZVNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBVcFRvZ2dsZVNWRztcbiAgfVxuXG4gIGdldERvd25Ub2dnbGVTVkcoKSB7XG4gICAgY29uc3QgeyBEb3duVG9nZ2xlU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIERvd25Ub2dnbGVTVkc7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IFVwVG9nZ2xlU1ZHID0gdGhpcy5nZXRVcFRvZ2dsZVNWRygpLFxuICAgICAgICAgIERvd25Ub2dnbGVTVkcgPSB0aGlzLmdldERvd25Ub2dnbGVTVkcoKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8VXBUb2dnbGVTVkcvPixcbiAgICAgIDxEb3duVG9nZ2xlU1ZHLz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBleHBhbmRUb2dnbGVCdXR0b24gPSB0aGlzLmV4cGFuZC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBjb2xsYXBzZVRvZ2dsZUJ1dHRvbiA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBleHBhbmRUb2dnbGVCdXR0b24sXG4gICAgICBjb2xsYXBzZVRvZ2dsZUJ1dHRvblxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyBVcFRvZ2dsZVNWRyA9IFVwVG9nZ2xlU1ZHO1xuXG4gIHN0YXRpYyBEb3duVG9nZ2xlU1ZHID0gRG93blRvZ2dsZVNWRztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInRvZ2dsZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShUb2dnbGVCdXR0b24pYFxuXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIFxuYDtcbiJdfQ==