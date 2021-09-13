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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vdG9nZ2xlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVXBUb2dnbGVTVkcgZnJvbSBcIi4uL3N2Zy90b2dnbGUvdXBcIjtcbmltcG9ydCBEb3duVG9nZ2xlU1ZHIGZyb20gXCIuLi9zdmcvdG9nZ2xlL2Rvd25cIjtcblxuY2xhc3MgVG9nZ2xlQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgZXhwYW5kKCkge1xuICAgIHRoaXMuaGlkZVVwVG9nZ2xlU1ZHKCk7XG4gICAgdGhpcy5zaG93RG93blRvZ2dsZVNWRygpO1xuICB9XG5cbiAgY29sbGFwc2UoKSB7XG4gICAgdGhpcy5zaG93VXBUb2dnbGVTVkcoKTtcbiAgICB0aGlzLmhpZGVEb3duVG9nZ2xlU1ZHKCk7XG4gIH1cblxuICBnZXRVcFRvZ2dsZVNWRygpIHtcbiAgICBjb25zdCB7IFVwVG9nZ2xlU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIFVwVG9nZ2xlU1ZHO1xuICB9XG5cbiAgZ2V0RG93blRvZ2dsZVNWRygpIHtcbiAgICBjb25zdCB7IERvd25Ub2dnbGVTVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRG93blRvZ2dsZVNWRztcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgVXBUb2dnbGVTVkcgPSB0aGlzLmdldFVwVG9nZ2xlU1ZHKCksXG4gICAgICAgICAgRG93blRvZ2dsZVNWRyA9IHRoaXMuZ2V0RG93blRvZ2dsZVNWRygpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxVcFRvZ2dsZVNWRy8+LFxuICAgICAgPERvd25Ub2dnbGVTVkcvPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGV4cGFuZFRvZ2dsZUJ1dHRvbiA9IHRoaXMuZXhwYW5kLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGNvbGxhcHNlVG9nZ2xlQnV0dG9uID0gdGhpcy5jb2xsYXBzZS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGV4cGFuZFRvZ2dsZUJ1dHRvbixcbiAgICAgIGNvbGxhcHNlVG9nZ2xlQnV0dG9uXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIFVwVG9nZ2xlU1ZHID0gVXBUb2dnbGVTVkc7XG5cbiAgc3RhdGljIERvd25Ub2dnbGVTVkcgPSBEb3duVG9nZ2xlU1ZHO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidG9nZ2xlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFRvZ2dsZUJ1dHRvbilgXG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFaEIsS0FBTTtJQUVMLEdBQWtCO0lBQ2hCLEtBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBNERQLG1GQU12Qzs7Ozs7OztJQWhFTSxZQUFZO2NBQVosWUFBWTthQUFaLFlBQVk7OEJBQVosWUFBWTtnRUFBWixZQUFZOztpQkFBWixZQUFZOztZQUNoQixHQUFNLEdBQU4sTUFBTTs0QkFBTixNQUFNO3FCQUNDLGVBQWU7cUJBQ2YsaUJBQWlCOzs7O1lBR3hCLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7cUJBQ0QsZUFBZTtxQkFDZixpQkFBaUI7Ozs7WUFHeEIsR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYztvQkFDWSxZQUFnQixRQUFYLFdBQVcsRUFBaEMsV0FBVyxHQUFLLFlBQWdCLENBQWhDLFdBQVc7dUJBRVosV0FBVzs7OztZQUdwQixHQUFnQixHQUFoQixnQkFBZ0I7NEJBQWhCLGdCQUFnQjtvQkFDWSxZQUFnQixRQUFYLFdBQVcsRUFBbEMsYUFBYSxHQUFLLFlBQWdCLENBQWxDLGFBQWE7dUJBRWQsYUFBYTs7OztZQUd0QixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNMLFdBQVcsUUFBUSxjQUFjLElBQ2pDLGFBQWEsUUFBUSxnQkFBZ0I7O3NEQUl4QyxXQUFXO3NEQUNYLGFBQWE7Ozs7O1lBS2xCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wsa0JBQWtCLFFBQVEsTUFBTSxDQUFDLElBQUksUUFDckMsb0JBQW9CLFFBQVEsUUFBUSxDQUFDLElBQUksT0FBUyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7O29CQUd6RCxrQkFBa0IsRUFBbEIsa0JBQWtCO29CQUNsQixvQkFBb0IsRUFBcEIsb0JBQW9COzs7OztZQUl4QixHQUFVLEdBQVYsVUFBVTs0QkFBVixVQUFVO3FCQUNILGFBQWE7Ozs7V0E5Q2hCLFlBQVk7RUFMSyxLQUFNO2dCQUt2QixZQUFZLEdBaURULFdBQVcsR0FwREksR0FBa0I7Z0JBR3BDLFlBQVksR0FtRFQsYUFBYSxHQXJESSxLQUFvQjtnQkFFeEMsWUFBWSxHQXFEVCxpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLE1BQVE7O21CQTdERCxjQUFpQixVQWlFZCxZQUFZIn0=