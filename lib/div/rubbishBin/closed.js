"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rubbishBin = _interopRequireDefault(require("../../div/rubbishBin"));
var _closed = _interopRequireDefault(require("../../svg/rubbishBin/closed"));
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
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var ClosedRubbishBinDiv = /*#__PURE__*/ function(RubbishBinDiv) {
    _inherits(ClosedRubbishBinDiv, RubbishBinDiv);
    function ClosedRubbishBinDiv() {
        _classCallCheck(this, ClosedRubbishBinDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(ClosedRubbishBinDiv).apply(this, arguments));
    }
    _createClass(ClosedRubbishBinDiv, [
        {
            key: "getClosedRubbishBinSVG",
            value: function getClosedRubbishBinSVG() {
                var _constructor = this.constructor, ClosedRubbishBinSVG = _constructor.ClosedRubbishBinSVG;
                return ClosedRubbishBinSVG;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var ClosedRubbishBinSVG = this.getClosedRubbishBinSVG();
                return(/*#__PURE__*/ React.createElement(ClosedRubbishBinSVG, null));
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showClosedRubbishBinDiv = this.show.bind(this), hideClosedRubbishBinDiv = this.hide.bind(this);
                return {
                    showClosedRubbishBinDiv: showClosedRubbishBinDiv,
                    hideClosedRubbishBinDiv: hideClosedRubbishBinDiv
                };
            }
        }
    ]);
    return ClosedRubbishBinDiv;
}(_rubbishBin.default);
_defineProperty(ClosedRubbishBinDiv, "ClosedRubbishBinSVG", _closed.default);
_defineProperty(ClosedRubbishBinDiv, "tagName", "div");
_defineProperty(ClosedRubbishBinDiv, "defaultProperties", {
    className: "closed"
});
exports.default = ClosedRubbishBinDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvcnViYmlzaEJpbi9jbG9zZWQuanMiXSwibmFtZXMiOlsiUnViYmlzaEJpbkRpdiIsIkNsb3NlZFJ1YmJpc2hCaW5TVkciLCJDbG9zZWRSdWJiaXNoQmluRGl2IiwiZ2V0Q2xvc2VkUnViYmlzaEJpblNWRyIsImNvbnN0cnVjdG9yIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJzaG93Q2xvc2VkUnViYmlzaEJpbkRpdiIsInNob3ciLCJiaW5kIiwiaGlkZUNsb3NlZFJ1YmJpc2hCaW5EaXYiLCJoaWRlIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVjLEdBQXNCLENBQXRCLFdBQXNCO0FBQ2hCLEdBQTZCLENBQTdCLE9BQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXhDLG1CQUFtQixpQkFBekIsUUFBUTtjQUFGLG1CQUFtQjthQUFuQixtQkFBbUI7OEJBQW5CLG1CQUFtQjtnRUFBbkIsbUJBQW1COztpQkFBbkIsbUJBQW1COztZQUN0QyxHQUFzQixHQUF0QixzQkFBc0I7bUJBQXRCLFFBQVEsQ0FBUixzQkFBc0IsR0FBRyxDQUFDO2dCQUN4QixHQUFLLENBQTJCLFlBQWdCLEdBQWhCLElBQUksQ0FBQyxXQUFXLEVBQXhDLG1CQUFtQixHQUFLLFlBQWdCLENBQXhDLG1CQUFtQjtnQkFFM0IsTUFBTSxDQUFDLG1CQUFtQjtZQUM1QixDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxzQkFBc0I7Z0JBRXZELE1BQU0sbUNBRUgsbUJBQW1CO1lBR3hCLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUM3Qyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUVuRCxNQUFNLENBQUUsQ0FBQztvQkFDUCx1QkFBdUIsRUFBdkIsdUJBQXVCO29CQUN2Qix1QkFBdUIsRUFBdkIsdUJBQXVCO2dCQUN6QixDQUFDO1lBQ0gsQ0FBQzs7O1dBekJrQixtQkFBbUI7RUFIZCxXQUFzQjtnQkFHM0IsbUJBQW1CLEdBMkIvQixtQkFBbUIsR0E3QkksT0FBNkI7Z0JBRXhDLG1CQUFtQixHQTZCL0IsT0FBTyxJQUFHLEdBQUs7Z0JBN0JILG1CQUFtQixHQStCL0IsaUJBQWlCLEdBQUcsQ0FBQztJQUMxQixTQUFTLEdBQUUsTUFBUTtBQUNyQixDQUFDO2tCQWpDa0IsbUJBQW1CIn0=